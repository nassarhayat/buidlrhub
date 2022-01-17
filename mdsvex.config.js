import path from "path";
import { fileURLToPath } from "url";

const dirname = path.resolve(fileURLToPath(import.meta.url), "../");

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		mds: path.join(dirname, "./src/routes/dao/__layout.svelte")
	},
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
