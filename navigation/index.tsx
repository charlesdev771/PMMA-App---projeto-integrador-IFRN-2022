//Main dependencies
  import * as React from 'react';
  import { FontAwesome } from '@expo/vector-icons';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { ColorSchemeName, Pressable } from 'react-native';
  import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
  import LinkingConfiguration from './LinkingConfiguration';
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

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
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


      <BottomTab.Screen
        name="s"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'P.M.M.A',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />

      
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="feed" color={color} />,
        }}
      />

      
      
      
      

<BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />

<BottomTab.Screen
        name="TabFour"
        component={TabFourScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />

<BottomTab.Screen
        name="TabFive"
        component={TabFiveScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />

<BottomTab.Screen
        name="TabSix"
        component={TabSixScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
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
