'use client';
export default function Error({reset}:{reset:()=>void}){return <div className="page-shell empty"><h1>Un instant…</h1><p>La page n’a pas pu se charger.</p><button className="button red" onClick={reset}>Réessayer</button></div>;}
