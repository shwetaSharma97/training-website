import React from 'react';
import { Check, CheckCheck } from 'lucide-react'; // Icons for checklists

// =========================================================================
// HELPER COMPONENTS
// =========================================================================

// Code Editor Mockup 1 (Top Section: app.py / app.jsx)
const TopCodeEditorMockup: React.FC = () => {
  // Styles for simulated syntax highlighting
  const s = {
    keyword: "text-purple-400",
    variable: "text-blue-400",
    string: "text-yellow-300",
    comment: "text-gray-500",
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden mt-8">
      {/* Editor Header */}
      <div className="flex items-center bg-gray-700 px-4 py-2 border-b border-gray-600">
        {/* Window Controls */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        {/* Tabs */}
        <div className="flex flex-grow justify-center -ml-16">
          <div className="px-6 py-1.5 text-sm font-medium text-gray-300 bg-gray-800 rounded-t-lg border-x border-t border-gray-600">
            app.py
          </div>
          <div className="px-6 py-1.5 text-sm font-medium text-gray-400 rounded-t-lg hover:bg-gray-700 cursor-pointer">
            App.jsx
          </div>
        </div>
        {/* Window Action (e.g., maximize) */}
        <div className="ml-auto text-gray-400 text-lg">
            &gt;
        </div>
      </div>

      {/* Code Content Area */}
      <div className="relative p-6 text-left font-mono text-sm leading-relaxed overflow-x-auto whitespace-nowrap">
        {/* Indicators */}
        <div className="flex items-center mb-2 space-x-4">
          <span className="flex items-center space-x-1 text-green-400 text-xs font-semibold">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>FASTAPI BACKEND</span>
          </span>
          <span className="flex items-center space-x-1 text-blue-400 text-xs font-semibold ml-auto">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span>REACT FRONTEND</span>
          </span>
        </div>

        {/* Code Line (simulated syntax highlighting) */}
        <pre className="text-gray-200">
          <span className={s.keyword}>from</span> <span className="text-green-400">fastapi</span> <span className={s.keyword}>import</span> FastAPI <span className={s.keyword}>from</span> pydantic <span className={s.keyword}>import</span> BaseModel{' '}
          <span className={s.comment}># Create React.app/use.State(User(BaseModel))from.them.all</span>
        </pre>

        {/* Optional: Right-side gradient fade for long lines (simulates scroll) */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-800 to-transparent"></div>
      </div>
    </div>
  );
};

// Achievement List Item (for the "What You'll Achieve" section)
interface AchievementItemProps {
  content: React.ReactNode; // Can accept text or bold spans
}

const AchievementItem: React.FC<AchievementItemProps> = ({ content }) => (
  <div className="flex space-x-3 items-start mb-6">
    <Check className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" /> {/* Changed to single check */}
    <p className="text-lg text-gray-300 text-left">
      {content}
    </p>
  </div>
);

// Code Editor Mockup 2 (Bottom Section: /src/App.js)
const BottomCodeEditorMockup: React.FC = () => {
  // Styles for simulated syntax highlighting
  const s = {
    keyword: "text-purple-400",
    variable: "text-blue-400",
    string: "text-yellow-300",
    comment: "text-gray-500",
    number: "text-orange-400",
    tag: "text-red-400"
  };

  return (
    <div className="relative w-full bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
      {/* Editor Header */}
      <div className="flex items-center bg-gray-700 px-4 py-2 border-b border-gray-600">
        {/* Window Controls */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        
        {/* File Path */}
        <div className="flex flex-grow justify-center">
            <span className="text-sm font-medium text-gray-300">
                /src/App.js
            </span>
        </div>
        
        {/* Right-side space */}
        <div className="w-8"></div> 
      </div>

      {/* Code Content Area */}
      <div className="relative p-6 text-left font-mono text-sm leading-relaxed overflow-x-auto whitespace-nowrap">
        <code className="text-gray-200 block">
          <div className="flex"><span className={`${s.number} w-8`}>1</span> <span className={s.keyword}>import</span> React, {'{'} useState {'}'} <span className={s.keyword}>from</span> <span className={s.string}>react</span>;</div>
          <div className="flex"><span className={`${s.number} w-8`}>2</span> </div>
          <div className="flex"><span className={`${s.number} w-8`}>3</span> <span className={s.keyword}>const</span> internshipApp = () <span className={s.keyword}>=&gt;</span> {'{'}</div>
          <div className="flex"><span className={`${s.number} w-8`}>4</span> <span className="pl-4"><span className={s.variable}>const</span> [status, setStatus] = <span className={s.variable}>useState</span>(<span className={s.string}>ready</span>);</span></div>
          <div className="flex"><span className={`${s.number} w-8`}>5</span> </div>
          <div className="flex"><span className={`${s.number} w-8`}>6</span> <span className="pl-4"><span className={s.comment}>Phase 2: Working on a real-world project...</span></span></div>
          <div className="flex"><span className={`${s.number} w-8`}>7</span> </div>
          <div className="flex"><span className={`${s.number} w-8`}>8</span> <span className="pl-4"><span className={s.keyword}>return</span> (<span className={s.tag}>&lt;h1&gt;</span>{'{'}status.toUpperCase(){'}'}<span className={s.tag}> to be Hired&lt;/h1&gt;</span>);</span></div>
          <div className="flex"><span className={`${s.number} w-8`}>9</span> {'}'};</div>
          <div className="flex"><span className={`${s.number} w-8`}>10</span> </div>
        </code>
      </div>
    </div>
  );
};


// =========================================================================
// MAIN COMPONENT: LearningExperience (Combines both sections)
// =========================================================================

export default function LearningExperience() {
  return (
    <section className="relative py-20 md:py-18 bg-gray-900 text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: 'linear-gradient(to right, #4a5568 1px, transparent 1px), linear-gradient(to bottom, #4a5568 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        
        {/* Top Section: "Learn by Building" */}
        <div className="mb-20 md:mb-32"> {/* Spacing between the two main sections */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
            Learn by Building
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16 text-center">
            Write production-ready code from day one
          </p>
          <TopCodeEditorMockup />
        </div>

        {/* Bottom Section: "What You'll Achieve" */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-white text-center lg:text-left">
            What You&apos;ll Achieve
          </h3>

          {/* Two-column layout for achievements and code mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Achievement List */}
            <div className="space-y-4"> {/* Adjusted spacing */}
              <AchievementItem 
                content={<>
                  <span className="font-bold text-white">Frontend Focus (45 Days):</span> Master React/Next.js, state
                  management, and modern component architecture.
                </>}
              />
              <AchievementItem 
                content={<>
                  <span className="font-bold text-white">Backend Focus (45 Days):</span> Build robust APIs with
                  Node.js/Express or Python/Django, databases, and authentication.
                </>}
              />
              <AchievementItem 
                content={<>
                  <span className="font-bold text-white">Interview Readiness:</span> Dedicated sessions for DSA, system
                  design, and behavioral interviews to ensure placement.
                </>}
              />
              <AchievementItem 
                content={<>
                  <span className="font-bold text-white">Hands-on Workshops:</span> Regular live workshops covering
                  advanced topics, tooling, and industry best practices.
                </>}
              />
            </div>

            {/* Right Column: Second Code Editor Mockup */}
            <BottomCodeEditorMockup />
          </div>
        </div>

      </div>
    </section>
  );
}