"use client";

import { useRouter } from "next/navigation";
import api from "@/app/Service/api";
import { useState, useEffect } from "react";
import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";

/* Componente */
import TablaInventario from "./TablaInventario";

/* Fragments */
import ButtonCreat from "../Fragments/ButtomCreate";

/* Imagenes */
import Image from "next/image";
import userIMG from "../../Imgs/user.png"
import lk from "../Imgs/FooterImg/linkedin.png"
import gm from "../Imgs/FooterImg/gmail.png"
import git from "../Imgs/FooterImg/github.png"

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
                            <Link color="foreground">
                                <Button className="p-2 rounded-sm text-lg text-white cursor-no-drop duration-150 hover:bg-cyan-600 transform transition hover:scale-110">Inventario</Button>
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="/acerca">
                                <Button className="p-2 rounded-sm text-lg text-white hover:bg-cyan-600 transform transition duration-150 active:scale-75 active:inset-shadow-sm active:inset-shadow-cyan-90000">Acerca de</Button>
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
                                className="text-lg p-2 duration-300 hover:bg-red-400 hover:rounded-lg text-white"
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
            <footer className="w-full h-16 bg-cyan-950/40 shadow-inner flex items-center justify-center p-3">
                <div className="flex gap-[20px] flex-wrap items-center">
                    <div>© 2025 - September</div>
                    <div className="grow flex gap-[20px] items-center">
                        <h1>Contact Me:</h1>
                        <Link href="https://www.linkedin.com/in/johan-fetecua-23a026358" target="_blank" rel="noopener noreferrer">
                            <Image
                                src={lk}
                                alt="linkedin"
                                width={40}          // ancho en px
                                height={40}         // alto en px
                                className="rounded-full"
                            />
                        </Link>
                        <Link href="mailto:johanfetecua11@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src={gm}
                                alt="linkedin"
                                width={40}          // ancho en px
                                height={40}         // alto en px
                                className="rounded-full"
                            />
                        </Link>
                        <Link href="https://github.com/Ethan7FJ" target="_blank" rel="noopener noreferrer">
                            <Image
                                src={git}
                                alt="linkedin"
                                width={40}          // ancho en px
                                height={40}         // alto en px
                                className="rounded-full"
                            />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
