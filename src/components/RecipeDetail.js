import React from 'react';
import { Typography, Box } from '@mui/material';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <Box>
      <Typography variant="h4">{recipe.label}</Typography>
      <img src={recipe.image} alt={recipe.label} />
      <Typography variant="h6">Ingredients</Typography>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <Typography variant="h6">Nutritional Information</Typography>
      <ul>
        {recipe.nutrition?.nutrients.map((nutrient, index) => (
          <li key={index}>{nutrient.label}: {nutrient.amount} {nutrient.unit}</li>
        ))}
      </ul>
    </Box>
  );
};

export default RecipeDetail;
