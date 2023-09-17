import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const window = {
  width,
  height,
};

export const DEFAULT_API_ADDRESS =
  'http://demo.arunayazilim.com/DeppoService/DeppoService.asmx/';

export const getActiveCompaniesUrl = DEFAULT_API_ADDRESS + 'GetActiveCompanies';
export const getActiveEntitiesUrl = DEFAULT_API_ADDRESS + 'GetActiveEntities';
export const getActiveUsersInEntityUrl =
  DEFAULT_API_ADDRESS + 'GetActiveUsersInEntity';

export const getUserRightsUrl = DEFAULT_API_ADDRESS + 'GetUserRights';
