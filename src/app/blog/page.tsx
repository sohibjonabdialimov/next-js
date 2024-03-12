"use client";
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();
  
  function handleClick() {
    router.push("/users");
  }
  return (
    <>
      <h1>Blog page</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleClick}
      >
        Users Page
      </button>
    </>
  );
}
