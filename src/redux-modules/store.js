import { createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers"
import sagas from "./sagas";

  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);
  const myStore = createStore(rootReducer, composeEnhancers(middlewares));
  //  const myStore = createStore(rootReducer, middlewares);

  myStore.subscribe(()=>{
    // console.log("store updated",myStore.getState());
  });

  sagas.forEach(sagaMiddleware.run);

  export default myStore;