import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function SummarySection() {
    return (
        <section
            id="summary"
            className="py-20 bg-light dark:bg-[linear-gradient(to_bottom,hsl(var(--muted))_0%,hsl(var(--background))_80%,hsl(var(--background))_100%)]"
        >
            {" "}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 section-fade">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Professional Summary
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center section-fade cursor-default select-none">
                    <div>
                        <div className="bg-light p-8 rounded-2xl shadow-sm dark:bg-muted dark:text-foreground">
                            {" "}
                            <h3 className="text-2xl font-semibold text-foreground mb-4">
                                Software Engineering Expertise
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Software Engineer with <strong>3+ years</strong>{" "}
                                at Omeda, built secure, scalable backend systems
                                using Java, J2EE, JAX-RS, Spring Boot,
                                JavaScript, SQL, AWS, and led API development
                                and integrations.
                                <br />
                                Academically, applied Python, Django, Flask,
                                AWS, and core ML concepts through diverse
                                projects that sharpened my problem-solving
                                skills.
                                <br />
                                Comfortable building frontend features with
                                React and TypeScript, while actively using
                                Python daily to power backend logic and tooling.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                                    <span className="text-sm text-muted-foreground">
                                        Backend Development
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                                    <span className="text-sm text-muted-foreground">
                                        API Engineering & Integration
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                                    <span className="text-sm text-muted-foreground">
                                        Code Quality & Testing Automation
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                                    <span className="text-sm text-muted-foreground">
                                        Security, Deployment & Optimization
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 cursor-default select-none">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl text-primary-foreground"
                        >
                            <h4 className="text-xl font-semibold mb-2">
                                3+ Years Professional Experience
                            </h4>
                            <p className="text-primary-foreground/80">
                                Backend systems, APIs, and client tools in
                                production
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-r from-accent to-primary p-6 rounded-xl text-primary-foreground"
                        >
                            <h4 className="text-xl font-semibold mb-2">
                                Java, JavaScript, JAX-RS, J2EE, SQL, React, AWS
                            </h4>
                            <p className="text-primary-foreground/80">
                                Delivered production SaaS features at Omeda
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl text-primary-foreground"
                        >
                            <h4 className="text-xl font-semibold mb-2">
                                Python, Django, TypeScript, React
                            </h4>
                            <p className="text-primary-foreground/80">
                                Academically grounded, self-taught, and
                                project-tested
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
