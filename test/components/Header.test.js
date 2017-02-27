import React from 'react'
import Header from '../../src/components/Header'
import renderer from 'react-test-renderer'

test('it renders the header structure', () => {
  const tree = renderer.create(
    <Header />
  )

  expect(tree).toMatchSnapshot()
})
