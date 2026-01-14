"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/admin/dashboard");
  };

  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <h2>Admin Login</h2>
      <form onSubmit={login}>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
        <button>Login</button>
      </form>
    </div>
  );
}
