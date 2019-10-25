import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const ChecklistsContext = React.createContext([]);

ReactDOM.render(<App />, document.getElementById('root'));
