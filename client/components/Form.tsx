"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { validateRepeatedCharacters } from "../lib/api";
import { ValidatorScreen } from "./ValidatorScreen";

type TCharacter = {
  character: string;
};

export function MainForm() {
  const [wordWithRepeatedCharacters, setWordWithRepeatedCharacters] = useState<
    string[]
  >([]);

  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCharacter>();

  const onSubmit = (data: TCharacter) => {
    setLoading(true);
    const { character } = data;
    const input = character.split(" ");
    const repeatedCharacters = validateRepeatedCharacters(input);
    setWordWithRepeatedCharacters(repeatedCharacters);
    setLoading(false);
    reset();
    setShowResult(true);
  };

  return (
    <div className="py-12 bg-white shadow-md rounded-sm font-sans">
      <h1 className="text-center text-indigo-500 font-bold text-2xl">
        CodeCare Validator
      </h1>
      <form
        className="flex flex-col md:flex-row items-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-1 p-10 mx-12">
          <input
            type="text"
            id="character"
            {...register("character", {
              required: "Characters are required for checking...",
            })}
            placeholder="Example: asdf 122 hello"
            className="w-full px-10 py-2 border-b-2 border-gray-300 focus:ring-0 focus:outline-none focus:border-indigo-500 placeholder-gray-500 hover:border-indigo-400 text-indigo-400 mx-auto"
          />
          {errors.character && (
            <span className="text-indigo-500 block mt-1 text-sm">
              {errors.character.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="mx-5 px-8 py-3 bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:bg-gradient-to-br hover:from-esmerald-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-indigo-500 hover:to-90% text-white rounded-lg font-medium shadow-lg shadow-indigo-200 transition-all duration-300"
        >
          {loading ? "Checking..." : "Check"}
        </button>
      </form>
      {showResult && (
        <ValidatorScreen
          wordWithRepeatedCharacters={wordWithRepeatedCharacters}
        />
      )}
    </div>
  );
}
