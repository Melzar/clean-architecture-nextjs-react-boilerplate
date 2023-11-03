import { Authentication } from 'domain/Application/Authentication/models/Authentication';
import { AuthenticateRequest } from 'presentation/Application/Authentication/requests/AuthenticateRequest';

export interface AuthenticationPresenterInterface {
  authenticate: (request: AuthenticateRequest) => Promise<Authentication>;
}
