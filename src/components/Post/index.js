import React, { useState, useEffect } from 'react'
import { Animated, PanResponder, Dimensions, Alert } from 'react-native'
import PropTypes from 'prop-types'
import { Wrapper, Container, BackgroundImage, Info, Content } from './styles'

function Post ({ post, onPress }) {
  const [animation] = useState({
    opacity: new Animated.Value(0),
    offset: new Animated.ValueXY({ x: 0, y: 25 })
  })
  const { width } = Dimensions.get('window')
  const _pan = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderTerminationRequest: () => false,
    onPanResponderMove: Animated.event([null, {
      dx: animation.offset.x
    }]),
    onPanResponderRelease: () => {
      if (animation.offset.x._value < -200) {
        Alert.alert('Deleted')
      }

      Animated.spring(animation.offset.x, {
        toValue: 0,
        bounciness: 20
      }).start()
    },
    onPanResponderTerminate: () => {
      Animated.spring(animation.offset.x, {
        toValue: 0,
        bounciness: 10
      }).start()
    }
  })

  useEffect(() => {
    Animated.parallel([
      Animated.spring(animation.offset.y, {
        toValue: 0,
        speed: 2.5,
        bounciness: 10
      }),
      Animated.timing(animation.opacity, {
        toValue: 1,
        duration: 500
      })
    ]).start()
  }, [])

  return (
    <Animated.View {..._pan.panHandlers} style={[
      {
        transform: [
          ...animation.offset.getTranslateTransform(),
          {
            rotateZ: animation.offset.x.interpolate({
              inputRange: [width * -1, width],
              outputRange: ['-30deg', '30deg']
            })
          }
        ]
      }
    ]}>
      <Wrapper onPress={() => onPress(post)}>
        <Container style={[
          { opacity: animation.opacity }
        ]}>
          <BackgroundImage source={{ uri: post.thumbnail }} />
          <Info color={post.color}>
            <Content>
              {post.content}
            </Content>
          </Info>
        </Container>
      </Wrapper>
    </Animated.View>
  )
}

Post.propTypes = {
  post: PropTypes.shape().isRequired,
  onPress: PropTypes.func.isRequired
}

export default Post
