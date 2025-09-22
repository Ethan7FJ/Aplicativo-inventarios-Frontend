"use client";

import { useEffect, useState } from "react";
import api from "@/app/Service/api";
import { Button, Form } from "@heroui/react";
import { motion } from "framer-motion";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    user: any;
};

type Categoria = {
    id: number;
    categora: string;
};

type Proveedor = {
    id_proveedor: number;
    nombre: string;
};

export default function ModalAnadirProducto({ isOpen, onClose, user }: ModalProps) {
    if (!isOpen) return null;

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [proveedores, setProveedores] = useState<Proveedor[]>([]);

    useEffect(() => {
        api
            .get("/categorias")
            .then((res) => {
                setCategorias(res.data.categorias);
                setProveedores(res.data.proveedores);
            })
            .catch((err) => {
                console.log("hubo un error", err);
            });
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />
            <div className="relative bg-white rounded-xl shadow-2xl w-[90%] max-w-[500px] max-h-[90vh] flex flex-col z-10">
                <header className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold">Registro</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 duration-100 hover:text-black hover:scale-110 cursor-pointer"
                    >
                        ✕
                    </button>
                </header>
                <main className="flex-1 overflow-y-auto p-4 space-y-4">
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            let data = Object.fromEntries(new FormData(e.currentTarget));

                            api
                                .post("/registro-productos", data)
                                .then((res) => {
                                    alert(`${res.data.alerta}`);
                                    window.location.reload();
                                })
                                .catch((err) => {
                                    console.log("No se pudo realizar el registro", err);
                                });
                        }}
                    >
                        <div className="flex flex-col">
                            <label>Serial del producto</label>
                            <input
                                required
                                name="serial_producto"
                                placeholder="Ingresa el serial"
                                type="number"
                                className="text-center p-2 mt-1 rounded-lg border"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>Nombre del producto</label>
                            <input
                                required
                                name="nombre_producto"
                                placeholder="Nombre del producto"
                                type="text"
                                className="text-center p-2 mt-1 rounded-lg border"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>Descripcion</label>
                            <textarea
                                required
                                name="descripcion_producto"
                                placeholder="Descripcion"
                                className="text-center p-2 mt-1 rounded-lg border"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>Cantidad del producto</label>
                            <input
                                required
                                name="cantidad_producto"
                                placeholder="Cantidad"
                                type="number"
                                className="text-center p-2 mt-1 rounded-lg border"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>Selecciona la categoria</label>
                            <select
                                name="id_categoria"
                                className="p-2 mt-1 rounded-lg border"
                            >
                                <option>Selecciona uno</option>
                                {categorias.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.categora}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label>Stock del producto</label>
                            <input
                                required
                                name="stock"
                                placeholder="Stock"
                                type="number"
                                className="text-center p-2 mt-1 rounded-lg border"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>Costo unitario</label>
                            <input
                                required
                                name="costo_unitario"
                                placeholder="Costo ej: 33.00"
                                type="number"
                                step="0.01"
                                className="text-center p-2 mt-1 rounded-lg border"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>Precio Venta</label>
                            <input
                                required
                                name="precio_venta"
                                placeholder="Precio ej:33.00"
                                type="number"
                                step="0.01"
                                className="text-center p-2 mt-1 rounded-lg border"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>Imagen del producto</label>
                            <input
                                required
                                name="imagen"
                                type="file"
                                accept="image/*"
                                className="p-2 mt-1 rounded-lg border"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>Selecciona el proveedor</label>
                            <select
                                name="id_proveedor"
                                className="p-2 mt-1 rounded-lg border"
                            >
                                <option>Selecciona uno</option>
                                {proveedores.map((item) => (
                                    <option key={item.id_proveedor} value={item.id_proveedor}>
                                        {item.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label>Responsable del registro</label>
                            <input
                                type="text"
                                value={`${user.nombre_usuario} ${user.apellido_usuario}`}
                                className="text-center p-2 mt-1 rounded-lg border bg-gray-100"
                                readOnly
                            />
                            <input
                                type="hidden"
                                name="id_user"
                                value={user.id}
                            />
                        </div>

                        <div className="flex justify-center mt-4">
                            <Button
                                type="submit"
                                className="w-full border border-gray-200 text-lg p-2 rounded-lg bg-blue-500 text-white duration-150 hover:scale-105 hover:bg-blue-600"
                            >
                                Registrar
                            </Button>
                        </div>
                    </Form>
                </main>
                <footer className="p-4 border-t">
                    <button
                        onClick={onClose}
                        className="w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition cursor-pointer"
                    >
                        Cerrar
                    </button>
                </footer>
            </div>
        </div>
    );
}
