
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { TrendingUp } from 'lucide-react';
import { SceneContainer } from '../components/3d/SceneContainer';
import { FloatingShape } from '../components/3d/FloatingShape';

export const Marketing = () => {
    return (
        <Section id="marketing" className="relative py-24 overflow-hidden">
            <SceneContainer className="absolute inset-0 pointer-events-none -z-10 opacity-30">
                <FloatingShape shape="octahedron" position={[4, 2, 0]} scale={1.5} color="#7000ff" rotationIntensity={2} />
                <FloatingShape shape="box" position={[-4, -3, -2]} scale={1} color="#00f0ff" wireframe={true} />
            </SceneContainer>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                        <TrendingUp className="w-4 h-4" /> Digital Growth
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        We don't just generate leads — we <span className="text-secondary">close projects.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Align your marketing strategy with sales execution. Our data-driven approach ensures that every lead is qualified, nurtured, and converted.
                    </p>

                    <div className="space-y-6">
                        {[
                            { title: "Performance Marketing", desc: "ROI-focused campaigns across all major platforms." },
                            { title: "Funnel Optimization", desc: "Streamlined user journeys that maximize conversion rates." },
                            { title: "CRM Integration", desc: "Seamless flow of data between marketing and sales." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-1.5 h-full min-h-[3rem] bg-gradient-to-b from-secondary to-transparent rounded-full" />
                                <div>
                                    <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Abstract Chart/Graph Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full" />
                    <div className="relative glass-card p-8 rounded-2xl border-secondary/30">
                        <div className="flex justify-between items-end h-64 gap-4">
                            {[40, 65, 45, 80, 55, 95].map((height, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${height}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 1, type: "spring" }}
                                    className="w-12 bg-gradient-to-t from-secondary/50 to-secondary rounded-t-lg relative group"
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-surface px-2 py-1 rounded text-xs border border-white/10">
                                        +{height}%
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-4 flex justify-between text-gray-500 text-sm font-mono">
                            <span>JAN</span>
                            <span>FEB</span>
                            <span>MAR</span>
                            <span>APR</span>
                            <span>MAY</span>
                            <span>JUN</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </Section>
    );
};
