/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Message
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */


// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'

// import rootReducer from '../reducers'

// const handleReduxDevtoolExtension = () => (
//   (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//   || compose()
// )

// const configureStore = (initialState) => {
//   const middlewares = [
//     thunk,
//   ]

//   const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//       applyMiddleware(...middlewares),
//       handleReduxDevtoolExtension(),
//     ),
//   )

//   if (module.hot) {
//     module.hot.accept('../reducers', () =>
//       store.replaceReducer(rootReducer)
//     )
//   }

//   return store
// }

// export default configureStore
