import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sucursales | ZapatitosCR',
    description: 'Encuentra tu tienda ZapatitosCR más cercana.',
};

export default function SucursalesPage() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-[#262262] mb-8 text-center">Nuestras Sucursales</h1>
                <div className="space-y-6">
                    <div className="p-6 border rounded-xl shadow-sm bg-gray-50">
                        <h2 className="text-xl font-semibold text-[#262262]">San José (Central)</h2>
                        <p className="text-gray-600">Av. Central, Calle 5.</p>
                        <p className="text-[#00a4e5]">Tel: 2222-2222</p>
                    </div>
                    <div className="p-6 border rounded-xl shadow-sm bg-gray-50">
                        <h2 className="text-xl font-semibold text-[#262262]">Heredia</h2>
                        <p className="text-gray-600">Frente al parque central.</p>
                        <p className="text-[#00a4e5]">Tel: 2260-0000</p>
                    </div>
                    <div className="p-6 border rounded-xl shadow-sm bg-gray-50">
                        <h2 className="text-xl font-semibold text-[#262262]">Alajuela</h2>
                        <p className="text-gray-600">Centro Comercial City Mall.</p>
                        <p className="text-[#00a4e5]">Tel: 2440-0000</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
