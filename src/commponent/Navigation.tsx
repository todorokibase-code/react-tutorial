// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to="/react-tutorial/sample">Sample ページへ</Link>
        </nav>
    );
}

export default Navigation;