import React, { useState, useEffect } from 'react'
import { StatusBar, Animated, Dimensions } from 'react-native'
import { Container, Header, HeaderImage, HeaderText, PostsWrapper, Posts, PostTitle } from './styles'
import Post from './components/Post'

function App () {
  const [animation] = useState({
    offset: new Animated.ValueXY({ x: 0, y: 25 }),
    scrollOffset: new Animated.Value(0),
    opacity: new Animated.Value(0),
    listProgress: new Animated.Value(0),
    postInfoProgress: new Animated.Value(0)
  })
  const [selected, setSelected] = useState(null)
  const [visible, setVisible] = useState(false)
  const [posts] = useState([
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
  ])

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

  function selectPost (post) {
    setSelected(post)

    Animated.sequence([
      Animated.timing(animation.listProgress, {
        toValue: 100,
        duration: 300
      }),
      Animated.timing(animation.postInfoProgress, {
        toValue: 100,
        duration: 600
      })
    ]).start(() => {
      setVisible(true)
    })
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#005cb2" />

      <Header style={{
        height: animation.scrollOffset.interpolate({
          inputRange: [0, 200],
          outputRange: [200, 45],
          extrapolate: 'clamp'
        })
      }}>

        <HeaderImage source={selected ? { uri: selected.thumbnail } : null } style={{
          opacity: animation.postInfoProgress.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1]
          })
        }} />

        <HeaderText style={{
          fontSize: animation.scrollOffset.interpolate({
            inputRange: [180, 200],
            outputRange: [32, 18],
            extrapolate: 'clamp'
          }),
          transform: [{
            translateX: animation.postInfoProgress.interpolate({
              inputRange: [0, 50],
              outputRange: [0, Dimensions.get('window').width]
            })
          }]
        }}>
          GoNative
        </HeaderText>

        <PostTitle style={{
          transform: [{
            translateX: animation.postInfoProgress.interpolate({
              inputRange: [0, 100],
              outputRange: [Dimensions.get('window').width * -1, 0]
            })
          }]
        }}>
          { selected ? selected.title : null}
        </PostTitle>
      </Header>

      <PostsWrapper style={{
        translateY: animation.offset.y,
        opacity: animation.opacity
      }}>
        { visible ? (
          <Post
            post={selected}
            onPress={() => {}}
          />
        ) : (
          <Posts
            scrollEventThrottle={16}
            onScroll={Animated.event([{
              nativeEvent: {
                contentOffset: { y: animation.scrollOffset }
              }
            }])}
            style={{
              translateX: animation.listProgress.interpolate({
                inputRange: [0, 100],
                outputRange: [0, Dimensions.get('window').width]
              })
            }}
          >
            { posts.map(post => (
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
