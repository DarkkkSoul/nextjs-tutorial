import React from "react";

export default async function Layout({
  params,
  searchParams,
  children,
}: {
  params: Promise<{ blogId: string }>;
  searchParams: Promise<{ lang?: "en" | "kn" | "jp" }>;
  children: React.ReactNode;
}) {
  const { blogId } = await params;
  //   const { lang = "en" } = await searchParams;
  return (
    <>
      <div>------------</div>
      <h3>Blog ID: {blogId}</h3>
      {/* <h3>Blog lang: {lang}</h3> */}
      <div>------------</div>
      {children}
    </>
  );
}
