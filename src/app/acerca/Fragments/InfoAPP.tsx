"use client";

const InfoApp = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-6 bg-gray-100 min-h-screen">

      <div className="max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-cyan-700 mb-4">
          Acerca de la Aplicación
        </h1>
        <p className="text-gray-700 leading-relaxed">
          Esta aplicación fue desarrollada como un CRUD básico, con la funcionalidad 
          de permitir el ingreso de datos específicos para la gestión de inventarios, 
          pudiendo <span className="font-semibold">crear, editar y eliminar</span> registros.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2">
          Su objetivo es proporcionar un sistema sencillo para pequeñas empresas, 
          así como un código libre que sirva como guía para estudiantes que quieran 
          aprender o inspirarse en el diseño y funcionalidad de un CRUD.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-cyan-600 mb-3">Funcionalidades</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Crear productos</li>
            <li>Editar productos</li>
            <li>Eliminar productos</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-cyan-600 mb-3">Tecnologías Usadas</h2>
          <div className="flex flex-wrap gap-3 text-gray-700">
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Next.js</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Node.js (Express)</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">TailwindCSS</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">MySQL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoApp;
