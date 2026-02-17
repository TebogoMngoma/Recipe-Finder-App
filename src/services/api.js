const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY || '';
const BASE_URL = 'https://api.spoonacular.com/recipes';

const MOCK_RECIPES = [
  {
    id: 1,
    title: 'Creamy Mushroom Pasta',
    image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&q=80',
    readyInMinutes: 25,
    healthScore: 85,
    summary: 'A delicious creamy pasta with fresh mushrooms and herbs.'
  },
  {
    id: 2,
    title: 'Grilled Salmon with Asparagus',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
    readyInMinutes: 20,
    healthScore: 95,
    summary: 'Perfectly grilled salmon served with vibrant green asparagus.'
  },
  {
    id: 3,
    title: 'Avocado Toast with Poached Egg',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
    readyInMinutes: 15,
    healthScore: 90,
    summary: 'A healthy and quick breakfast classic.'
  },
  {
    id: 4,
    title: 'Berry Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80',
    readyInMinutes: 10,
    healthScore: 88,
    summary: 'Refreshing bowl filled with berries, nuts, and seeds.'
  }
];

export const searchRecipes = async (query, filters = {}) => {
  if (!API_KEY) {
    console.warn('Spoonacular API Key missing. Using mock data.');
    return MOCK_RECIPES.filter(r => r.title.toLowerCase().includes(query.toLowerCase()));
  }

  try {
    const { diet, cuisine } = filters;
    let url = `${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${query}&addRecipeInformation=true&number=12`;
    
    if (diet) url += `&diet=${diet}`;
    if (cuisine) url += `&cuisine=${cuisine}`;

    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

export const getRecipeDetails = async (id) => {
  if (!API_KEY) {
    return MOCK_RECIPES.find(r => r.id === parseInt(id)) || MOCK_RECIPES[0];
  }

  try {
    const response = await fetch(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return null;
  }
};
