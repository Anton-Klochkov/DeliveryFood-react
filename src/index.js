import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ThemeHandler from './UI/ThemeHandler/ThemeHandler';

import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeHandler>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeHandler>,
);
