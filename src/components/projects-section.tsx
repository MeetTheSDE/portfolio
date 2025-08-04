import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
    const projects = [
        {
            title: "JobLense: Keywords Highlighter",
            description:
                "Chrome extension to highlight custom keywords on LinkedIn Jobs using JavaScript and DOM parsing. Supports real-time updates, multiple keyword sets, and performance-optimized highlighting. Designed the extension’s logo and branding assets.",
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
            title: "Personal Portfolio",
            description:
                "Custom-designed personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Deployed via GitHub Pages and Vercel, with smooth animations and responsive design. Features dynamic sections for experience, projects and skills — fully modular and easy to extend.",
            technologies: [
                "React",
                "Vite",
                "TypeScript",
                "Tailwind CSS",
                "Wouter",
                "Vercel",
            ],
            github: "https://github.com/MeetTheSDE/meetthesde.github.io",
            liveDemo: "https://patel-meet.vercel.app",
        },
        {
            title: "Game Review Rating Predictor",
            description:
                "Flask-based app to predict game ratings using NLP (TF-IDF, tokenization, K-fold CV). Achieved 90% accuracy across 13M+ user comments. Deployed the application on the Heroku platform and designed the front-end interface using HTML and Bootstrap. ",
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
    ];

    return (
        <section
            id="projects"
            className="py-10 bg-background dark:bg-background"
        >
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
                            initial={{
                                opacity: 0.9,
                                x: index % 2 === 0 ? -50 : 50,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0, delay: index * 0 }}
                            className="
                                        bg-card p-8 rounded-2xl shadow-lg hover:shadow-md card-hover transition-all duration-200
                                        select-none cursor-default 
                                        dark:bg-card dark:shadow-lg dark:hover:shadow-xl dark:border dark:border-border
                                        "
                        >
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-2xl font-semibold text-foreground">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        {project.liveDemo && (
                                            <a
                                                href={project.liveDemo}
                                                target={
                                                    project.title ===
                                                    "Personal Portfolio"
                                                        ? "_self"
                                                        : "_blank"
                                                }
                                                rel="noopener noreferrer"
                                                className="relative group text-primary hover:text-primary/80 transition-colors"
                                                aria-label={`Live demo of ${project.title}`}
                                            >
                                                <ExternalLink className="h-6 w-6" />
                                                <span className="absolute bottom-full bg-muted-foreground dark:bg-muted left-1/2 -translate-x-1/2 mb-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs py-1 px-2 rounded-full whitespace-nowrap">
                                                    Live Demo
                                                </span>
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative group text-muted-foreground hover:text-primary transition-colors"
                                                aria-label={`GitHub repository for ${project.title}`}
                                            >
                                                <Github className="h-6 w-6" />
                                                <span className="absolute bottom-full bg-muted-foreground dark:bg-muted left-1/2 -translate-x-1/2 mb-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs py-1 px-2 rounded-full whitespace-nowrap">
                                                    GitHub
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer dark:bg-primary/20 dark:text-primary dark:hover:bg-primary/30"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
