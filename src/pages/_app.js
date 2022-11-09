import "../../styles/globals.css";
import { AuthProvider } from "../contexts/AuthContext";
import ThemeProvider from "../theme";
import { Provider } from "react-redux";
import { store } from "../store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
        <ToastContainer />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
