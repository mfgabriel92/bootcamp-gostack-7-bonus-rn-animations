import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet, Dimensions} from 'react-native';

function App() {
  const [y, setY] = useState(new Animated.Value(0));
  const [x, setX] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animated.sequence([
    //   Animated.timing(y, {
    //     duration: 500,
    //     toValue: 250,
    //   }),

    //   Animated.timing(x, {
    //     duration: 500,
    //     toValue: 250,
    //   }),
    // ]).start();

    // Animated.parallel([
    //   Animated.timing(y, {
    //     duration: 500,
    //     toValue: 250,
    //   }),

    //   Animated.timing(x, {
    //     duration: 500,
    //     toValue: 250,
    //   }),
    // ]).start();

    // Animated.stagger(50, [
    //   Animated.timing(y, {
    //     duration: 500,
    //     toValue: 250,
    //   }),

    //   Animated.timing(x, {
    //     duration: 500,
    //     toValue: 250,
    //   }),
    // ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(y, {
          duration: 500,
          toValue: 250,
        }),

        Animated.timing(x, {
          duration: 500,
          toValue: 250,
        }),

        Animated.timing(y, {
          duration: 500,
          toValue: 0,
        }),

        Animated.timing(x, {
          duration: 500,
          toValue: 0,
        }),
      ]),
      {
        iterations: 3,
      },
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, {top: y, left: x}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F00',
  },
});

export default App;
