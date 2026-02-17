import React from 'react';
import { ChefHat, Search, Heart } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="glass-card" style={{
            margin: '20px auto',
            width: '95%',
            padding: '16px 32px',
            position: 'sticky',
            top: '20px',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '20px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ChefHat size={32} color="#f97316" />
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                    Gourmet<span style={{ color: '#f97316' }}>Finder</span>
                </span>
            </div>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Discover</a>
                <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>Favorites</a>
                <button className="btn-primary">
                    Sign In
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
