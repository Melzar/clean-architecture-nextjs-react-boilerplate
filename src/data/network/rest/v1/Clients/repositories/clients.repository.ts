import { AxiosResponse } from 'axios';

import { INetwork } from 'data/network/common/config/network.interface';
import { FetchFunction } from 'data/network/rest/common/types/network.types';
import { IClientsRepository } from 'domain/Clients/repositories/IClientsRepository';
import { GetClientRepositoryRequest } from 'domain/Clients/repositories/requests/GetClientRepositoryRequest';
import { ClientRest } from 'data/network/rest/v1/Clients/models/ClientRest';
import { ApiPath } from 'data/network/rest/v1/common/utils/ApiPath';
import { CLIENTS_ENDPOINTS } from 'data/network/rest/v1/Clients/consts/ClientsEndpoints';
import {
  clientRestToClientDomain,
  clientsRestToClientsDomain,
} from 'data/network/rest/v1/shared/Clients/mappers/clientRestToClientDomain';

export const ClientsRepository = ({
  client,
}: INetwork<FetchFunction>): IClientsRepository => ({
  getClient: async ({ clientId }: GetClientRepositoryRequest) => {
    const restClient = await client();

    const { data, status } = await restClient.get<
      ClientRest,
      AxiosResponse<ClientRest>
    >(ApiPath(CLIENTS_ENDPOINTS.CLIENT({ clientId }).path));

    if (status !== 200) {
      throw Error('TODO ERROR HANDLING');
    }

    return clientRestToClientDomain(data);
  },
  getClients: async () => {
    const restClient = await client();

    const { data, status } = await restClient.get<
      ClientRest[],
      AxiosResponse<ClientRest[]>
    >(ApiPath(CLIENTS_ENDPOINTS.CLIENTS().path));

    if (status !== 200) {
      throw Error('TODO ERROR HANDLING');
    }

    return clientsRestToClientsDomain(data);
  },
});
