const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Sneaker = require('./models/Sneaker');

dotenv.config();

const sneakers = [
  {
    id: "adidas-1",
    name: "Adidas Ultraboost 22",
    price: 180,
    currency: "$",
    gender: "male",
    image: "/images/male-imgfolder/adidas-m1.png",
    category: "running",
    brand: "adidas",
    imageThumbnails: [
      "/images/male-imgfolder/adidas-m1.png",
      "/images/male-imgfolder/adidas-m1-topView-thumb.png",
      "/images/male-imgfolder/adidas-m1-backView-thumb.png",
      "/images/male-imgfolder/adidas-m1-rightView-thumb.png"
    ],
    description: "Performance-driven and built for comfort, the Ultraboost 22 delivers responsive cushioning with every step. Designed for runners who want energy return, stability, and sleek everyday style."
  },
  {
    id: "adidas-2",
    name: "Adidas Forum Low",
    price: 120,
    currency: "$",
    gender: "male",
    image: "/images/male-imgfolder/adidas-m2.png",
    category: "lifestyle",
    brand: "adidas",
    imageThumbnails: [
      "/images/male-imgfolder/adidas-m2.png",
      "/images/male-imgfolder/adidas-m2-topView-thumb.png",
      "/images/male-imgfolder/adidas-m2-backView-thumb.png",
      "/images/male-imgfolder/adidas-m2-rightView-thumb.png"
    ],
    description: "A classic reimagined. The Forum Low blends retro basketball heritage with modern streetwear appeal, featuring durable materials and all-day comfort."
  },
  {
    id: "adidas-3",
    name: "Adidas Samba",
    price: 160,
    currency: "$",
    gender: "female",
    image: "/images/female-imgfolder/adidas-1f.png",
    category: "casual",
    brand: "adidas",
    imageThumbnails: [
      "/images/female-imgfolder/adidas-1f.png",
      "/images/female-imgfolder/adidas-1f-topView-thumb.png",
      "/images/female-imgfolder/adidas-1f-backView-thumb.png",
      "/images/female-imgfolder/adidas-1f-rightView-thumb.png"
    ],
    description: "Timeless and versatile, the Samba features a sleek low-profile silhouette with premium finishing. Perfect for effortless everyday style."
  },
  {
    id: "adidas-4",
    name: "Adidas Boost",
    price: 145,
    currency: "$",
    gender: "female",
    image: "/images/female-imgfolder/adidas-2f.png",
    category: "casual",
    brand: "adidas",
    imageThumbnails: [
      "/images/female-imgfolder/adidas-2f.png",
      "/images/female-imgfolder/adidas-2f-topView-thumb.png",
      "/images/female-imgfolder/adidas-2f-backView-thumb.png",
      "/images/female-imgfolder/adidas-2f-rightView-thumb.png"
    ],
    description: "Lightweight, supportive, and ultra-comfortable. Designed for daily movement, this Boost model delivers cushioning and sporty style."
  },
  {
    id: "jordan-1",
    name: "Air Jordan 1 Retro High",
    price: 200,
    currency: "$",
    gender: "male",
    image: "/images/male-imgfolder/male-jordans1.png",
    category: "basketball",
    brand: "jordans",
    imageThumbnails: [
      "/images/male-imgfolder/male-jordans1.png",
      "/images/male-imgfolder/male-jordans1-topView-thumb.png",
      "/images/male-imgfolder/male-jordans1-backView-thumb.png",
      "/images/male-imgfolder/male-jordans1-rightView-thumb.png"
    ],
    description: "An icon that never fades. The Air Jordan 1 Retro High combines premium materials, bold color blocking, and legendary basketball heritage."
  },
  {
    id: "jordan-2",
    name: "Air Jordan 4 Retro",
    price: 220,
    currency: "$",
    gender: "male",
    image: "/images/male-imgfolder/male-jordans2.png",
    category: "basketball",
    brand: "jordans",
    imageThumbnails: [
      "/images/male-imgfolder/male-jordans2.png",
      "/images/male-imgfolder/male-jordans2-topView-thumb.avif",
      "/images/male-imgfolder/male-jordans2-backView-thumb.avif",
      "/images/male-imgfolder/male-jordans2-rightView-thumb.avif"
    ],
    description: "A statement sneaker featuring structured support, breathable panels, and classic Jordan DNA. Built for performance and bold style."
  },
  {
    id: "jordan-3",
    name: "Jordan Delta",
    price: 170,
    currency: "$",
    gender: "female",
    image: "/images/female-imgfolder/jordans-f2.png",
    category: "lifestyle",
    brand: "jordans",
    imageThumbnails: [
      "/images/female-imgfolder/jordans-f2.png",
      "/images/female-imgfolder/jordans-f2-topView-thumb.png",
      "/images/female-imgfolder/jordans-f2-backView-thumb.png",
      "/images/female-imgfolder/jordans-f2-rightView-thumb.png"
    ],
    description: "Modern comfort meets sleek lifestyle design. The Jordan Delta offers lightweight cushioning and a streamlined silhouette for everyday wear."
  },
  {
    id: "jordan-4",
    name: "Jordan Pinky",
    price: 160,
    currency: "$",
    gender: "female",
    image: "/images/female-imgfolder/jordans-f1.png",
    category: "lifestyle",
    brand: "jordans",
    imageThumbnails: [
      "/images/female-imgfolder/jordans-f1.png",
      "/images/female-imgfolder/jordans-f1-topView-thumb.png",
      "/images/female-imgfolder/jordans-f1-backView-thumb.png",
      "/images/female-imgfolder/jordans-f1-rightView-thumb.png"
    ],
    description: "A bold lifestyle sneaker with standout color and soft cushioning. Designed to turn heads while keeping you comfortable all day."
  },
  {
    id: "airforce-1",
    name: "Nike Air Force 1 Low",
    price: 150,
    currency: "$",
    gender: "female",
    image: "/images/female-imgfolder/nike-f1.png",
    category: "lifestyle",
    brand: "nikeAirforce",
    imageThumbnails: [
      "/images/female-imgfolder/nike-f1.png",
      "/images/female-imgfolder/nike-f1-topView-thumb.png",
      "/images/female-imgfolder/nike-f1-backView-thumb.png",
      "/images/female-imgfolder/nike-f1-rightView-thumb.png"
    ],
    description: "A streetwear legend. The Air Force 1 Low features premium leather, clean stitching, and signature Air cushioning for timeless everyday comfort."
  },
  {
    id: "airforce-2",
    name: "Nike Air Force 1 '07",
    price: 155,
    currency: "$",
    gender: "male",
    image: "/images/male-imgfolder/nike-m1.png",
    category: "lifestyle",
    brand: "nikeAirforce",
    imageThumbnails: [
      "/images/male-imgfolder/nike-m1.png",
      "/images/male-imgfolder/nike-m1-topView-thumb.png",
      "/images/male-imgfolder/nike-m1-backView-thumb.png",
      "/images/male-imgfolder/nike-m1-rightView-thumb.png"
    ],
    description: "A modern update to the iconic AF1. Durable, stylish, and endlessly versatile — perfect for everyday rotation."
  },
  {
    id: "airforce-3",
    name: "Nike Pegasus",
    price: 140,
    currency: "$",
    gender: "male",
    image: "/images/male-imgfolder/nike-m2.png",
    category: "casual",
    brand: "nikeAirforce",
    imageThumbnails: [
      "/images/male-imgfolder/nike-m2.png",
      "/images/male-imgfolder/nike-m2-topView-thumb.png",
      "/images/male-imgfolder/nike-m2-backView-thumb.png",
      "/images/male-imgfolder/nike-m2-rightView-thumb.png"
    ],
    description: "Built for movement. The Pegasus combines breathable materials with responsive cushioning for comfort and performance."
  },
  {
    id: "airforce-4",
    name: "Nike Air Force 1 '09",
    price: 140,
    currency: "$",
    gender: "female",
    image: "/images/female-imgfolder/nike-f2.png",
    category: "casual",
    brand: "nikeAirforce",
    imageThumbnails: [
      "/images/female-imgfolder/nike-f2.png",
      "/images/female-imgfolder/nike-f2-topView-thumb.png",
      "/images/female-imgfolder/nike-f2-backView-thumb.png",
      "/images/female-imgfolder/nike-f2-rightView-thumb.png"
    ],
    description: "A refined take on a classic silhouette. The Air Force 1 '09 keeps the legendary design while adding subtle modern detailing."
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected!');

    // Clear existing sneakers first
    await Sneaker.deleteMany({});
    console.log('Old sneakers cleared!');

    // Insert all sneakers
    await Sneaker.insertMany(sneakers);
    console.log('Sneakers seeded successfully!');

    mongoose.connection.close();
  } catch (error) {
    console.log('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDB();