import * as prismic from '@prismicio/client';

const createClient = (fetch: any, token: any, repoName: any) => {
	const clientOptions = {
		fetch,
		token
	};
	const client = prismic.createClient(repoName, clientOptions);
	return client;
};

export default createClient;
