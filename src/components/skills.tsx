import { SectionStyle } from "./custom-ui/custom-section";

export default function Skills() {
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
        <section id="skills" className={SectionStyle}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 section-fade">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Skills
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                </div>

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
                            animation: scroll-left 60s linear infinite;
                        }

                        .skill-bar-container {
                            position: relative;
                        }

                        .skill-bar-container::before,
                        .skill-bar-container::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            width: 6rem;
                            z-index: 10;
                            pointer-events: none;
                        }

                        .skill-bar-container::before {
                            left: 0;
                            background: linear-gradient(to right, hsl(var(--background)) 0%, transparent 100%);
                        }

                        .skill-bar-container::after {
                            right: 0;
                            background: linear-gradient(to left, hsl(var(--background)) 0%, transparent 100%);
                        }
                    `}
                </style>

                <div className="relative w-full mx-auto overflow-hidden mt-8 pt-2.5 pb-10 skill-bar-container">
                    <div className="flex animate-scroll-left whitespace-nowrap w-max">
                        {[...skills, ...skills].map((skill, index) => (
                            <div
                                key={`skill-${index}`}
                                className="relative flex flex-col items-center justify-center
                                           px-6 py-3 mr-6 flex-shrink-0 group
                                           bg-muted rounded-xl
                                           border border-transparent transform hover:scale-125 transition-transform duration-300 ease-in-out"
                            >
                                <img
                                    src={skill.imageSrc}
                                    alt={skill.imageAlt}
                                    className="w-9 h-12 object-contain"
                                    onError={(
                                        e: React.SyntheticEvent<
                                            HTMLImageElement,
                                            Event
                                        >
                                    ) => {
                                        (e.target as HTMLImageElement).src =
                                            "https://placehold.co/40x40/cccccc/000000?text=Error";
                                    }}
                                />
                                <div
                                    className="absolute bottom-[-1.8rem] left-1/2 -translate-x-1/2
                                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                                text-xs px-2 py-1 rounded-md whitespace-nowrap
                                                pointer-events-none z-20
                                                bg-transparent text-muted-foreground hover:bg-transparent cursor-pointer dark:bg-transparent dark:text-muted-foreground dark:hover:bg-primary/30"
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
