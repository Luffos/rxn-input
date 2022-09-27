import { useRouter } from "next/router";

function RedirectPage({}) {
  const router = useRouter();

  if (typeof window !== "undefined") {
    router.push("/docs/getting-started");
    return;
  }
}

export default RedirectPage;
