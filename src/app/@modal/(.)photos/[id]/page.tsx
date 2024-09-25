import Image from "next/image";
import { getImageById } from "~/server/db/queries";

export default async function PhotoModal({
    params: { id: photoId },
} : {
    params: { id: string };
}) {

  const image = await getImageById(Number(photoId));   

  console.log(image);
  return (
    <div>
        Photo {photoId}
        <img src={image.url} alt={image.name} width={450} height={450} />
    </div> 
  );
}