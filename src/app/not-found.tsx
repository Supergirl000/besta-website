import Link from 'next/link';
export default function NotFound(){return <div className="page-shell empty error-page"><span className="eyebrow">BESTA / 404</span><h1>HORS<br/><em>COLLECTION.</em></h1><p>Cette page n’existe pas ou a été déplacée.</p><Link className="button red" href="/">Revenir à l’accueil</Link></div>;}
