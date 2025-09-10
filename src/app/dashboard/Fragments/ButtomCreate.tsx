"use client";

import { Button } from "@heroui/react";
import ModalAñadirProducto from "./Modals/ModalAñadirProducto";
import { useState, useEffect} from "react";


type ModalProps = {
    user: string;
};

export default function ButtonCreat({user}: ModalProps) {

    const [isOpen,setIsOpen] = useState(false);

    return (
        <div>
            <Button onPress={()=> setIsOpen(true)}>
                Añadir Producto
            </Button>

            <>
                <ModalAñadirProducto isOpen={isOpen} onClose={() => setIsOpen(false)} user={user}/>
            </>
        </div>
    )
}