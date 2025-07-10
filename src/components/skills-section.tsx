import { motion } from "framer-motion";

export default function SkillsSection() {
    const skills = [
        { name: "Java", image: import.meta.env.BASE_URL + "logos/java.png" },
        {
            name: "API Design & Integration",
            image: import.meta.env.BASE_URL + "logos/api.png",
        },
        { name: "MySQL", image: import.meta.env.BASE_URL + "logos/mysql.png" },
        {
            name: "Unit & Integration Testing",
            image: import.meta.env.BASE_URL + "logos/testing.png",
        },
        {
            name: "Python",
            image: import.meta.env.BASE_URL + "logos/python.png",
        },
        {
            name: "JavaScript",
            image: import.meta.env.BASE_URL + "logos/javascript.png",
        },
        { name: "AWS", image: import.meta.env.BASE_URL + "logos/aws.png" },
        { name: "Git", image: import.meta.env.BASE_URL + "logos/github.png" },
        {
            name: "PostgreSQL",
            image: import.meta.env.BASE_URL + "logos/postgresql.png",
        },
        {
            name: "Jenkins (CI/ CD)",
            image: import.meta.env.BASE_URL + "logos/jenkins.png",
        },
        { name: "React", image: import.meta.env.BASE_URL + "logos/react.png" },
        {
            name: "TypeScript",
            image: import.meta.env.BASE_URL + "logos/typescript.png",
        },
    ];

    return (
        <section id="skills" className="py-20 bg-background dark:bg-background">
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
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="skill-logo bg-light p-6 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300 dark:bg-muted dark:hover:shadow-xl dark:border dark:border-border"
                            >
                                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    {skill.image ? (
                                        <img
                                            src={skill.image}
                                            alt={skill.name}
                                            className="w-16 h-16 object-contain"
                                        />
                                    ) : null}
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
