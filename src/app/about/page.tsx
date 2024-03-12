import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-red-400 font-bold text-5xl">About page</h1>
      <Link href="/">Go to Home Page</Link>
    </>
  );
}
