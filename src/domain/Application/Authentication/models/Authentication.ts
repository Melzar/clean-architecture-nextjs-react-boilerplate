import { Role } from 'domain/Application/Authentication/models/Role';

export type Authentication = {
  readonly token: string;
  readonly email: string;
  readonly firstName: string;
  readonly fullName: string;
  readonly id: string;
  readonly role: Role;
};
