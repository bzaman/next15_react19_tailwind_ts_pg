import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import IconShoppingCart from "@/components/icons/shopping-cart";
import IconUser from "@/components/icons/IconUser";
import LogoSvg from "@/components/icons/logo-svg";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="inline-block">
            <LogoSvg size={40} />
          </Link>
        </div>
      </div>
    </header>
  );
}
