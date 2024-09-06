import { compose,createStore, applyMiddleware } from 'redux'; 
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
// import {thunk} from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger,
                        sagaMiddleware
                    
].filter(Boolean); 

const composeEnchancer = (process.env.NODE_ENV !== 'production' 
                            && window 
                            && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) 
                            || compose; 

const composedEnhancers = composeEnchancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer,undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);




