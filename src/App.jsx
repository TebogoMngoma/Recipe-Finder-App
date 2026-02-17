import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { searchRecipes } from './services/api';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const fetchRecipes = async (query = '') => {
    setLoading(true);
    const results = await searchRecipes(query);
    setRecipes(results);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipes('popular');
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchRecipes(query);
  };

  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Hero onSearch={handleSearch} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700' }}>
            {searchQuery ? `Search results for "${searchQuery}"` : 'Popular Recipes'}
          </h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{recipes.length} recipes found</span>
          </div>
        </div>

        <RecipeList
          recipes={recipes}
          loading={loading}
          onRecipeSelect={(recipe) => setSelectedRecipe(recipe)}
        />

        <AnimatePresence>
          {selectedRecipe && (
            <RecipeDetails
              recipe={selectedRecipe}
              onClose={() => setSelectedRecipe(null)}
            />
          )}
        </AnimatePresence>
      </main>

      <footer style={{
        marginTop: '80px',
        padding: '40px 0',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        color: '#64748b'
      }}>
        <p>&copy; 2026 GourmetFinder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
