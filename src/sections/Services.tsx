import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Globe, Smartphone, Scale, Database, Server } from 'lucide-react';
import { SceneContainer } from '../components/3d/SceneContainer';
import { FloatingShape } from '../components/3d/FloatingShape';

export const Services = () => {
    const services = [
        { icon: Globe, title: "Custom Web Apps", text: "Scalable, high-performance web applications built on modern stacks." },
        { icon: Smartphone, title: "Mobile Development", text: "Native and cross-platform mobile apps for iOS and Android." },
        { icon: Scale, title: "Legal Tech Solutions", text: "Specialized tools for law firms, from case management to drafting." },
        { icon: Database, title: "System Integration", text: "Seamless API integrations and legacy system modernization." },
        { icon: Server, title: "Cloud Infrastructure", text: "Secure, scalable cloud architecture and DevOps services." },
    ];

    return (
        <Section id="services" className="relative bg-surface/50 border-t border-white/5 overflow-hidden">
            <SceneContainer className="absolute inset-0 pointer-events-none -z-10 opacity-20">
                <FloatingShape
                    shape="torus"
                    position={[0, 0, -5]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={4}
                    color="#3b82f6"
                    wireframe={true}
                    speed={0.2}
                />
            </SceneContainer>

            <div className="relative z-10 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Comprehensive technology solutions to drive your business forward.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group p-8 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                            <service.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                            {service.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
