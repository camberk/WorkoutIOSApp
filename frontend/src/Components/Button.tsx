import React, {Component} from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default class Button extends Component {
  _onPressButton = () => {
    const { navigation, nextScreen } = this.props;
    navigation.navigate(nextScreen)
  }

  render() {

    const { buttonText, styles} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}> { buttonText } </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}