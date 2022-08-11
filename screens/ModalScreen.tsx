import {StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redes Sociais</Text>

      <View style={styles.social}>
        <Entypo name="facebook" size={44} color="white" style={{padding: 10}}/>
        <AntDesign name="twitter" size={44} color="white" style={{padding: 5}}/>
        <AntDesign name="instagram" size={44} color="white" style={{padding: 5}}/>
        <Entypo name="book" size={44} color="white" style={{padding: 5}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  social: {
    width: '50%',
    marginTop: 20,
    alignItems: 'center',
    
  },
});
