import { APIConfig } from '@common/types/api';
import { fetchAPI } from '../utils';

class Config {
	private config: APIConfig;

	constructor(config: APIConfig) {
		this.config = config;
	}

	getConfig(): APIConfig {
		return this.config;
	}
}

const configWrapper = new Config({
	apiUrl: 'http://localhost:4000/graphql',
	fetch: fetchAPI,
});

export function getConfig() {
	return configWrapper.getConfig();
}
