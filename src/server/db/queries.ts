import "server-only";
import { db } from ".";
import { auth } from "@clerk/nextjs/server";
import { UploadThingError } from "uploadthing/server";

export async function getImagesByLoggedInUser() {
  const user = auth();
  if (!user.userId) throw new UploadThingError("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}


export async function getImageById(id: number) {

  const user = auth();
  if (!user.userId) 
    throw new UploadThingError("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id)
  });

  if(image?.userId !== user.userId) 
    throw new UploadThingError("Unauthorized");
  if(!image)  
    throw new UploadThingError("Not found");

  return image;
}