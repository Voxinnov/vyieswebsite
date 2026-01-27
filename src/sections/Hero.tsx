import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { NetworkBackground } from '../components/3d/NetworkBackground';

export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <NetworkBackground />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary text-sm font-medium mb-4"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Next Gen Legal Automation
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">Intelligent Software</span>
                        <br />
                        That Grows Your Business
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-light">
                        Custom Software • Legal CRM • AI-powered Drafting • Digital Growth
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="group">
                            Book a Free Consultation
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="group">
                            View Our Product
                            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Gradient Overlay at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
        </section>
    );
};
