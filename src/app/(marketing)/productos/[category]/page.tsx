'use client';
import React, { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import catalogData from '@/data/catalog.json';
import { categoryGroups, categoryInfo, slugToGroupName } from '@/data/categories';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
// Assuming you have a utils file, otherwise handled inline

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = React.use(params);
    const groupName = slugToGroupName(category);

    if (!groupName) {
        notFound();
    }

    const categoryIds = categoryGroups[groupName] || [];

    return (
        <section className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <Link
                    href="/productos"
                    className="inline-flex items-center text-[#262262] hover:underline mb-8 font-medium transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver a Productos
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-[#262262] mb-12">{groupName}</h1>

                <div className="space-y-6">
                    {categoryIds.map((categoryId, index) => (
                        <SubcategorySection key={categoryId} categoryId={categoryId} defaultOpen={false} />
                    ))}

                    {categoryIds.length === 0 && (
                        <div className="text-center text-gray-500 py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
                            No hay productos disponibles en esta categoría por el momento.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

function SubcategorySection({ categoryId, defaultOpen }: { categoryId: string, defaultOpen: boolean }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [isExpanded, setIsExpanded] = useState(false);
    const productCategory = catalogData.find(c => c.id === categoryId);

    if (!productCategory) return null;

    const info = categoryInfo[categoryId] || { title: productCategory.title, description: '' };

    // Logic to determine if text is long enough to need truncation
    const MAX_LENGTH = 180;
    const shouldTruncate = info.description.length > MAX_LENGTH;
    const displayedDescription = shouldTruncate && !isExpanded
        ? info.description.slice(0, MAX_LENGTH) + '...'
        : info.description;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors focus:outline-none"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-[#262262]">{info.title}</h2>
                {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-[#262262]" />
                ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
            </button>

            {isOpen && (
                <div className="px-6 md:px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                    <div className="mb-8 border-t border-gray-100 pt-6">
                        <div className="max-w-4xl">
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line">
                                {displayedDescription}
                            </p>
                            {shouldTruncate && (
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="mt-2 text-[#262262] font-semibold hover:underline text-sm focus:outline-none"
                                >
                                    {isExpanded ? 'Leer menos' : 'Leer más'}
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {productCategory.products.map((product) => (
                            <div key={product.code} className="group flex flex-col items-center">
                                <div className="w-full aspect-square relative bg-white rounded-xl p-4 border border-gray-100 mb-3 transition-all duration-300 group-hover:shadow-lg group-hover:border-[#262262]/20 shadow-sm">
                                    <Image
                                        src={product.image}
                                        alt={product.code}
                                        fill
                                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 50vw, 20vw"
                                    />
                                </div>
                                <p className="text-sm font-bold text-[#262262] text-center opacity-80 group-hover:opacity-100 transition-opacity">{product.code}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
