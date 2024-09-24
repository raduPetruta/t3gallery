import { auth } from "@clerk/nextjs/server";
import { randomInt } from "crypto";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 15 } })
    .middleware(async ({ req }) => {
      const user = auth();
      if (!user.userId) 
        throw new UploadThingError("Unauthorized");
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      try {
        // Await the database insert operation and ensure that the insert query is properly handled
        await db.insert(images).values({
          name: file.name,
          url: file.url,
          userId: metadata.userId,
        });
        console.log("File successfully inserted into the DB", file.url);
      } catch (error) {
        console.error("Error inserting file into the database:", error);
      }
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
