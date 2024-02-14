import {Provider} from "react-redux";
import {store} from "./redux/store";

import Categories from "./components/Categories";
import Items from "./components/Items";

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <Categories className="section"/>
          <Items className="section"/>
        </div>
      </div>
    </Provider> 

  );
}

export default App;
