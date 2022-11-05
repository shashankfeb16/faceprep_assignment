import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./action.types"


export const loginApi = (data)=>(dispatch)=>{
    // dispatch({type:LOGIN_LOADING});
    if(data.email=="foo" && data.password=="bar"){
        dispatch({type:LOGIN_SUCCESS});
    }
    // dispatch({type:LOGIN_ERROR});
}