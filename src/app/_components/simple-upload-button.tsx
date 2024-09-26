"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "~/utils/uploadthing";
import { toast } from "sonner";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};


export function SimpleUploadButton() {
    const router = useRouter()
    const { inputProps } = useUploadThingInputProps("imageUploader", {
        onUploadBegin() {
          toast("Uploading... ", {
            duration: 100000,
            id: 'upload-begin'
          });
        },
        onClientUploadComplete(){
            toast.dismiss('upload-begin')
            toast("Upload complete!", {
              duration: 4000,
            })
            router.refresh();
        }
    });

    return (
        <div className="">
            <label htmlFor="upload-button">Upload</label>
            <input id="upload-button" type="file" className="sr-only" {...inputProps} />
        </div>
    )
}