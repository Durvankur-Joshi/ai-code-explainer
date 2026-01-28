import { useState } from "react";
import axios from "axios";
import React from "react";

const CodeExplainer = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const explainCode = async () => {
    setLoading(true);
    setResult("");

    try {
      const res = await axios.post("http://localhost:8080/api/explain", {
        code,
      });

      setResult(res.data.explanation);
    } catch (err) {
      setResult("❌ Failed to explain code.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <textarea
        className="w-full h-40 p-4 text-black rounded"
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        onClick={explainCode}
        className="mt-4 bg-blue-600 px-6 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Explaining..." : "Explain Code"}
      </button>

      {result && (
        <pre className="mt-6 bg-gray-800 p-4 rounded whitespace-pre-wrap">
          {result}
        </pre>
      )}
    </div>
  );
};

export default CodeExplainer;
