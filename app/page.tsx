"use client";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <Intro />
      <main>
        <Hero />
        <CategoryGrid />
        <Features />
      </main>
    </>
  );
}