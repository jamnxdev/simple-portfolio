import Link from "next/link";
import { Button } from "../ui/button";
import { NAV_ITEMS } from "@/config/site";

export default function Header() {
  return (
    <header className="fixed block h-12 border-x-2 border-dashed top-0 z-10 left-1/2 -translate-x-1/2 max-w-4xl backdrop px-2 backdrop-blur-sm w-full">
      <nav className="flex items-center justify-between h-full">
        <div>
          <Link href={"/"}>/home</Link>
        </div>
        <div className="space-x-2">
          {NAV_ITEMS.map((item, key) => (
            <Link href={item.href} key={key}>
              <Button variant={"link"} className={"px-0 text-base"}>
                {item.title}
              </Button>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
