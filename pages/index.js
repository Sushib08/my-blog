import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title key="pagetitle">Bienvenue sur le Blog VanLife</title>
        <meta
          name="description"
          content="VanLife voyage blog - lis nos histoires de voyage"
          key="metadescription"
        />
      </Head>

      <div className=" min-h-screen bg-[url('/home.jpg')] relative">
        <div className=" absolute bg-slate-900 inset-0 z-0 opacity-30"></div>
        <SiteHeader className="z-10 relative" />

        <main>
          <div className="min-h-[50vh] flex flex-col items-center justify-center z-10 relative">
            <h1 className="text-6xl text-center text-slate-100">
              Bienvenue sur <span className="text-yellow-400">VanLife</span>{" "}
              Travel Blog
            </h1>
            <div className="mt-20">
              <Link
                href="/blog"
                className="text-2xl text-slate-100 border-slate-100 border-2 rounded-md py-3 px-4 hover:bg-yellow-300 hover:text-slate-800 hover:border-yellow-300 transition"
              >
                Lire notre Blog
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
