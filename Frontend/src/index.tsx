import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Components/LayoutArea/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
