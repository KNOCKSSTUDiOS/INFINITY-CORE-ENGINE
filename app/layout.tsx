import UserBar from "./components/UserBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserBar />
        {children}
      </body>
    </html>
  );
}
