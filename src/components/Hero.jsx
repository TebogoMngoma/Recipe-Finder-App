import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <section style={{
            padding: '80px 0',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    fontSize: '3.5rem',
                    fontWeight: '800',
                    marginBottom: '16px',
                }}
                className="text-gradient"
            >
                Cook Like a Pro
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    fontSize: '1.25rem',
                    color: '#94a3b8',
                    maxWidth: '600px',
                    marginBottom: '40px'
                }}
            >
                Discover thousand of recipes from around the world. Filter by diet, cuisine, or ingredients.
            </motion.p>

            <motion.form
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onSubmit={handleSubmit}
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    position: 'relative',
                    display: 'flex',
                    gap: '12px'
                }}
            >
                <div style={{ position: 'relative', flex: 1 }}>
                    <Search
                        style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}
                        size={20}
                    />
                    <input
                        type="text"
                        placeholder="Search for recipes (e.g. Pasta, Salmon...)"
                        style={{ paddingLeft: '48px' }}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn-primary">
                    Search
                </button>
            </motion.form>
        </section>
    );
};

export default Hero;
