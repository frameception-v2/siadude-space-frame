/* eslint-disable @typescript-eslint/no-unused-vars */
import "~/app/globals.css";
import type { Metadata } from "next";
import { ThemeProviderClient } from "~/components/providers/theme-provider-client";
import { ThemeToggle } from "~/components/ui/theme-toggle";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";
import { Providers } from "~/app/providers";
import { NavActions } from "~/components/nav-actions";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

const appUrl =
  process.env.NEXT_PUBLIC_URL ||
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

export const metadata: Metadata = {
  title: PROJECT_TITLE,
  description: PROJECT_DESCRIPTION,
  metadataBase: new URL(appUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderClient>
          <Providers>
            <SidebarProvider>
              <SidebarInset>
                <header className="flex h-14 shrink-0 items-center gap-2">
                  <div className="flex flex-1 items-center gap-2 px-3">
                    <span className="ml-2 line-clamp-1">{PROJECT_TITLE}</span>
                  </div>
                  <div className="ml-auto px-3 flex items-center gap-2">
                    <ThemeToggle />
                    <NavActions />
                  </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 px-4 py-10">
                  {children}
                </div>
              </SidebarInset>
            </SidebarProvider>
          </Providers>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PROJECT_TITLE, PROJECT_DESCRIPTION, EMPIRE_BUILDER_URL } from "~/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: PROJECT_TITLE,
  description: PROJECT_DESCRIPTION,
  // Frame metadata
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://placehold.co/1200x630/4338ca/ffffff?text=MySpace+Empire+Builder",
    "fc:frame:button:1": "Visit Empire Builder",
    "fc:frame:post_url": EMPIRE_BUILDER_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
