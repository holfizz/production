<<<<<<< HEAD
import {Decorator} from "@storybook/react"
import {Theme, ThemeProvider} from "app/providers/ThemeProvider"
=======
import { Decorator } from "@storybook/react"
import { Theme, ThemeProvider } from "app/providers/ThemeProvider"
>>>>>>> 921c489 (fix all files and add loki)

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  // eslint-disable-next-line react/display-name
<<<<<<< HEAD
      (StoryComponent)=>
=======
      (StoryComponent) =>
>>>>>>> 921c489 (fix all files and add loki)
          (
              <ThemeProvider initialTheme={theme}>
                  <div className={`app ${theme}`}>
                      <StoryComponent />
                  </div>
              </ThemeProvider>
          )
