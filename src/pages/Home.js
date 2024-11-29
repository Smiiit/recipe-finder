import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import RecipeList from '../components/RecipeList';
import PaginationComponent from '../components/Pagination';
import { fetchRecipes } from '../services/recipeApi';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async (ingredients, mealType) => {
    const data = await fetchRecipes(ingredients, mealType, currentPage);
    if (data) {
      setRecipes(data);
      setTotalPages(Math.ceil(data.length / 12)); // Adjust total pages for pagination
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    handleSearch('', '', page); // Fetch recipes for the new page
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Search for Recipes</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Navbar onSearch={handleSearch} />
      </div>
      <RecipeList recipes={recipes} />
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
