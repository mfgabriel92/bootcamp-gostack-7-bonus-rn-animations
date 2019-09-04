import styled from 'styled-components/native'
import { Platform, Animated } from 'react-native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled(Animated.View)`
  padding-top: ${Platform.OS === 'android' ? 20 : 40};
  padding-right: 15px;
  padding-left: 15px;
  background: #1e88e5;
`

export const HeaderImage = styled(Animated.Image)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

export const HeaderText = styled(Animated.Text)`
  font-weight: bold;
  color: #FFF;
  background-color: transparent;
  position: absolute;
  left: 10;
  bottom: 10;
  font-size: 32px;
`

export const PostsWrapper = styled(Animated.View)``

export const Posts = styled(Animated.ScrollView)``

export const PostTitle = styled(HeaderText)``
