import Modal from "@/app/components/modal";
import photosArray from "@/app/photos";
import Image from "next/image";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = photosArray.find((photo) => {
    return photo.id === id;
  });
  if (!photo) return <div>Photo not found</div>;
  return (
    <>
      <Modal>
        <div className="flex flex-col gap-y-6 w-full items-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
            <Image
              fill
              src={photo.src}
              alt={photo.place}
              className="object-cover"
            />
          </div>
        </div>
        <div className="font-bold">{photo.description}</div>
        <div className="font-mono">{photo.place}</div>
      </Modal>
    </>
  );
}
