"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const LandingPage: React.FC = () => {
  return (
    
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen text-white ">
      <nav className="block w-full max-w-screen-md px-4 py-2 mx-auto text-white bg-black shadow-md rounded-full border border-gray-300 lg:px-8 lg:py-3 hover:scale-105">
  <div className="container flex flex-wrap items-center justify-between mx-auto text-gray-100">
  <Image
            src="/loogo.png"
            alt="Logo"
            width={96}
            height={48}
            className="w-24 h-12 rounded-full bg-white"
          />
    <div className="flex gap-4">
          <Link href="/sign-in">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition">
              Log In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="px-5 py-2 text-sm font-medium text-gray-900 bg-green-400 rounded-full hover:bg-green-500 transition">
              Sign Up
            </button>
          </Link>
        </div>
    
  </div>
</nav>

<header className="flex flex-col items-center text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Create, Edit, Share.
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-8">
          Take your media workflow to the next level with M3DIA-SAAS.
        </p>
        <Link href="/social-share">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            Get Started
          </button>
        </Link>
      </header>

      <section className="py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
          Features That Empower You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Upload Media Files"
            description="Easily upload photos and videos in seconds."
          />
          <FeatureCard
            title="Edit Photos"
            description="Adjust your photos for all platforms with ease."
          />
          <FeatureCard
            title="Video Compressor"
            description="Compress videos without sacrificing quality."
          />
          <FeatureCard
            title="Download & Share"
            description="Download or share files with just one click."
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-center py-16 px-4">
        <h2 className="text-4xl font-extrabold mb-4 text-white">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Enjoy editing and sharing media for free.
        </p>
        <Link href="/sign-in">
          <button className="px-8 py-4 bg-white text-purple-800 font-bold text-lg rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
            Join Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
