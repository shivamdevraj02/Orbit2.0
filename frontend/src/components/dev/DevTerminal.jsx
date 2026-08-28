import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from 'lucide-react';

const COMMANDS = {
  help: 'Available commands: about, stack, projects, roadmap, sprint, clear',
  about: 'Development Wing: Engineering high-performance web applications, scalable APIs, and developer tooling.',
  stack: 'Core: React, Next.js, Node.js, TypeScript, Tailwind CSS, PostgreSQL, Docker, Vite.',
  projects: 'Active: Campus Portal, Resumé Builder CLI, TechKshitiz Core Platform, Orbit Design System.',
  roadmap: 'Tracks: 01. Web Foundations -> 02. Advanced React & State -> 03. Full-Stack & APIs -> 04. DevOps & Cloud.',
  sprint: 'Current Sprint: v2.6.0-beta - Integrating dynamic API gateways & real-time collaboration.'
};

export default function DevTerminal() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Orbit Dev Shell [Version 2.6.0]' },
    { type: 'system', text: 'Type "help" to view available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const output = COMMANDS[cmd] || `command not found: ${cmd}. Type "help" for options.`;
    setHistory((prev) => [...prev, { type: 'user', text: `> ${input}` }, { type: 'response', text: output }]);
    setInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="terminal-title">
          <TerminalIcon size={13} />
          <span>orbit-dev-env // bash</span>
        </div>
        <div className="terminal-badge">LIVE REPL</div>
      </div>
      <div className="terminal-body" onClick={() => document.getElementById('terminal-input')?.focus()}>
        {history.map((line, i) => (
          <div key={i} className={`terminal-line ${line.type}`}>
            {line.text}
          </div>
        ))}
        <form onSubmit={handleCommand} className="terminal-input-row">
          <span className="terminal-prompt">&gt;</span>
          <input
            id="terminal-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a command (e.g. stack, roadmap)..."
            autoComplete="off"
            spellCheck="false"
          />
          <button type="submit" aria-label="Run command" className="terminal-enter">
            <CornerDownLeft size={12} />
          </button>
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}