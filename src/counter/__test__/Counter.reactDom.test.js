import React from 'react'
import Counter from '../Counter'
import ReactDOM from 'react-dom'

describe('Counter', () => {
  let container
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container);
  });
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
    document.body.removeChild(container)
  });
  test('show "0" as default', () => {
    ReactDOM.render(<Counter />, container)
    expect(container.querySelector('p').textContent).toBe('0')
  })
  test('count up when user clicks "+"', () => {
    ReactDOM.render(<Counter />, container)

    const buttons = container.querySelectorAll('button')

    buttons[0].click()

    expect(container.querySelector('p').textContent).toBe('1')
  })
  test('count down when user clicks "-"', () => {
    ReactDOM.render(<Counter />, container)

    const buttons = container.querySelectorAll('button')

    buttons[1].click()

    expect(document.body.querySelector('p').textContent).toBe('-1')
  })
});