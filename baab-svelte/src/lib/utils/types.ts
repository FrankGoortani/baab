// Type definitions for the application

export interface Artwork {
	title: string;
	year: string;
	image: string;
	slug: string;
	description?: string;
	medium?: string;
	dimensions?: string;
}

export interface ArtistInfo {
	name: string;
	bio: string;
	image: string;
	statement?: string;
}
