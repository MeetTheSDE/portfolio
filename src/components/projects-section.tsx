import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
    const projects = [
        {
            title: "JobLense: Linkedin Jobs Keywords Highlighter",
            description:
                "Built a Chrome extension to highlight custom keywords on LinkedIn Jobs using JavaScript and DOM parsing. Supports real-time updates, multiple keyword sets, and performance-optimized highlighting. Designed the extension’s logo and branding assets.",
            technologies: [
                "JavaScript",
                "HTML",
                "CSS",
                "Figma",
                "Chrome Extensions API",
            ],
            github: "https://github.com/MeetTheSDE/joblense",
            liveDemo:
                "https://chromewebstore.google.com/detail/ofkagoefchogfbihhlmleomahkaackaf?utm_source=item-share-cb",
        },
        {
            title: "Game Review Rating Predictor",
            description:
                "Flask-based app to predict game ratings using NLP (TF-IDF, tokenization, K-fold CV). Achieved 90% accuracy across 13M+ user comments. Deployed the application on the Heroku platform and designed the front-end interface using HTML and Bootstrap. ",
            technologies: [
                "Python",
                "Flask",
                "NLP",
                "TF-IDF",
                "Machine Learning",
                "Heroku",
            ],
            github: "https://github.com/MeetTheSDE/game-review-rating-predictor",
        },
        {
            title: "Walk Safe",
            description:
                "Developed Python + Django app that generates safe walking routes using crime data. Created interactive crime heatmaps and visualizations using D3.js to help users understand local safety risks. Hosted the app on AWS EC2 with PostgreSQL for data storage and Redis caching for fast geospatial queries.",
            technologies: [
                "Python",
                "Django",
                "AWS EC2",
                "PostgreSQL",
                "Redis",
                "D3.js",
            ],
        },
        {
            title: "Smart Attendance",
            description:
                "Built a real-time web app to track student attendance by verifying physical presence via Google Maps geolocation. Integrated Firebase for real-time syncing and Spring Boot for authentication and backend services. Visualized attendance analytics using Power BI.",
            technologies: [
                "Java",
                "Spring Boot",
                "Firebase",
                "JavaScript",
                "Power BI",
            ],
        },
    ];

    return (
        <section id="projects" className="py-20 bg-light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 section-fade">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 section-fade">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0 }}
                            whileHover={{ y: -4 }}
                            className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 select-none cursor-default"
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-semibold text-foreground mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-6">
                                {/* GitHub Button */}
                                {project.github && (
                                    <motion.a // Changed from motion.button to motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 no-underline" // Added no-underline
                                    >
                                        <Github className="h-4 w-4" />
                                        GitHub
                                    </motion.a>
                                )}

                                {project.liveDemo && (
                                    <motion.a // Changed from motion.button to motion.a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2 no-underline" // Added no-underline
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Live Demo
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
