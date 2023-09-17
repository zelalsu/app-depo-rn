import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {getActiveCompaniesUrl} from '../../../consants/dimension';
import {View} from 'react-native';
import {CompaniesParams} from '../../../screens/LoginScreen/types';
import {CompanyPickerProps} from '../types';
import fetchData from '../../../api/fetchData';
import style from '../../../screens/LoginScreen/styles';

const CompanyPicker = ({
  selectedCompany,
  onCompanyChange,
}: CompanyPickerProps) => {
  const [companies, setCompanies] = useState<CompaniesParams[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const parsedCompanies = await fetchData(getActiveCompaniesUrl);
        setCompanies(parsedCompanies);
      } catch (error) {
        console.error('Company Fetch Error:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <View style={style.pickerContainer}>
      <Picker
        selectedValue={selectedCompany}
        onValueChange={value => onCompanyChange(value)}>
        <Picker.Item label="Şirket Seçiniz" value={null} />
        {companies.map(company => (
          <Picker.Item
            style={{borderRadius: 10}}
            key={company.Id}
            label={company.CompanyName}
            value={company.Id}
          />
        ))}
      </Picker>
    </View>
  );
};

export default CompanyPicker;
