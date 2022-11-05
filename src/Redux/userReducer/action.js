import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./action.types"


export const loginApi = (data)=>(dispatch)=>{
    // dispatch({type:LOGIN_LOADING});
    if(data.email=="foo" && data.password=="bar"){
       return dispatch({type:LOGIN_SUCCESS});
    }
    alert("Invalid Credentials")
    // dispatch({type:LOGIN_ERROR});
}

export const logoutApi = ()=>(dispatch)=>{
    dispatch({type:LOGOUT})
}