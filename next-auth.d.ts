import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    meta: {
      email: string;
      role: string;
      id: string;
      fullName: string;
    };
    user: {
      id: string;
      role: string;
    } & DefaultSession;
    jwt: {};
  }

  interface User extends DefaultUser {
    role: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string;
    role: string;
    name: string;
  }
}
