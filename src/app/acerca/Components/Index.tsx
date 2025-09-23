"use client";

import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import api from "@/app/Service/api";
import { useState, useEffect } from "react";

/* Imagenes */
import Image from "next/image";
import userIMG from "../../Imgs/user.png"
import lk from "../../dashboard/Imgs/FooterImg/linkedin.png"
import gm from "../../dashboard/Imgs/FooterImg/gmail.png"
import git from "../../dashboard/Imgs/FooterImg/github.png"

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
            <main className="flex-1 m-10 p-5 rounded-xl inset-shadow-sm inset-shadow-black/50">

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
    )
}