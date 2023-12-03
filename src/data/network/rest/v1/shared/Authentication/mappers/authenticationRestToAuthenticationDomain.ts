import { Authentication } from 'domain/Application/Authentication/models/Authentication';
import { AuthenticationRest } from 'data/network/rest/v1/Authentication/models/AuthenticationRest';

export const authenticationRestToAuthenticationDomain = ({
  id,
  surname,
  firstName,
  token,
  email,
  role,
}: AuthenticationRest): Authentication => ({
  id,
  fullName: `${firstName} ${surname}`,
  firstName,
  token,
  email,
  role,
});
