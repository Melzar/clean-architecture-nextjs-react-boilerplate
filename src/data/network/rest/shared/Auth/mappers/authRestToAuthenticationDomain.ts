import { Authentication } from 'domain/Application/Authentication/models/Authentication';
import { AuthenticationRest } from 'data/network/rest/v1/Authentication/models/AuthenticationRest';

export const authRestToAuthenticationDomain = ({
  id,
  surname,
  firstName,
  token,
  email,
  role,
}: AuthenticationRest): Authentication => {
  return {
    id,
    fullName: `${firstName} ${surname}`,
    firstName,
    token,
    email,
    role,
  };
};
