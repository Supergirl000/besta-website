import type { Metadata } from 'next';
import { Catalog } from '@/components/products';
export const metadata:Metadata={title:'Nos produits'};
export default function Page(){return <div className="page-shell"><div className="page-heading"><span className="eyebrow">BESTA / LA COLLECTION</span><h1>DU CARACTÈRE.<br/><em>EN DEUX FORMATS.</em></h1></div><Catalog/></div>;}
