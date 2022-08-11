//Main dependencies
  import * as React from 'react';
  import { FontAwesome } from '@expo/vector-icons';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { ColorSchemeName, Pressable } from 'react-native';
  import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
  import LinkingConfiguration from './LinkingConfiguration';
  import { AntDesign } from '@expo/vector-icons';
  import { Ionicons } from '@expo/vector-icons';
//;

//Files
  import Colors from '../constants/Colors';
  import useColorScheme from '../hooks/useColorScheme';
//;

//Views of app
  import ModalScreen from '../screens/ModalScreen';
  import NotFoundScreen from '../screens/NotFoundScreen';
  import TabOneScreen from '../screens/TabOneScreen';
  import TabTwoScreen from '../screens/TabTwoScreen';
  import TabThreeScreen from '../screens/TabThreeScreen';
  import TabFourScreen from '../screens/TabFourScreen';
  import TabFiveScreen from '../screens/TabFiveScreen';
  import TabSixScreen from '../screens/TabSixScreen';
//;


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) 
{

  return ( 

    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
    
  );
  
}


const Stack = createNativeStackNavigator<RootStackParamList>(); //Create Navigation


function RootNavigator() 

{

  return (

    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
    
  );

}

const BottomTab = createBottomTabNavigator<RootTabParamList>();


function BottomTabNavigator() 

{
  
  const colorScheme = useColorScheme();

  return (
    
    <BottomTab.Navigator //set the initial route
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>

       
        <BottomTab.Screen //Button home
          name="TabOne"
          component={TabOneScreen}
          options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
            title: 'P.M.M.A',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.4 : 1,
                })}>
                <FontAwesome
                  name="feed"
                  size={35}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
          })}
        />

        <BottomTab.Screen //Button about
          name="TabTwo"
          component={TabTwoScreen}
          options={{
            title: 'Sobre',
            tabBarIcon: ({ color }) => <TabBarIcon name="info" size={24} color={"white"}/>,
          }}
        />

      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
        title: 'Prevenção',
        tabBarIcon: ({ color }) => <AntDesign name="heart" size={24} color="white" />,
        }}
            />

      <BottomTab.Screen
        name="TabFour"
        component={TabFourScreen}
        options={{
        title: 'Causas',
        tabBarIcon: ({ color }) => <AntDesign name="meh" size={24} color="white" />,
        }}
        />

      <BottomTab.Screen
        name="TabFive"
        component={TabFiveScreen}
        options={{
        title: 'Tipos',
        tabBarIcon: ({ color }) => <Ionicons name="people-sharp" size={24} color="white" />,
        }}
        />

      <BottomTab.Screen
        name="TabSix"
        component={TabSixScreen}
        options={{
        title: 'Tratamento',
        tabBarIcon: ({ color }) => <AntDesign name="smile-circle" size={24} color="white" />,
        }}
        />

    </BottomTab.Navigator>

    
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
