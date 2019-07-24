import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/main.js',
		format: 'esm'
	},
	plugins: [
		babel({
			exclude: 'node_modules/**'
		}),
		commonjs()
	]
};
