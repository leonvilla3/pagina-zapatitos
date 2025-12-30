export interface CategoryInfo {
    title: string;
    description: string;
}

export interface GroupInfo {
    title: string;
    slug: string;
    image?: string;
    description?: string;
}

// Map folder names to display names and descriptions
export const categoryInfo: Record<string, CategoryInfo> = {
    'diabeticos-dama': {
        title: 'Diabéticos Damas',
        description: `El uso de un calzado adecuado en pacientes con diabetes es de suma importancia, porque de lo contrario pueden aparecer heridas, úlceras dolorosísimas en los pies que en casos extremos pueden llevar a la amputación del miembro afectado y hasta la muerte. Todo esto producto de la neuropatía periférica.

Nuestro calzado es especial para el pie diabético y contienen todas las características que las diferentes asociaciones de Diabetes a nivel mundial exigen para proteger el pie. Además, ofrecemos variedad de modelos y colores a precios muy accesibles y con una calidad extrema en pieles y combinaciones de tela expandible con piel.`
    },
    'diabeticos-caballero': {
        title: 'Diabéticos Caballeros',
        description: `El uso de un calzado adecuado en pacientes con diabetes es de suma importancia, porque de lo contrario pueden aparecer heridas, úlceras dolorosísimas en los pies que en casos extremos pueden llevar a la amputación del miembro afectado y hasta la muerte. Todo esto producto de la neuropatía periférica.

Nuestro calzado es especial para el pie diabético y contienen todas las características que las diferentes asociaciones de Diabetes a nivel mundial exigen para proteger el pie. Además, ofrecemos variedad de modelos y colores a precios muy accesibles y con una calidad extrema en pieles y combinaciones de tela expandible con piel.`
    },

    'formativos-de-nina': {
        title: 'Formativos Niña',
        description: `Para los niños que ya caminan solos, y realizan una activa exploración de su entorno mediante el juego, Zapatitos Medical Shoes ofrece su línea para la edad preescolar.

Esta línea ofrece apoyo adicional al caminar a través de una suela que se extiende por la parte posterior del zapato hasta la altura del tobillo y un cómodo acojinamiento en la parte superior.`
    },
    'formativos-de-nino': {
        title: 'Formativos Niño',
        description: `Para los niños que ya caminan solos, y realizan una activa exploración de su entorno mediante el juego, Zapatitos Medical Shoes ofrece su línea para la edad preescolar.

Esta línea ofrece apoyo adicional al caminar a través de una suela que se extiende por la parte posterior del zapato hasta la altura del tobillo y un cómodo acojinamiento en la parte superior.`
    },
    'medias-para-diabeticos': {
        title: 'Medias para Diabéticos',
        description: 'Sin costuras ni elásticos apretados para mejorar la circulación.'
    }, // Keeping this as is, no specific text found, or could be part of Diabéticos generally
    'ortopedicos-hrecta-nina': {
        title: 'Ortopédicos Horma Recta Niña',
        description: `Durante los primeros años de vida, los pies atraviesan una serie de cambios que determinarán de por vida su forma con un impacto directo en el resto de la estructura corporal. Es importante conocer las características de cada una de las etapas del desarrollo de los pies de los niños para poder tomar los cuidados necesarios, especialmente en lo relativo al calzado.

Para la edad escolar en la que los niños exigen los diseños más atractivos, cómodos y durables Zapatitos Lindos ofrece su línea ortopédica PIECO, con valiosas características exclusivas que brindan un excelente calce y funcionan de igual manera como un eficaz auxiliar en la prevención y corrección de los problemas ortopédicos.

Características:
• La gran mayoría de modelos es tipo bota con la finalidad de dar mayor protección al tobillo del niño.
• Su horma amplia permite recibir mejor una plantilla para pie plano, o indicaciones de cuñas, virones, botones, etc.
• Incluyen tacón de thomas, que impide que la parte interna del pie se hunda con el uso, el peso y en su caso con el defecto en valgo.
• La suela permite recibir los arreglos ortésicos indicados por el médico como lo pueden ser cuñas mediales, viron corrido externo ó interno, elevaciones etc.`
    },
    'ortopedicos-hrecta-nino': {
        title: 'Ortopédicos Horma Recta Niño',
        description: `Durante los primeros años de vida, los pies atraviesan una serie de cambios que determinarán de por vida su forma con un impacto directo en el resto de la estructura corporal. Es importante conocer las características de cada una de las etapas del desarrollo de los pies de los niños para poder tomar los cuidados necesarios, especialmente en lo relativo al calzado.

Para la edad escolar en la que los niños exigen los diseños más atractivos, cómodos y durables Zapatitos Lindos ofrece su línea ortopédica PIECO, con valiosas características exclusivas que brindan un excelente calce y funcionan de igual manera como un eficaz auxiliar en la prevención y corrección de los problemas ortopédicos.

Características:
• La gran mayoría de modelos es tipo bota con la finalidad de dar mayor protección al tobillo del niño.
• Su horma amplia permite recibir mejor una plantilla para pie plano, o indicaciones de cuñas, virones, botones, etc.
• Incluyen tacón de thomas, que impide que la parte interna del pie se hunda con el uso, el peso y en su caso con el defecto en valgo.
• La suela permite recibir los arreglos ortésicos indicados por el médico como lo pueden ser cuñas mediales, viron corrido externo ó interno, elevaciones etc.`
    },
    'ortopedicos-hregular-nina': {
        title: 'Ortopédicos Horma Regular Niña',
        description: `Nuestro calzado ortopedico posee plantillas remobibles y suelas diseñadas para las correcciones que envia el especialista, las cuales son confeccionadas por nuestro personal tecnico.

Ofrece soporte y estabilidad, ideal para correcciones leves y moderadas sin sacrificar la estética que buscan las niñas.`
    },
    'ortopedicos-hregular-nino': {
        title: 'Ortopédicos Horma Regular Niño',
        description: `Nuestro calzado ortopedico posee plantillas remobibles y suelas diseñadas para las correcciones que envia el especialista, las cuales son confeccionadas por nuestro personal tecnico.

Robustez y diseño se unen para ofrecer un calzado duradero que cuida la salud de los pies de los niños.`
    },
    'precaminadores-nina': {
        title: 'Precaminadores Niña',
        description: `Una línea para los primeros pasos, tiene un diseño especial para brindar apoyo y protección a los niños en la etapa de gateo y al aprender a caminar.

Le ofrecemos para esta etapa de crecimiento un calzado que favorece la libertad de movimientos con piel de primera calidad, puntera y talón reforzados para garantizar el perfecto desarrollo del pie del bebé.

Cuenta con una suela antideslizante que se extiende hasta el talón y la punta, con un tacón tipo Thomas integrado para guiar los primeros pasos. La función de la suela se complementa con un acojinamiento que ayuda a sostener el tobillo y una forma envolvente en el interior del zapato para mayor firmeza.`
    },
    'precaminadores-nino': {
        title: 'Precaminadores Niño',
        description: `Una línea para los primeros pasos, tiene un diseño especial para brindar apoyo y protección a los niños en la etapa de gateo y al aprender a caminar.

Le ofrecemos para esta etapa de crecimiento un calzado que favorece la libertad de movimientos con piel de primera calidad, puntera y talón reforzados para garantizar el perfecto desarrollo del pie del bebé.

Cuenta con una suela antideslizante que se extiende hasta el talón y la punta, con un tacón tipo Thomas integrado para guiar los primeros pasos. La función de la suela se complementa con un acojinamiento que ayuda a sostener el tobillo y una forma envolvente en el interior del zapato para mayor firmeza.`
    },

    'productos-de-gel-y-fajas': {
        title: 'Productos de Gel y Fajas',
        description: `Productos de Gel:
La composición de estos productos es 100% silicona, que le da a usted la garantía de adquirir un producto hipoalergénico y compuesto por la más pura silicona, es decir sin adición de catalizadores que puedan ser nocivos a la piel. Esta variedad de productos son ideales para rehabilitación o confort. Ayudan a la postura correcta del pie, ya sea arcos, talones, dedos, etc.

Vendas Ortopédicas:
En Zapatitos Medical Shoes le ofrecemos variedad de vendas especiales para deportistas y personas con lesiones en tobillo, rodilla, muñeca y codo.`
    },
    'servicios': {
        title: 'Servicios',
        description: `Plantillas:
Existe un alto porcentaje de personas que deberían llevar plantillas pero que, al no consultar con un especialista, no lo saben. El dolor es el síntoma que moviliza a las personas a consultar. Los soportes plantares, también denominados plantillas ortopédicas, son unos dispositivos ortopodológicos que utilizan para tratar ciertas alteraciones de los pies.

Los soportes plantares, tal y como indica el podólogo deben ser prescritos por un profesional y diseñados y fabricados específicamente para un pie determinado. Además si usted padece de acortamiento en alguna de sus extremidades inferiores ya no tiene que sufrir al caminar, solo necesitamos la medida de compensación para hacer el alza en sus zapatos.`
    }
};

// Group definitions
export const categoryGroups: Record<string, string[]> = {
    'Ortopédicos': ['ortopedicos-hrecta-nina', 'ortopedicos-hrecta-nino', 'ortopedicos-hregular-nina', 'ortopedicos-hregular-nino'],
    'Diabéticos': ['diabeticos-dama', 'diabeticos-caballero', 'medias-para-diabeticos'],
    'Formativos': ['formativos-de-nina', 'formativos-de-nino'],

    'Precaminadores': ['precaminadores-nina', 'precaminadores-nino'],
    'Otros Productos': ['productos-de-gel-y-fajas', 'servicios']
};

export const mainCategories: GroupInfo[] = [
    {
        title: 'Diabéticos',
        slug: 'diabeticos',
        image: '/images/categories/diabeticos.jpeg',
        description: 'Calzado especializado para el cuidado y confort del pie diabético.'
    },
    {
        title: 'Precaminadores',
        slug: 'precaminadores',
        image: '/images/categories/precaminadores.jpeg',
        description: 'Apoyo y protección para los primeros pasos de tu bebé.'
    },
    {
        title: 'Formativos',
        slug: 'formativos',
        image: '/images/categories/formativos2.jpeg',
        description: 'Estabilidad y soporte esenciales para la etapa preescolar.'
    },
    {
        title: 'Ortopédicos',
        slug: 'ortopedicos',
        image: '/images/categories/ortopedicos.jpeg',
        description: 'Corrección y prevención con diseños cómodos y modernos.'
    },

    {
        title: 'Otros Productos',
        slug: 'otros-productos',
        description: 'Productos de gel, fajas y servicios especializados.'
    }
];

// Helper to map slugs back to group names
export const slugToGroupName = (slug: string): string | undefined => {
    return mainCategories.find(c => c.slug === slug)?.title;
};
