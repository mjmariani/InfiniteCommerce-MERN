
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      {/* Sidedrawer */}
      {/* backdrop */}
      <main>
        <Switch>
          <Route exact path ="/" component={HomeScreen} />
          <Route exact path = "/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen}/>

        </Switch>

      </main>
    </Router>
  );
}

export default App;
