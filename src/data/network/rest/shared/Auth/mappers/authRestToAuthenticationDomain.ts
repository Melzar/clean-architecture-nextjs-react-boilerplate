import { Authentication } from 'domain/Application/Authentication/models/Authentication';
import { AuthRest } from 'data/network/rest/v1/Auth/models/Auth';

export const authRestToAuthenticationDomain = ({
  id,
  surname,
  firstName,
  token,
  email,
}: AuthRest): Authentication => {
  return {
    id,
    fullName: `${firstName} ${surname}`,
    firstName,
    token,
    email,
  };
};
