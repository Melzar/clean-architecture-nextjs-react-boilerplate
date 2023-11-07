import NextAuth from 'next-auth';

import { AuthenticationOptions } from 'ui/common/config/Authentication/authenticationOptions';

const handler = NextAuth(AuthenticationOptions);

export { handler as GET, handler as POST };
