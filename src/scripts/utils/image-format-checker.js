// Проверка поддержки webp, avif.
// Если - есть поддержка, то добавляет классы webp, avif тегу html
// (Для использования webp, avif в css)

function detectSupport (formatsArr) {
	let result = {},
			processArr = [],
			root = document.querySelector('html')

	let baseFormatsArr = [
		{
			type: "webp",
			url: "data:image/webp;base64,UklGRhwAAABXRUJQVlA4TBAAAAAvAAAAEAfQpv5HmQMR0f8A"
		},
		// {
		// 	type: "avif",
		// 	url: "data:image/avif;base64,AAAAHGZ0eXBtaWYxAAAAAG1pZjFhdmlmbWlhZgAAAPFtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAABEAAAQABAAAAAAEVAAEAAAAeAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUltYWdlAAAAAHBpcHJwAAAAUWlwY28AAAAUaXNwZQAAAAAAAAABAAAAAQAAABBwYXNwAAAAAQAAAAEAAAAVYXYxQ4EgAAAKBzgABpAQ0AIAAAAQcGl4aQAAAAADCAgIAAAAF2lwbWEAAAAAAAAAAQABBAECg4QAAAAmbWRhdAoHOAAGkBDQAjITFkAAAEgAAAB5TNw9UxdXU6F6oA == "
		// }
	]

	baseFormatsArr.concat(formatsArr)

	return () => {
		baseFormatsArr.map(((item) => {
			(function (item) {
				let image = new Image
				image.src = item.url

				image.onerror = function () {
					let rootSelectors = new Set(root.getAttribute("class") ? root.getAttribute("class").split(" ") : [])

					processArr.push(new Promise(((resolve) => {
						result[item.type.toLowerCase()] = false
						resolve({[item.type.toLowerCase()]: false})
					})))

					rootSelectors.add("no-" + item.type.toLowerCase())
					root.setAttribute("class", [...rootSelectors].join(" "))
				}

				image.onload = function () {
					let rootSelectors = new Set(root.getAttribute("class") ? root.getAttribute("class").split(" ") : [])

					processArr.push(new Promise(((resolve) => {
						result[item.type.toLowerCase()] = true
						resolve({[item.type.toLowerCase()]: true})
					})))

					rootSelectors.add(item.type.toLowerCase())
					root.setAttribute("class", [...rootSelectors].join(" "))
				}
			})(item)
		}))

		Promise.all(processArr).then((() => {
			return result
		}))
	}
}

const webpAvifSupportChecker = detectSupport()

export default webpAvifSupportChecker
