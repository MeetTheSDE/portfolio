import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import SummarySection from "@/components/summary-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Portfolio() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, observerOptions);

        document.querySelectorAll(".section-fade").forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen">
            <Navigation />
            <HeroSection />
            <SummarySection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
