

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="p-2 max-w-screen border-2 border-zinc-900">free access to paid content on reffer</div>
        {children}
      </body>
    </html>
  );
}