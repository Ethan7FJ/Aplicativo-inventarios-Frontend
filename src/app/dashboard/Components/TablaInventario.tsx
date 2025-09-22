"use client";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@heroui/react";
import { use, useEffect, useState } from "react";
import api from "@/app/Service/api";

/* import * as ContextMenu from "@radix-ui/react-context-menu"; */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

type Productos = {
    id: number,
    serial_producto: string,
    nombre_producto: string,
    descripcion_producto: string,
    cantidad_producto: number,
    categora: string,
    stock: number,
    costo_unitario: number,
    precio_venta: number,
    nombre: string,
    nombre_usuario: string,
    apellido_usuario: string,
};

export default function TablaInventario() {


    const [productos, setProductos] = useState<Productos[]>([]);

    useEffect(() => {
        api.get("/productos").then((res) => {
            setProductos(res.data.productos)
        }).catch((err) => {
            console.log(err)
        })
    }, []);


    function BorrarProducto({ id }: { id: any }) {

        if (confirm("¿Estas seguro de eliminar el producto?")) {
            api.delete(`/borrar/producto/${id}`).then((res) => {
                alert(res.data.mensaje)
                setProductos((prev) => prev.filter((p) => p.id !== id));
            }).catch((err) => {
                console.log("Hubo un error", err)
            })
        } else {
            return
        }
    }

    return (
        <div>
            <Table aria-label="Example static collection table" className="min-w-full border border-gray-200 rounded-lg shadow-md">
                <TableHeader className="bg-gray-100 text-gray-700">
                    <TableColumn className="px-4 py-2 text-left">Serial</TableColumn>
                    <TableColumn className="px-4 py-2 text-left">Nombre</TableColumn>
                    <TableColumn className="px-4 py-2 text-left">Descripcion</TableColumn>
                    <TableColumn className="px-4 py-2 text-left">Cantidad</TableColumn>
                    <TableColumn className="px-4 py-2 text-left">Categoria</TableColumn>
                    <TableColumn className="px-4 py-2 text-left">Stock</TableColumn>
                    <TableColumn className="px-4 py-2 text-left">Costo Unitario</TableColumn>
                    <TableColumn className="px-4 py-2 text-left">Precio Venta</TableColumn>
                    <TableColumn className="px-4 py-2 text-left">Preveedor</TableColumn>
                    <TableColumn className="px-4 py-2 text-left">Empleado que registro</TableColumn>
                    <TableColumn className="px-4 py-2 text-left">Accion</TableColumn>
                </TableHeader>
                <TableBody className="divide-y divide-gray-200">
                    {productos.map((item) => (
                        <TableRow key={item.id} className="duration-150 hover:bg-gray-300">
                            <TableCell className="px-4 py-2">{item.serial_producto}</TableCell>
                            <TableCell className="px-4 py-2">{item.nombre_producto}</TableCell>
                            <TableCell className="px-4 py-2">{item.descripcion_producto}</TableCell>
                            <TableCell className="px-4 py-2">{item.cantidad_producto}</TableCell>
                            <TableCell className="px-4 py-2">{item.categora}</TableCell>
                            <TableCell className="px-4 py-2">{item.stock}</TableCell>
                            <TableCell className="px-4 py-2">{item.costo_unitario}</TableCell>
                            <TableCell className="px-4 py-2">{item.precio_venta}</TableCell>
                            <TableCell className="px-4 py-2">{item.nombre}</TableCell>
                            <TableCell className="px-4 py-2">{item.nombre_usuario} {item.apellido_usuario}</TableCell>
                            <TableCell className="px-4 py-2">
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger asChild>
                                        <Button>
                                            More Options
                                        </Button>
                                    </DropdownMenu.Trigger>

                                    <DropdownMenu.Content className="min-w-[200px] bg-white rounded-md shadow-md p-1 border z-50">
                                        <DropdownMenu.Item
                                            className="px-3 py-2 rounded hover:bg-gray-200 cursor-pointer"
                                        >
                                            🔍 Ver detalles
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Item
                                            className="px-3 py-2 rounded hover:bg-gray-200 cursor-pointer"
                                        >
                                            ✏️ Editar
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Item
                                            className="px-3 py-2 rounded hover:bg-gray-200 cursor-pointer"
                                            onClick={() => BorrarProducto({ id: item.id })}
                                        >
                                            🗑️ Eliminar
                                        </DropdownMenu.Item>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}