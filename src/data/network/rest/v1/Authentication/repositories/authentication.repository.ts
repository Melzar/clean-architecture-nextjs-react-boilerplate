import { IAuthenticationRepository } from 'domain/Application/Authentication/repositories/authenticationRepository.interface';
import { AuthenticateRepositoryRequest } from 'domain/Application/Authentication/repositories/requests/AuthenticateRepositoryRequest';
import {
  ApiResponse,
  FetchFunction,
} from 'data/network/rest/common/types/network.types';
import { AUTHENTICATION_ENDPOINTS } from 'data/network/rest/v1/Authentication/consts/AuthenticationEndpoints';
import { ApiPath } from 'data/network/rest/v1/common/utils/ApiPath';
import { AuthenticationRest } from 'data/network/rest/v1/Authentication/models/AuthenticationRest';
import { authRestToAuthenticationDomain } from 'data/network/rest/shared/Auth/mappers/authRestToAuthenticationDomain';
import { INetwork } from 'data/network/common/config/network.interface';

export const AuthenticationRepository = ({
  client,
}: INetwork<FetchFunction>): IAuthenticationRepository => ({
  authenticate: async ({
    username,
    password,
  }: AuthenticateRepositoryRequest) => {
    const restClient = await client();

    const { data, status } = await restClient.post<
      ApiResponse<AuthenticationRest>
    >(ApiPath(AUTHENTICATION_ENDPOINTS.AUTHENTICATE().path), {
      username,
      password,
    });

    if (status !== 200) {
      throw Error('TODO ERROR HANDLING');
    }

    return authRestToAuthenticationDomain(data);
  },
});
