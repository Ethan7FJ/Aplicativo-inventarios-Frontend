"use client";

import { Button, Form } from "@heroui/react";
import api from "@/app/Service/api";
import { useRouter } from "next/navigation";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ModalLogin({ isOpen, onClose }: ModalProps) {
    const router = useRouter();
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />
            <div className="relative bg-white rounded-xl shadow-2xl p-6 w-[400px] z-10">
                <header>
                    <h2 className="text-xl font-bold mb-4">Inicio de sesion</h2>

                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-500 duration-100 hover:text-black hover:scale-110 cursor-pointer"
                    >
                        ✕
                    </button>
                </header>
                <main className="p-5 m-5 border-1 border-gray-200 rounded-large shadow-xl/30 shadow-gray-950 duration-150 hover:scale-102">
                    <div>
                        <Form
                            onSubmit={(e)=>{
                                e.preventDefault();
                                let data = Object.fromEntries(new FormData(e.currentTarget));

                                api.post('/inicio-sesion',data).then((res)=>{
                                    localStorage.setItem("token",res.data.token)
                                    router.push("/dashboard"); 
                                }).catch((err)=>{
                                    console.log('No se pudo realizar el inicio de sesion',err)
                                })

                            }}
                        >
                            <div className="flex flex-col items-center m-2 p-2">
                                <label>Usuario</label>
                                <input
                                    required
                                    name="username"
                                    placeholder="Ingresa tu usuario"
                                    type="text"
                                    className="text-center p-2 m-2 rounded-lg border-1"
                                />
                            </div>
                            <div className="flex flex-col items-center m-2 p-2">
                                <label>Contraseña</label>
                                <input
                                    required
                                    name="password"
                                    placeholder="Ingresa tu usuario"
                                    type="password"
                                    className="text-center p-2 m-2 rounded-lg border-1"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <Button type="submit" className="border-1 border-gray-200 text-xl p-2 rounded-lg m-4 bg-blue-300 duration-100 hover:scale-120 hover:bg-blue-500 hover:text-white cursor-pointer">Ingresar</Button>
                            </div>
                        </Form>
                    </div>
                </main>
                <footer>
                    <button
                        onClick={onClose}
                        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Cerrar
                    </button>
                </footer>
            </div>
        </div>
    );
}
