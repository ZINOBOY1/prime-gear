'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { X } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const sampleProducts = [
  {
    name: "iPhone 12",
    price: "₦360,000",
    image1: "/iphone12.jpg",
    image2: "/iphone12 2.jpg",
    description: "Experience the iPhone 12 with 5G speed, A14 Bionic chip, and a stunning Super Retina XDR display.",
    features: [
      "6.1-inch Super Retina XDR OLED display",
      "A14 Bionic chip with 4-core GPU",
      "Dual 12MP rear cameras (Wide and Ultra Wide)",
      "12MP front camera with Night mode and 4K Dolby Vision HDR recording",
      "5G capable for faster downloads and streaming",
      "Ceramic Shield front cover for improved durability",
      "MagSafe technology for easy attachment of accessories and wireless charging",
      "IP68 water and dust resistance (up to 6 meters for 30 minutes)",
      "Available in 64GB, 128GB, and 256GB storage options",
      "iOS 14, upgradable to the latest iOS version"
    ]
  },
  {
    name: "Samsung Galaxy S21",
    price: "₦345,000",
    image1: "/samsung21.jpg",
    image2: "/samsung21.jpg",
    description: "Samsung Galaxy S21 combines sleek design with top-tier performance, built for creators and power users alike.",
    features: [
      "6.2-inch Dynamic AMOLED 2X, 120Hz, HDR10+ display",
      "Exynos 2100 (INTL) / Snapdragon 888 (US) processor",
      "8GB RAM, 128GB internal storage (UFS 3.1)",
      "Triple Rear Camera: 12MP (wide) + 64MP (telephoto) + 12MP (ultrawide)",
      "10MP Front Camera with 4K video support",
      "4000mAh battery with 25W fast charging",
      "5G Connectivity + Wi-Fi 6 + Bluetooth 5.0",
      "Ultrasonic in-display fingerprint sensor",
      "Gorilla Glass Victus (front), plastic back",
      "IP68 water and dust resistant",
      "Android 11, upgradable to Android 14"
    ]
  },
  {
    name: "Dell XPS 15 9570",
    price: "₦890,000",
    image1: "/dellxps.jpg",
    image2: "/dellxps.jpg",
    description: "Premium ultrabook with a stunning 4K touchscreen display, powerful specs, and a sleek design—perfect for professionals, creators, and multitaskers.",
    features: [
      "15.6\" UltraSharp 4K UHD Touchscreen Display",
      "Intel Core i7 8th Gen Processor",
      "512GB NVMe SSD",
      "16GB DDR4 RAM",
      "NVIDIA GeForce GTX 1050 Ti (Max-Q Design) – 4GB Dedicated",
      "Backlit Keyboard",
      "Fingerprint Reader for Secure Login",
      "Premium Aluminum Build with Carbon Fiber Palm Rest",
      "Excellent Battery Life",
      "Windows 11 Pro"
    ]
  },
  {
    name: "Sony PlayStation 5",
    price: "₦950,000",
    image1: "/ps5.jpg",
    image2: "/ps5.jpg",
    description: "The next-gen gaming console with lightning-fast load times, stunning graphics, and an immersive gaming experience.",
    features: [
      "Custom AMD CPU and GPU for 4K gaming",
      "Ultra-high-speed SSD for fast load times",
      "Ray tracing support for realistic lighting and shadows",
      "DualSense wireless controller with haptic feedback and adaptive triggers",
      "Backward compatibility with PS4 games",
      "Supports 120fps gameplay with 120Hz output",
      "3D Audio technology for immersive sound",
      "PlayStation VR compatible",
      "Available in Standard and Digital Edition"
    ]
  },
  {
    name: "MacBook Pro 2019 16”",
    price: "₦1,000,000",
    image1: "/macbook.jpg",
    image2: "/macbook.jpg", // Add second image if available
    description: "High-performance US-used MacBook Pro with Intel Core i9, massive 64GB RAM, and 4GB dedicated graphics. Ideal for editing, design, and pro-level tasks.",
    features: [
      "16-inch Retina Display",
      "Intel Core i9 Processor",
      "64GB RAM",
      "512GB SSD",
      "Touch Bar with Touch ID",
      "4GB Dedicated Graphics",
      "Magic Keyboard",
      "macOS Catalina, upgradable to the latest macOS",
      "Premium aluminum body",
      "Long-lasting battery life"
    ]
  }
,  
{
  name: "Microsoft Surface Laptop 2",
  price: "₦580,000",
  image1: "/surface.jpg",
  image2: "/surface.jpg", 
  description: "US-used Surface Laptop 2 with powerful performance and sleek design. Ideal for business, students, and professionals on the go.",
  features: [
    "13.5-inch PixelSense Touchscreen Display",
    "Intel Core i7 8th Gen Processor",
    "16GB RAM",
    "512GB SSD Storage",
    "Backlit Keyboard",
    "Alcantara fabric-covered keyboard deck",
    "Lightweight and premium aluminum build",
    "Windows 10 Pro, upgradable to Windows 11",
    "Excellent battery life for all-day use",
    "Fast boot and smooth multitasking"
  ]
}

];

export default function Products() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const addToCart = (product: { name: string }) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <section id="products" className="py-16 px-4 sm:px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-10">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {sampleProducts.map((product, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-4 shadow-md rounded-xl hover:shadow-xl transition transform hover:scale-[1.02]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              loop
              autoplay={{ delay: 3000 }}
              navigation
              className="mb-4 rounded-lg"
            >
              {[product.image1, product.image2].map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={imgSrc}
                    alt={`${product.name} ${index + 1}`}
                    className="h-48 sm:h-56 md:h-64 w-full object-cover rounded-lg cursor-pointer"
                    onClick={() => setEnlargedImage(imgSrc)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <h3 className="text-xl font-bold mb-1">{product.name}</h3>
            <p className="text-blue-600 font-semibold mb-2">{product.price}</p>
            <p className="text-sm text-gray-700 mb-3">{product.description}</p>
            <ul className="list-disc list-inside text-sm mb-4 text-gray-600 space-y-1">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-full font-semibold transition"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>

      {enlargedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden">
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-3 right-3 bg-white rounded-full p-1 shadow z-10"
            >
              <X className="h-6 w-6 text-black" />
            </button>
            <img
              src={enlargedImage}
              alt="Enlarged product"
              className="w-full h-auto max-h-[80vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
