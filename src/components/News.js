import React, { useState, useEffect } from 'react'
import Newsbox from './Newsbox'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner2 from './Spinner'
export default function News(props) {
  const [article, setarticle] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [page, setPage]= useState(1)
  const [loading, setloading]= useState(false)
  const [cat, setcat]= useState("")
  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.API_key}&page=1`
      setloading(true)
      let data = await fetch(url)
      let parsedData = await data.json()
      setloading(false)
      setarticle(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      if(props.category!=="general"){
        setcat("- "+ props.category.charAt(0).toUpperCase().concat(props.category.substring(1)))
      }
    }
    fetchNews(); // eslint-disable-next-line
  }, []) 
  const fetchMore = async() => {
    setPage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.API_key}&page=${page +1}`  // default pageSize is 20
    let data = await fetch(url)
    let parsedData = await data.json()
    setarticle(article.concat(parsedData.articles))
  };
  return (
    <>
      <header style={{ fontSize: 'x-large', fontWeight: 'bold', margin: '0 10px 0 10px', fontFamily: 'Verdana' }}>Top Headlines{cat}</header>
      {loading && <Spinner2/>}
      <InfiniteScroll
        dataLength={article.length} //This is important field to render the next data
        next={fetchMore} //a function which is called after reaching the bottom
        hasMore={article.length !== totalResults}
        loader={<Spinner2 />}
      >
        {article.map(element => {
          return <Newsbox url={element.url} source={element.source.name} time={element.publishedAt} img={element.urlToImage} altImg='https://files.catbox.moe/m1no2m.jpg' headline={element.title} />
        })}
      </InfiniteScroll>
    </>
  )
}
