import { Container } from 'inversify';

import { NetworkModule } from 'ioc/shared/network.module';
import { AuthenticationModule } from 'ioc/Application/authentication.module';

const ApplicationContainer = new Container({
  skipBaseClassChecks: true,
  defaultScope: 'Singleton',
});

const initializeContainer = () => {
  // Global modules ( Core )

  // App wide modules
  ApplicationContainer.load(NetworkModule);

  // Shared domain modules

  // Domain specific modules
  ApplicationContainer.load(AuthenticationModule);
};

initializeContainer();

export { ApplicationContainer, initializeContainer };
