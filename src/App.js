
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import 'antd/dist/antd.css'

import Home from "./page/Home"
import ProductContainer from './component/ProductContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/product/" component ={ProductContainer}/>
      </BrowserRouter>
    </div>
  );
}


export default App;
