"use client";
import React from "react";

import { useEffect, useState } from "react";
import { getAllUsers } from "../api/api";
import { useRouter } from "next/navigation";
export default function Home() {
  const [users, setUsers] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
      return;
    }
    getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
      });
  }, []);

  return (
    <div className="">
      {users.map((user, index) => (
        <div
          className="flex bg-white shadow-xl rounded-lg mx-4 md:mx-auto my-56 max-w-md md:max-w-2xl "
          key={index}
        >
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                Name: {user.displayname}{" "}
              </h2>
              <small className=" ml-80 text-sm text-gray-700">
                Email: {user.email}
              </small>
            </div>
            <p className="text-gray-700">Registered:{user.registered} </p>
            <p className="mt-3 text-gray-700 text-sm font-semibold">
              Timezone: {user.timezone}
            </p>
            <div className="mt-4 flex items-center"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
