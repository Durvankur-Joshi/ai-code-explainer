import { useState } from "react";
import axios from "axios";
import React from "react";
import ReactMarkdown from "react-markdown";

const CodeExplainer = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const explainCode = async () => {
    if (!code.trim()) return;

    setLoading(true);
    setResult("");

    try {
      const res = await axios.post(
        "https://ai-code-explainer-3-umnl.onrender.com/api/explain",
        { code }
      );
      setResult(res.data.explanation);
    } catch (err) {
      setResult("❌ Failed to explain code. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl p-6 space-y-4">
      <label className="text-sm text-gray-300 font-medium">
        Paste your code
      </label>

      <textarea
        className="w-full h-48 p-4 bg-gray-900 text-green-300 font-mono text-sm rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={`Example:\nfor(int i=0;i<n;i++){\n  sum += i;\n}`}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        onClick={explainCode}
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 transition-all px-6 py-3 rounded-xl font-semibold"
      >
        {loading ? "🤖 Explaining..." : "✨ Explain Code"}
      </button>

      {result && (
        <div className="mt-6 bg-gray-800 p-4 rounded prose prose-invert max-w-none">
          <ReactMarkdown>{result}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default CodeExplainer;
