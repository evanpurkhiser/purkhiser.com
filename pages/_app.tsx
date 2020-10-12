import type { AppProps } from "next/app";
import Link from "next/link";

import Logo from "../components/Logo";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <header>
        <Logo />
        <nav>
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Services</a>
          </Link>
          <Link href="/">
            <a>Work</a>
          </Link>
        </nav>
      </header>

      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
