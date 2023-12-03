import { Client } from 'domain/Clients/models/Client';
import { GetClientRepositoryRequest } from 'domain/Clients/repositories/requests/GetClientRepositoryRequest';

export interface IClientsRepository {
  getClient: (request: GetClientRepositoryRequest) => Promise<Client>;
  getClients: () => Promise<Client[]>;
}
