const INITAL_STATE = {
    test : "false"
  };
  
export default function reducer(state = INITAL_STATE, action){
    if(action.type == "test"){
        return Object.assign({}, state, { test : action.value })
    }else return state
}
