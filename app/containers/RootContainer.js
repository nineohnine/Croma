/* @flow */

import React from 'react-native';
import { Provider } from 'react-redux';
import PalettesContainer from './PalettesContainer';

type Store = {
    dispatch: Function,
    getState: Function,
    liftedStore: Object,
    replaceReducer: Function,
    subscribe: Function
}

type Props = {
    store: Store
}

const RootContainer = (props: Props) => (
    <Provider store={props.store}>
        <PalettesContainer />
    </Provider>
);

export default RootContainer;