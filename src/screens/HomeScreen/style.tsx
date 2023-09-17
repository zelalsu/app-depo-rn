import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#ecf0f1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#e74c3c',
  },
  backText: {
    color: 'white',
    fontSize: 25,
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    padding: 10,
    borderRadius: 16,
    backgroundColor: '#3498db',
  },
  moduleContainer: {
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  moduleText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
