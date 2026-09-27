import React from 'react';
import { Brain, Database, Workflow, Layers3, MessageSquareText, Sparkles } from 'lucide-react';

const topics = [
    { icon: Database, title: 'Data & Statistics', desc: 'Prepare datasets, explore distributions, and build a sound foundation in probability and statistical thinking.' },
    { icon: Workflow, title: 'Machine Learning', desc: 'Train and evaluate models for classification, regression, clustering, and recommendation.' },
    { icon: Brain, title: 'Deep Learning', desc: 'Understand neural networks, optimization, and the architectures behind modern AI.' },
    { icon: Layers3, title: 'Model Engineering', desc: 'Create reproducible training workflows, track experiments, and serve reliable models.' },
    { icon: MessageSquareText, title: 'Language & Vision', desc: 'Work with text and images using NLP, computer vision, and multimodal techniques.' },
    { icon: Sparkles, title: 'Generative AI', desc: 'Build with foundation models, retrieval-augmented generation, and responsible evaluation.' },
];

export default function AiMlEcosystem() {
    return (
        <div className="stack-bento">
            {topics.map(({ icon: Icon, title, desc }) => (
                <article className="bento-card" key={title}>
                    <div className="bento-icon"><Icon size={18} /></div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </article>
            ))}
        </div>
    );
}