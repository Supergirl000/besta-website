import Image from 'next/image';
import Link from 'next/link';
import { ProductCard, FormatExplorer } from './products';
import { DeliverySection, ContactSection } from './customer-sections';
import { products } from '@/lib/products';
import { marketing } from '@/lib/marketing';
export default function Homepage(){return <div className="besta-bold premium-home">
<section className="heat-hero"><div className="heat-copy"><span className="eyebrow">BESTA · BURUNDI</span><h1><span>BESTA</span><br/>Le piment<br/>à l’honneur.</h1><p>Découvrez l’univers BESTA, une marque burundaise qui met le piment au cœur de ses produits.</p><div className="button-row"><Link className="button red" href="/produits">Découvrir nos produits</Link><Link className="text-link" href="/notre-histoire">Notre histoire ↗</Link></div></div><div className="heat-photo hero-mobile-photo"><Image src="/images/products/besta-collection-promo.webp" alt="Visualisation promotionnelle de la collection BESTA" fill priority sizes="(max-width:760px) 100vw,65vw"/><div className="heat-photo-label">LA COLLECTION BESTA <span>VISUEL PROMOTIONNEL</span></div></div></section>
<section className="bold-collection"><div className="bold-section-title"><div><span className="eyebrow">LA COLLECTION</span><h2>Découvrez<br/>nos produits.</h2></div><p>Explorez les différentes présentations BESTA et trouvez le format qui vous convient.</p><Link className="text-link" href="/produits">Toute la collection ↗</Link></div><div className="product-grid">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div><p className="image-disclaimer">Visuels illustratifs. Consultez les fiches pour les caractéristiques des produits.</p></section>
<FormatExplorer/>
<section className="brand-break"><span>BESTA / BURUNDI</span><h2>{marketing.homeTitle}</h2><div><p>{marketing.homeText}</p><Link className="text-link" href="/notre-histoire">Notre histoire ↗</Link></div></section>
<DeliverySection/><ContactSection/></div>;}