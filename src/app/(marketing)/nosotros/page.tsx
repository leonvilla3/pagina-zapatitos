import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | ZapatitosCR',
  description: 'La historia de Kathleen Wilson y ZapatitosCR.',
};

export default function AboutPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#262262] mb-6">Nuestra Historia</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Detrás de cada paso seguro que dan nuestros clientes, existe la visión de una mujer extraordinaria: <strong className="text-[#262262]">Kathleen Wilson</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Fundada en 1996, ZapatitosCR no es solo una zapatería; es el legado de liderazgo, pasión y compromiso con la salud que Kathleen ha construido en la Gran Área Metropolitana (GAM) durante casi tres décadas.
            </p>
          </div>
          <div className="relative h-[500px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/about/kathleen-wilson.jpg"
              alt="Kathleen Wilson, Fundadora de ZapatitosCR"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="bg-[#262262]/5 rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-auto min-h-[300px] w-full bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center">
              <Image
                src="/images/about/zapatitos-lindos-logo.png"
                alt="Logo original de Zapatitos Lindos"
                width={500}
                height={500}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-[#262262] mb-6">De &quot;Zapatitos Lindos&quot; a Expertos en Salud</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nuestra historia comenzó con un nombre diferente: <strong className="text-[#262262]">Zapatitos Lindos</strong>. En esos primeros días, nuestro enfoque era la ternura y el cuidado de los más pequeños.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sin embargo, al escuchar las necesidades de nuestras familias, evolucionamos. Entendimos que el cuidado del pie es vital en todas las etapas de la vida. Así, nos transformamos en <strong className="text-[#262262]">Zapatitos Medical Shoes</strong>, un nombre que refleja nuestro compromiso técnico y profesional con la salud ortopédica y diabética, sin perder el cariño de nuestros orígenes.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg prose-slate max-w-none mb-20">
          <h2 className="text-[#262262] font-bold">Liderazgo Femenino en la Salud del Pie</h2>
          <p>
            Kathleen Wilson no es solo una empresaria; es una <strong className="text-[#262262]">pionera</strong>. En un mercado donde la comodidad a menudo estaba reñida con la estética, Kathleen vio la oportunidad de cambiar vidas. Con una determinación inquebrantable, se propuso una meta clara: que nadie en Costa Rica tuviera que sacrificar su movilidad por falta del calzado adecuado.
          </p>
          <p>
            Reconocida como una de las mujeres más capaces e increíbles de la industria, Kathleen ha liderado ZapatitosCR con una mezcla única de <strong className="text-[#262262]">rigor científico y calidez humana</strong>. Su profundo conocimiento sobre las necesidades del pie diabético y ortopédico la ha convertido en una referente indiscutible en la GAM.
          </p>

          <h3 className="text-[#262262] font-bold mt-8">Más que Zapatos: Una Misión de Vida</h3>
          <p>
            Bajo su dirección, ZapatitosCR ha crecido de ser un pequeño emprendimiento a convertirse en el <strong className="text-[#262262]">aliado principal de doctores, terapeutas y familias</strong>. Kathleen entiende que un zapato no es solo un accesorio; es la base de la independencia de una persona mayor, es la seguridad de un niño dando sus primeros pasos, y es el alivio de un paciente diabético.
          </p>
          <blockquote className="border-l-4 border-[#262262] pl-6 italic text-gray-700 my-8 bg-gray-50 py-4 pr-4 rounded-r-lg">
            &quot;No vendemos zapatos, devolvemos la libertad de caminar sin dolor. Esa es la promesa que mantengo desde el primer día.&quot; — Kathleen Wilson
          </blockquote>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/about/team.jpg"
                alt="Equipo original de ZapatitosCR"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#262262] mb-4">Una Familia al Servicio de tu Salud</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                ZapatitosCR no se construyó solo con zapatos, sino con <strong>personas</strong>. Desde nuestros inicios, hemos cultivado un ambiente donde cada miembro del equipo comparte la misma vocación de servicio.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Esta foto captura la esencia de nuestros primeros años: sonrisas genuinas, camisas amarillas llenas de energía y, sobre todo, la unión de un grupo que se convirtió en familia. Aunque hemos crecido y evolucionado, ese espíritu de cercanía y dedicación personal sigue intacto en cada sucursal. Cuando nos visitas, no te atiende un vendedor, te asesora un experto que se preocupa por ti como si fueras de la casa.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <h3 className="text-[#262262] font-bold">Innovación y Futuro</h3>
          <p>
            Hoy, el espíritu incansable de Kathleen sigue impulsando la innovación en la empresa. Buscando siempre las mejores tecnologías en materiales, suelas y diseños ergonómicos, ella asegura que ZapatitosCR se mantenga a la vanguardia. Su liderazgo inspira a todo nuestro equipo a tratar a cada cliente no como una venta, sino como una historia de superación personal que tenemos el honor de acompañar.
          </p>
        </div>
      </div>
    </section>
  );
}
