import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Target, Zap, Shield } from 'lucide-react';
import { SceneContainer } from '../components/3d/SceneContainer';
import { FloatingShape } from '../components/3d/FloatingShape';

export const About = () => {
    const cards = [
        {
            icon: Target,
            title: "Strategic Innovation",
            description: "We don't just build software; we build solutions that align with your long-term business goals."
        },
        {
            icon: Zap,
            title: "Rapid Scalability",
            description: "Cloud-ready architectures designed to grow with your user base without performance bottlenecks."
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Bank-grade security protocols ensuring your data and your clients' data remains protected."
        }
    ];

    return (
        <Section id="about" className="relative bg-surface/30 backdrop-blur-sm border-t border-white/5 overflow-hidden">
            <SceneContainer className="absolute inset-0 pointer-events-none -z-10 opacity-30">
                <FloatingShape
                    shape="icosahedron"
                    position={[3, 0, 0]}
                    scale={2.5}
                    color="#00f0ff"
                    wireframe={true}
                    rotationIntensity={0.2}
                    speed={0.5}
                />
            </SceneContainer>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Innovate with <span className="text-primary">Confidence</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        VYISE INNOVATIONS is a technology-driven company delivering custom software, legal automation, and digital growth solutions.
                        We specialize in transforming complex manual processes into streamlined, intelligent digital workflows.
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="glass-card p-6 rounded-xl flex items-start gap-4"
                        >
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <card.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                                <p className="text-gray-400 text-sm">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
