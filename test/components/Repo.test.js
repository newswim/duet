import React from 'react'
import Repo from '../../src/components/Repo'
import { mount } from 'enzyme'
import sinon from 'sinon'

let repoStub, issuesStub
const details = {
  data: {
    html_url: 'http://cool.com',
    name: 'cool',
    stargazers_count: 2
  }
}
const issues = {
  data: [
    {
      name: 'test'
    }
  ]
}
const labels = [
  'test-123'
]

beforeEach(() => {
  repoStub = {
    getDetails: sinon.stub().returns(Promise.resolve(details))
  }
  issuesStub = {
    listIssues: sinon.stub().returns(Promise.resolve(issues))
  }
})

test('it gets the data from the "api"', () => {
  const wrapper = mount(<Repo repo={repoStub} issues={issuesStub} labels={labels} />)

  expect(repoStub.getDetails.called).toBe(true)
  expect(issuesStub.listIssues.called).toBe(true)
  expect(issuesStub.listIssues.calledWith({ labels: 'first-timers-only' }))
  setImmediate(() => {
    expect(wrapper.state('details')).toBe(details.data)
    expect(wrapper.find({ href: 'http://cool.com' }).getNodes().length).toBe(1)
  })
})

test('it renders the correct amount of issues', () => {
  const wrapper = mount(<Repo repo={repoStub} issues={issuesStub} labels={labels} />)

  setImmediate(() => {
    expect(wrapper.find('Issue').getNodes().length).toBe(1)
  })
})

test('it renders a placeholder when there are no issues', () => {
  issuesStub.listIssues.returns(Promise.resolve({}))

  const wrapper = mount(<Repo repo={repoStub} issues={issuesStub} labels={labels} />)

  setImmediate(() => {
    expect(wrapper.find('NoIssuesPlaceholder').getNodes().length).toBe(1)
  })
})
