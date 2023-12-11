import { Authentication } from 'domain/Application/Authentication/models/Authentication';
import { AuthenticationRest } from 'data/network/rest/v1/Authentication/models/AuthenticationRest';

export const authenticationRestToAuthenticationDomain = ({
  id,
  lastName,
  firstName,
  token,
  email,
  role,
}: AuthenticationRest): Authentication => ({
  id,
  fullName: `${firstName} ${lastName}`,
  firstName,
  token,
  email,
  role,
});
