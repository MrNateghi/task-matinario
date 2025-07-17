"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";

const Dashboard = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth");
    }
  }, [user]);

  if (!user) return null;

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>
        Hello, {user.name.title} {user.name.first} {user.name.last}
      </p>
    </div>
  );
};

export default Dashboard;
