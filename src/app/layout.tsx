import type { Metadata } from 'next';
import './globals.css';
import './reference.css';
import './storefront.css';
import './navigation.css';
import './editorial.css';
import './bold.css';
import './premium.css';
import localFont from 'next/font/local';
const sans=localFont({src:'../../public/fonts/dm-sans.woff2',variable:'--font-sans',display:'swap'});
const serif=localFont({src:[{path:'../../public/fonts/cormorant.woff2',style:'normal'},{path:'../../public/fonts/cormorant-italic.woff2',style:'italic'}],variable:'--font-editorial',display:'swap'});
import { SiteFrame } from '@/components/site-frame';
export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'), title: { default: 'BESTA — L’intensité à l’état pur', template: '%s | BESTA' }, description: 'Découvrez l’univers BESTA et ses formats Red Chilli Seeds. Catalogue, informations et demandes de commande.', openGraph: { title: 'BESTA — L’intensité à l’état pur', description: 'Une marque. Un caractère. Une identité.', locale: 'fr_FR', type: 'website' }, icons: { icon: '/favicon.svg' }, robots: { index: false, follow: false } };
export default function Layout({ children }: { children: React.ReactNode }) { return <html lang="fr"><body className={`${sans.variable} ${serif.variable}`}><a className="skip" href="#main">Aller au contenu</a><SiteFrame>{children}</SiteFrame></body></html>; }
