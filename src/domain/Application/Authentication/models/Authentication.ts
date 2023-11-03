export class Authentication {
  public readonly token: string;
  public readonly email: string;
  public readonly firstName: string;
  public readonly fullName: string;
  public readonly id: string;

  constructor(input: Partial<Authentication>) {
    Object.assign(this, input);
  }
}
