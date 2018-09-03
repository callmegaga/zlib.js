// Rollup configuration for the full build
import noderesolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {uglify} from 'rollup-plugin-uglify';
import buble from 'rollup-plugin-buble';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
    input: 'src/index.js',
    output: [
        {file: 'build/inflate.min.js', format: 'es', sourcemap: true}
    ],
    plugins: [
        noderesolve(),
    ]
};
