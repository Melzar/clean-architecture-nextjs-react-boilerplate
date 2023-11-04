import { Authentication } from 'domain/Application/Authentication/models/Authentication';
import { AuthenticatePresenterRequest } from 'presentation/Application/Authentication/requests/AuthenticatePresenterRequest';

export interface IAuthenticationPresenter {
  authenticate: (
    request: AuthenticatePresenterRequest
  ) => Promise<Authentication>;
}
