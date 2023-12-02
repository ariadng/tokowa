import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ManifestOptions, VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import manifest from "./public/manifest.json"

const pwaConfig: Partial<VitePWAOptions> = {
	registerType: "prompt",
	includeAssets: [
		"vite.svg",
	],
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
