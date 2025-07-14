/* eslint-disable @next/next/no-page-custom-font */
import Header from "@/components/Header";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className="font-poppins antialiased">
        <AOSInit >
        <div className="flex flex-col h-screen">
          <Header/>
            <main className="grow">
              {children}
            </main>
          <Footer/>
        </div>
        </AOSInit>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#fff"
            }
          }}
        />
      </body>
    </html>
  );
}
export default RootLayout;