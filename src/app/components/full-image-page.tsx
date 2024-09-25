import Image from "next/image";
import { getImageById } from "~/server/db/queries";

export default async function FullPageImageView(props: { photoId: number }) {

  const image = await getImageById(props.photoId);   

  console.log(image);
  return (
    <div className="flex w-full h-full min-w-0">
        <div className="flex-shrink flex justify-center items-center">
            <img className="object-contain flex-shrink-0" src={image.url} alt={image.name}/>
        </div>
        <div className="w-48 flex flex-col flex-shrink-0">
            <div className="text-xl font-bold">{image.name}</div>
        </div>
    </div> 
  );
}