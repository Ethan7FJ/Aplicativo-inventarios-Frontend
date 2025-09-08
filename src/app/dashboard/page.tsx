"use client";

import { useRouter } from "next/navigation";
import api from "../Service/api";
import { useState, useEffect } from "react";
import { Button } from "@heroui/react";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
      return;
    }

    api
      .get("/perfil", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch(() => {
        localStorage.removeItem("token");
        router.push("/");
      });
  }, [router]);

  if (!user) {
    return <p className="text-center p-5">Cargando ....</p>;
  }

  return (
    <div>
      <p>Bienvenido {user.username}</p>

      <footer>
        <Button
          onPress={() => {
            localStorage.removeItem("token");
            router.push("/");
          }}
        >
          Cerrar sesión
        </Button>
      </footer>
    </div>
  );
}
