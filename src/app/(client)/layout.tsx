import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: {
    template: "%s - Shopcart oline store",
    default: "Shopcart online store",
  },
  description: "Shopcart online store, your one stop shop for all your neeeds,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className="flex flex-col min-h-screen">
        <Header/>
          <main>
            {children}
          </main>
        <Footer/>
      </div>
    </ClerkProvider>
  );
}
