import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
//Components
import App from './components/App';
import ProductList from './components/shoppingcart';
const AppWithRouter = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(<AppWithRouter/>, document.getElementById('root'));
ReactDOM.render(<ProductList/>, document.getElementById('productList'));
