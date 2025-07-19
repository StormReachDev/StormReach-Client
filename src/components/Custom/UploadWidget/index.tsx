// Imports:
import { useDeleteCloudinaryImage } from '@/hooks/meta';
import { useUploadStore } from '@/stores/useUploadStore';
import { Button } from '@material-tailwind/react';
import { Plus, X } from 'lucide-react';
import { CldUploadWidget } from 'next-cloudinary';

export default function UploadWidget({
  id,
  label,
  onUpload,
  cloudName,
  uploadPreset,
}: {
  id: string;
  label: string;
  onUpload: (_data: { secure_url: string; public_id: string }) => void;
  cloudName: string;
  uploadPreset: string;
}) {
  const { imageUrl, publicId, setImageUrl, setPublicId, clearImage } =
    useUploadStore();
  const mutation = useDeleteCloudinaryImage();

  function handleRemove() {
    mutation.mutate(publicId, {
      onSuccess: () => {
        clearImage();
      },
    });
  }

  return (
    <div className="w-full max-w-full space-y-5 overflow-hidden">
      <label id={id} className="text-xl font-semibold block text-neutral-800">
        {label}
      </label>

      <CldUploadWidget
        uploadPreset={uploadPreset}
        options={{
          maxFiles: 1,
          sources: ['local'],
          clientAllowedFormats: ['jpg', 'png', 'jpeg'],
          folder: 'Client Showcase',
          theme: 'minimal',
        }}
        onSuccess={(results) => {
          if (results?.event === 'success') {
            const { info } = results;
            if (
              typeof info !== 'string' &&
              info?.secure_url &&
              info?.public_id
            ) {
              setImageUrl(info.secure_url);
              setPublicId(info.public_id);
              onUpload({
                secure_url: info.secure_url,
                public_id: info.public_id,
              });
            }
          }
        }}
        config={{
          cloud: {
            cloudName,
          },
        }}
      >
        {({ open }) => (
          <div className="size-[72px] relative bg-background rounded-lg overflow-hidden border border-stroke">
            {imageUrl ? (
              <div className="relative w-full h-full">
                <img
                  src={imageUrl}
                  alt="Uploaded"
                  className="object-cover size-full"
                />
                <button
                  onClick={handleRemove}
                  type="button"
                  className="absolute top-1 right-1 bg-red-500 rounded-full p-1 z-10"
                >
                  <X className="size-3 text-core-white" />
                </button>
              </div>
            ) : (
              <Button
                onClick={() => open?.()}
                type="button"
                className="bg-transparent size-full flex justify-center items-center"
              >
                <Plus className="size-5 text-core-white" />
              </Button>
            )}
          </div>
        )}
      </CldUploadWidget>
    </div>
  );
}
