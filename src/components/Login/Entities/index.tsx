import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {getActiveEntitiesUrl} from '../../../consants/dimension';
import {EntitiesParams} from '../../../screens/LoginScreen/types';
import {View} from 'react-native';
import {EntityPickerProps} from '../types';
import fetchData from '../../../api/fetchData';
import style from '../../../screens/LoginScreen/styles';

const EntityPicker = ({
  selectedEntity,
  companyId,
  onEntityChange,
}: EntityPickerProps) => {
  const [entities, setEntities] = useState<EntitiesParams[]>([]);
  useEffect(() => {
    if (!companyId) {
      setEntities([]);
      return;
    }

    const fetchEntities = async () => {
      try {
        const parsedEntities = await fetchData(getActiveEntitiesUrl, {
          CompanyId: companyId,
        });
        setEntities(parsedEntities);
      } catch (error) {
        console.error('Entity Fetch Error:', error);
      }
    };

    fetchEntities();
  }, [companyId]);

  return (
    <View style={style.pickerContainer}>
      <Picker
        selectedValue={selectedEntity}
        onValueChange={value => {
          onEntityChange(value);
        }}>
        <Picker.Item label="İşletme Seçiniz" value={null} />
        {entities.map(entity => (
          <Picker.Item
            key={entity.Id}
            label={entity.EntityName}
            value={entity.Id}
          />
        ))}
      </Picker>
    </View>
  );
};

export default EntityPicker;
