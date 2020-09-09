// use fetch with the url parameter
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=306a3a071f224f729829308fa9f5896a'
const articleAction = (articles) => {
    return {
        type: 'FETCH_ARTICLES', 
        value: rep.articles,
    }
}

const fetchArticles = () => {
    return (dispatch) => {
        
        fetch(url)
        console.log(fetch(url))
        .then(res => res.json())
        .then(rep => {
            dispatch(articleAction(rep.articles))
        })
    }
}

export default fetchArticles