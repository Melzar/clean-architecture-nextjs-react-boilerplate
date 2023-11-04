import { ContainerModule, interfaces } from 'inversify';

import { FetchFunction } from 'data/network/rest/common/types/network.types';
import { INetwork } from 'data/network/common/config/network.interface';
import { DataModuleSymbols } from 'data/DataModuleSymbols';
import { RestClient } from 'data/network/rest/common/config/rest.client';

const initializeModule = (bind: interfaces.Bind) => {
  bind<INetwork<FetchFunction>>(DataModuleSymbols.REST_CLIENT).toDynamicValue(
    () => {
      return RestClient();
    }
  );
};

export const NetworkModule = new ContainerModule(initializeModule);
