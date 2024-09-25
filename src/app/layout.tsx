import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { TopNav } from "./_components/TopNav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children, modal
}: Readonly<{ 
    children: React.ReactNode,
    modal: React.ReactNode,
  }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} flex flex-col gap-6`}>
      <ClerkProvider>
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        ></NextSSRPlugin>
        <body>
          <TopNav />
          {children}
          {modal}
          <div id="modal-root"></div>
        </body>
      </ClerkProvider>
    </html>
  );
}
