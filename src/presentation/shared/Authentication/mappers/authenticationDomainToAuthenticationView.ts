import { Authentication as AuthenticationView } from 'presentation/shared/Authentication/models/Authentication';
import { Authentication } from 'domain/Application/Authentication/models/Authentication';

export const authenticationDomainToAuthenticationView = ({
  id,
  email,
  firstName,
  fullName,
}: Authentication): AuthenticationView => {
  return {
    id,
    email,
    firstName,
    fullName,
  };
};
