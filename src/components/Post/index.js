import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Container, BackgroundImage, Info, Content } from './styles'

function Post ({ post, onPress }) {
  return (
    <Wrapper onPress={() => onPress(post)}>
      <Container>
        <BackgroundImage source={{ uri: post.thumbnail }} />
        <Info color={post.color}>
          <Content>
            {post.content}
          </Content>
        </Info>
      </Container>
    </Wrapper>
  )
}

Post.propTypes = {
  post: PropTypes.shape().isRequired,
  onPress: PropTypes.func.isRequired
}

export default Post
