import { RoleRest } from 'data/network/rest/v1/Authentication/models/RoleRest';

export type AuthenticationRest = {
  readonly id: string;
  readonly email: string;
  readonly token: string;
  readonly firstName: string;
  readonly surname: string;
  readonly role: RoleRest;
};
