const PRODUCTS = [
    {
        id: 100,
        name: 'GeeProX Headset',
        price: 400,
        image: require('../assets/products/headset-100.jpeg'),
        description: 'A headset that combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'

    }, 

    {
        id: 101,
        name: 'AirPods Max',
        price: 600,
        image: require('../assets/products/AirPods Max-101.jpg'),
        description: 'A headset designed for an exceptional fit with high-fidelity playback with ultra-low distortion across the entire audible range and an active noise cancelling abilty.'

    },

    {
        id: 102,
        name: 'Sony WH-1000XM4',
        price: 270,
        image: require('../assets/products/Sony-102.jpg'),
        description: 'A headset with EXTRA BASS™ for deep, punchy sound and Noise Cancelling. High quality wireless audio with Bluetooth® technology Up to 30 hours of battery life and quick charge Hands-free calling for convenience'

    },
    
    {
        id: 103,
        name: 'Miles VR Hedset',
        price: 270,
        image: require('../assets/products/VR Headset-103.jpg'),
        description: 'Original VR Virtual Reality 3D Glasses Box Stereo VR Google Cardboard Headset Helmet for IOS Android Smartphone,Bluetooth Rocker.'

    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}