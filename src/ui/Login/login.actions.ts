'use server';

import { inject } from 'ui/common/utils/inject';
import { IAuthenticationPresenter } from 'presentation/Application/Authentication/authenticationPresenter.interface';
import { PresentationModuleSymbols } from 'presentation/PresentationModuleSymbols';

const { authenticate } = inject<IAuthenticationPresenter>(
  PresentationModuleSymbols.AUTHENTICATION_PRESENTER
);

export { authenticate };
