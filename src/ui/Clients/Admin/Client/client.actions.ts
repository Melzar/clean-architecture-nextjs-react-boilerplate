'use server';

import { inject } from 'ui/common/utils/inject';
import { IClientsPresenter } from 'presentation/Clients/clientsPresenter.interface';
import { PresentationModuleSymbols } from 'presentation/PresentationModuleSymbols';

const { fetchClientPackages, fetchClient } = inject<IClientsPresenter>(
  PresentationModuleSymbols.CLIENTS_PRESENTER
);

export { fetchClientPackages, fetchClient };
