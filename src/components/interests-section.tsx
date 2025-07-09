import { motion } from "framer-motion";
import { Cloud, Shield, Database } from "lucide-react";

export default function InterestsSection() {
    const interests = [
        {
            icon: Cloud,
            title: "Cloud Architecture",
            description:
                "Designing scalable cloud solutions using AWS services, containerization, and microservices architecture",
        },
        {
            icon: Shield,
            title: "Security & Compliance",
            description:
                "Implementing robust security measures, JWT authentication, and RBAC for enterprise applications",
        },
        {
            icon: Database,
            title: "Data Engineering",
            description:
                "Building efficient data pipelines, optimizing database performance, and implementing search solutions",
        },
    ];

    return (
        <section id="interests" className="py-20 bg-light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 section-fade">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Interest Areas
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Passionate about cutting-edge technologies and
                        innovative solutions in backend development
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 section-fade">
                    {interests.map((interest, index) => {
                        const IconComponent = interest.icon;
                        return (
                            <motion.div
                                key={interest.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -5 }}
                                className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <IconComponent className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-4">
                                    {interest.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {interest.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
