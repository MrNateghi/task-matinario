"use client";

import { useUser } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/app/components/modules/scss/auth/auth.module.scss";
import Input from "@/app/components/elements/Input";
import Button from "@/app/components/elements/Button";

const Auth = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser, user } = useUser();
  const router = useRouter();

  const validatePhone = (phone: string) => {
    const phoneRegex = /^09[0-9]{9}$/;
    return phoneRegex.test(phone);
  };

  const handleLogin = async () => {
    if (!validatePhone(phone)) {
      setError("should start with 09 and 11 number character");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=1&nat=us"
      );
      const data = await response.json();
      const user = data.results[0];

      const userData = {
        name: user.name,
        email: user.email,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      router.push("/dashboard");
    } catch (error) {
      setError("Fetch Error!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div className={styles.authContainer}>
      <h1>WELLCOME to Task!!</h1>
      <div className={styles.form}>
        <Input value={phone} onChange={setPhone} label="phone" error={error} />
        <Button onClick={handleLogin} disabled={loading}>
          {loading ? "loading..." : "login"}
        </Button>
      </div>
    </div>
  );
};

export default Auth;
