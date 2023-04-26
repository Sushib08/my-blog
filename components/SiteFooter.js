import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <>
      <footer id="site-footer" className="bg-slate-200 flex">
        <div className="flex justify-between items-center container mx-auto lg:max-w-5xl">
          <div className="py-3">&copy; 2022-2023 VanLife</div>
        </div>
        <ul className="flex [&>li>a]:px-8">
          <li className="mr-4">
            <Link href="https://www.instagram.com/?hl=fr">
              <Image
                src="/social-network/instagram.webp"
                alt="instagram"
                width="40"
                height="40"
                className=" hover:translate-x-[1px] hover:translate-y-[1px]"
              />
            </Link>
          </li>
          <li className="mr-4">
            <Link href="https://www.pinterest.com/?hl=fr">
              <Image
                src="/social-network/pinterest.png"
                alt="pinterest"
                width="40"
                height="40"
                className=" hover:translate-x-[1px] hover:translate-y-[1px]"
              />
            </Link>
          </li>
          <li className="mr-4">
            <Link href="https://twitter.com/?lang=fr">
              <Image
                src="/social-network/twitter.png"
                alt="twitter"
                width="40"
                height="40"
                className=" hover:translate-x-[1px] hover:translate-y-[1px]"
              />
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
