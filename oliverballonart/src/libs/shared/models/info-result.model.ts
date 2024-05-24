export interface InfoResult {
	title: string;
	info: Info[];
	urlLink1: Link;
	urlLink2: Link;
	uid: string | null;
}

interface Info {
	text: string;
	type: string;
	spans: [];
}

interface Link {
	link_type: string;
	url: string;
	target: string;
}
