"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const MyInfo = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-6 bg-gray-100 min-h-screen">

      <div className="max-w-2xl bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
        <h1 className="text-2xl font-bold text-cyan-700 mb-3">Diseñador</h1>
        <p className="text-gray-700 leading-relaxed">
          El desarrollo de esta aplicación, con su respectivo{" "}
          <span className="font-semibold">Frontend</span> y{" "}
          <span className="font-semibold">Backend</span>, fue realizado por:
        </p>
        <p className="text-gray-800 mt-2 font-medium">
          Johan Ruiz – Desarrollador & Programador Web – Junior
        </p>
      </div>

      <div className="max-w-2xl bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
        <h1 className="text-2xl font-bold text-cyan-700 mb-4 text-center">
          Pueden contactarse por
        </h1>
        <div className="flex flex-col gap-3 text-gray-700">

          <a
            href="mailto:johanfetecua11@gmail.com"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-50 transition"
          >
            <FaEnvelope className="text-cyan-600 text-xl" />
            <span>johanfetecua11@gmail.com</span>
          </a>

          <a
            href="https://github.com/Ethan7FJ/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-50 transition"
          >
            <FaGithub className="text-gray-800 text-xl" />
            <span>github.com/Ethan7FJ</span>
          </a>

          <a
            href="https://www.linkedin.com/in/johan-fetecua-23a026358"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-50 transition"
          >
            <FaLinkedin className="text-cyan-700 text-xl" />
            <span>linkedin.com/in/johan-fetecua</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
