import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#ecf0f1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  logo: {},
  descTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2C3E50',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 2,
    color: '#34495E',
  },
  pickerContainer: {
    backgroundColor: '#ECF0F1',
    fontSize: 14,
    marginBottom: 5,
    borderColor: '#7F8C8D',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 15,
  },
  button: {
    marginHorizontal: 20,

    backgroundColor: '#E74C3C',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 10,
    marginTop: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  pickerItemText: {
    fontSize: 16,
  },
});

export default style;
