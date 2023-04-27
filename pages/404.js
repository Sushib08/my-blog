import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <Head>
        <title key="404 page">404 page</title>
      </Head>

      <div className=" min-h-screen bg-[url('/home.jpg')]  relative">
        <div className=" absolute bg-slate-900 inset-0 z-0 opacity-30"></div>
        <SiteHeader className="z-10 relative" />

        <main>
          <Image
            className=" ml-auto mr-auto mt-12"
            src="/404.svg"
            alt="404"
            width="300"
            height="300"
          />
        </main>
      </div>

      <SiteFooter />
    </>
  );
}
