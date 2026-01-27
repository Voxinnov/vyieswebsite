import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { SceneContainer } from '../components/3d/SceneContainer';
import { FloatingShape } from '../components/3d/FloatingShape';

export const CallToAction = () => {
    return (
        <section className="relative py-32 overflow-hidden flex items-center justify-center">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background -z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent -z-10 blur-3xl opacity-50" />

            <SceneContainer className="absolute inset-0 pointer-events-none -z-10 opacity-40">
                <FloatingShape shape="sphere" position={[0, 0, -5]} scale={4} color="#00f0ff" wireframe={true} speed={2} />
                <FloatingShape shape="torus" position={[0, 0, -5]} scale={4} color="#7000ff" wireframe={true} speed={2} rotation={[Math.PI / 2, 0, 0]} />
            </SceneContainer>

            <div className="max-w-4xl mx-auto px-4 text-center z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-8"
                >
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Transform</span> Your Business?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    Whether you need a custom software solution, legal automation, or a digital growth strategy, we are here to help you build and scale.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Button size="lg" className="min-w-[200px] shadow-lg shadow-primary/20">
                        Talk to Our Team
                    </Button>
                    <Button size="lg" variant="outline" className="min-w-[200px]">
                        Get a Quote
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
