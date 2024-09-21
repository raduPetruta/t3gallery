import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/6T0oJ7aVQOaBgYHNkQLJmDuGHUkbt4NPTcfFjdy7We0l5SIA",
  "https://utfs.io/f/6T0oJ7aVQOaBNOdVGqlDLOsbCvxptfPQYhVMce7AHujWKo1S",
  "https://utfs.io/f/6T0oJ7aVQOaBs1BqXnVYh5n9ebxXz86W7JdCR4lQZSEKDFfj",
  "https://utfs.io/f/6T0oJ7aVQOaB745EWb1hj3JzYW2xuHZK1oOCUdNtEwfF4bMr"
]

const mockImages = mockUrls.map((url, index) => ({id: index + 1, url}))

export default function HomePage() {
  return (
    <main className="">
        <div className="flex flex-wrap gap-4">
          {
            [...mockImages, ...mockImages, ...mockImages].map((image) => (
              <div key={image.id} className="w-48">
                 <img src={image.url} alt="image"/>
              </div>
            ))
          }
        </div>
    </main>
  );
}
