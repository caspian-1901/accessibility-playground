# NOTES

## Comparison with shadcn/ui

After comparing my manually built components with the generated shadcn/ui components, I found several improvements.

### Modal Dialog

- My modal supports opening, closing with the Escape key, focus return, and a basic focus trap.
- The shadcn/ui dialog provides more complete focus management, keyboard navigation, and accessibility behavior automatically.

### Tabs

- My tabs support mouse interaction and Left/Right arrow key navigation.
- The shadcn/ui tabs include more comprehensive ARIA attributes, better keyboard support, and a cleaner component structure.

## What I learned

1. Building accessible components requires proper keyboard interaction in addition to ARIA attributes.
2. Libraries such as shadcn/ui implement accessibility details that are easy to miss when building components manually.
3. Comparing generated source code helped me understand production-quality accessibility patterns.