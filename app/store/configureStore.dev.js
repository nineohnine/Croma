/* @flow */
/* global module, require */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import rootReducer from '../reducers';

const finalCreateStore = compose(
    applyMiddleware(thunk),
    devTools()
)(createStore);

export default function configureStore(initialState: ?any): Object {
    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers').default)
        );
    }

    return store;
}
