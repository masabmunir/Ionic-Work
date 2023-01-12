import {loginState} from "./loginState";
import {createReducer, on} from "@ngrx/store";
import {recoverPassword, recoverPasswordFail, recoverPasswordSuccess} from "./login.action";

const initialState:loginState={
  error:null,
  isRecoveredpassword:false,
  isRecoveringpassword:false,
  isloggedIn:false,
  isloggingIn:false,
}

const reducer = createReducer(initialState,
  on(recoverPassword,currentState=>{
    return{
      ...currentState,
      error:null,
      isRecoveredpassword: false,
      isRecoveringpassword: true,
    }
  }),
  on(recoverPasswordSuccess,currentSate=>{
    return currentSate;
  }),
  on(recoverPasswordFail,currentState=>{
    return {
      ...currentState,
      error: null,
      isRecoveredpassword: true,
      isRecoveringpassword: false,
    }
  }))

export function loginReducer(state:loginState,action:any){
  return reducer(state,action);
}
