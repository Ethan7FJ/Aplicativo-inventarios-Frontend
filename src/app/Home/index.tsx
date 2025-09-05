"use client"

import home from '../Imgs/home.jpg';
import {Button} from "@heroui/react";
import ModalLogin from './Fragments/ModalLogin';
import { useState } from 'react';

export default function Index() {
    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${home.src})` }}>
            <div className="absolute top-0 right-0 h-full w-2/5 bg-white rounded-l-2xl shadow-2xl flex flex-col items-center justify-center space-y-8">
                <h1>Gestor de inventarios</h1>

                <div className="flex flex-col items-center space-y-3">
                    <label className="text-2xl font-bold text-gray-700">Login</label>
                    <Button
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                        onPress={()=>setIsOpen(true)}
                    >
                        Ir
                    </Button>
                </div>

                <div className="flex flex-col items-center space-y-3">
                    <label className="text-2xl font-bold text-gray-700">Registro</label>
                    <Button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                        Ir
                    </Button>
                </div>
            </div>

            <>
                <ModalLogin isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
            </>

        </div>
    )
}