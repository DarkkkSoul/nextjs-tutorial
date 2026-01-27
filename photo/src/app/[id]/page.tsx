import Image from "next/image";
import photosArray from "../photos";

export default async function PhotoPage({
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
      <div className="flex flex-col gap-y-6 w-full h-screen items-center justify-center">
        <div className="w-full max-w-xl aspect-square relative">
          <Image
            fill
            src={photo.src}
            alt={photo.place}
            className="object-cover"
          />
        </div>
        <div className="font-bold">{photo.description}</div>
        <div className="font-mono">{photo.place}</div>
      </div>
    </>
  );
}
