import React from "react";

type TValidatorScreenProps = {
  wordWithRepeatedCharacters: string[];
};

export const ValidatorScreen = ({
  wordWithRepeatedCharacters,
}: TValidatorScreenProps) => {
  return (
    <div className="mt-8 font-semibold, text-md text-indigo-400 bg-indigo-50 text-center py-5 max-h-64">
      <h1 className="font-bold py-2">Word with repeated characters:</h1>
      <ul className="pl-5 list-none">
        {wordWithRepeatedCharacters.length === 0 ? (
          <li>No repeated characters found.</li>
        ) : (
          wordWithRepeatedCharacters.map((word, index) => (
            <li key={index}>{word} </li>
          ))
        )}
      </ul>
      <button
        onClick={() => window.location.reload()}
        className="mt-10 px-3 py-1 bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:bg-gradient-to-br hover:from-emerald-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-indigo-500 hover:to-90% text-white rounded-lg font-medium shadow-lg shadow-indigo-200 transition-all duration-300"
      >
        Reset
      </button>
    </div>
  );
};
