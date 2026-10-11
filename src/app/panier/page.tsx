import { CartContents } from '@/components/site';
export const metadata={title:'Votre panier'};
export default function Page(){return <div className="page-shell narrow"><div className="page-heading"><span className="eyebrow">BESTA / VOTRE SÉLECTION</span><h1>VOTRE <em>PANIER.</em></h1></div><CartContents/></div>;}
