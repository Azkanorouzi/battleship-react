import { it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Title from '../../src/ui/Title'

describe('given', () => {
    it('renders correct heading 1', () => {
      render(<Title type="neon" title="test" headingNumber={1} />)
      expect(screen.getByRole('heading').textContent).toMatch(/test/i)
    })
    it('renders correct heading 2', () => {
        render(<Title type="neon" title="test4" headingNumber={4}/>)
        expect(screen.getByRole('heading', {level: 4}).textContent).toMatch(/test4/i)
    })
    it('renders correct heading 3', () => {
        render(<Title type="neon" title="test3" headingNumber={3}/>)
        expect(screen.getByRole('heading', {level: 3}).textContent).toMatch(/test3/i)
    })
    it('renders correct heading 5', () => {
        render(<Title type="neon" title="test5" headingNumber={5}/>)
        expect(screen.getByRole('heading', {level: 5}).textContent).toMatch(/test5/i)
    })
})
