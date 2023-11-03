export type AuthenticateUserRequestInput = {
  readonly username: string;
  readonly password: string;
};

export class AuthenticateUserRequest {
  constructor(public readonly input: AuthenticateUserRequestInput) {}
}
