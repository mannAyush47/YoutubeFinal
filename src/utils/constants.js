const Google_Api_key = "AIzaSyCoYKQg144ENPl9DX0JTq-QMPpKsXwcnXg"

export const youtube_popular_Api =
`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${Google_Api_key}`

export const Youtube_sugeestions_api= "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="