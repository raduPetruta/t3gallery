import Image from "next/image";
import { getImageById } from "~/server/db/queries";

export default async function FullPageImageView(props: { photoId: number }) {

  const image = await getImageById(props.photoId);   

  console.log(image);
  return (
    <div>
        <img src={image.url} alt={image.name} width={450} height={450} />
    </div> 
  );
}