import React, { useState, useEffect } from 'react'
import { StatusBar, Animated } from 'react-native'
import { Container, Header, HeaderImage, HeaderText, PostsWrapper, Posts } from './styles'
import Post from './components/Post'

function App () {
  const [animation] = useState({
    offset: new Animated.ValueXY({ x: 0, y: 25 }),
    opacity: new Animated.Value(0)
  })
  const [posts, setPosts] = useState({
    selected: null,
    infoVisible: false,
    posts: [
      {
        id: 1,
        title: 'Lorem ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor eros, tincidunt id ligula feugiat, auctor accumsan magna.',
        thumbnail: 'https://picsum.photos/400/300',
        color: '#78c8f1'
      },
      {
        id: 2,
        title: 'Lorem ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor eros, tincidunt id ligula feugiat, auctor accumsan magna.',
        thumbnail: 'https://picsum.photos/400/300',
        color: '#86ef9e'
      },
      {
        id: 3,
        title: 'Lorem ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor eros, tincidunt id ligula feugiat, auctor accumsan magna.',
        thumbnail: 'https://picsum.photos/400/300',
        color: '#e661ec'
      },
      {
        id: 4,
        title: 'Lorem ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor eros, tincidunt id ligula feugiat, auctor accumsan magna.',
        thumbnail: 'https://picsum.photos/400/300',
        color: '#ed0b76'
      }
    ]
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
  }, [posts])

  function selectPost (post) {
    setPosts({
      selected: post,
      infoVisible: true,
      posts: [...posts.posts]
    })
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#005cb2" />

      <Header>
        <HeaderImage source={posts.selected ? { uri: posts.selected.thumbnail } : null } />
        <HeaderText>
          { posts.selected ? posts.selected.title : 'GoNative' }
        </HeaderText>
      </Header>

      <PostsWrapper animation={animation}>
        { posts.selected ? (
          <Post
            post={posts.selected}
            onPress={() => {}}
          />
        ) : (
          <Posts>
            { posts.posts.map(post => (
              <Post
                key={post.id}
                post={post}
                onPress={selectPost}
              />
            ))}
          </Posts>
        )}
      </PostsWrapper>
    </Container>
  )
}

export default App
