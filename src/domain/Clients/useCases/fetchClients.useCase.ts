import { IClientsRepository } from 'domain/Clients/repositories/IClientsRepository';
import { IUseCase } from 'domain/common/useCases/useCase.interface';
import { Client } from 'domain/Clients/models/Client';

export const FetchClientsUseCase = (
  clientsRepository: IClientsRepository
): IUseCase<void, Promise<Client[]>> => ({
  execute: async () => clientsRepository.getClients(),
});
