import CodeExplainer from "./components/codeExplainer.jsx";
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🤖 AI Code Explainer for Beginners
      </h1>
      <CodeExplainer />
    </div>
  );
};

export default App;
