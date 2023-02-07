// import { createStore } from 'redux';
import { configureStore as cStore } from '@reduxjs/toolkit'
import { rootReducer } from './AppState';

// const configureStore = () => {
//   return createStore(rootReducer, {});
// };
// export default configureStore;

const configureStore = cStore({
  reducer: rootReducer
});

export default configureStore;