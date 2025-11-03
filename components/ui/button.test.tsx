import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button Component', () => {
  it('should render button with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('should render with default variant', () => {
    render(<Button>Default Button</Button>)
    const button = screen.getByText('Default Button')
    expect(button).toHaveClass('bg-primary')
  })

  it('should render with destructive variant', () => {
    render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByText('Delete')
    expect(button).toHaveClass('bg-destructive')
  })

  it('should render with outline variant', () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByText('Outline')
    expect(button).toHaveClass('border')
  })

  it('should render with secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByText('Secondary')
    expect(button).toHaveClass('bg-secondary')
  })

  it('should render with ghost variant', () => {
    render(<Button variant="ghost">Ghost</Button>)
    const button = screen.getByText('Ghost')
    expect(button).toBeInTheDocument()
  })

  it('should render with link variant', () => {
    render(<Button variant="link">Link</Button>)
    const button = screen.getByText('Link')
    expect(button).toHaveClass('underline-offset-4')
  })

  it('should render with small size', () => {
    render(<Button size="sm">Small</Button>)
    const button = screen.getByText('Small')
    expect(button).toHaveClass('h-8')
  })

  it('should render with large size', () => {
    render(<Button size="lg">Large</Button>)
    const button = screen.getByText('Large')
    expect(button).toHaveClass('h-10')
  })

  it('should render with icon size', () => {
    render(<Button size="icon">🔥</Button>)
    const button = screen.getByText('🔥')
    expect(button).toHaveClass('size-9')
  })

  it('should handle disabled state', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByText('Disabled')
    expect(button).toBeDisabled()
  })

  it('should apply custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    const button = screen.getByText('Custom')
    expect(button).toHaveClass('custom-class')
  })

  it('should have correct data-slot attribute', () => {
    render(<Button>Button</Button>)
    const button = screen.getByText('Button')
    expect(button).toHaveAttribute('data-slot', 'button')
  })
})
