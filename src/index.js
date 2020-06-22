import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {HashRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducers/reducer';

import { watchRequestToBase } from './sagas/requestToBase_Saga';
import { watchSaveToLocalStorageData,  watchGetDataFromLocalStorage, watchSaveToLocalStorageGallary, watchGetGalleryFromLocalStorage } from './sagas/localStorage_saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


sagaMiddleware.run(watchRequestToBase);
sagaMiddleware.run(watchSaveToLocalStorageData);
sagaMiddleware.run(watchGetDataFromLocalStorage);
sagaMiddleware.run(watchSaveToLocalStorageGallary);
sagaMiddleware.run(watchGetGalleryFromLocalStorage);

ReactDOM.render(
    <React.StrictMode>
    <Router>
      <Provider store = {store}>
        <App/>
      </Provider>     
    </Router>
</React.StrictMode>, document.getElementById('root'));
