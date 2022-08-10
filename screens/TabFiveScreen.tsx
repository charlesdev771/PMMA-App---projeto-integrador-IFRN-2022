import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabTwoScreen() 
{

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Logo haverá conteúdos legais aqui :)</Text>
    </View>

  );

}

const styles = StyleSheet.create
({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  
});
