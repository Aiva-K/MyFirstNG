export interface VideoResponse {
    kind: string,
    etag: string,
    nextPageToken: string,
    regionCode: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    items: Video[]
}

export interface Video{

    id: {
        kind: string,
        videoId: string
      },

    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description:  string,
        thumbnails: {
            high: {
            url: string,
            width: number,
            height: number
            },
        
        }
        channelTitle: string,
        liveBroadcastContent: string,
        publishTime: string
    }
}