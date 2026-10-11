'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { products } from './products';
export type CartItem = { id: string; quantity: number };
type CartState = { items: CartItem[]; open: boolean; setOpen: (open: boolean) => void; add: (id: string, quantity?: number) => void; update: (id: string, quantity: number) => void; remove: (id: string) => void; clear: () => void };
function safeQuantity(n:number){return Number.isFinite(n)?Math.max(1,Math.min(99,Math.floor(n))):1;}
export const useCart=create<CartState>()(persist((set)=>({items:[],open:false,setOpen:open=>set({open}),
add:(id,quantity=1)=>set(state=>{const p=products.find(p=>p.id===id);if(!p||p.price===null||!Number.isFinite(p.price)||p.price<0||p.available!==true)return state;const amount=safeQuantity(quantity);const existing=state.items.find(i=>i.id===id);return{items:existing?state.items.map(i=>i.id===id?{...i,quantity:safeQuantity(i.quantity+amount)}:i):[...state.items,{id,quantity:amount}],open:true};}),
update:(id,quantity)=>set(state=>({items:state.items.map(i=>i.id===id?{...i,quantity:safeQuantity(quantity)}:i)})),remove:id=>set(state=>({items:state.items.filter(i=>i.id!==id)})),clear:()=>set({items:[]})
}),{name:'besta-cart-v1',partialize:state=>({items:state.items}),merge:(persisted,current)=>{const data=persisted as{items?:unknown[]}|null;const items:CartItem[]=[];if(Array.isArray(data?.items))for(const entry of data.items){if(!entry||typeof entry!=='object')continue;const i=entry as CartItem;if(!products.some(p=>p.id===i.id)||!Number.isInteger(i.quantity)||i.quantity<1||i.quantity>99)continue;const existing=items.find(item=>item.id===i.id);if(existing)existing.quantity=safeQuantity(existing.quantity+i.quantity);else items.push({id:i.id,quantity:i.quantity});}return{...current,items};}}));
