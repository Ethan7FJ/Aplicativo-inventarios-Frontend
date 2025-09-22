"use client";

import { useRouter } from "next/navigation";
import api from "@/app/Service/api";
import Image from "next/image";
import userIMG from "../../Imgs/user.png"
import { useState, useEffect } from "react";
import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";

import "../CSS/header.scss"

/* Componente */
import TablaInventario from "./TablaInventario";

/* Fragments */
import ButtonCreat from "../Fragments/ButtomCreate";

export default function Index() {
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
        <div className="flex flex-col min-h-screen">
            <header className="w-full h-20 bg-cyan-950/80 shadow-lg flex items-center px-6">
                <Navbar position="static" className="">
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem>
                            <Link color="foreground" className="Inventario">
                                Inventrario
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" className="p-2 rounded-sm text-lg duration-300 hover:text-white hover:bg-gray-900/80" href="/acerca">
                                Acerca de
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem className="hidden lg:flex">
                            <Button
                                onPress={() => {
                                    localStorage.removeItem("token");
                                    router.push("/");
                                }}
                                className="text-lg p-2 duration-300 hover:bg-red-400 hover:rounded-lg"
                            >
                                Cerrar sesión
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
                <div className="p-4 bg-gray-700/50 rounded-sm flex flex-col items-center">
                    <Image
                        src={userIMG}
                        alt="Foto de perfil"
                        width={50}          // ancho en px
                        height={50}         // alto en px
                        className="rounded-full"
                    />
                </div>
            </header>
            <main className="flex-1 m-10 p-5 rounded-xl inset-shadow-sm inset-shadow-black/50">
                <TablaInventario />
                <ButtonCreat user={user} />
            </main>
            <footer className="w-full h-16 bg-cyan-950/40 shadow-inner flex items-center justify-center">
                © 2025
            </footer>
        </div>
    );
}
