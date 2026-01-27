import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { FileText, Users, Lock, Cloud } from 'lucide-react';
import { SceneContainer } from '../components/3d/SceneContainer';
import { FloatingShape } from '../components/3d/FloatingShape';

export const Product = () => {
    const features = [
        { icon: Users, text: "Client & Case Management" },
        { icon: FileText, text: "Automated Legal Drafting" },
        { icon: FileText, text: "Smart Document Templates" },
        { icon: Lock, text: "Secure Role-Based Access" },
        { icon: Cloud, text: "Cloud-Ready Architecture" },
    ];

    return (
        <Section id="product" className="relative py-32 overflow-hidden">
            <SceneContainer className="absolute inset-0 pointer-events-none -z-10 opacity-40">
                <FloatingShape
                    shape="capsule"
                    position={[-4, 2, -2]}
                    scale={3}
                    color="#7000ff"
                    rotationIntensity={0.5}
                    speed={0.8}
                />
                <FloatingShape
                    shape="torus"
                    position={[5, -3, -5]}
                    scale={2}
                    color="#00f0ff"
                    wireframe={true}
                    speed={0.5}
                />
            </SceneContainer>

            <div className="relative z-10 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-primary">Legal CRM</span> with Intelligent Drafter
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Streamline your legal practice with our all-in-one management and drafting solution.
                </p>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Product Visual - Abstract Representation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-video rounded-2xl overflow-hidden glass-card border-primary/30 flex items-center justify-center group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <div className="relative z-10 p-8 text-center">
                        {/* Mock Interface Elements */}
                        <div className="w-full max-w-sm mx-auto space-y-4">
                            <div className="h-2 bg-white/10 rounded-full w-3/4 mb-8"></div>
                            <div className="flex gap-4">
                                <div className="w-1/3 aspect-square bg-white/5 rounded-lg border border-white/10"></div>
                                <div className="w-2/3 space-y-2">
                                    <div className="h-2 bg-white/10 rounded-full w-full"></div>
                                    <div className="h-2 bg-white/10 rounded-full w-5/6"></div>
                                    <div className="h-2 bg-white/10 rounded-full w-4/6"></div>
                                </div>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <div className="w-2/3 space-y-2">
                                    <div className="h-2 bg-white/10 rounded-full w-full"></div>
                                    <div className="h-2 bg-white/10 rounded-full w-full"></div>
                                </div>
                                <div className="w-1/3 aspect-square bg-primary/20 rounded-lg border border-primary/30 flex items-center justify-center">
                                    <FileText className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative glow */}
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                </motion.div>

                {/* Features List */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                <div className="p-2 rounded-full bg-primary/10 text-primary">
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <span className="text-lg text-gray-200">{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <Button size="lg" className="w-full sm:w-auto shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                            Request Product Demo
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
