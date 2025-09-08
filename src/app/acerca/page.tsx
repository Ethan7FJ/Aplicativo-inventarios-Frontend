"use client";

import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import api from "../Service/api";
import { useState, useEffect } from "react";

import userIMG from "../Imgs/user.png"
import Image from "next/image";

export default function AcercaDe() {
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
            <header className="flex flex-row">
                <Navbar position="static" className="rounded-sm border-b-1 border-r-1 border-gray-900/50 shadow-2xl shadow-gray-900/50">
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem>
                            <Link color="foreground" className="p-2 rounded-sm text-lg duration-300 hover:text-white hover:bg-gray-900/80" href="/dashboard">
                                Inventrario
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" className="bg-gray-300/50 p-2 rounded-sm text-lg border-b-1 border-l-1 border-r-1 border-gray-600/50" >
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
                    {/* <h1 className="">{user.username}</h1> */}
                </div>
            </header>
            <p>
                oda
            </p>
        </div>
    )
}