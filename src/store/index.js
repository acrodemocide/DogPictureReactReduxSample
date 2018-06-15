import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reducers";
import { watcherSaga } from "../sagas";

// Magic creates saga middleware for us
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(sagaMiddleware)
);

// This tells redux saga to start processing
sagaMiddleware.run(watcherSaga);

// This causes our module to export only this one thing.
// This means that whoever imports it can do "import store from index.js"
//  instead of "import { store } from index.js"
export default store;