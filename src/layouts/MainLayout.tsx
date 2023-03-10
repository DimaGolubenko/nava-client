import { PropsWithChildren } from "react";

import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import MiniCart from "@/components/MiniCart";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="app flex flex-col min-h-screen relative">
      <AppHeader />
      <main className="grow">{children}</main>
      <AppFooter />
      <MiniCart />
    </div>
  );
}
