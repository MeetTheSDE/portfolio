import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
                "Build and maintain critical components of Subscription Management, Cusomter Data Platform and Channel Engagement for publishers and digital media companies",
                <span>
                    Integrated{" "}
                    <a
                        href="https://www.omeda.com/lp/stripe-integration/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline text-primary underline hover:text-primary/80"
                    >
                        Stripe Payment Gateway
                    </a>{" "}
                    with AWS Lambda for real-time billing & webhooks
                </span>,
                "Build access control dashboards, audience & data management tools, and product config tools in Java/JAX-RS — reducing support tickets by 70%",
                // "Refactored legacy APIs, optimize payloads and added caching/pagination — boosted performance by 20%",
                // "Created automated, real-time email campaigns tied to voyage events (30% engagement gain)",
                "Design and Maintain comprehensive unit and integration test suites",
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
                "Mentored 40+ students and provided individualized support on course topics",
                "Created and graded assignments, ensuring fair evaluation aligned with course objectives",
                "Collaborated with the professor to develop curriculum plans and improve course structure",
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
                    Developed a full featured{" "}
                    <a
                        href="https://www.sculptsoft.com/case-studies/real-estate-property-marketplace/
"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline text-primary underline hover:text-primary/80"
                    >
                        real estate platform
                    </a>{" "}
                    with Spring Boot and Hibernate
                </span>,
                "Implemented live search and filtering with jQuery/AJAX",
                "Wrote 300+ unit tests with JUnit and TestNG; Leveraged Git, GitHub for code management",
            ],
        },
    ];

    return (
        <section id="experience" className="py-20 bg-light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 section-fade">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                </div>

                <div className="space-y-12 section-fade">
                    {experiences.map((experience) => (
                        <motion.div
                            key={experience.company}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative group"
                        >
                            <div className="md:flex items-start">
                                <div className="md:w-1/4 mb-4 md:mb-0 select-none cursor-default">
                                    <div
                                        className={`${
                                            experience.current
                                                ? "bg-primary"
                                                : "bg-muted-foreground"
                                        } text-white px-4 py-2 rounded-lg text-sm font-medium inline-block`}
                                    >
                                        {experience.period}
                                    </div>
                                </div>
                                <div className="md:w-3/4 md:pl-8 select-none cursor-default">
                                    <div className="bg-background p-8 rounded-2xl shadow-sm">
                                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                                            {experience.title}
                                        </h3>
                                        {/* <p className="text-primary font-medium mb-2 flex flex-wrap items-center">
                                            <a
                                                href={`https://${experience.companyUrl}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1"
                                            >
                                                {experience.company} •{" "}
                                                {experience.location}
                                                <SquareArrowOutUpRight className="h-4 w-4 ml-1 flex-shrink-0" />
                                                </a>{" "}
                                                </p> */}
                                        <p className="text-primary font-medium mb-2 flex flex-wrap items-center">
                                            {experience.company} •{" "}
                                            {experience.location}
                                        </p>
                                        <ul className="space-y-3 text-muted-foreground mb-4">
                                            {experience.achievements.map(
                                                (achievement, achIndex) => (
                                                    <li
                                                        key={achIndex}
                                                        className="flex items-start"
                                                    >
                                                        <CheckCircle className="h- w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                                        <span>
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {experience.technologies.map(
                                                (tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="secondary"
                                                        className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
