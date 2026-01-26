import Link from "next/link";

export default function F1() {
  return (
    <>
      <div>F1 page</div>
      <Link href="/f1/f2">F2</Link>
      <Link href="/f3">F3</Link>
    </>
  );
}
