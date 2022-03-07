/** @type {import('next').NextConfig} */

const { withFramworkConfig } = require('./framework/common/config');

const nextConfig = {
	reactStrictMode: true,
	framework: {
		name: 'shopify',
	},
	i18n: {
		locales: ['en-US', 'fr'],
		defaultLocale: 'fr',
	},
};

module.exports = withFramworkConfig(nextConfig);
