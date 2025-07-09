import { motion } from "framer-motion";
import { GraduationCap, SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
    const education = [
        {
            degree: "MS in Computer Science",
            institution: "University of Texas, Arlington",
            location: "Arlington, Texas",
            duration: "Aug 2019 - May 2021",
            url: "www.uta.edu",
            gpa: "3.9/4.0",
            type: "Graduate",
        },
        {
            degree: "BE in Computer Engineering",
            institution: "Gujarat Technological University",
            location: "Ahmedabad, India",
            duration: "Aug 2015 - Jul 2019",
            url: "www.gtu.ac.in",
            gpa: "3.7/4.0",
            type: "Undergraduate",
        },
    ];

    return (
        <section id="education" className="py-20 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 section-fade">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 section-fade">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -50 : 50,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-light p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 select-none cursor-default"
                        >
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-muted-foreground">
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                            <GraduationCap className="h-8 w-8 text-primary" />
                                        </div>
                                    </span>

                                    <span className="flex flex-col items-end gap-1">
                                        <Badge
                                            variant="secondary"
                                            className="bg-primary/10 text-primary"
                                        >
                                            {edu.type}
                                        </Badge>
                                        <Badge
                                            variant="secondary"
                                            className="bg-primary/10 text-primary"
                                        >
                                            {edu.duration}
                                        </Badge>
                                    </span>
                                </div>

                                <h3 className="text-2xl font-semibold text-foreground mb-2">
                                    {edu.degree}
                                </h3>

                                <p className="text-primary font-medium mb-2 flex flex-wrap items-center">
                                    <a
                                        href={`https://${edu.url}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1"
                                    >
                                        {edu.institution} • {edu.location}
                                        <SquareArrowOutUpRight className="h-4 w-4 ml-1 flex-shrink-0" />
                                    </a>
                                </p>
                                <p className="text-muted-foreground mb-1">
                                    GPA: {edu.gpa}
                                </p>
                                {/* <span className="text-muted-foreground">
                                    GPA: {edu.gpa}
                                </span> */}

                                {/* <div className="flex justify-between items-center"> */}

                                {/* <Badge
                                        variant="secondary"
                                        className="bg-primary/10 text-primary"
                                    >
                                        {edu.type}
                                    </Badge> */}
                                {/* </div> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
