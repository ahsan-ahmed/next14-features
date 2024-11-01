// Route Group layout

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <h1>Inner Auth Layout</h1>
        {children}
      </>
    );
  }
  