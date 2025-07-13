import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem("darkMode");
        return savedMode === "true" ? true : false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", String(darkMode));
    }, [darkMode]);

    const handleLinkClick = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setIsMobileMenuOpen(false);
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

    return (
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

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className="nav-link text-muted-foreground hover:text-primary transition-colors dark:text-muted-foreground/80 dark:hover:text-primary"
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
                                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors dark:text-muted-foreground/80 dark:hover:text-primary"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
