import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react';
import Counter from '../Counter'

describe('Counter', () => {
  afterEach(cleanup);
  test('show "0" as default', () => {
    const { getByText } = render(<Counter />)
    expect(getByText('0')).toBeInTheDocument()
  })
  test('count up when user clicks "+"', () => {
    const { getByText } = render(<Counter />)

    fireEvent.click(getByText('+'))

    expect(getByText('1')).toBeInTheDocument()
  })
  test('count down when user clicks "-"', () => {
    const { getByText } = render(<Counter />)

    fireEvent.click(getByText('-'))

    expect(getByText('-1')).toBeInTheDocument()
  })
});