import { useRouter } from "next/navigation";

export function redirect(to: string) {
  const router = useRouter();

  router.push(to);
}
