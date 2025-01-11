# Interactive Business Card Component

This project showcases an interactive business card component built with React and Tailwind CSS. It demonstrates modern web development techniques, including responsive design, animations, and hover effects.

## How It Was Made

The business card component was created using the following technologies and techniques:

- **React**: The component is built as a functional React component.
- **Tailwind CSS**: Used for styling and responsive design.
- **Framer Motion**: Although not explicitly used in this version, the animations are inspired by Framer Motion techniques.
- **Lucide Icons**: Used for social media icons.

## Code Overview

### Main Component: `BusinessCard`

The main component is defined in `business-card.tsx`. Here's a brief overview of its structure:

1. **Card Container**: The outermost div that wraps the entire card and provides the hover effect for the gradient border.

2. **Background Elements**: 
   - Gradient background
   - Animated floating elements using CSS animations

3. **Content**:
   - Name: Displayed with a gradient text effect
   - Tagline: Describes the person's skills with interactive underline effects
   - Social Links: Buttons for GitHub, LinkedIn, and Email

### Key Features

- **Responsive Design**: The card adjusts its layout for different screen sizes.
- **Interactive Elements**: 
  - Hover effects on the card, buttons, and text
  - Scale animations on button hover
- **Gradient Animations**: The background and text use gradient animations for a dynamic effect.
- **Accessibility**: Proper aria labels and semantic HTML are used.

### CSS Animations

Custom CSS animations are defined in `animations.css`:

- `gradient`: Creates a shifting gradient effect
- `float`: Provides a floating animation for background elements

These animations are applied using custom classes like `animate-gradient-shift` and `animate-float-slow`.

## Usage

To use this component, simply import it into your React application and render it:

```jsx
import BusinessCard from './path/to/business-card';

function App() {
  return (
    <div>
      <BusinessCard />
    </div>
  );
}
