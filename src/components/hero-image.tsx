'use client';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
export function HeroImage(){const reduced=useReducedMotion();const {scrollY}=useScroll();const y=useTransform(scrollY,[0,900],[0,120]);return <motion.div className="hero-image-layer" style={{y:reduced?0:y}}><Image className="hero-image" src="/images/products/besta-collection.webp" alt="Produits BESTA : sachets Red Chilli Seeds et contenants à couvercle rouge" fill priority sizes="100vw"/></motion.div>;}
