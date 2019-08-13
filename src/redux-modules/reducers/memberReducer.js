import constants from "../constants"

const initialState = {
    name:"hc360",
    memberData:[]
}

const fetchMember = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        memberData:payload
    }
}

const handlers = {
    [constants.FETCH_MEMBER_SUCCESS]: fetchMember,
};
  
export default (state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};