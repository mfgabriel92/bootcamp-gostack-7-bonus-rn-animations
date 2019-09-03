import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet, PanResponder} from 'react-native';

function App() {
  const [ball, setBall] = useState(new Animated.ValueXY({x: 0, y: 0}));
  const _pan = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: ball.x,
        dy: ball.y,
      },
    ]),
    onPanResponderGrant: (e, gestureState) => {
      ball.setOffset({
        x: ball.x._value,
        y: ball.y._value,
      });
      ball.setValue({x: 0, y: 0});
    },
    onPanResponderRelease: () => {
      ball.flattenOffset();
    },
  });

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Animated.View
        {..._pan.panHandlers}
        style={[
          styles.ball,
          {transform: [{translateX: ball.x}, {translateY: ball.y}]},
        ]}
      />
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
