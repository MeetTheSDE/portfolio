import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, ArrowUp } from "lucide-react";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem("darkMode");
        return savedMode === "true" ? true : false;
    });
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const navLinksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setActiveSection("#hero");
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", String(darkMode));
    }, [darkMode]);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries.filter(
                    (entry) => entry.isIntersecting
                );
                if (visibleSections.length > 0) {
                    const topMostSection = visibleSections.reduce(
                        (prev, current) =>
                            prev.boundingClientRect.top <
                            current.boundingClientRect.top
                                ? prev
                                : current
                    );
                    setActiveSection(`#${topMostSection.target.id}`);
                }
            },
            {
                rootMargin: "-20% 0px -80% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("hero");
            if (heroSection) {
                const heroRect = heroSection.getBoundingClientRect();
                setShowScrollToTop(heroRect.bottom <= 0);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLinkClick = (href: string) => {
        const element = document.querySelector(href);
        const navHeight = 48;

        if (element) {
            const elementPosition =
                element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
        setActiveSection(href);
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setActiveSection("#hero");
    };

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const navLinks = [
        { href: "#hero", label: "Home" },
        { href: "#summary", label: "Summary" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#education", label: "Education" },
        { href: "#contact", label: "Contact" },
    ];

    const getFloatingBoxProperties = () => {
        const navContainer = navLinksRef.current;
        if (!navContainer) {
            return { width: 0, height: 0, transform: "translate(0px, 0px)" };
        }

        const activeLink = navContainer.querySelector(
            `[data-href="${activeSection}"]`
        ) as HTMLButtonElement | null;

        if (activeLink) {
            return {
                width: activeLink.offsetWidth,
                height: activeLink.offsetHeight,
                transform: `translate(${activeLink.offsetLeft}px, ${activeLink.offsetTop}px)`,
            };
        }

        return { width: 0, height: 0, transform: "translate(0px, 0px)" };
    };

    const floatingBoxProperties = getFloatingBoxProperties();

    return (
        <>
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm dark:bg-background/95">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <a href="/">
                                <img
                                    className="h-10 w-auto"
                                    src="favicon.png"
                                    alt="Meetkumar Patel"
                                />
                            </a>
                        </div>

                        <div
                            className="hidden md:flex items-center space-x-2 relative"
                            ref={navLinksRef}
                        >
                            <div
                                className="absolute z-0 bg-primary/10 dark:bg-primary/20 rounded-lg transition-all duration-300 ease-in-out shadow-sm"
                                style={{
                                    width: floatingBoxProperties.width,
                                    height: floatingBoxProperties.height,
                                    transform: floatingBoxProperties.transform,
                                }}
                            ></div>

                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={`relative z-10 px-4 py-2 text-muted-foreground hover:text-primary transition-colors dark:text-muted-foreground/80 dark:hover:text-primary ${
                                        activeSection === link.href
                                            ? "text-primary dark:text-primary"
                                            : ""
                                    }`}
                                    data-href={link.href}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <button
                                onClick={toggleDarkMode}
                                className="text-muted-foreground hover:text-primary transition-colors ml-4 dark:text-muted-foreground/80 dark:hover:text-primary"
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? (
                                    <Sun className="h-6 w-6" />
                                ) : (
                                    <Moon className="h-6 w-6" />
                                )}
                            </button>
                        </div>

                        <div className="md:hidden flex items-center space-x-4">
                            <button
                                onClick={() =>
                                    setIsMobileMenuOpen(!isMobileMenuOpen)
                                }
                                className="text-muted-foreground hover:text-primary transition-colors dark:text-muted-foreground/80 dark:hover:text-primary"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                            <button
                                onClick={toggleDarkMode}
                                className="text-muted-foreground hover:text-primary transition-colors dark:text-muted-foreground/80 dark:hover:text-primary"
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? (
                                    <Sun className="h-6 w-6" />
                                ) : (
                                    <Moon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t dark:bg-background dark:border-border">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={`block w-full text-left px-3 py-2 transition-colors ${
                                        activeSection === link.href
                                            ? "text-primary bg-primary/10 dark:text-primary dark:bg-primary/20"
                                            : "text-muted-foreground hover:text-primary dark:text-muted-foreground/80 dark:hover:text-primary"
                                    }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            <button
                onClick={handleScrollToTop}
                className={`fixed bottom-8 right-8 z-50 p-3 bg-primary text-white rounded-full shadow-lg transition-opacity duration-300 ${
                    showScrollToTop
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-6 w-6" />
            </button>
        </>
    );
}
