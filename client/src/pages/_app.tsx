import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import ThemesProvider from "@/providers/ThemesProvider";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import store from "@/store";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemesProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemesProvider>
    </Provider>
  );
};
