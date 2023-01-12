import {createReducer, on} from "@ngrx/store";
import {hide, show} from "./loading-action";
import {LoadingState} from "./loading";


const initialState : LoadingState = {
  show:false
}

const reducer =  createReducer({},
  on(show,()=>{
    return {};
  }),
  on(hide,()=>{
    return {};
  })
);

export function loadingReducer(state:any,LoadingSate:any,action:any){
  return reducer(state,action);
}

