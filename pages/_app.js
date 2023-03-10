import "@/styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import LayoutWrapper from "./components/LayoutWrapper";

library.add(faCartShopping);

export default function App({ Component, pageProps }) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />;
    </LayoutWrapper>
  );
}
