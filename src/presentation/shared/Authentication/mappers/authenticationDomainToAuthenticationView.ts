import { Authentication as AuthenticationUI } from 'presentation/shared/Authentication/models/Authentication';
import { Authentication } from 'domain/Application/Authentication/models/Authentication';

export const authenticationDomainToAuthenticationView = ({
  id,
  email,
  firstName,
  fullName,
}: Authentication): AuthenticationUI => {
  return new AuthenticationUI({
    id,
    email,
    firstName,
    fullName,
  });
};
