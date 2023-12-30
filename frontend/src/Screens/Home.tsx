import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../Components/Button';

const Home = ({ navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.textStyle} >Home</Text>
      <View style={styles.buttonContainer}>
        <Button buttonText="New Workout" styles={styles} navigation={navigation} nextScreen="Workout"></Button>
        <Button buttonText="History" styles={styles} navigation={navigation} nextScreen="History"></Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button buttonText="Exercises" styles={styles} navigation={navigation} nextScreen="Exercises"></Button>
        <Button buttonText="Profile" styles={styles} navigation={navigation} nextScreen="Profile"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginBottom: 0,
    height: 60,
    width: 130,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
  textStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'darkblue',
  },
});

export default Home;