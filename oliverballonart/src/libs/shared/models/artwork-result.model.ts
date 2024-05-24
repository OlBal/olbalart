export interface ArtworkResult {
	uid: string | null;
	title?: string;
	description?: string;
	year?: string;
	dimensions?: string;
	surface?: string;
	medium?: string;
	availability?: boolean;
	src?: string;
	alt?: string;
	displayType: 'works' | 'seconds';
}

export interface PrismicResultModel {
	painting: PaintingMetaData;
	title: DescriptionItem[];
	description: DescriptionItem[];
	year: DescriptionItem[];
	dimensions: DescriptionItem[];
	surface: DescriptionItem[];
	medium: DescriptionItem[];
	availability: boolean;
}

interface DescriptionItem {
	type: string;
	text: string;
	spans: [];
}

interface PaintingMetaData extends PaintingMobileMetaData {
	mobile: PaintingMobileMetaData;
}
interface PaintingMobileMetaData {
	dimensions: {
		width: number;
		height: number;
	};
	alt: string | null;
	copyright: string | null;
	url: string;
}
