// Nested layouts

export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <h1>Product features</h1>
    </>
  );
}
