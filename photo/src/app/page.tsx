import Image from "next/image";
import photosArray from "./photos";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-bold my-4">
          New Wonders of the World
        </h1>
        <div className="grid grid-cols-3 gap-x-10">
          {photosArray.map((photo) => (
            <Link key={photo.id} href={`/${photo.id}`}>
              <div className="relative aspect-square w-72 overflow-hidden rounded-2xl border-2 border-amber-400 shadow-2xl/45">
                <Image
                  alt={photo.place}
                  src={photo.src}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
