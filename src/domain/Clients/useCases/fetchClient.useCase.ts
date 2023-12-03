import { IUseCase } from 'domain/common/useCases/useCase.interface';
import { IClientsRepository } from 'domain/Clients/repositories/IClientsRepository';
import { FetchClientRequest } from 'domain/Clients/useCases/requests/FetchClientRequest';
import { Client } from 'domain/Clients/models/Client';

export const FetchClientUseCase = (
  clientsRepository: IClientsRepository
): IUseCase<FetchClientRequest, Promise<Client>> => ({
  execute: async ({ clientId }: FetchClientRequest) =>
    clientsRepository.getClient({ clientId }),
});
