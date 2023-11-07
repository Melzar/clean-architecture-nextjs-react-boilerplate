import { Role } from 'presentation/shared/Authentication/models/Role';

export type Authentication = {
  readonly id: string;
  readonly email: string;
  readonly fullName: string;
  readonly firstName: string;
  readonly token: string;
  readonly role: Role;
};
