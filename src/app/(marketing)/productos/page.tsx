'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mainCategories } from '@/data/categories';

export default function ProductosPage() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-[#262262] mb-4 text-center">Nuestros Productos</h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    Explora nuestras categorías especializadas diseñadas para el cuidado y salud de tus pies.
                </p>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {mainCategories.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/productos/${category.slug}`}
                            className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col md:flex-row min-h-[220px]"
                        >
                            <div className={`relative h-48 md:h-auto md:w-1/2 overflow-hidden bg-white ${category.slug === 'formativos' ? '' : 'p-2'}`}>
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 md:hidden pointer-events-none" />
                                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                                    <h2 className="text-2xl font-bold text-white mb-1">{category.title}</h2>
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col justify-center md:w-1/2 bg-white relative z-10">
                                <h2 className="hidden md:block text-2xl font-bold text-[#262262] mb-2">{category.title}</h2>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {category.description}
                                </p>
                                <span className="mt-4 inline-flex items-center text-[#262262] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                    Ver productos
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
