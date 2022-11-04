import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./action.types"


export const loginApi = (data)=>(dispatch)=>{
    dispatch({type:LOGIN_LOADING});
    dispatch({type:LOGIN_SUCCESS,payload:data});
    dispatch({type:LOGIN_ERROR});
}