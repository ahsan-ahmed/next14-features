import Link from "next/link";

export default function Home() {
  return (
    <div style={{ height: '100%' }}>
      <h1>Home page</h1>

      <ul>
        <li>
          <Link href={"/about"}>About page</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog page</Link>
        </li>
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link href={"/docs"}>Docs</Link>
        </li>
        <li>
          <Link href={"/products"}>Product</Link>
        </li>
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
      </ul>
    </div>
  );
}
