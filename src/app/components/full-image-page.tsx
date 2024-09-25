import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { getImageById } from "~/server/db/queries";

export default async function FullPageImageView(props: { photoId: number }) {

  const image = await getImageById(props.photoId);   
  const uploaderInfo = await clerkClient.users.getUser(image.userId);


  console.log(image);
  return (
    <div className="flex w-full h-full min-w-0">
        <div className="flex-shrink flex justify-center items-center">
            <img className="object-contain flex-shrink-0" src={image.url} alt={image.name} width={1200} height={700}/>
        </div>
        <div className="w-48 flex flex-col flex-shrink-0 border-l gap-2">
            <div className="text-lg border-b text-center p-2">{image.name}</div>
            <div className="flex flex-col p-2">
              <span>
              Uploaded By: {uploaderInfo.fullName}
              </span>
            </div>
            <div className="flex flex-col p-2">
              <span>
              Created On: {new Date(image.createdAt).toLocaleDateString()}  
              </span>
            </div>
        </div>
    </div> 
  );
}

function getUserById(userId: string) {
  throw new Error("Function not implemented.");
}
