import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReducerContainer from './reducers';
import SagaContainer from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login']
};

const persistedReducer = persistReducer(persistConfig, ReducerContainer);

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(...middlewares, sagaMiddleware));

sagaMiddleware.run(SagaContainer);

export default store;
