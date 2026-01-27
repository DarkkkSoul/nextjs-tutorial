import "./globals.css";

export default function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {props.modal}
        {props.children}
      </body>
    </html>
  );
}
