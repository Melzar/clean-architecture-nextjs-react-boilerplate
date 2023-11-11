import { AuthenticateRepositoryRequest } from 'domain/Application/Authentication/repositories/requests/AuthenticateRepositoryRequest';
import { Authentication } from 'domain/Application/Authentication/models/Authentication';

export interface IAuthenticationRepository {
  authenticate(request: AuthenticateRepositoryRequest): Promise<Authentication>;
}
