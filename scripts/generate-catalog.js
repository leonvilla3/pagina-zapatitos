const fs = require('fs');
const path = require('path');

const PRODUCTS_DIR = path.join(__dirname, '../public/products');
const OUTPUT_FILE = path.join(__dirname, '../src/data/catalog.json');

// Helper to get all files in a directory
const getFiles = (dir) => {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter(file => !file.startsWith('.')); // Ignore hidden files like .DS_Store
};

// Helper to normalize IDs (e.g., "niña" -> "nina", handle spaces)
const normalizeId = (str) => {
    return str
        .normalize('NFD') // Decompose combined characters (ñ -> n + ~)
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, ''); // Remove any other special chars
};

const catalog = [];

try {
    const categories = getFiles(PRODUCTS_DIR);

    categories.forEach(category => {
        const categoryPath = path.join(PRODUCTS_DIR, category);
        if (!fs.statSync(categoryPath).isDirectory()) return;

        const categoryData = {
            id: normalizeId(category),
            title: category,
            products: []
        };

        const contents = getFiles(categoryPath);

        // Strategy 1: Check if content is subdirectories (Product codes)
        const subdirs = contents.filter(item => fs.statSync(path.join(categoryPath, item)).isDirectory());

        if (subdirs.length > 0) {
            // It has subdirectories, assume "Category -> ProductCode -> Images" structure
            subdirs.forEach(product => {
                const productPath = path.join(categoryPath, product);
                const images = getFiles(productPath).filter(file => /\.(jpg|jpeg|png|webp|JPG|PNG)$/i.test(file));

                if (images.length > 0) {
                    categoryData.products.push({
                        code: product,
                        image: `/products/${category}/${product}/${images[0]}`,
                        allImages: images.map(img => `/products/${category}/${product}/${img}`)
                    });
                }
            });
        } else {
            // Strategy 2: Check for direct images (Flat structure: "Category -> Image")
            // In this case, use filenames as product codes
            const images = contents.filter(file => /\.(jpg|jpeg|png|webp|JPG|PNG)$/i.test(file));

            images.forEach(image => {
                // Remove extension for code
                const code = image.replace(/\.(jpg|jpeg|png|webp|JPG|PNG)$/i, '');
                categoryData.products.push({
                    code: code,
                    image: `/products/${category}/${image}`,
                    allImages: [`/products/${category}/${image}`]
                });
            });
        }

        if (categoryData.products.length > 0) {
            catalog.push(categoryData);
        }
    });

    // Ensure directory exists
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(catalog, null, 2));
    console.log(`Catalog generated successfully with ${catalog.length} categories.`);

} catch (error) {
    console.error('Error generating catalog:', error);
    process.exit(1);
}
