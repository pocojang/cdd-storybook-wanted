import esbuild from 'rollup-plugin-esbuild';
import pkg from './package.json' assert { type: 'json' };

export default {
	input: 'src/index.js',
	output: [
		{
			file: pkg.exports['.'].import,
			format: 'esm',
		},
		{
			file: pkg.exports['.'].require,
			format: 'cjs',
		},
	],
	plugins: [
		esbuild({
			include: /\.jsx?$/,
			minify: process.env.NODE_ENV === 'production',
			jsx: 'automatic',
		}),
	],
	external: ['react', 'react-dom', 'styled-components'],
};
