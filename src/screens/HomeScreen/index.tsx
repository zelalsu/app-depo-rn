/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import axios from 'axios';
import {getUserRightsUrl} from '../../consants/dimension';
import {UserRightsParams} from './types';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import back from '../../../assets/images/back.png';
import goBack from '../../../assets/images/goBack.png';
const staticModuleRights = [
  {
    ModuleId: 100,
    ModuleName: 'Mal Kabul',
  },
  {
    ModuleId: 200,
    ModuleName: 'Sevkiyat',
  },
  {
    ModuleId: 300,
    ModuleName: 'Depo Fişleri',
  },
  {
    ModuleId: 400,
    ModuleName: 'Sayım',
  },
  {
    ModuleId: 500,
    ModuleName: 'Sipariş',
  },
  {
    ModuleId: 1500,
    ModuleName: 'deneme',
  },
];

const HomeScreen = ({route}: {route: any}) => {
  const {selectedUser} = route.params;
  const [modules, setModules] = useState<UserRightsParams>({
    dtUserModuleRights: [],
    dtUserModuleOperationRights: [],
  });
  const navigation = useNavigation();
  useEffect(() => {
    if (!selectedUser) {
      return;
    }
    const fetchUserRights = async () => {
      try {
        const response = await axios.post(
          getUserRightsUrl,
          {intUserId: selectedUser},
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        const jsonString = response.data.split(']}{"d":null}')[0] + ']}';
        const parsedData = JSON.parse(jsonString);

        setModules(parsedData);
      } catch (error) {
        console.error('SOAP Request Error:', error);
      }
    };

    fetchUserRights();
  }, [selectedUser]);

  const isModuleSelectable = (moduleId: number) => {
    //her bir modül ID'sini tek tek kontrol eder ve belirli bir modülün kullanıcıya ait olup olmadığını belirler.
    //var ise true döndürür.
    return modules.dtUserModuleOperationRights.some(
      op => op.ModuleId === moduleId,
    );
  };

  return (
    <ImageBackground style={{flex: 1}} source={back}>
      <View style={style.container}>
        <View style={style.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={style.backButton}>
            <Image style={{height: 16, width: 16}} source={goBack} />
          </TouchableOpacity>
          <Text style={style.headerTitle}>Ana sayfa</Text>
        </View>

        {staticModuleRights.map(module => {
          const selectable = isModuleSelectable(module.ModuleId);
          return (
            <TouchableOpacity
              key={module.ModuleId}
              onPress={() => {
                if (selectable) {
                  // yetkili modülü için olması
                }
              }}
              style={[
                style.moduleContainer,
                {
                  backgroundColor: selectable ? '#2c3e50' : 'gray',
                  borderWidth: selectable ? 3 : 0,
                  borderColor: '#3498db',
                },
              ]}
              disabled={!selectable}>
              <Text style={style.moduleText}>{module.ModuleName}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
