export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "primary-text": "var(--color-primary-text)",
        "secondary-text": "var(--color-secondary-text)",
        "muted-text": "var(--color-muted-text)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      spacing: {
        section: "var(--spacing-section)",
        container: "var(--spacing-container)",
        component: "var(--spacing-component)",
      },
      maxWidth: {
        container: "var(--container-max-width)",
      },
      transitionDuration: {
        DEFAULT: "var(--transition-duration)",
      },
      transitionTimingFunction: {
        DEFAULT: "var(--transition-easing)",
      },
    },
  },
  plugins: [],
};
