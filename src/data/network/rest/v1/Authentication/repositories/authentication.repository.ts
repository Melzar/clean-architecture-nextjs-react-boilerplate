import { AxiosResponse } from 'axios';

import { IAuthenticationRepository } from 'domain/Application/Authentication/repositories/authenticationRepository.interface';
import { AuthenticateRepositoryRequest } from 'domain/Application/Authentication/repositories/requests/AuthenticateRepositoryRequest';
import { FetchFunction } from 'data/network/rest/common/types/network.types';
import { AUTHENTICATION_ENDPOINTS } from 'data/network/rest/v1/Authentication/consts/AuthenticationEndpoints';
import { ApiPath } from 'data/network/rest/v1/common/utils/ApiPath';
import { AuthenticationRest } from 'data/network/rest/v1/Authentication/models/AuthenticationRest';
import { authenticationRestToAuthenticationDomain } from 'data/network/rest/v1/shared/Authentication/mappers/authenticationRestToAuthenticationDomain';
import { INetwork } from 'data/network/common/config/network.interface';
import { AuthenticatePayload } from 'data/network/rest/v1/Authentication/consts/AuthenticationPayloads';

export const AuthenticationRepository = ({
  client,
}: INetwork<FetchFunction>): IAuthenticationRepository => ({
  authenticate: async ({
    username,
    password,
  }: AuthenticateRepositoryRequest) => {
    const restClient = await client();

    const { data, status } = await restClient.post<
      AuthenticationRest,
      AxiosResponse<AuthenticationRest>,
      AuthenticatePayload
    >(ApiPath(AUTHENTICATION_ENDPOINTS.AUTHENTICATE().path), {
      username,
      password,
    });

    if (status !== 200) {
      throw Error('TODO ERROR HANDLING');
    }

    return authenticationRestToAuthenticationDomain(data);
  },
});
