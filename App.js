// In App.js in a new project

import * as React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerItemList } from "@react-navigation/drawer";
import User from "./src/images/save.png"; // Make sure to provide the correct path to your image
import Login from './src/screens/Login';
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';
import SplashScreen from './src/screens/SplashScreen';
import Registration from './src/screens/Registration';
import Dashboard from './src/screens/Dashboard';
import Profile from './src/screens/profile';
import Settings from './src/screens/settings';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeDrawer} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <SafeAreaView>
          <View
            style={{
              height: 200,
              width: '100%',
              justifyContent: "center",
              alignItems: "center",
              borderBottomColor: "#f4f4f4",
              borderBottomWidth: 1
            }}
          >
            <Image
              source={User}
              style={{
                height: 130,
                width: 130,
                borderRadius: 65
              }}
            />
            <Text
              style={{
                fontSize: 22,
                marginVertical: 6,
                fontWeight: "bold",
                color: "#111"
              }}
            >Elaysuriya</Text>
            <Text
              style={{
                fontSize: 16,
                color: "#111"
              }}
            >Product Manager</Text>
          </View>
          <DrawerItemList {...props} />
        </SafeAreaView>
      )}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: 250
        },
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        drawerLabelStyle: {
          color: "#111"
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: () => (
            <SimpleLineIcons name="home" size={20} color="#808080" />
          )
        }}
        component={Dashboard}
      />
      <Drawer.Screen
        name="Chat"
        options={{
          drawerLabel: "Chat",
          title: "Chat",
          drawerIcon: () => (
            <MaterialIcons name="chat" size={20} color="#808080" />
          )
        }}
        component={Profile}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: "Profile",
          title: "Profile",
          drawerIcon: () => (
            <MaterialIcons name="person" size={20} color="#808080" />
          )
        }}
        component={Profile}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          drawerIcon: () => (
            <MaterialIcons name="settings" size={20} color="#808080" />
          )
        }}
        component={Settings}
      />
    </Drawer.Navigator>
  );
}

export default App;
