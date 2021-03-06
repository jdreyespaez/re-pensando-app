import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Slider extends Component {
  render() {
    return (
      <View style={sytles.sliderContainer}>
        <View style={{ flex: 1 }}>
          <Image
            source={this.props.imageUri}
            style={sytles.sliderImage}
          />
        </View>
      </View>
    );
  }
}

export default Slider;

const sytles = StyleSheet.create({
  sliderContainer: {
    height: 333,
    width: 333,
    marginLeft: 10
  },
  sliderImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
});