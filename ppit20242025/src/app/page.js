"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "./Components/Header";
import PPIT from "../../public/Home/PPIT.jpg";
import AboutImage from "../../public/Home/about-image.JPG"; 
import Vision from "../../public/Home/vision.png"
import Mission from "../../public/Home/mission.png"
import BestSeller from "../../public/Home/merch.jpg";
import SweaterImage from "../../public/Home/sweater.png";
import StarShirt from "../../public/Home/star-shirt.png";
import ShenzhenShirt from "../../public/Home/shenzhen-shirt.png";
import Cap from "../../public/Home/cap.png";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const merchandise = [
    { name: "Sweater", price: "110元", image: SweaterImage },
    { name: "Star Shirt", price: "75元", image: StarShirt },
    { name: "Shenzhen Shirt", price: "75元", image: ShenzhenShirt },
    { name: "Cap", price: "50元", image: Cap },
  ];

  const universities = [
    {
      name: "The Chinese University of Hong Kong, Shenzhen",
      ranking: "#36 QS World Rankings 2025"
    },
    {
      name: "Harbin Institute of Technology Shenzhen",
      ranking: "#252 QS World Rankings 2025"
    },
    {
      name: "Southern University of Science and Technology",
      ranking: "#284 QS World Rankings 2025"
    },
    {
      name: "Shenzhen University",
      ranking: "#508 QS World Rankings 2025"
    }
  ];

  return (
    <>
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="relative h-[90vh] md:h-[80vh]">
          <Image 
            src={PPIT} 
            alt="PPIT Hero"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center  md:mb-[-10px]">
            <p className="text-white text-4xl font-light tracking-wider mb-6 drop-shadow-lg">
              find out more
            </p>
            <div className="animate-bounce mb-8 drop-shadow-lg">
              <svg 
                width="64" 
                height="64" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-white"
              >
                <path 
                  d="M7 10L12 15L17 10" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Inverted Black Wave */}
      <div className="relative w-full" style={{ marginTop: '-1px' }}>
        <svg 
          viewBox="0 0 1440 320" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: '200px', transform: 'rotate(180deg)' }}
        >
          <path 
            d="M0 96L48 106.7C96 117 192 139 288 160C384 181 480 181 576 160C672 139 768 96 864 80C960 64 1056 75 1152 96C1248 117 1344 149 1392 165.3L1440 181V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0V96Z" 
            fill="black"
          />
        </svg>
      </div>

      {/* About Section */}
      <section className="py-16 px-4 lg:px-8 max-w-[90rem] mx-auto">
        <div className="flex items-center justify-center lg:block">
          <hr className="w-[20%] md:w-[10%] my-4 border-t-[3px] border-red-600" />
        </div>
        <h2 className="text-3xl text-center lg:text-left md:text-4xl font-bold mb-4 text-red-600">ABOUT US</h2>
        <div className="grid grid-row-4 md:grid-cols-8 md:grid-rows-1 gap-8">
          <div className="row-start-2 md:row-start-1 md:col-span-5 lg:col-span-6">
            <div className="text-2xl md:text-xl lg:text-3xl font-[530] text-center md:text-left">
              Keinginan pelajar-pelajar Indonesia di Kota Shenzhen untuk berdiri mandiri sebagai sebuah organisasi bermula pada tahun 2018.
            </div>
            <div className="text-lg md:text-base lg:text-xl mt-4">
              Di tahun yang sama, Perhimpunan Pelajar Indonesia di Tiongkok ranting Shenzhen (PPITSZ) resmi berdiri sebagai ranting dari cabang Guangzhou. 
              Kepengurusan pertama PPITSZ dipimpin oleh Saudara Ivan Prawira Limanauwyang juga merupakan salah satu inisiator berdirinya organisasi ini. 
              Setelah melewati satu periode kepengerusan, PPITSZ akhirnya disahkan sebagai cabang pada tahun 2019. 
              Saat ini, PPITSZ menaungi lebih dari 200 pelajar aktif yang tersebar di 4 lembaga pendidikan di Kota Shenzhen.
            </div>
            {/* New Statistics Section */}
            <div className="mt-8 flex space-x-16">
              <div className="flex flex-col items-start">
                <div className="text-5xl font-[420]">6+</div>
                <div className="text-gray-600 text-center">Tahun Berdiri</div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-5xl font-[420]">450+</div>
                <div className="text-gray-600 text-center">Mahasiswa di Shenzhen</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 lg:col-span-2 md:h-full">
            <Image 
              src={AboutImage} 
              alt="About Us Image" 
              className="rounded-none w-full h-auto max-w-[1000px] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row">
          <div className="ml-4">
            <h2 className="text-2xl lg:text-4xl font-bold mb-12">VISI DAN MISI</h2>
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 pr-4 mb-8 md:mb-0">
                <h3 className="text-2xl lg:text-3xl font-bold text-red-600 mb-4 flex items-center">
                  <span className="text-red-600 mr-2">►</span>
                  Visi
                </h3>
                <p className="text-gray-700 text-xl lg:text-2xl">PPIT Shenzhen menjadi rumah kedua yang menginspirasi, mendukung, dan memberdayakan pelajar Indonesia untuk mencapai potensi penuh mereka.</p>
                <div className="flex items-center justify-center">
                  <Image
                    src={Vision}
                    className="mt-6 md:mt-12 w-[25%] h-auto object-cover"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="md:border-l-2 border-gray-300 mx-4" />
              <div className="flex-1 md:pl-4 mb-8 md:mb-0">
                <h3 className="text-2xl lg:text-3xl font-bold text-red-600 mb-4 flex items-center">
                  <span className="text-red-600 mr-2">►</span>
                  Misi
                </h3>
                <p className="text-gray-700 text-xl lg:text-2xl">PPIT Shenzhen menjadi rumah kedua yang menginspirasi, mendukung, dan memberdayakan pelajar Indonesia untuk mencapai potensi penuh mereka.</p>
                <div className="flex items-center justify-center">
                  <Image
                    src={Mission}
                    className="mt-6 md:mt-12 w-[25%] h-auto object-cover"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section className="grid grid-cols-1 lg:grid-cols-8">
        <div className="col-span-3 md:col-span-3">
          <div className="h-full">
            <Image
              src={BestSeller}
              alt="Shenzhen EST. 2018 Exclusive Sweater"
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="mt-12 md:mt-16 col-span-5 md:col-span-5">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-24 md:mx-24">
            <div className="flex flex-col">
              <h2 className="text-[2.75rem] md:text-5xl font-black text-center md:text-left">Merchandise</h2>
              <p className="text-xl md:text-2xl text-center md:text-left">get them while they're still in stock!</p>
            </div>
            <div className="flex items-center justify-center">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfJbSNKm60OtPAqF9Pk6TqfwXrS3LODmjnwPORwbZDtBu7nDQ/viewform?usp=pp_url" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-3xl px-8 py-3 bg-red-600">
                BUY NOW
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 mt-12 mx-12">
            {merchandise.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="md:w-[70%] h-auto object-cover"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col items-center justify-center p-2">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="font-bold text-red-600">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="w-full border-t-2 border-gray-200" />
      {/* Universities Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold mb-12 text-white bg-red-700 inline-block py-3 md:py-4 px-6 rounded-lg">
            UNIVERSITIES IN SHENZHEN
          </h2>
          <div className="space-y-12 relative">
            {universities.map((uni, index) => (
              <div key={index} className="flex items-center gap-6 relative">
                <div className="w-6 h-6 rounded-full border-[3px] border-red-700 bg-white relative z-10"></div>
                {index < universities.length - 1 && (
                  <div className="absolute left-[0.6rem] top-6 h-[calc(100%+3rem)] w-1 bg-red-700 z-0"></div>
                )}
                <div>
                  <h3 className="md:text-2xl font-semibold">{uni.name}</h3>
                  <p className="md:text-2xl text-gray-700">{uni.ranking}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}