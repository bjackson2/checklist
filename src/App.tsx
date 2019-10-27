import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './components/Routes';
import ChecklistsProvider from './components/ChecklistsProvider';

const App: React.FC = () => (
  <BrowserRouter>
    <ChecklistsProvider>
      <CssBaseline />
      <Link to="/checklists">Checklists</Link>
      <Routes />
    </ChecklistsProvider>
  </BrowserRouter>
);

export default App;
