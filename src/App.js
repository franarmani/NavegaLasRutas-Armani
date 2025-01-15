import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cart.length} />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/category/:categoryId" component={ItemListContainer} />
          <Route 
            path="/item/:itemId" 
            render={(props) => <ItemDetailContainer {...props} addToCart={addToCart} />} 
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
