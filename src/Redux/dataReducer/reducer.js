import { DATA_ERROR, DATA_LOADING, DATA_SUCCESS } from "./action.types"

const initialState = {
    loading: false,
    error: false,
    results: []
}


export const Reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case DATA_LOADING:{
            return {...state,loading:true,error:false}
        }
        case DATA_SUCCESS:{
            return {...state,loading:true,error:false,results:payload}
        }
        case DATA_ERROR:{
            return {...state,loading:false,error:true}
        }
        default:{
            return state
        }
    }
}