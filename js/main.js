//javascript, jQuery
var once = true;
console.log('Output: once', once);
function search() {
	var search = $('#search_name').val();
	var title;
	var apiKey = '';
	var xhr = $.get(
		`http://api.giphy.com/v1/gifs/search?q=sign%20with%20robert&api_key=${apiKey}&limit=30&offset=200`
	);

	xhr.done(function(data) {
		// console.log("available:");
		for (i in data.data) {
			title = data.data[i].title;
			title = title.replace(' GIF by Sign with Robert', '');
			title = title.replace('sign language', '');
			title = title.replace('asl', '');

			if (title != '' && title != ' ' && once) console.log(title);

			title = data.data[i].title;
			if (title.search(search) != -1)
				// $('#result').append('<p>'+title+'</p>');

				$('#result').append(
					'<img src="' +
						data.data[i].images.preview_gif.url +
						'" style="width: 48vw;">'
				);
		}
		once = false;
	});
}
