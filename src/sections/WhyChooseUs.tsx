import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { CheckCircle } from 'lucide-react';
import { SceneContainer } from '../components/3d/SceneContainer';
import { FloatingShape } from '../components/3d/FloatingShape';

export const WhyChooseUs = () => {
    return (
        <Section id="why-us" className="relative py-24 bg-surface/30 overflow-hidden">
            <SceneContainer className="absolute inset-0 pointer-events-none -z-10 opacity-20">
                <FloatingShape shape="box" position={[-6, 4, -4]} scale={1.2} color="#7000ff" rotationIntensity={0.8} />
                <FloatingShape shape="box" position={[6, -2, -6]} scale={1.5} color="#00f0ff" rotationIntensity={1} />
                <FloatingShape shape="box" position={[0, -5, -3]} scale={0.8} color="#3b82f6" rotationIntensity={0.5} wireframe={true} />
            </SceneContainer>

            <div className="relative z-10 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Partner With Us?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We bring a unique blend of technical expertise and business acumen to every project.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                    { label: "Successful Projects", value: "50+" },
                    { label: "Client Retention", value: "98%" },
                    { label: "Years Experience", value: "10+" },
                    { label: "Team Experts", value: "25+" }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                        className="text-center p-6 bg-white/5 rounded-2xl border border-white/5"
                    >
                        <div className="text-4xl font-bold text-primary mb-2 text-glow">{stat.value}</div>
                        <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                    "Custom-built solutions, never template-based",
                    "Product + Service mindset for long-term growth",
                    "Deep understanding of Legal Tech & SaaS",
                    "Scalable architecture ready for enterprise",
                    "Dedicated support and maintenance teams",
                    "Data-driven marketing strategies included"
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                    >
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-gray-200">{item}</span>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
