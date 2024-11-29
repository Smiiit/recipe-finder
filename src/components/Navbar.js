import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem, Select, InputLabel, FormControl, Grid } from '@mui/material';

const Navbar = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState('');
  const [mealType, setMealType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ingredients, mealType);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{
        margin: '20px 0',
        padding: '10px',
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <TextField
            label="Enter Ingredients"
            variant="outlined"
            fullWidth
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g., tomato, onion, chicken"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Meal Type</InputLabel>
            <Select
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
              label="Meal Type"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="breakfast">Breakfast</MenuItem>
              <MenuItem value="lunch">Lunch</MenuItem>
              <MenuItem value="dinner">Dinner</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" fullWidth>Search Recipes</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
