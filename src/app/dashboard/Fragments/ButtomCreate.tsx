"use client";

import { Button } from "@heroui/react";
import ModalAnadirProducto from "./Modals/ModalAñadirProducto";
import { useState, useEffect } from "react";


export default function ButtonCreat({ user }: { user: any }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onPress={() => setIsOpen(true)} className="m-4 p-3 border border-gray-200 rounded-lg 
            inset-shadow-sm inset-shadow-gray-500
         bg-gray-200 transform transition duration-200 
         active:scale-75 active:bg-gray-300">
                Añadir Producto
            </Button>

            <ModalAnadirProducto
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                user={user} />
        </div>
    )
}