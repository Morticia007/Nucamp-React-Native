import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
  static NavigationOptions = {
    tittle: 'Home',
  };

  render() {
    return (
      <View>
        <Text>Home Component</Text>
      </View>
    );
  }
}
export default Home;
