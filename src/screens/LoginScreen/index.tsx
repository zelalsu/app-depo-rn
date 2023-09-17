import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {UsersParams} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './styles';

import {DEFAULT_API_ADDRESS} from '../../consants/dimension';

import EntityPicker from '../../components/Login/Entities';
import UserPicker from '../../components/Login/Users';
import CompanyPicker from '../../components/Login/Companies';
import logo from '../../../assets/images/logo.png';
import back from '../../../assets/images/back.png';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null);
  const [selectedEntity, setSelectedEntity] = useState<number | null>(null);
  const [selectedUser, setSelectedUser] = useState<UsersParams | null>(null);
  const [password, setPassword] = useState<string>('');
  const [apiAddress, setApiAddress] = useState<string>(DEFAULT_API_ADDRESS);

  const [message, setMessage] = useState('');
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const fetchApiAddress = async () => {
      const savedApiAddress = await AsyncStorage.getItem('apiAddress');
      if (savedApiAddress) {
        setApiAddress(savedApiAddress);
      }
    };

    fetchApiAddress();
  }, []);

  // API adresini değiştirdiğimizde, bu adresi AsyncStorage'e kaydedilmesi
  useEffect(() => {
    if (apiAddress) {
      AsyncStorage.setItem('apiAddress', apiAddress);
    }
  }, [apiAddress]);

  const handleLogin = () => {
    if (!selectedUser) {
      setMessage('Lütfen kullanıcı seçin.');
      return;
    }
    if (selectedUser?.Password === password) {
      setMessage('Başarıyla giriş yaptınız.');
      navigation.navigate('Home', {selectedUser: selectedUser.Id});
    } else {
      setMessage('Yanlış şifre');
    }
  };

  return (
    <ImageBackground style={{flex: 1}} source={back}>
      <ScrollView>
        <View style={style.headerContainer}>
          <View style={style.logo}>
            <Image source={logo} />
          </View>
          <Text style={style.descTitle}>Hoşgeldiniz</Text>
        </View>

        <View style={style.container}>
          <TextInput
            style={style.pickerContainer}
            value={apiAddress}
            onChangeText={text => setApiAddress(text)}
            placeholder="API Address"
          />
          <Text style={style.title}>Şirket</Text>
          <CompanyPicker
            selectedCompany={selectedCompany}
            onCompanyChange={value => setSelectedCompany(value)}
          />
          <Text style={style.title}>İşletme</Text>
          <EntityPicker
            selectedEntity={selectedEntity}
            companyId={selectedCompany}
            onEntityChange={value => setSelectedEntity(value)}
          />
          <Text style={style.title}>Kullanıcı</Text>
          <UserPicker
            entityId={selectedEntity}
            onUserChange={setSelectedUser}
          />
          <Text style={style.title}>Şifre</Text>
          <TextInput
            style={style.pickerContainer}
            value={password}
            onChangeText={pass => setPassword(pass)}
            placeholder="Şifrenizi Giriniz"
          />
          <Text>{message}</Text>
          {/* Diğer componentler ve kodlar ... */}
        </View>
        <TouchableOpacity onPress={handleLogin}>
          <View style={[style.button, {marginBottom: insets.bottom + 50}]}>
            <Text style={style.buttonText}>Giriş yap</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;
