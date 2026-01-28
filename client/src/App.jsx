import CodeExplainer from "./components/codeExplainer.jsx";
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-5xl mx-auto p-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-3">
            🤖 AI Code Explainer
          </h1>
          <p className="text-gray-400 text-lg">
            Understand code like a beginner — explained by AI
          </p>
        </header>

        <CodeExplainer />

        <footer className="text-center mt-10 text-gray-500 text-sm">
          Powered by Google Gemini • Built for TechSprint 🚀
        </footer>
      </div>
    </div>
  );
};

export default App;
