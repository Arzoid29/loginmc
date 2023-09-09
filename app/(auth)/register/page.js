"use client";
import React, { useState } from "react";
import { register } from "../../../api/api";
import Link from "next/link";
export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    verify_password: "",
    company: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register(
        formData.username,
        formData.email,
        formData.password,
        formData.verify_password,
        formData.company
      );
      setSuccess("Congrats your account is now registered~");
      setError(null)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-12 md:p-24">
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Username"
          />
        </div>
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="email"
          />
        </div>
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <input
            type="password"
            name="verify_password"
            value={formData.verify_password}
            onChange={handleChange}
            className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Confirm your password"
          />
        </div>

        <div className="flex items-center text-lg mb-6 md:mb-8">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Company"
          />
        </div>
        {success && (
          <div>
            {success}{" "}
            <Link href="/login" className="underline text-blue-400">
              go to login
            </Link>{" "}
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
        >
          Register
        </button>

        <Link className="underline text-blue-400" href="/login">
          Do you have an account?, Login
        </Link>
      </form>
    </div>
  );
}
