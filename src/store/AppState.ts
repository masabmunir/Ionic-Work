import {LoadingState} from "./Loading/loading";
import {loginState} from "./login/loginState";

export interface AppState{
  loading:LoadingState;
  login:loginState;
}
