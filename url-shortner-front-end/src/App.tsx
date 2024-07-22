import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { router } from "./routes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { Helmet, HelmetProvider } from 'react-helmet-async';

export function App() {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | URLGen"
      />

      <ReduxProvider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="url-shortner">
          <RouterProvider router={router}/>
        </ThemeProvider>
      </ReduxProvider>
    </HelmetProvider>
  )
}
