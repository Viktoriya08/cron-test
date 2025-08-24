
export const pathsRewrite = () => {
	return (
		app.gulp
			.src(`${app.path.buildFolder}/**/*.html`)
			.pipe(app.plugins.modifyFile((content) => {
				let newContent = content.replaceAll(/\.\.\/scripts/gi, './scripts');
				return newContent.replaceAll(/\.\.\/styles/gi, './styles');
			}))
			.pipe(app.gulp.dest(app.path.buildFolder))
	);
}
