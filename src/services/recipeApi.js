import axios from 'axios';

const API_KEY = 'e3152f9249774701914caffc1f06c1c6';  // Replace with your API key
const API_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

export const fetchRecipes = async (ingredients, mealType = '', page = 1) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        ingredients: ingredients,
        number: 12, // Fetch 12 results per page
        offset: (page - 1) * 12, // Pagination
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return null;
  }
};
