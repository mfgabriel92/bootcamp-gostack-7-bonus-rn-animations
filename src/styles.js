import styled, { css } from 'styled-components/native'
import { Platform, StyleSheet, Animated } from 'react-native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled(Animated.View).attrs(({ animation }) => ({
  height: animation.scrollOffset.interpolate({
    inputRange: [0, 200],
    outputRange: [200, 45],
    extrapolate: 'clamp'
  })
}))`
  padding-top: ${Platform.OS === 'android' ? 20 : 40};
  padding-right: 15px;
  padding-left: 15px;
  background: #1e88e5;
`

export const HeaderImage = styled.Image.attrs({
  ...StyleSheet.absoluteFillObject
})``

export const HeaderText = styled(Animated.Text)`
  font-weight: bold;
  color: #FFF;
  background-color: transparent;
  position: absolute;
  left: 15;
  bottom: 10;
  font-size: 24px;

  /* ${props => css`
    font-size: ${props.animation.scrollOffset.interpolate({
      inputRange: [180, 200],
      outputRange: [24, 16],
      extrapolate: 'clamp'
    })}
  `} */
`

export const PostsWrapper = styled(Animated.View).attrs(({ animation }) => ({
  translateY: animation.offset.y,
  opacity: animation.opacity
}))``

export const Posts = styled.ScrollView.attrs(({ animation }) => ({
  scrollEventThrottle: 16,
  onScroll: Animated.event([{
    nativeEvent: {
      contentOffset: { y: animation.scrollOffset }
    }
  }])
}))``
