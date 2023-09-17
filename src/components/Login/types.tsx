import {UsersParams} from '../../screens/LoginScreen/types';

type UserPickerProps = {
  entityId: number | null;
  onUserChange: (user: UsersParams | null) => void;
};

type CompanyPickerProps = {
  selectedCompany: number | null;
  onCompanyChange: (value: number | null) => void;
};

type EntityPickerProps = {
  selectedEntity: number | null;
  companyId: number | null;
  onEntityChange: (value: number | null) => void;
};

export type {UserPickerProps, CompanyPickerProps, EntityPickerProps};
