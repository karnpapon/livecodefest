/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Layout - RootContainer
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */


// import React from 'react'
// import { compose } from 'redux'
// import { Provider } from 'react-redux'

// import { withGlobalStyle } from '<hocs>'
// import { configureStore } from '<store>'
// import { getSession, getNavbarSession } from '<helpers>/localStorage'
// import { setLoginSession } from '<features>/Login'
// import { getListContact, getUserList } from '<features>/Chat'
// import { setNavbarInitialState } from '<features>/Navbar'
// import { initFirebaseMessage, getFirebaseChat } from '<helpers>/firebase'

// import AllRoutes from '<routes>'

// const store = configureStore()

// const RootContainer = () => (
//   <div>
//     <Provider store={store}>
//       <AllRoutes />
//     </Provider>
//   </div>
// )

// const { dispatch } = store
// const currentSession = getSession()
// const navbarSession = getNavbarSession()

// initFirebaseMessage(store)

// const firebaseChat = getFirebaseChat()

// if (currentSession) {
//   dispatch(setLoginSession(currentSession))
//   dispatch(setNavbarInitialState(navbarSession))
//   dispatch(getListContact())
//   dispatch(getUserList())
// }

// export default compose(
//   withGlobalStyle
// )(RootContainer)
