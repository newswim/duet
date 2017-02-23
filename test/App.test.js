import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/App'
import Header from '../src/components/Header'
import RepoList from '../src/components/RepoList'
import { Container } from '../src/styles'
import repos from '../repos.json'

test('App renders its hierarchy', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.contains(<Header />)).toBe(true)
  expect(wrapper.contains(<Container><RepoList repos={repos} /></Container>)).toBe(true)
})
