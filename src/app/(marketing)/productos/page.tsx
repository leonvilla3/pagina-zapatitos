'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import catalogData from '@/data/catalog.json';

// Map folder names to display names and descriptions
const categoryInfo: Record<string, { title: string; description: string }> = {
    'diabeticos-dama': { title: 'Diabéticos Damas', description: 'Calzado especial para damas con diabetes, artritis o pies sensibles.' },
    'diabeticos-caballero': { title: 'Diabéticos Caballeros', description: 'Confort y protección para caballeros que requieren cuidados especiales.' },
    'escolares-para-plantillas': { title: 'Escolares para Plantillas', description: 'Diseño profundo ideal para el uso de plantillas ortopédicas.' },
    'formativos-de-nina': { title: 'Formativos Niña', description: 'Soporte y estabilidad para los pies en crecimiento.' },
    'formativos-de-nino': { title: 'Formativos Niño', description: 'Calzado resistente y formativo para niños activos.' },
    'medias-para-diabeticos': { title: 'Medias para Diabéticos', description: 'Sin costuras ni elásticos apretados para mejorar la circulación.' },
    'ortopedicos-hrecta-nina': { title: 'Ortopédicos Horma Recta Niña', description: 'Corrección de postura con horma recta.' },
    'ortopedicos-hrecta-nino': { title: 'Ortopédicos Horma Recta Niño', description: 'Estabilidad y corrección para niños.' },
    'ortopedicos-hregular-nina': { title: 'Ortopédicos Horma Regular Niña', description: 'Diseños ortopédicos discretos y bonitos.' },
    'ortopedicos-hregular-nino': { title: 'Ortopédicos Horma Regular Niño', description: 'Soporte ortopédico con estilo moderno.' },
    'precaminadores-nina': { title: 'Precaminadores Niña', description: 'Protección y guía para sus primeros pasos.' },
    'precaminadores-nino': { title: 'Precaminadores Niño', description: 'Seguridad y firmeza para aprender a caminar.' },
    'zapatos-para-plantillas': { title: 'Zapatos para Plantillas', description: 'Calzado con profundidad extra para adaptaciones.' },
    'productos-de-gel-y-fajas': { title: 'Productos de Gel y Fajas', description: 'Accesorios para el confort y la salud del pie.' },
    'servicios': { title: 'Servicios', description: 'Nuestros servicios especializados.' }
};

// Group definitions
const categoryGroups: Record<string, string[]> = {
    'Ortopédicos': ['ortopedicos-hrecta-nina', 'ortopedicos-hrecta-nino', 'ortopedicos-hregular-nina', 'ortopedicos-hregular-nino'],
    'Diabéticos': ['diabeticos-dama', 'diabeticos-caballero', 'medias-para-diabeticos'],
    'Formativos': ['formativos-de-nina', 'formativos-de-nino'],
    'Escolares y Plantillas': ['escolares-para-plantillas', 'zapatos-para-plantillas'],
    'Precaminadores': ['precaminadores-nina', 'precaminadores-nino'],
    'Otros Productos': ['productos-de-gel-y-fajas', 'servicios']
};

export default function ProductosPage() {
    // State to track open groups. Initialize with no groups open.
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

    const toggleGroup = (group: string) => {
        setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-[#262262] mb-4 text-center">Catálogo de Productos</h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    Descubre nuestra amplia variedad de calzado especializado.
                </p>

                <div className="space-y-6 max-w-5xl mx-auto">
                    {Object.entries(categoryGroups).map(([groupName, categoryIds]) => (
                        <div key={groupName} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <button
                                onClick={() => toggleGroup(groupName)}
                                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
                            >
                                <h2 className="text-2xl font-bold text-[#262262]">{groupName}</h2>
                                {openGroups[groupName] ? (
                                    <ChevronUp className="w-6 h-6 text-[#262262]" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-gray-400" />
                                )}
                            </button>

                            {openGroups[groupName] && (
                                <div className="p-6 pt-0 border-t border-gray-50 animate-in slide-in-from-top-2 duration-200">
                                    <div className="space-y-12 py-6">
                                        {categoryIds.map(categoryId => {
                                            const category = catalogData.find(c => c.id === categoryId);
                                            if (!category) return null;

                                            const info = categoryInfo[categoryId] || { title: category.title, description: '' };

                                            return (
                                                <div key={categoryId} className="space-y-4">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-[#262262]">{info.title}</h3>
                                                        <p className="text-gray-500 text-sm">{info.description}</p>
                                                    </div>

                                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                                        {category.products.map((product) => (
                                                            <div key={product.code} className="group flex flex-col items-center">
                                                                <div className="w-full aspect-square relative bg-white rounded-lg p-2 border border-gray-100 mb-2 transition-shadow hover:shadow-md">
                                                                    <Image
                                                                        src={product.image}
                                                                        alt={product.code}
                                                                        fill
                                                                        className="object-contain p-2"
                                                                        sizes="(max-width: 768px) 50vw, 20vw"
                                                                    />
                                                                </div>
                                                                <p className="text-sm font-bold text-[#262262] text-center">{product.code}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
