import { motion } from "framer-motion";

export default function SkillsSection() {
    const skills = [
        { name: "Python", image: "/logos/python.png" },
        { name: "Java", image: "/logos/java.png" },
        { name: "MySQL", image: "/logos/mysql.png" },
        { name: "PostgreSQL", image: "/logos/postgresql.png" },
        { name: "Tailwind CSS", image: "/logos/tailwind.png" },
        { name: "JavaScript", image: "/logos/javascript.png" },
        { name: "React", image: "/logos/react.png" },
        { name: "Git", image: "/logos/github.png" },
        { name: "Elasticsearch", image: "/logos/elasticsearch.png" },
        { name: "AWS", image: "/logos/aws.png" },
        { name: "Jenkins", image: "/logos/jenkins.png" },
        { name: "Docker", image: "/logos/docker.png" },
    ];

    return (
        <section id="skills" className="py-20 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 section-fade">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Core technologies and tools I use to build robust,
                        scalable applications
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 section-fade cursor-pointer">
                    {skills.map((skill) => {
                        // const IconComponent = skill.icon ?? null;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="skill-logo bg-light p-6 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    {skill.image ? (
                                        <img
                                            src={skill.image}
                                            alt={skill.name}
                                            className="w-16 h-16 object-contain"
                                        />
                                    ) : // ) : IconComponent ? (
                                    //     <IconComponent
                                    //         className={`text-4xl ${skill.color}`}
                                    //     />
                                    null}
                                </div>
                                <h3 className="font-semibold text-foreground">
                                    {skill.name}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
