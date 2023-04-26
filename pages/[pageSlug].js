import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { getPageSlugs, getSinglePage } from "../lib/pages";

export async function getStaticProps({ params }) {
  const pageData = await getSinglePage(params.pageSlug);

  return {
    props: {
      pageData,
    },
  };
}
export async function getStaticPaths() {
  const pageSlugs = await getPageSlugs();

  return {
    paths: pageSlugs.map((s) => ({
      params: {
        pageSlug: s.slug,
      },
    })),
    fallback: false,
  };
}
export default function Page({ pageData }) {
  return (
    <>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <div className="h-[50vh] min-h-[20rem] bg-[url('/home.jpg')] relative">
        <div className="absolute bg-slate-900 inset-0 z-0 opacity-40"></div>

        <div className="container lg:max-w-4xl mx-auto">
          <SiteHeader className="header-blog-home z-10 relative" />
        </div>

        <h1 className="text-6xl text-center text-slate-100 relative z-10 py-8">
          {pageData.title}
        </h1>
        <p className="relative z-10 text-center text-slate-200 text-2xl">
          Apprendre à Mieux nous Connaître
        </p>
      </div>
      <section className="content-area py-8">
        <article>
          <div
            dangerouslySetInnerHTML={{ __html: pageData.content }}
            className="post-content container mx-auto lg:max-w-4xl"
          />
        </article>
      </section>
      <SiteFooter />
    </>
  );
}
