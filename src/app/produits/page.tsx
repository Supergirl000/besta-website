import type { Metadata } from 'next';
import { Catalog } from '@/components/products';
export const metadata:Metadata={title:'Nos produits'};
export default function Page(){return <div className="page-shell"><div className="page-heading"><span className="eyebrow">BESTA / LA COLLECTION</span><h1>DU CARACTÈRE.<br/><em>EN DEUX FORMATS.</em></h1><p>Red Chilli Seeds en sachet de 250 g et Red Chilli en petit contenant. Choisissez votre référence et demandez son prix.</p></div><Catalog/></div>;}
