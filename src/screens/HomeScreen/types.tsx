export type UserModuleRights = {
  ModuleId: number;
  ModuleName: string;
};

export type UserModuleOperationRights = {
  ModuleOperationId: number;
  ModuleId: number;
};

export type UserRightsParams = {
  dtUserModuleRights: UserModuleRights[];
  dtUserModuleOperationRights: UserModuleOperationRights[];
};
