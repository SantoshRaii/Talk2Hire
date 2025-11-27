"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth.action";

export default function LogoutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <button
      onClick={handleSignOut}
      className="px-3 py-2 border rounded"
    >
      Sign-Out
    </button>
  );
}
