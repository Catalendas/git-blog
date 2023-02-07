import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GitBlogProvider } from "./context/gitBlog"
import { Router } from "./routes"
import { GlobalStyle } from "./styles/globalStyle"
import { defaultTheme } from "./styles/themes/defaultTheme"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GitBlogProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </GitBlogProvider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
