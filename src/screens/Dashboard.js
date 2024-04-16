import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
    };
  }

  componentDidMount() {
    this.getUserEmail();
  }

  getUserEmail = async () => {
    const userEmail = await AsyncStorage.getItem('userEmail');
    this.setState({ userEmail });
  };

  logout = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'false');
    this.props.navigation.navigate('Login'); // Navigate to the Login screen
  };

  render() {
    const { userEmail } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <View style={styles.content}>
          <Text>User Email: {userEmail}</Text>
          <Button title="Logout" onPress={this.logout} />
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
