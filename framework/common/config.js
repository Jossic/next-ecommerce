const path = require('path');
const fs = require('fs');
const merge = require('deepmerge');
const prettier = require('prettier');

const ALLOWED_FW = ['shopify', 'shopify_local'];
const FALLBACK_FW = 'shopify';

const withFramworkConfig = (defaultConfig = {}) => {
	let framework = defaultConfig?.framework?.name;

	if (!framework) {
		throw new Error('API server is missing');
	}

	if (!ALLOWED_FW.includes(framework)) {
		throw new Error("API Framework isn't a good one");
	}

	if (framework === 'shopify_local') {
		framework = FALLBACK_FW;
	}

	const frameworkNextConfig = require(path.join(
		'../',
		framework,
		'next.config'
	));
	const config = merge(defaultConfig, frameworkNextConfig);

	const tsPath = path.join(process.cwd(), 'tsconfig.json');
	const tsConfig = require(tsPath);

	tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`];
	tsConfig.compilerOptions.paths['@framework/*'] = [
		`framework/${framework}/*`,
	];

	fs.writeFileSync(
		tsPath,
		prettier.format(JSON.stringify(tsConfig), { parser: 'json' })
	);

	return config;
};

module.exports = { withFramworkConfig };
