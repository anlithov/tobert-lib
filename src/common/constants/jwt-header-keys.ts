export const JWT_HEADER_KEYS = {
  user: "jwt_user",
  admin: "jwt_admin",
};
export type JwtHeaderKeys =
  typeof JWT_HEADER_KEYS[keyof typeof JWT_HEADER_KEYS];
