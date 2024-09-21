import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/6T0oJ7aVQOaBgYHNkQLJmDuGHUkbt4NPTcfFjdy7We0l5SIA",
  "https://utfs.io/f/6T0oJ7aVQOaBNOdVGqlDLOsbCvxptfPQYhVMce7AHujWKo1S",
  "https://utfs.io/f/6T0oJ7aVQOaBs1BqXnVYh5n9ebxXz86W7JdCR4lQZSEKDFfj",
  "https://utfs.io/f/6T0oJ7aVQOaB745EWb1hj3JzYW2xuHZK1oOCUdNtEwfF4bMr"
]

const mockImages = mockUrls.map((url, index) => ({id: index + 1, url}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
        <div className="flex flex-wrap gap-4">
          
            {posts.map((post, index) => (
              <div key={post.id +"-"+ index} className="w-48">
                {post.name}
              </div>
            ))}

            {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
              <div key={image.id +"-"+ index} className="w-48">
                 <img src={image.url} alt="image"/>
              </div>
            ))}
        </div>
    </main>
  );
}
