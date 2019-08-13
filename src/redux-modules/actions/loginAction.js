import constants from "../constants";

const login = (credentials) =>({
    type:constants.LOGIN_USER_REQUEST,
    payload:credentials
})

const userLoginStatus = isLoggedIn =>({
    type:"IS_LOGGED_IN",
    payload:isLoggedIn
  });

  const moduleStatus = () =>({
    type:"MODULE_STATUS"
  })

  const moduleStatusChange = () =>({
    type:"MODULE_STATUS_CHANGE"
  })
  const onDrawerOpen = () =>({
    type:"DRAWER_OPEN"
  })
  const onDrawerClose = () =>({
    type:"DRAWER_CLOSE"
  })

export {login, userLoginStatus, moduleStatus,moduleStatusChange,onDrawerOpen,onDrawerClose};