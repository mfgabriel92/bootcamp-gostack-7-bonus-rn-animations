import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet, Dimensions} from 'react-native';

function App() {
  const [y, setY] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animated.spring(y, {
    //   toValue: 550,
    //   bounciness: 10,
    // }).start();
    Animated.decay(y, {
      velocity: 0.5,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, {top: y}]} />
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
