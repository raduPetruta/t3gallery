import Image from "next/image";
import { getImageById } from "~/server/db/queries";
import FullPageImageView from "~/app/components/full-image-page";

export default function PhotoPage({
    params: { id: photoId },
} : {
    params: { id: string };
}) {
  return (
    <div>
        <FullPageImageView photoId={Number(photoId)} />
    </div> 
  );
}