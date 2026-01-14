"use client";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/admin/login");
    });
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}
