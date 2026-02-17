import React from 'react';
import { Clock, Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const RecipeCard = ({ recipe, onSelect }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="glass-card"
            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
            onClick={onSelect}
        >
            <div style={{ position: 'relative', height: '200px' }}>
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <Star size={14} color="#fbbf24" fill="#fbbf24" />
                    {recipe.healthScore || 'N/A'}
                </div>
            </div>

            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', lineHeight: 1.2 }}>{recipe.title}</h3>

                <div style={{ display: 'flex', gap: '16px', color: '#94a3b8', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={16} />
                        {recipe.readyInMinutes} min
                    </div>
                </div>

                <p style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    lineHeight: 1.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {recipe.summary ? recipe.summary.replace(/<[^>]*>?/gm, '') : 'No description available.'}
                </p>

                <button
                    className="btn-primary"
                    style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}
                    onClick={(e) => {
                        e.stopPropagation();
                        onSelect();
                    }}
                >
                    View Recipe <ExternalLink size={16} />
                </button>
            </div>
        </motion.div>
    );
};

export default RecipeCard;
