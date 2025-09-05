"use client";

import { Form, Input } from "@heroui/react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ModalLogin({ isOpen, onClose }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />
            <div className="relative bg-white rounded-xl shadow-2xl p-6 w-[400px] z-10">
                <header>
                    <h2 className="text-xl font-bold mb-4">Login</h2>

                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </header>
                <main>
                    <div>
                        <Form>
                            <div className="flex flex-col items-center">
                                <label>Usuario</label>
                                <input
                                    required
                                    name="username"
                                    placeholder="Ingresa tu usuario"
                                    type="text"
                                    className="text-center p-2 m-2 rounded-lg border-1"
                                />
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
