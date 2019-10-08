import React from 'react'
import { render, fireEvent, cleanup, getByText } from '@testing-library/react';
import Counter from '../Counter'
import ReactDOM from 'react-dom'

describe('Counter', () => {
  afterEach(cleanup);
  test('show "0" as default', () => {
    const { queryByText } = render(<Counter />)
    expect(queryByText('0')).not.toBeNull()
  })
  test('count up when user clicks "+"', () => {
    const { queryByText, getByText } = render(<Counter />)
    fireEvent.click(getByText('+'))
    expect(queryByText('1')).not.toBeNull()
  })
  test('count down when user clicks "-"', () => {
    const { queryByText, getByText } = render(<Counter />)
    fireEvent.click(getByText('-'))
    expect(queryByText('-1')).not.toBeNull()
  })
});