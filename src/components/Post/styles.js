import styled from 'styled-components/native'

export const Wrapper = styled.TouchableWithoutFeedback``

export const Container = styled.View`
  margin-top: 10;
  border-radius: 10;
  flex-direction: column;
  margin: 8px;
`

export const BackgroundImage = styled.Image`
  width: 100%;
  height: 150;
`

export const Info = styled.View`
  background-color: ${props => props.color};
  flex-direction: row;
  align-items: center;
  padding: 15px;
`

export const Content = styled.Text`
  color: #fff;
  font-size: 15px;
`
