import assert from 'node:assert/strict';
import {chromium} from '@playwright/test';
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
const page=await browser.newPage();
for(const route of ['/','/notre-histoire','/pourquoi-besta','/produits','/produits/red-chilli-seeds-250-g','/produits/red-chilli-seeds-petit-contenant','/livraison','/contact','/faq','/panier','/commande','/inexistante']){await page.goto('http://127.0.0.1:3000'+route);const text=await page.locator('body').innerText();assert.equal(/récit de marque proposé|validation BESTA requise|texte à valider|contenu provisoire|texte provisoire|contenu à confirmer|à compléter|visuels illustratifs|emballages représentés|emballage illustratif|visuel promotionnel|texte proposé|positionnement proposé|proposition commerciale|prix.*configurés/i.test(text),false,route);console.log('PASS '+route);}
await browser.close();
