import { Client } from 'presentation/shared/Clients/models/Client';
import { useClientData } from 'ui/Clients/Admin/Client/client.data';
import { Props } from 'ui/Clients/Admin/Client/components/ClientPageHeading/ClientPageHeading';

type UseClientPageHeading = {
  client: Client;
};
export const useClientPageHeading = async ({
  clientId,
}: Props): Promise<UseClientPageHeading> => {
  const { getClient } = useClientData();

  const client = await getClient(clientId);

  return { client };
};
