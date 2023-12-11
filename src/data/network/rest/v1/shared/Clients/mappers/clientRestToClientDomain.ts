import { ClientRest } from 'data/network/rest/v1/Clients/models/ClientRest';
import { Client } from 'domain/Clients/models/Client';

export const clientRestToClientDomain = ({
  id,
  lastName,
  firstName,
  email,
}: ClientRest): Client => ({
  id,
  lastName,
  firstName,
  email,
});

export const clientsRestToClientsDomain = (clients: ClientRest[]): Client[] => {
  return clients.map((clientRest) => clientRestToClientDomain(clientRest));
};
