module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{ttf,woff,woff2,css,otf,png,js,scss}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};