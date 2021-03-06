import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import { PARTNERS } from '../shared/partners';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
const Item = ({ name, image, description }) => (
  <View>
    <Image style={styles.tinyLogo} source={{ uri: image }} />
    <Text>{name}</Text>
    <Text>{description}</Text>
  </View>
);

class About extends Component {
  static navigationOptions = {
    title: 'About Us',
  };

  renderItem = ({ item }) => (
    <Item name={item.name} image={item.image} description={item.description} />
  );

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
        <Card title='Community Partners'>
          <FlatList
            data={PARTNERS}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default About;
