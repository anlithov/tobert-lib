import {JwtHeaderKeys} from "../../../mod.ts";


export interface ApiContext {
  jwt_user?: {
    id: number;
    nick: JwtHeaderKeys;
  };
}
