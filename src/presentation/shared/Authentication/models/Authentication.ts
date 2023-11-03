export class Authentication {
  public readonly id: string;
  public readonly email: string;
  public readonly fullName: string;
  public readonly firstName: string;
  constructor(input: Partial<Authentication>) {
    Object.assign(this, input);
  }
}
