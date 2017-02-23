import React from 'react'
import RepoList from '../../src/components/RepoList'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

const repos = [
  {
    "path": "github/hub",
    "description": "aaaa"
  },
  {
    "path": "github/linguist",
    "description": "cool"
  }
]

test('it renders the component tree', () => {
  const tree = renderer.create(
    <RepoList repos={repos} />
  )
  expect(tree).toMatchSnapshot()
})

test('it renders the correct amount of repos', () => {
  const repos1 = repos.concat({
    "path": "github/dmca",
    "description": "bbbb"
  })
  const wrapper1 = shallow(<RepoList repos={repos1} />)
  expect(wrapper1.find('Repo').length).toBe(3)

  const repos2 = repos.slice(0, 1)
  const wrapper2 = shallow(<RepoList repos={repos2} />)
  expect(wrapper2.find('Repo').length).toBe(1)
})
