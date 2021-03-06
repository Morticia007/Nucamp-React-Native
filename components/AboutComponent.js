import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';
import { Text } from 'react-native';

class About extends Component {
  static navigationOptions = {
    title: 'About Us',
  };
  render() {
    return (
      <ScrollView>
        <Card title='Our Mission'>
          <Text>
            We present a curated database of the best campsites in the vast
            woods and backcountry of the World Wide Web Wilderness. We increase
            access to adventure for the public while promoting safe and
            respectful use of resources. The expert wilderness trekkers on our
            staff personally verify each campsite to make sure that they are up
            to our standards. We also present a platform for campers to share
            reviews on campsites they have visited with each other.
          </Text>
        </Card>
        <Card title='Community Partners'></Card>
      </ScrollView>
    );
  }
}

export default About;
