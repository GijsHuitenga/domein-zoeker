
import Header from "@/components/layout/header";
import Providers from "./storeProvider";

import "@/styles/globals.css";

export const metadata = {
  title: 'Domein zoeker app',
  description: 'Opdracht voor Minty Media sollicitatie'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
          <Header />
          <Providers>{children}</Providers>
        </body>
    </html>
  );
}
