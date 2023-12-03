'use server';

import { inject } from 'ui/common/utils/inject';
import { PresentationModuleSymbols } from 'presentation/PresentationModuleSymbols';
import { IClientsPresenter } from 'presentation/Clients/clientsPresenter.interface';

const { fetchClientPackages, fetchClients, fetchClient } =
  inject<IClientsPresenter>(PresentationModuleSymbols.CLIENTS_PRESENTER);

export { fetchClientPackages, fetchClients, fetchClient };
