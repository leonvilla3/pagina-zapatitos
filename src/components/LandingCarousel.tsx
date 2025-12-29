'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import '@splidejs/react-splide/css';

// Load only in the browser (no SSR), so nothing tries to use 'fs'
const Splide = dynamic(
  () => import('@splidejs/react-splide').then(m => m.Splide),
  { ssr: false }
);
const SplideSlide = dynamic(
  () => import('@splidejs/react-splide').then(m => m.SplideSlide),
  { ssr: false }
);

export default function LandingCarousel() {
  return (
    <div className="mx-auto">
      {/* Mobile: Carousel */}
      <div className="block md:hidden max-w-xl mx-auto">
        <Splide options={{ type: 'loop', perPage: 1, gap: '1rem', pagination: false }}>
          <SplideSlide>
            <Image src="/gallery-1.png" alt="ZapatitosCR Gallery 1" width={800} height={600} className="rounded-xl shadow-md w-full h-64 object-cover mx-auto" />
          </SplideSlide>
          <SplideSlide>
            <Image src="/gallery-2.jpg" alt="ZapatitosCR Gallery 2" width={800} height={600} className="rounded-xl shadow-md w-full h-64 object-cover mx-auto" />
          </SplideSlide>
          <SplideSlide>
            <Image src="/gallery-3.png" alt="ZapatitosCR Gallery 3" width={800} height={600} className="rounded-xl shadow-md w-full h-64 object-cover mx-auto" />
          </SplideSlide>
        </Splide>
      </div>

      {/* Desktop: Side-by-side */}
      <div className="hidden md:grid grid-cols-3 gap-6 justify-items-center max-w-5xl mx-auto">
        <Image src="/gallery-1.png" alt="ZapatitosCR Gallery 1" width={800} height={600} className="rounded-xl shadow-md w-full h-64 object-cover" />
        <Image src="/gallery-2.jpg" alt="ZapatitosCR Gallery 2" width={800} height={600} className="rounded-xl shadow-md w-full h-64 object-cover" />
        <Image src="/gallery-3.png" alt="ZapatitosCR Gallery 3" width={800} height={600} className="rounded-xl shadow-md w-full h-64 object-cover" />
      </div>
    </div>
  );
}
