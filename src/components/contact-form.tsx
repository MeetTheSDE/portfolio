import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
    const { toast } = useToast();
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);
    const handleInputChange = (field: keyof ContactFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            !formData.name ||
            !formData.email ||
            !formData.subject ||
            !formData.message
        ) {
            toast({
                title: "Please fill in all fields",
                description: "All fields are required to send a message.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        const mailtoLink = `mailto:sde.meet@gmail.com?subject=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;

        window.location.href = mailtoLink;

        setTimeout(() => {
            setIsSubmitting(false);
            onClose();
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-lg rounded-2xl bg-muted p-8 shadow-2xl dark:bg-card dark:border dark:border-border"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="absolute top-4 right-4 rounded-full hover:bg-primary dark:hover:bg-primary"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                        <h3 className="text-2xl font-semibold text-foreground mb-6">
                            Send a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Label
                                    htmlFor="name"
                                    className="text-sm font-medium text-foreground"
                                >
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    className="mt-2 dark:bg-input dark:text-foreground dark:border-border"
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="email"
                                    className="text-sm font-medium text-foreground"
                                >
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "email",
                                            e.target.value
                                        )
                                    }
                                    className="mt-2 dark:bg-input dark:text-foreground dark:border-border"
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="subject"
                                    className="text-sm font-medium text-foreground"
                                >
                                    Subject
                                </Label>
                                <Input
                                    id="subject"
                                    type="text"
                                    placeholder="Message subject"
                                    value={formData.subject}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "subject",
                                            e.target.value
                                        )
                                    }
                                    className="mt-2 dark:bg-input dark:text-foreground dark:border-border"
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="message"
                                    className="text-sm font-medium text-foreground"
                                >
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "message",
                                            e.target.value
                                        )
                                    }
                                    className="mt-2 resize-none dark:bg-input dark:text-foreground dark:border-border"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        <Send className="h-4 w-4 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
