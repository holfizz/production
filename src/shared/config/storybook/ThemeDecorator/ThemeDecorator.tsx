import { Decorator } from "@storybook/react"
import { ThemeProvider } from "@/app/providers/ThemeProvider"
import { Theme } from "@/shared/const/theme"

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  // eslint-disable-next-line react/display-name
      (StoryComponent) =>
          (
              <ThemeProvider initialTheme={theme}>
                  <div className={`app ${theme}`}>
                      <StoryComponent />
                  </div>
              </ThemeProvider>
          )
