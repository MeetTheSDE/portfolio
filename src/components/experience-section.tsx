import { SquareArrowOutUpRight } from "lucide-react";
import { CustomBadge } from "@/components/custom-ui/custom-badge";
import { CardStyle } from "@/components/custom-ui/custom-card";
import { SectionStyle } from "@/components/custom-ui/custom-section";

export default function ExperienceSection() {
    const experiences = [
        {
            title: "Software Developer",
            company: "Omeda",
            companyUrl: "www.omeda.com",
            location: "Chicago",
            period: "Nov 2021 – Feb 2025",
            current: true,
            technologies: [
                "Java",
                "J2EE",
                "JAX-RS",
                "SQL Server",
                "AWS Lambda",
                "Stripe API",
                "Redis",
                "Swagger/OpenAPI",
                "Elasticsearch",
                "JUnit",
                "TestNG",
                "Jenkins - CI/CD",
                "Postman",
            ],
            achievements: [
                <span>
                    Built and maintained critical components of{" "}
                    <a
                        href="https://www.omeda.com/solutions/#audience-subscription"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline text-primary underline hover:text-primary/80"
                    >
                        Subscription Management
                    </a>
                    {", "}
                    <a
                        href="https://www.omeda.com/solutions/#aggregate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline text-primary underline hover:text-primary/80"
                    >
                        Cusomter Data Platform
                    </a>
                    {" and "}
                    <a
                        href="https://www.omeda.com/solutions/#audience-channel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline text-primary underline hover:text-primary/80"
                    >
                        Audience Channel Engagement
                    </a>{" "}
                    for publishers and digital media companies.{" "}
                    <span className="block">
                        Led{" "}
                        <a
                            href="https://www.omeda.com/lp/stripe-integration/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline text-primary underline hover:text-primary/80"
                        >
                            Stripe
                        </a>{" "}
                        Payment Gateway integration with AWS Lambda for
                        real-time billing & webhooks.
                        <span className="block">
                            Built access control dashboards, audience & data
                            management tools, and configuration tools.
                        </span>
                    </span>
                </span>,
            ],
        },
        {
            title: "Graduate Teaching Assistant - Professional Practices",
            company: "University of Texas, Arlington",
            companyUrl: "www.uta.edu",
            location: "Arlington",
            period: "Aug 2020 – May 2021",
            current: false,
            technologies: [
                "Mentoring",
                "Leadership",
                "Oral & Written Communication",
                "Assignment Design & Grading",
            ],
            achievements: [
                <span>
                    Mentored 60+ students and provided individualized support on
                    course topics.
                    <span className="block">
                        Created and graded assignments, ensuring fair evaluation
                        aligned with course objectives.
                        <span className="block">
                            Collaborated with the professor to develop
                            curriculum plans and improve course structure.
                        </span>
                    </span>
                </span>,
            ],
        },
        {
            title: "Software Developer",
            company: "Sculptsoft",
            companyUrl: "www.sculptsoft.com",
            location: "Ahmedabad",
            period: "Jul 2018 – Mar 2019",
            current: false,
            technologies: [
                "Spring Boot",
                "Hibernate",
                "MySQL",
                "jQuery",
                "AJAX",
                "JUnit",
                "TestNG",
                "Git",
                "GitHub",
            ],
            achievements: [
                <span>
                    Developed responsive front-end features for a{" "}
                    <a
                        href="https://www.sculptsoft.com/case-studies/real-estate-property-marketplace/
"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline text-primary underline hover:text-primary/80"
                    >
                        real estate platform
                    </a>
                    , focusing on performance and seamless interactivity. Worked
                    on early adoption of React components and enhanced user
                    experience through dynamic content loading and real-time
                    filtering. Collaborated closely with design and backend
                    teams to build smooth, scalable UI flows.
                </span>,
            ],
        },
    ];

    return (
        <section id="experience" className={SectionStyle}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 section-fade">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                </div>

                <div className="space-y-12 section-fade">
                    {experiences.map((experience) => (
                        <div
                            key={experience.company}
                            className="relative group"
                        >
                            <div className="md:flex items-start">
                                <div className="md:w-1/4 mb-4 md:mb-0 select-none cursor-default">
                                    <div
                                        className={`${
                                            experience.current
                                                ? "bg-primary"
                                                : "bg-muted-foreground dark:bg-card"
                                        } text-white px-4 py-2 rounded-2xl text-sm font-medium inline-block dark:text-primary-foreground`}
                                    >
                                        {experience.period}
                                    </div>
                                </div>
                                <div className="md:w-3/4 md:pl-8 select-none cursor-default">
                                    <div className={CardStyle}>
                                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                                            {experience.title}
                                        </h3>
                                        <p className="text-primary font-medium mb-2 flex flex-wrap items-center">
                                            <a
                                                href={`https://${experience.companyUrl}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 dark:text-primary dark:hover:text-primary/80"
                                            >
                                                {experience.company} •{" "}
                                                {experience.location}
                                                <SquareArrowOutUpRight className="h-4 w-4 ml-1 flex-shrink-0" />
                                            </a>{" "}
                                        </p>
                                        <p className="text-primary font-medium mb-2 flex flex-wrap items-center"></p>
                                        <ul className="space-y-3 text-muted-foreground mb-4">
                                            {experience.achievements.map(
                                                (achievement, achIndex) => (
                                                    <li
                                                        key={achIndex}
                                                        className="flex items-start"
                                                    >
                                                        {/* <CheckCircle className="h- w-5 text-primary mr-3 mt-1 flex-shrink-0" /> */}
                                                        <span>
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.map(
                                                (tech) => (
                                                    <CustomBadge key={tech}>
                                                        {tech}
                                                    </CustomBadge>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
