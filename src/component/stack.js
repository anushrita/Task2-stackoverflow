import React from 'react';
import '../css/stack.css';
import Feed from './Feed';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
function stack() {
    return (
        <div className="stack">
            <Navbar />
            <div className = "stack__content">
                <Sidebar />
                <Feed />
            </div>
        </div>
    )
}

export default stack;
