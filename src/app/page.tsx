import { SignedIn, SignedOut } from "@clerk/nextjs";
import { get } from "http";
import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";
import { getImagesByLoggedInUser } from "~/server/db/queries";

//used in order to not cache the page on the prod // dynamic page
export const dynamic = "force-dynamic";
 
async function Images() {
 
  const images = await getImagesByLoggedInUser();
   
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, index) => (
        <div key={image.id} className="w-48 flex flex-col">
          <img src={image.url} alt="image"/>
          <div className="image-name">{image.name}</div>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {
 

  return (
    <main className="">

        <SignedOut> 
          <div className="w-full h-full text-2xl">
            Please sign in to view your gallery
          </div>
        </SignedOut>

        <SignedIn>
          <Images />
        </SignedIn>
        
    </main>
  );
}
