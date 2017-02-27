import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/App'
import Header from '../src/components/Header'
import RepoList from '../src/components/RepoList'
import { Container } from '../src/styles'
import config from '../config.json'

test('App renders its hierarchy', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.contains(<Header title={config.title} description={config.description} />)).toBe(true)
  expect(wrapper.contains(<Container><RepoList repos={config.repos} labels={config.labels} /></Container>)).toBe(true)
})
