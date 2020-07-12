import React from 'react';
import './App.css';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from "redux-thunk";
import rootReducer from './redux/rootReducer'
import {Provider} from 'react-redux'
import MyRouter from "./Router";

function App() {
  const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

  return (
    <Provider store={store}>
      <div className="App">
        <MyRouter />
      </div>
    </Provider>
  );
}

export default App;
