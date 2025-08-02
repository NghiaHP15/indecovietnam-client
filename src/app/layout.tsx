/* eslint-disable @next/next/no-page-custom-font */
import Header from "@/components/Header";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";
import Providers from "@/components/Providers";


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className="font-poppins antialiased">
        <AOSInit >
          <Providers>
            <div className="flex flex-col h-screen">
              <Header/>
                <main className="grow">
                  {children}
                </main>
              <Footer/>
            </div>
          </Providers>
        </AOSInit>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              top: "2rem",
              background: "#fffff",
              color: "#000",
            }
          }}
        />
      </body>
    </html>
  );
}
export default RootLayout;