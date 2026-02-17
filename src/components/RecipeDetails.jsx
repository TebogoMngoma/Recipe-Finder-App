import React from 'react';
import { X, Clock, Zap, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RecipeDetails = ({ recipe, onClose }) => {
    if (!recipe) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(8px)'
                }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="glass-card"
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    position: 'relative',
                    padding: 0
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'rgba(255,255,255,0.1)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'white',
                        zIndex: 10
                    }}
                >
                    <X size={20} />
                </button>

                <img
                    src={recipe.image}
                    alt={recipe.title}
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />

                <div style={{ padding: '40px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{recipe.title}</h2>

                    <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
                            <Clock size={20} />
                            <span>{recipe.readyInMinutes} mins</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
                            <Zap size={20} color="#fbbf24" />
                            <span>Health Score: {recipe.healthScore}</span>
                        </div>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f97316' }}>Description</h3>
                        <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '1.1rem' }}>
                            {recipe.summary ? recipe.summary.replace(/<[^>]*>?/gm, '') : 'No description available for this recipe.'}
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f97316' }}>Key Features</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                            {['Easy to follow', 'Fresh ingredients', 'Great for parties', 'Kid friendly'].map((feature, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f8fafc' }}>
                                    <CheckCircle size={18} color="#22c55e" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Start Cooking Now
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default RecipeDetails;
