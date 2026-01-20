import React from "react";

export default function Layout({
  children,
  analytics,
  revenue,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div style={{ display: "flex" }}>
        <div>{analytics}</div>
        <div>{revenue}</div>
      </div>
    </>
  );
}
