import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import Aside from "@/components/Aside/Aside";
import Breadcrumb from "@/components/Main/Breadcrumb/Breadcrumb";
import joiner from "classnames";
import { inter, lato } from "@/Fonts/FontProperty";

export const metadata: Metadata = {
  title: "Web dev challenge",
  description: "This is getting exciting",
  icons: {
    icon: "images/MainLogo.svg",
  },
  creator: "Mossarelladev",
  authors: { name: "Mossarelladev", url: "https://mossarelladev.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link
          rel="shortcut icon"
          href="/images/icon.ico"
        />

        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content="https://mossarelladev.com"
        />
        <meta
          property="og:title"
          content="MossarellaDev | Web Portfolio"
        />
        <meta
          property="og:description"
          content="Creative frontend developer passionate about crafting visually stunning websites and digital experiences. Giddy up, let's hit the trail!
"
        />
        <meta
          property="og:image"
          content="https://mossarelladev.com/images/cover.png"
        />

        <meta
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="twitter:url"
          content="https://mossarelladev.com"
        />
        <meta
          property="twitter:title"
          content="MossarellaDev | Web Portfolio"
        />
        <meta
          property="twitter:description"
          content="Creative frontend developer passionate about crafting visually stunning websites and digital experiences. Giddy up, let's hit the trail!
"
        />
        <meta
          property="twitter:image"
          content="https://mossarelladev.com/images/cover.png"
        /> */}
      </head>
      <body
        className={joiner(
          inter.variable,
          lato.variable,
          "maxSection bg-[#f5f5f5]"
        )}
      >
        <nav>
          <Nav></Nav>
        </nav>
        <section className="flex flex-col sm:flex-col md:flex-col lg:flex-row  min-h-[calc(100vh-108px)]">
          <aside>
            <Aside></Aside>
          </aside>
          <main className="flex flex-col w-full flex-1">
            <div className=" relative bg-[var(--grey)] flex-1  p-6 flex flex-col gap-y-4 h-full shadow-inner smooth w-full">
              <Breadcrumb></Breadcrumb>
              {children}
            </div>
          </main>
        </section>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
