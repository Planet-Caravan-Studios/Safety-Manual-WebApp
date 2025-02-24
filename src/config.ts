export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Articles 1-10': [
			{ text: 'Health and Safety Policy', link: 'en/health-and-safety' },
			{ text: 'Job Posting Requirements', link: 'en/job-posting-requirements' },
			{ text: 'Modified (Light) Duty Work Agreement Policy', link: 'en/page-3' },
			{ text: 'After Injury Rehabilitation Program', link: 'en/page-4' },
			{ text: 'Workers Compensation Benefits Policy', link: 'en/page-x' },
			{ text: 'Housekeeping Policy', link: 'en/page-x' },
			{ text: 'Standard Employee & New Hire Orientation Procedure', link: 'en/page-x' },
			{ text: 'Drug and Alcohol Abuse Policy', link: 'en/page-x' },
			{ text: 'Supervisory Guiselines - Drug & Alcohol Abuse Policy', link: 'en/page-x' },
			{ text: 'Disciplinary Policy', link: 'en/page-x' },
		],
		'Articles 11-20': [
			{ text: 'Sample', link: 'en/page-x' },
			{ text: 'Sample', link: 'en/page-x' },
			{ text: 'Sample', link: 'en/page-x' },
		],
		'Articles 21-30': [
			{ text: 'Sample', link: 'en/page-x' },
			{ text: 'Sample', link: 'en/page-x' },
			{ text: 'Sample', link: 'en/page-x' },
		],
		'Articles 31-40': [
			{ text: 'Sample', link: 'en/page-x' },
			{ text: 'Sample', link: 'en/page-x' },
			{ text: 'Sample', link: 'en/page-x' },
		],
		'Articles 41-50': [
			{ text: 'Sample', link: 'en/page-x' },
			{ text: 'Sample', link: 'en/page-x' },
			{ text: 'Sample', link: 'en/page-x' },
		],
		'Articles 51-57': [
			{ text: 'Sample', link: 'en/page-x' },
			{ text: 'Sample', link: 'en/page-x' },
			{ text: 'Sample', link: 'en/page-x' },
		],
	},
};
