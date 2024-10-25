import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HistoryProvider } from './HistoryContext'; // Import the provider
import Calc from './calc';
import History from './History'; // Import your history component

function App() {
    return (
        <HistoryProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Calc />} />
                    <Route path="/history" element={<History />} />
                </Routes>
            </Router>
        </HistoryProvider>
    );
}

export default App;
