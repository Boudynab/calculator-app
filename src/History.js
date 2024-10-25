import React from 'react';
import { useHistory } from './HistoryContext';
import './History.css'; // Import the CSS file

const History = () => {
    const { history } = useHistory(); // Get history from context

    return (
        <div className="history-container">
            <h2 className="history-title">Calculation History</h2>
            <ul className="history-list">
                {history.length > 0 ? (
                    history.map((calc, index) => <li key={index}>{calc}</li>)
                ) : (
                    <li className="empty-history">No history available</li>
                )}
            </ul>
        </div>
    );
};

export default History;
