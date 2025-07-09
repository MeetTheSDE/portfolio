import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
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

export default function ContactSection() {
    const { toast } = useToast();
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

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

        setIsSubmitting(false);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "sde.meet@gmail.com",
            link: "mailto:sde.meet@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "(361) 389-5400",
            link: "tel:+13613895400",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Seattle, WA",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "Connect with me",
            link: "#",
        },
    ];

    return (
        <section id="contact" className="py-20 bg-light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 section-fade">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities,
                        interesting projects, or just having a great
                        conversation about technology.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 section-fade">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-foreground mb-6">
                                Let's Connect
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((info) => {
                                    const IconComponent = info.icon;
                                    const content = (
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                                                <IconComponent className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground text-sm">
                                                    {info.label}
                                                </p>
                                                <p className="font-medium text-foreground">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    );

                                    return info.link ? (
                                        <a
                                            key={info.label}
                                            href={info.link}
                                            className="block hover:bg-light p-2 rounded-lg transition-colors"
                                        >
                                            {content}
                                        </a>
                                    ) : (
                                        <div key={info.label} className="p-2">
                                            {content}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-light p-8 rounded-2xl"
                    >
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
                                    className="mt-2"
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
                                    className="mt-2"
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
                                    className="mt-2"
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
                                    className="mt-2 resize-none"
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
                </div>
            </div>
        </section>
    );
}
