export type CompaniesParams = {
  Id: number;
  CompanyName: string;
  Active: boolean;
};

export type EntitiesParams = {
  Id: number;
  EntityName: string;
  CompanyId: number;
  ErpEntityCode: number;
  MailServerName: string;
  MailServerPort: number;
  MailServerSSL: string;
  MailUser: string;
  MailPassword: string;
};

export type UsersParams = {
  Id: number;
  UserName: string;
  FullName: string;
  Email: null;
  IsAdmin: boolean;
  IsLocked: boolean;
  EntityId: number;
  Password: string;
  DefaultWarehouse: number;
  IskontoOranLimit: number;
};
