import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
	input: 'index.js',
	output: {
		file: 'index.iife.js',
		format: "iife",
		name: 'window',
		extend: true
	},
	plugins: [
		babel({
	      exclude: 'node_modules/**'
	    }),
		resolve(),
		commonjs()
	]
};
