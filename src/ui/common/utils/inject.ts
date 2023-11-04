import { ApplicationContainer } from 'ioc/application.container';

export const inject = <T>(symbol: symbol) => {
  return ApplicationContainer.get<T>(symbol);
};
