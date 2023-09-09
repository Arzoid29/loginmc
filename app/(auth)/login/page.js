"use client";
import React, { useState } from "react";
import { login } from "../../../api/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="p-12 md:p-24" onSubmit={handleLogin}>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <input
          type="email"
          id="email"
          className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <input
          type="password"
          id="password"
          className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
        type="submit"
      >
        Login
      </button>
      <Link className="underline text-blue-400" href="/register">
        Does not have an Account?, Sign Up
      </Link>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
