import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button, CardActionArea } from '@mui/material';

const RecipeCard = ({ recipe }) => {
  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={recipe.title}
          height="180"
          image={recipe.image}
        />
        <CardContent>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {recipe.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recipe.ingredientCount} Ingredients
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        variant="outlined"
        color="primary"
        href={`https://spoonacular.com/recipes/${recipe.title.replace(/ /g, '-')}-${recipe.id}`}
        target="_blank"
        fullWidth
      >
        View Recipe
      </Button>
    </Card>
  );
};

export default RecipeCard;
