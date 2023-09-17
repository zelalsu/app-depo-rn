import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {getActiveUsersInEntityUrl} from '../../../consants/dimension';
import {UsersParams} from '../../../screens/LoginScreen/types';
import {View} from 'react-native';
import {UserPickerProps} from '../types';
import fetchData from '../../../api/fetchData';
import style from '../../../screens/LoginScreen/styles';

const UserPicker = ({entityId, onUserChange}: UserPickerProps) => {
  const [users, setUsers] = useState<UsersParams[]>([]);
  const [selectedUserId, setSelectedUserId] = useState(null); // Bu yeni state seçili olan şirketi tutar

  useEffect(() => {
    if (!entityId) {
      setUsers([]);
      return;
    }

    const fetchUsersInEntity = async () => {
      try {
        const parsedUsers = await fetchData(getActiveUsersInEntityUrl, {
          EntityId: entityId,
        });
        setUsers(parsedUsers);
      } catch (error) {
        console.error('User Fetch Error:', error);
      }
    };

    fetchUsersInEntity();
  }, [entityId]);

  return (
    <View style={style.pickerContainer}>
      <Picker
        selectedValue={selectedUserId}
        onValueChange={value => {
          const selectedUser = users.find(user => user.Id === value);
          onUserChange(selectedUser || null);
          setSelectedUserId(value);
        }}>
        <Picker.Item label="Kullanıcı Seçiniz" value={null} />
        {users.map(user => (
          <Picker.Item key={user.Id} label={user.UserName} value={user.Id} />
        ))}
      </Picker>
    </View>
  );
};

export default UserPicker;
