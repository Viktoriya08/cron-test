import * as nodePath from 'path';
import util from 'gulp-util';

// Получаем имя папки проекта
const rootFolder = nodePath.basename(nodePath.resolve()),
	buildFolder = `./dist`,
	srcFolder = `./src`,
	assetsFolder = `${srcFolder}/assets`;

// Пути к папкам и файлам проекта
const path = {
	build: {
		html: `${buildFolder}/`,
		scripts: `${buildFolder}/scripts/`,
		styles: `${buildFolder}/styles/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`,
	},
	src: {
		views: `${srcFolder}/views`,
		templates: `${srcFolder}/templates`,
		scripts: `${srcFolder}/scripts`,
		styles: `${srcFolder}/styles`,
		images: `${assetsFolder}/img`,
		svgicons: `${assetsFolder}/svg-sprite/*.svg`,
	},
	assets: {
		images: `${assetsFolder}/img/**/*.*`,
		fonts: `${assetsFolder}/fonts/**/*.{woff,woff2}`,
		svgicons: `${assetsFolder}/svg-sprite/*.svg`,
	},

	// Путь к нужной папке на удаленном сервере. gulp добавит имя папки проекта автоматически
	ftp: {
		html: `/${rootFolder}`,
		server: `/htdocs/public/local/templates/main`,
	},

	clean: buildFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	srcFolder: srcFolder,
	assetsFolder: assetsFolder,
}

// Настройка FTP соединения
const configFTP = {
	html: {
		host: "html.xpager.ru",
		user: "html.xpager.ru",
		password: "Fqt85YhA",
		parallel: 10, // Кол-во одновременных потоков
		log: util.log,
	},
	server: {
		host: "basket74.xpage.dev", // Адрес FTP сервера
		user: "basket74.ru", // Имя пользователя
		password: "cG9LaQ8j", // Пароль
		parallel: 5, // Кол-во одновременных потоков
		log: util.log,
	},
}

export { path, configFTP };
