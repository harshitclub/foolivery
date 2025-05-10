import React, { useState } from "react";
import "./style.css"; // Assuming a common stylesheet
import { GoogleGenAI } from "@google/genai";
import { BookOpen, ChefHat } from "lucide-react"; // Using icons for visual appeal

// Initialize GoogleGenAI (API key directly in code - for demonstration only)
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_KEY,
});

const Recipe = () => {
  const [dishName, setDishName] = useState("");
  const [recipeText, setRecipeText] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateRecipe = async () => {
    if (!dishName.trim()) {
      alert("Please enter a dish name.");
      return;
    }

    setLoading(true);
    setRecipeText(null); // Clear previous recipe
    setError(null);

    try {
      const prompt = `Generate a detailed recipe for ${dishName} in under 400 words. Include a list of ingredients and clear, step-by-step instructions.`;
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      const text = response.text;
      if (text) {
        setRecipeText(text);
      } else {
        setError("Failed to generate recipe. Please try again.");
      }
    } catch (err) {
      console.error("Error generating recipe:", err);
      setError(
        "An error occurred while generating the recipe. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="recipe">
      <section className="recipeContainer">
        <div className="recipeHeader">
          <ChefHat size={48} strokeWidth={1.5} className="headerIcon" />
          <h1>Foolivery Recipe Generator</h1>
          <p className="tagline">
            Unleash your inner chef! Just enter a dish name and get a delicious
            recipe.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            generateRecipe();
          }}
        >
          <div className="recipeInput">
            <BookOpen size={22} strokeWidth={1.5} className="inputIcon" />
            <input
              type="text"
              placeholder="Enter dish name (e.g., Pizza, Salad, Soup)"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Brewing Recipe..." : "Generate Recipe"}
          </button>
        </form>

        {error && <p className="errorMessage">{error}</p>}

        {recipeText && (
          <div className="recipeOutput">
            <h2>Recipe for {dishName}</h2>
            <div className="recipeText">{recipeText}</div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Recipe;
