import { useState } from "react";

function NoteCard({ title, description }) {
  const [isVisualVisible, setIsVisualVisible] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
        onClick={() => setIsVisualVisible(!isVisualVisible)}
      >
        {isVisualVisible ? "Hide Visual" : "Show Visual"}
      </button>
      {isVisualVisible && (
        <div className="border-2 border-blue-400 p-4 rounded-md">
          <div className="bg-blue-100 p-2 rounded text-center text-blue-700">
            Box Model Visual
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteCard;
