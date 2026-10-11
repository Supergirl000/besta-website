import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import { ProductDetail } from '@/components/products';
import Link from 'next/link';
export function generateStaticParams(){return products.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products.find(p=>p.slug===slug);return {title:p?`${p.name} — ${p.format}`:'Produit introuvable',description:p?.description};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products.find(p=>p.slug===slug);if(!p)notFound();return <div className="page-shell"><nav className="breadcrumb" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span>/</span><Link href="/produits">Nos produits</Link><span>/</span><span>{p.format}</span></nav><ProductDetail product={p}/></div>;}
