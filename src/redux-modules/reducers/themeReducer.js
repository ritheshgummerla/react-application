
// const initialState = {
//     currentSelectedTheme: "MEMBER_360_BG"
// } 

// // const memberTheme = (state, action) => {
// //     console.log("membertrue")
// //     return {
// //         ...state,
// //         membertheme: true
// //     }
// // }

// const providerTheme = (state, action) => {
//     console.log("providertrue");
//     // switch (action.type == "MODULE_THEME_CHANGE") {
//     //     case "MEMBER_360_BG":
//     //         break;
//     //     case "PROVIDER_360_BG":
//     //         break;
//     //     case "CLAIMS_360_BG":
//     //         break;
//     //             state = {
//     //                 ...state,
//     //                 currentSelectedTheme: action.payload
//     //             }
//     //         break;

//     //     default:
//     //         return state;
//     //         break;
//     // }

//     if(action.type === "MODULE_THEME_CHANGE"){
//         console.log("in reducer",action);
//         state = {
//             ...state,
//             currentSelectedTheme: action.payload
//         }
//     }
//     return state;
    
    
// }

// const handlers = {
//     // ["MEMBER_360_BG"]: memberTheme,
//     ["MODULE_THEME_CHANGE"]: providerTheme,
// };

// export default (state = initialState , action) => {
//     const handler = handlers[action.type];
//     if (typeof handler === "undefined") return state;
//     return handler(state, action);
// };
