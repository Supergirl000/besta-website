import { Checkout } from '@/components/forms';
export const metadata={title:'Préparer votre commande'};
export default function Page(){return <div className="page-shell"><div className="page-heading"><span className="eyebrow">BESTA / DÉMONSTRATION</span><h1>VOTRE COMMANDE<br/><em>COMMENCE ICI.</em></h1><p>Préparez un récapitulatif. Aucun paiement ni enregistrement de commande n’est effectué sur ce site.</p></div><Checkout/></div>;}
