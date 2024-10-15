import Image from "next/image";

export default function Header() {
    return (
      <>
        <header className="m-2 website-links">
            <a href="https://portfolio-diyanaiv.vercel.app/" target="_blank">
              <Image height={40} width={40} src="/portfolio.png" alt="portfolio website png" />
            </a>
        </header>
      </>
    );
  }
  