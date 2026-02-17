import React from 'react';
import RecipeCard from './RecipeCard';
import { motion, AnimatePresence } from 'framer-motion';

const RecipeList = ({ recipes, loading, onRecipeSelect }) => {
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    border: '4px solid rgba(249, 115, 22, 0.1)',
                    borderTopColor: '#f97316',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }}></div>
                <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
            </div>
        );
    }

    if (recipes.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '100px', color: '#64748b' }}>
                <h3>No recipes found. Try searching for something else!</h3>
            </div>
        );
    }

    return (
        <div className="grid">
            <AnimatePresence mode="popLayout">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} onSelect={() => onRecipeSelect(recipe)} />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default RecipeList;
