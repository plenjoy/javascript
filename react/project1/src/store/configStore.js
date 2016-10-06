/**
 * Created by plenjoy-home on 2016/10/3.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../redux-reducers';
import apiMiddleware from '../redux-middlewares/api';

/**
 * 用于创建一个store
 * @param {Object} initialState 初始值.
 */

export default function configureStore(initialState = {}) {
    const finalCreateStore = compose(
        applyMiddleware(thunk),
        /*applyMiddleware(apiMiddleware),*/
        applyMiddleware(createLogger())
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState);

    if (__DEVELOPMENT__ && module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../redux-reducers', () => {
            const nextRootReducer = require('../redux-reducers').default;
        store.replaceReducer(nextRootReducer);
    })
    }

    return store;
}
