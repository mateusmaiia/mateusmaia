import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-transparent">
      <div className="container mx-auto flex justify-between items-center pb-0">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Maia<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden fixed flex left-0 right-0 -bottom-px z-[9000]  p-0 w-full flex-1">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
