import { Checkout } from '@/components/forms';
export const metadata={title:'Préparer votre commande'};
export default function Page(){return <div className="page-shell"><div className="page-heading"><span className="eyebrow">VOTRE DEMANDE</span><h1>PRÉPAREZ<br/><em>VOTRE DEMANDE.</em></h1><p>Préparez votre récapitulatif, sans envoi de commande ni paiement.</p></div><Checkout/></div>;}
