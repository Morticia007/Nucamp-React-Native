import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';

class About extends Component {
  static navigationOptions = {
    title: 'About Us',
  };
  render() {
    return (
      <ScrollView>
        <Card title='Our Mission'></Card>
        <Card title='Community Partners'></Card>
      </ScrollView>
    );
  }
}

export default About;
