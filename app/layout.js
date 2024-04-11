
import Header from "@/components/module/header";
import "./globals.css";
import Footer from "@/components/module/footer";
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "Pars Style",
  description: "مارکت پلیس پارس استایل",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
         <Header/>
          {children}
        <Footer/>
        <Toaster />
        </body>
    </html>
  );
}
