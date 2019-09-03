import styled from 'styled-components/native'
import { Platform, StyleSheet, Animated } from 'react-native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  padding-top: ${Platform.OS === 'android' ? 20 : 40};
  padding-right: 15px;
  padding-left: 15px;
  background: #1e88e5;
  height: 200px;
`

export const HeaderImage = styled.Image.attrs({
  ...StyleSheet.absoluteFillObject
})``

export const HeaderText = styled.Text`
  font-size: 24;
  font-weight: 900;
  color: #FFF;
  background-color: transparent;
  position: absolute;
  left: 15;
  bottom: 20;
`

export const PostsWrapper = styled(Animated.View).attrs(({ animation }) => ({
  translateY: animation.offset.y,
  opacity: animation.opacity
}))``

export const Posts = styled.ScrollView``
