import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { version } from './package.json';


export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**',
        }),
    ],
    external: ['react'],
    banner: `/* VERSION: ${version} */`,
};
