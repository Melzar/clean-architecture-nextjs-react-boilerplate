import { AuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { inject } from 'ui/common/utils/inject';
import { IAuthenticationPresenter } from 'presentation/Application/Authentication/authenticationPresenter.interface';
import { PresentationModuleSymbols } from 'presentation/PresentationModuleSymbols';

const { authenticate } = inject<IAuthenticationPresenter>(
  PresentationModuleSymbols.AUTHENTICATION_PRESENTER
);

export const AuthenticationOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const authentication = await authenticate({ email, password });

        if (authentication) {
          return authentication as object;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          role: (user as User).role,
          id: user.id,
          firstName: user.firstName,
          fullName: user.fullName,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        ...(token
          ? {
              meta: {
                firstName: token.firstName,
                fullName: token.fullName,
                email: token.email,
                role: token.role,
                id: token.id,
              },
              jwt: token,
            }
          : {}),
      };
    },
    // redirect: async (params: { url: string }) => {
    //   const { url } = params;
    //
    //   if (!url.startsWith('http')) return url;
    //
    //   const callbackUrl = new URL(url).searchParams.get('callbackUrl');
    //   if (!callbackUrl) return url;
    //
    //   return new URL(callbackUrl as string).pathname;
    // },
  },
  pages: {
    signIn: '/login',
  },
};
