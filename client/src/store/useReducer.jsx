export var initialState = false;
export const reducer =(action,state=initialState)=>{
    switch(action.type){
        case "User":
            return action.payload
        default:
            return state
    }
    
}