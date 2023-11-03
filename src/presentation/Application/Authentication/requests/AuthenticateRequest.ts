export class AuthenticateRequest {
  public readonly email: string;
  public readonly password: string;
  constructor(public readonly input: Partial<AuthenticateRequest>) {
    Object.assign(this, input);
  }
}
