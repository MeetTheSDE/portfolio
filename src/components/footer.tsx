import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-gray-400 mb-4">
                        © 2024 Meetkumar Patel. All rights reserved.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://www.linkedin.com/in/meet1809/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a
                            href="https://github.com/MeetTheSDE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="h-6 w-6" />
                        </a>
                        <a
                            href="mailto:sde.meet@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
