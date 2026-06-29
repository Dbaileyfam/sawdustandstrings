import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <>
      <div className="ss-paper-bg ss-wood-frame relative min-h-screen">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 90% 50% at 50% -10%, rgba(201,162,39,0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(139,69,19,0.08) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
}
