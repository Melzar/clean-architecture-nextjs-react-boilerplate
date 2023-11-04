import { AuthenticationRepositoryInterface } from 'domain/Application/Authentication/repositories/authenticationRepository.interface';
import { AuthenticateRepositoryRequest } from 'domain/Application/Authentication/repositories/requests/AuthenticateRepositoryRequest';
import {
  ApiResponse,
  FetchFunction,
} from 'data/network/rest/common/types/network.types';
import { AUTH_ENDPOINTS } from 'data/network/rest/v1/Auth/consts/AuthEndpoints';
import { ApiPath } from 'data/network/rest/v1/common/utils/ApiPath';
import { AuthRest } from 'data/network/rest/v1/Auth/models/Auth';
import { authRestToAuthenticationDomain } from 'data/network/rest/shared/Auth/mappers/authRestToAuthenticationDomain';
import { INetwork } from 'data/network/common/config/network.interface';

export const AuthRepository = ({
  client,
}: INetwork<FetchFunction>): AuthenticationRepositoryInterface => ({
  authenticate: async ({
    username,
    password,
  }: AuthenticateRepositoryRequest) => {
    const restClient = await client();

    const { data, status } = await restClient.post<ApiResponse<AuthRest>>(
      ApiPath(AUTH_ENDPOINTS.AUTHENTICATE().path),
      {
        username,
        password,
      }
    );

    if (status !== 200) {
      throw Error('TODO ERROR HANDLING');
    }

    return authRestToAuthenticationDomain(data);
  },
});
