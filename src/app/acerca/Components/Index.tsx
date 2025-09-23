"use client";

import { Navbar, NavbarContent, NavbarItem, Link, Button, CircularProgress } from "@heroui/react";
import { useRouter } from "next/navigation";
import api from "@/app/Service/api";
import { useState, useEffect } from "react";

/* Imagenes */
import Image from "next/image";
import userIMG from "../../Imgs/user.png"
import lk from "../../dashboard/Imgs/FooterImg/linkedin.png"
import gm from "../../dashboard/Imgs/FooterImg/gmail.png"
import git from "../../dashboard/Imgs/FooterImg/github.png"


import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import InfoApp from "../Fragments/InfoAPP";
import MyInfo from "../Fragments/MyInfo";

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
        return <CircularProgress aria-label="Loading..." />;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="w-full h-20 bg-cyan-950/80 shadow-lg flex items-center px-6">
                <Navbar position="static" >
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem>
                            <Link color="foreground" href="/dashboard">
                                <Button className="p-2 rounded-sm text-lg text-white hover:bg-cyan-600 transform transition duration-150 active:scale-75 active:inset-shadow-sm active:inset-shadow-cyan-90000">Inventrario</Button>
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground">
                                <Button className="p-2 rounded-sm text-lg text-white cursor-no-drop duration-150 hover:bg-cyan-600 transform transition hover:scale-110">Acerca de</Button>
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
                <Tabs
                    aria-label="Options"
                    color="primary"
                    variant="bordered"
                    classNames={{
                        tabList: "gap-4 bg-white shadow-md rounded-xl px-4 py-2",
                        tab: "px-6 py-2 text-md font-medium text-gray-600 hover:text-cyan-600",
                        tabContent: "group-data-[selected=true]:text-cyan-700",
                    }}
                >
                    <Tab key="app" title="App Info">
                        <Card className="shadow-lg border border-gray-100">
                            <CardBody className="p-6">
                                <InfoApp />
                            </CardBody>
                        </Card>
                    </Tab>

                    <Tab key="info" title="More Info">
                        <Card className="shadow-lg border border-gray-100">
                            <CardBody className="p-6">
                                <MyInfo />
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
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