const Google_Api_key = "AIzaSyD-2koIDwzJxs1v7TfgbgfbgfbagD6fAqVseRfQ0v00"

export const youtube_popular_Api =
`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${Google_Api_key}`

export const Youtube_sugeestions_api= "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const Channels_Videos_api =`https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&maxResults=10&key=${Google_Api_key}&channelId=`
