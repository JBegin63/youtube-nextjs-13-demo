import Header from "./Header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Josephs Website</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
