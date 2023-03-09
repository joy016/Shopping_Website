import "@/styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCartShopping);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
