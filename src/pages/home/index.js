import React from 'react'
import BaseButton from '../../common/components/base-button'
import { styled } from 'baseui'

const HomeContainer = styled('div', {
  margin: '2rem auto',
  lineHeight: '2.5rem'
})

const Home = () => (
  <HomeContainer>
    <div>Welcome to the store.</div>
    <BaseButton href="/new-record">New Record!</BaseButton>
  </HomeContainer>
)

export default Home
