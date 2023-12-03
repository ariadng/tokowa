import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ManifestOptions, VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import manifest from "./public/manifest.json"

const pwaConfig: Partial<VitePWAOptions> = {
	registerType: "autoUpdate",
	injectRegister: "auto",
	workbox: {
		globPatterns: ["**/*"],
		runtimeCaching: [
			{
				urlPattern: () => true,
				handler: "NetworkFirst",
				options: {
					cacheName: "default-cache",
					cacheableResponse: {
						statuses: [0, 200],
					}
				}
			}
		]
	},
	strategies: 'injectManifest',
	srcDir: 'src',
	filename: 'swtest.js',
	includeAssets: [
		"**/*",
	],
	devOptions: {
		enabled: true,
	},
	manifest: manifest as Partial<ManifestOptions>,
};

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [
		react(),
		VitePWA(pwaConfig)
	],
});
