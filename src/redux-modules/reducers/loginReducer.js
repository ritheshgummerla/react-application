const isloggedIn = (
  state = {
    isloggedInStatus: true,
    showSideBar:true,
    drawerOpen:false
  },
  action
) => {
  switch (action.type) {
    case "IS_LOGGED_IN":
      state={
          ...state,
          isloggedInStatus:action.payload
      }
      break;
      case "MODULE_STATUS":
        state={
          ...state,
          showSideBar:false
        }
      break;
      case "MODULE_STATUS_CHANGE":
        state={
          ...state,
          drawerOpen:false,
          showSideBar:true
        }
        break;
        case "DRAWER_OPEN":
          state={
            ...state,
            drawerOpen:true
          }
          break;
          case "DRAWER_CLOSE":
            state={
              ...state,
              drawerOpen:false
            }
    default:
      break;
    }
    
 return state;
};

export default isloggedIn;