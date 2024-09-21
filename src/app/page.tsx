import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";

//used in order to not cache the page on the prod // dynamic page
export const dynamic = "force-dynamic";
 
export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) =>  desc(model.id)
  })

  return (
    <main className="">
        <div className="flex flex-wrap gap-4">
            {[...images, ...images, ...images].map((image, index) => (
              <div key={image.id +"-"+ index} className="w-48 flex flex-col">
                 <img src={image.url} alt="image"/>
                 <div className="image-name">{image.name}</div>
              </div>
            ))}
        </div>
    </main>
  );
}
