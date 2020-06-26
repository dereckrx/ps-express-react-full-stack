import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import { createLogger } from "redux-logger";
import { defaultState } from "./defaultState";

import { reducer } from "./reducer";
// import * as sagas from "./sagas";

// const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(
//   reducer,
//   applyMiddleware(createLogger(), sagaMiddleware)
// );

export const store = createStore(reducer, defaultState);

// for (let saga in sagas) {
//   sagaMiddleware.run(sagas[saga]);
// }
