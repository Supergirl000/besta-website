export type Product = { id: string; slug: string; name: string; format: string; weight: string | null; price: number | null; currency: string; available: boolean | null; image: string | null; description: string };
// Information visible in the photograph supplied by the user. Prices, availability and intended uses remain unconfirmed.
export const products: Product[] = [
  { id: 'besta-250', slug: 'red-chilli-seeds-250-g', name: 'Red Chilli Seeds', format: 'Sachet · 250 g', weight: '250 g', price: null, currency: 'BIF', available: null, image: '/images/products/besta-red-chilli-seeds-250g-promo.webp', description: 'Red Chilli Seeds en sachet de 250 g.' },
  { id: 'besta-pot', slug: 'red-chilli-seeds-petit-contenant', name: 'Red Chilli', format: 'Petit contenant', weight: null, price: null, currency: 'BIF', available: null, image: '/images/products/besta-red-chilli-container-promo.webp', description: 'Red Chilli en petit contenant.' }
];
export const formatPrice = (amount: number, currency: string) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency }).format(amount);
export function whatsappUrl(message: string) { const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[\s+()-]/g, '') ?? ''; return /^\d{8,15}$/.test(number) ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : null; }
