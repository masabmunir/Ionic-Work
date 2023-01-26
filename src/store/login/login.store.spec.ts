import {loginState} from "./loginState";
import {loginReducer} from "./login.reducer";
import {recoverPassword, recoverPasswordSuccess} from "./login.action";

describe("login store",()=>{
  it('recoverPasswordSuccess',()=>{
  const initialState:loginState={
    error:null,
    isloggedIn:false,
    isloggingIn:false,
    isRecoveredpassword:false,
    isRecoveringpassword:true,

  }
  const newState = loginReducer(initialState,recoverPasswordSuccess());
  expect(newState).toEqual({
    ...initialState,
    error:null,
    isRecoveredpassword: true,
    isRecoveringpassword: true,
  })
  })
})



// let marcos = [
//   {LOL:"Laugh Out Loud"},
//   {IMO: "In My Opinion"},
//   {IDK: "I Don’t Know"},
//   {LMAO: "Laugh My Ass Off"},
//   {IDC: "I Don't Care"}
// ]
