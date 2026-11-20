import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({plugins:[react(),tailwindcss(),VitePWA({registerType:'autoUpdate',includeAssets:['icon.svg','favicon.ico','apple-touch-icon.png'],manifest:{name:'KidzPlay — Kids Educational Games',short_name:'KidzPlay',description:'Bilingual educational games for little learners',theme_color:'#2563EB',background_color:'#e0f2fe',display:'standalone',start_url:'/',icons:[{src:'/pwa-192.png',sizes:'192x192',type:'image/png'},{src:'/pwa-512.png',sizes:'512x512',type:'image/png'},{src:'/maskable-512.png',sizes:'512x512',type:'image/png',purpose:'maskable'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,png,woff2,webmanifest}']}})]});
