import axios, { CreateAxiosDefaults } from 'axios';

import { getSession } from 'next-auth/react';

import { INetwork } from 'data/network/common/config/network.interface';
import {
  FetchFunction,
  FetchFunctionInput,
} from 'data/network/rest/common/types/network.types';
import { APP_NAME } from 'data/network/common/consts/network.consts';

export const RestClient = (): INetwork<FetchFunction> => ({
  client: async ({
    method,
    headers,
    options,
    data,
  }: FetchFunctionInput = {}) => {
    const session = await getSession();

    return axios.create({
      method,
      data,
      ...options,
      headers: {
        ...headers,
        app_name: APP_NAME,
        ...(session && { Authorization: `Bearer ${session.jwt}` }),
      },
    } as CreateAxiosDefaults);
  },
  init: (): void => {
    throw Error('NOT IMPLEMENTED');
  },
});
