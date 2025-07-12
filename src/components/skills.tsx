import { motion } from "framer-motion";

export default function Skills() {
    // Define skill images and names
    const skills = [
        {
            name: "Java",
            imageSrc: import.meta.env.BASE_URL + "logos/java.png",
            imageAlt: "Java",
        },
        {
            name: "JavaScript",
            imageSrc: import.meta.env.BASE_URL + "logos/javascript.png",
            imageAlt: "JavaScript",
        },
        {
            name: "SQL Server",
            imageSrc: import.meta.env.BASE_URL + "logos/mssql.png",
            imageAlt: "SQL Server",
        },
        {
            name: "React",
            imageSrc: import.meta.env.BASE_URL + "logos/react.png",
            imageAlt: "React",
        },
        {
            name: "Spring Boot",
            imageSrc: import.meta.env.BASE_URL + "logos/spring.png",
            imageAlt: "Spring Boot",
        },
        {
            name: "API Development",
            imageSrc: import.meta.env.BASE_URL + "logos/api.png",
            imageAlt: "API Development",
        },
        {
            name: "Jenkins",
            imageSrc: import.meta.env.BASE_URL + "logos/jenkins.png",
            imageAlt: "Jenkins",
        },
        {
            name: "Unit & Integration Testing",
            imageSrc: import.meta.env.BASE_URL + "logos/testing.png",
            imageAlt: "Testing",
        },
        {
            name: "JUnit",
            imageSrc: import.meta.env.BASE_URL + "logos/junit.png",
            imageAlt: "JUnit",
        },
        {
            name: "Git",
            imageSrc: import.meta.env.BASE_URL + "logos/github.png",
            imageAlt: "Git",
        },
        {
            name: "Elasticsearch",
            imageSrc: import.meta.env.BASE_URL + "logos/elasticsearch.png",
            imageAlt: "Elasticsearch",
        },
        {
            name: "Python",
            imageSrc: import.meta.env.BASE_URL + "logos/python.png",
            imageAlt: "Python",
        },
        {
            name: "Django",
            imageSrc: import.meta.env.BASE_URL + "logos/django.png",
            imageAlt: "Django",
        },
        {
            name: "TypeScript",
            imageSrc: import.meta.env.BASE_URL + "logos/typescript.png",
            imageAlt: "TypeScript",
        },
        {
            name: "AWS",
            imageSrc: import.meta.env.BASE_URL + "logos/aws.png",
            imageAlt: "AWS",
        },
        {
            name: "PostgreSQL",
            imageSrc: import.meta.env.BASE_URL + "logos/postgresql.png",
            imageAlt: "PostgreSQL",
        },
        {
            name: "Tailwind CSS",
            imageSrc: import.meta.env.BASE_URL + "logos/tailwind.png",
            imageAlt: "Tailwind",
        },
    ];

    return (
        <section id="skills" className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
                >
                    Technologies I Work With
                </motion.h2>

                {/* Define custom keyframes for the scrolling animation */}
                <style>
                    {`
                        @keyframes scroll-left {
                            from {
                                transform: translateX(0%);
                            }
                            to {
                                transform: translateX(-50%);
                            }
                        }
                        .animate-scroll-left {
                            animation: scroll-left 60s linear infinite; /* Adjust duration for speed */
                        }

                        .skill-bar-container::before,
                        .skill-bar-container::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            width: 8rem;
                            z-index: 10;
                            pointer-events: none;
                        }

                        .skill-bar-container::before {
                            left: 0;
                            background: transparent;
                        }

                        .skill-bar-container::after {
                            right: 0;
                            background: transparent;
                        }
                    `}
                </style>

                {/* Infinite Scrolling Skill Bar */}
                <div className="relative w-full mx-auto overflow-hidden mt-8 py-8 skill-bar-container">
                    {/* This inner div contains the duplicated skills and is animated */}
                    <div className="flex animate-scroll-left whitespace-nowrap w-max">
                        {/* Duplicate skills array to ensure continuous loop */}
                        {[...skills, ...skills].map((skill, index) => (
                            <div
                                key={`skill-${index}`} // Unique key for each duplicated item
                                // Added new classes for the card effect
                                className="relative flex flex-col items-center justify-center
                                           px-6 py-3 mr-6 flex-shrink-0 group
                                           bg-muted rounded-xl shadow-sm
                                           border border-muted transform hover:scale-105 transition-transform duration-300 ease-in-out" // Add hover effect
                            >
                                <img
                                    src={skill.imageSrc}
                                    alt={skill.imageAlt}
                                    className="w-10 h-10 object-contain mb-2" // Added mb-2 for a little space
                                    onError={(
                                        e: React.SyntheticEvent<
                                            HTMLImageElement,
                                            Event
                                        >
                                    ) => {
                                        // Explicitly cast e.target
                                        (e.target as HTMLImageElement).src =
                                            "https://placehold.co/40x40/cccccc/000000?text=Error";
                                    }}
                                />
                                {/* Skill name description on hover, styled as a badge */}
                                <div
                                    className="absolute bottom-[-1.8rem] left-1/2 -translate-x-1/2
                                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                                text-xs px-2 py-1 rounded-md whitespace-nowrap
                                                pointer-events-none z-20
                                                bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer dark:bg-primary/20 dark:text-primary dark:hover:bg-primary/30"
                                >
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
