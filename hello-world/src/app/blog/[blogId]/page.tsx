import Link from "next/link";
import "../../styles.css";

export default async function Blog({
  params,
  searchParams,
}: {
  params: Promise<{ blogId: string }>;
  searchParams: Promise<{ lang?: "en" | "kn" | "jp" }>;
}) {
  const { blogId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <>
      <div className="flex flex-row gap-x-10">
        <Link href={`/blog/${blogId}?lang=en`}>English</Link>
        <Link href={`/blog/${blogId}?lang=kn`}>Kannada</Link>
        <Link href={`/blog/${blogId}?lang=jp`}>Japanese</Link>
      </div>
      <h1>Breaking News: {blogId}</h1>
      <p>The following content is in {lang}</p>
    </>
  );
}
