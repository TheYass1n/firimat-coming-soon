import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Baloo_Bhaijaan_2 } from "@next/font/google";

const NotoFont = Baloo_Bhaijaan_2({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={NotoFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
