import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { Image, ScrollView} from 'react-native';

export default function TabTwoScreen() 

{
  return (

    <ScrollView style={styles.container}>

      <View style={styles.viewTop}>

        <Text style={styles.title}>O livro</Text>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/images/mentes1.jpg')}
        />
        <Text style={styles.textBook}>
          Curabitur quis suscipit erat. Nullam a ipsum non elit vestibulum 
          vestibulum sit amet in erat. Aliquam accumsan feugiat efficitur. 
          Duis risus metus, rhoncus sed lobortis ut, sollicitudin sit amet urna. 
          Donec fermentum pretium sapien quis tempus. Vivamus venenatis eleifend 
          sagittis. Aliquam varius velit tellus, a mollis augue tincidunt quis. 
          Phasellus nec diam at libero laoreet mattis eu ac est. Nullam vitae ullamcorper 
          ligula, eu consectetur purus. Donec fringilla turpis in porttitor aliquet. 
          Aliquam efficitur arcu sit amet odio lobortis auctor. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Mauris purus massa, dignissim a efficitur nec, gravida 
          id nisl. Aliquam nec nulla gravida, lobortis eros sed, congue massa. 
        </Text>

      </View>

      <View style={styles.ViewBotton}>

        <Text style={styles.titleProject}>O Projeto</Text>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/images/mentes1.jpg')}
        />
        <Text style={styles.textProject}>
          Curabitur quis suscipit erat. Nullam a ipsum non elit vestibulum 
          vestibulum sit amet in erat. Aliquam accumsan feugiat efficitur. 
          Duis risus metus, rhoncus sed lobortis ut, sollicitudin sit amet urna. 
          Donec fermentum pretium sapien quis tempus. Vivamus venenatis eleifend 
          sagittis. Aliquam varius velit tellus, a mollis augue tincidunt quis. 
          Phasellus nec diam at libero laoreet mattis eu ac est. Nullam vitae ullamcorper 
          ligula, eu consectetur purus. Donec fringilla turpis in porttitor aliquet. 
          Aliquam efficitur arcu sit amet odio lobortis auctor. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Mauris purus massa, dignissim a efficitur nec, gravida 
          id nisl. Aliquam nec nulla gravida, lobortis eros sed, congue massa. 
        </Text>

      </View>

      <View style={styles.members}>

        <Text style={styles.titleMembres}>Membros</Text>
        <Image
          style={styles.imgMember}
          source={require('../assets/images/member.jpg')}
        />
        <Text style={styles.textProject}>
          Curabitur quis suscipit erat. Nullam a ipsum non elit vestibulum 
          vestibulum sit amet in erat. Aliquam accumsan feugiat efficitur. 
          Curabitur quis suscipit erat. Nullam a ipsum non elit vestibulum 
          vestibulum sit amet in erat. Aliquam accumsan feugiat efficitur. 
        </Text> 
        <Image
          style={styles.imgMember}
          source={require('../assets/images/member.jpg')}
        />
        <Text style={styles.textProject}>
          Curabitur quis suscipit erat. Nullam a ipsum non elit vestibulum 
          vestibulum sit amet in erat. Aliquam accumsan feugiat efficitur. 
          Curabitur quis suscipit erat. Nullam a ipsum non elit vestibulum 
          vestibulum sit amet in erat. Aliquam accumsan feugiat efficitur. 
        </Text>
        <Image
          style={styles.imgMember}
          source={require('../assets/images/member.jpg')}
        />
        <Text style={styles.textProject}>
          Curabitur quis suscipit erat. Nullam a ipsum non elit vestibulum 
          vestibulum sit amet in erat. Aliquam accumsan feugiat efficitur. 
          Curabitur quis suscipit erat. Nullam a ipsum non elit vestibulum 
          vestibulum sit amet in erat. Aliquam accumsan feugiat efficitur. 
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create
({

  container: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  viewTop: 
  {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: 20,
  },
  tinyLogo:
  {
    width: '75%',
  },
  textBook:
  {
    fontSize: 20,
    width: '75%',
    textAlign: 'justify',
    paddingTop: 15,
  },
  ViewBotton: 
  {
    width: '100%',
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textProject:
  {
    fontSize: 20,
    width: '75%',
    textAlign: 'justify',
    paddingTop: 15, 
  },
  titleProject:
  {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 0,
    paddingBottom: 20,
  },
  members:
  {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
  },
  titleMembres:
  {
    paddingTop: 15,
    paddingBottom: 15,

    fontSize: 30,
  },
  imgMember:
  {
    width: '65%',
  },
  
});
