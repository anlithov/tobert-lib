import * as graphTypesApi from "./graphs/types/apps/api/graphql.ts";
import {JWT_HEADER_KEYS} from "./common/constants/jwt-header-keys.ts";

const common = {
  constants: {
    JWT_HEADER_KEYS
  }
}
const api = {
  types: {
    graph: graphTypesApi
  }
}

export default {api, common};