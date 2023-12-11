'use server';

import { inject } from 'ui/common/utils/inject';
import { PresentationModuleSymbols } from 'presentation/PresentationModuleSymbols';
import { IClientsPresenter } from 'presentation/Clients/clientsPresenter.interface';

const { fetchClients } = inject<IClientsPresenter>(
  PresentationModuleSymbols.CLIENTS_PRESENTER
);

export { fetchClients };
