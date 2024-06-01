import {mkdir} from 'node:fs/promises';

await mkdir('test-results', {recursive: true});

export default {
    requireModule: ['@swc-node/register'],
    require: ['features/steps/**/*.ts'],
    format: [
        'json:test-results/cucumber-report.json',
        'html:test-results/cucumber-report.html',
        'summary',
        'progress-bar',
    ],
    formatOptions: {snippetInterface: 'async-await'},
};
