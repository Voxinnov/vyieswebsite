
import { Code2, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Code2 className="w-8 h-8 text-primary" />
                            <span className="font-bold text-2xl tracking-wider text-white">VYISE</span>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Innovating the future of business with intelligent software, legal automation, and digital growth strategies.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Components */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-primary cursor-pointer transition-colors">Custom Software</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Legal Tech</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Digital Growth</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Mobile Apps</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} VYISE INNOVATIONS. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Designed for the Future.
                    </p>
                </div>
            </div>
        </footer>
    );
};
