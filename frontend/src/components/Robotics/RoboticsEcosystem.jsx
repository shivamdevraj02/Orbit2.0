import React from 'react';
import { Bot, CircuitBoard, Cpu, Eye, Radio, Route } from 'lucide-react';

const topics = [
    { icon: CircuitBoard, title: 'Electronics & Hardware', desc: 'Wire power, motors, microcontrollers, and actuators into dependable robotic platforms.' },
    { icon: Cpu, title: 'Embedded Systems', desc: 'Program real-time devices with efficient firmware, communication protocols, and robust states.' },
    { icon: Radio, title: 'Sensors & Perception', desc: 'Collect useful signals from cameras, lidar, encoders, and the physical world.' },
    { icon: Route, title: 'Control Systems', desc: 'Use feedback, calibration, and motion planning to make machines move precisely.' },
    { icon: Eye, title: 'Computer Vision', desc: 'Help robots understand objects, distance, motion, and changing environments.' },
    { icon: Bot, title: 'Autonomous Robotics', desc: 'Combine navigation, planning, and decision-making into intelligent robot behaviors.' },
];

export default function RoboticsEcosystem() {
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