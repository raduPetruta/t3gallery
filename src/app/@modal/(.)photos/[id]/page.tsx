import Image from "next/image";
import { getImageById } from "~/server/db/queries";
import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-image-page";

export default function PhotoModal({
    params: { id: photoId },
} : {
    params: { id: string };
}) {
  return (
    <div>
        <Modal>
            <FullPageImageView photoId={Number(photoId)} />
        </Modal>
    </div> 
  );
}