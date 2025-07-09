import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function SummarySection() {
    return (
        <section id="summary" className="py-20 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 section-fade">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Professional Summary
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center section-fade cursor-default select-none">
                    <div>
                        <div className="bg-light p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-semibold text-foreground mb-4">
                                Software Engineering Expertise
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Software engineer with 3+ years of experience
                                building secure, scalable backend systems using
                                Java, Python, and SQL, along with hands-on
                                frontend skills in React, Tailwind CSS, and
                                modern JavaScript. <br />
                                Strong focus on REST API design, third-party
                                integrations, and delivering production-ready
                                features across the stack. <br />
                                Equally comfortable securing an API or styling a
                                landing page — with clean, maintainable code on
                                both ends.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                                    <span className="text-sm text-muted-foreground">
                                        Third-Party Integrations
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                                    <span className="text-sm text-muted-foreground">
                                        API Development
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                                    <span className="text-sm text-muted-foreground">
                                        Code Quality & Test Automation
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                                    <span className="text-sm text-muted-foreground">
                                        Security & Compliance
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
                                Java, JavaScript, J2EE, SQL, React, AWS
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
                                Python, Tailwind CSS
                            </h4>
                            <p className="text-primary-foreground/80">
                                Hands-on every day
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
