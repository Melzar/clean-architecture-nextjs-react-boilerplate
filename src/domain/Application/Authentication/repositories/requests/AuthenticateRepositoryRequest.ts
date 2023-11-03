export class AuthenticateRepositoryRequest {
  public readonly username: string;
  public readonly password: string;

  constructor(public readonly input: Partial<AuthenticateRepositoryRequest>) {
    Object.assign(this, input);
  }
}
