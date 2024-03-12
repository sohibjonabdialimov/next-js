import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-red-400 font-bold text-5xl">Hello World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt ad incidunt eveniet quaerat eius, eos nisi in quo blanditiis assumenda modi dolore iste totam vero libero. Facere, similique quia?</p>
      <Link href="/about">Go to About Page</Link>
    </>
  );
}
