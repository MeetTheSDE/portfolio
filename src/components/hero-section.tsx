import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function HeroSection() {
    const handleScrollToContact = () => {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const handleScrollToProjects = () => {
        const element = document.querySelector("#projects");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center
                       bg-gradient-to-b from-muted to-white
                       dark:bg-[linear-gradient(to_bottom,hsl(var(--muted))_0%,hsl(var(--muted))_30%,hsl(var(--background))_100%)] pt-16"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Hi, I'm{" "}
                        <span className="text-primary">Meetkumar Patel</span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-8"
                    >
                        Backend-focused Software Engineer
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
                    >
                        Write once, run fast, stay secure
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button
                            onClick={handleScrollToContact}
                            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                        >
                            Get In Touch
                        </button>
                        <a
                            href="/MeetkumarPatel_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
                        >
                            View Resume
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="mt-16"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://github.com/MeetTheSDE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center
                                       dark:bg-primary/20 dark:hover:bg-primary/30"
                        >
                            <Github className="text-primary text-xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/meet1809/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center
                                       dark:bg-primary/20 dark:hover:bg-primary/30"
                        >
                            <Linkedin className="text-primary text-xl" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
