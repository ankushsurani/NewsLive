import React, {useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [totalResults, settotalResults] = useState(0)
  const [page, setPage] = useState(1)

  const capital = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const updatenews= async ()=>{
    props.setProgress(10)
    setloading(true)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}&category=${props.category}`
    props.setProgress(30)
    let data = await fetch(url);
    props.setProgress(50)
    let parseddata = await data.json();
    props.setProgress(70)
    // console.log(parseddata);
    setarticles(parseddata.articles)
    settotalResults(parseddata.totalResults)
    setloading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    document.title=`${capital(props.category!=="general"?props.category:"")} - NewsLive`
   updatenews()
   // eslint-disable-next-line
  }, [])

  const fetchMoreData= async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}&category=${props.category}`
    setPage(page+1)
    let data = await fetch(url);
    let parseddata = await data.json();
    // console.log(parseddata);
    setarticles(articles.concat(parseddata.articles))
    settotalResults(parseddata.totalResults)
  }
  

  return (
    <>
        <div className="container my-5 text-center">
        <h2 style={{marginTop:'80px'}}>NewsLive Top {capital(props.category!=='general'?props.category:"")} Headlines</h2>
        {loading && <Spinner/>}
          <InfiniteScroll
          style={{overflow:"none"}}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="row">
        {articles.map((element)=>{
         return (
           <div className="col-md-4 my-4" key={element.url}>
         <Newsitem title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,90):""} imageurl={element.urlToImage} url={element.url} source={element.source.name}/>
         </div>
         )
        })}
        </div>
        </InfiniteScroll>
        </div>
    </>
  )
}
