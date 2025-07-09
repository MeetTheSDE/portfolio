import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const navLinks = [
        { href: "#hero", label: "Home" },
        { href: "#summary", label: "Summary" },
        { href: "#experience", label: "Experience" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#education", label: "Education" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="font-bold text-xl text-primary">
                        <a href="#hero">Meetkumar Patel</a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className="nav-link text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
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
