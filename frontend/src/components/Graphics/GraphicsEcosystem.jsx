import React from 'react';
import { Box, Layers3, Monitor, Palette, PenTool, Sparkles } from 'lucide-react';

const topics = [
    { icon: Palette, title: 'Visual Design', desc: 'Build strong visual systems through composition, color, typography, and clear creative direction.' },
    { icon: PenTool, title: 'Illustration & Branding', desc: 'Create expressive identities, icons, and artwork that give ideas a recognizable visual language.' },
    { icon: Layers3, title: 'UI & Experience', desc: 'Shape polished interfaces with thoughtful layouts, interaction patterns, and accessible design.' },
    { icon: Box, title: '3D & Spatial Art', desc: 'Explore modeling, materials, lighting, and composition for immersive three-dimensional work.' },
    { icon: Sparkles, title: 'Motion Graphics', desc: 'Use timing, transitions, and visual rhythm to make stories and interfaces feel alive.' },
    { icon: Monitor, title: 'Interactive Media', desc: 'Combine code and creativity to create responsive installations, websites, and digital experiences.' },
];

export default function GraphicsEcosystem() {
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