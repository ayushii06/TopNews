import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Load from './Load'
import InfiniteScroll from "react-infinite-scroll-component";

export default class news extends Component {
   
  static defaultProps={
    country:'in',
    pageSize:9,
    category:'business'
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }

capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

async updatearticles(){
  this.props.setProgress(10);
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}&from=2024-01-29`;
    this.setState({loading:true});
    let data=await fetch(url);
    this.props.setProgress(30);
    let parsedata=await data.json();
    this.props.setProgress(60);
    console.log(parsedata);
    this.setState(
      {articles:parsedata.articles, 
        totalResults:parsedata.totalResults,
        loading:false
      }
    )
    this.props.setProgress(100);
}

 constructor(props){
        super(props);
        this.state={
                articles:[],
                loading:false,
                page:1,
                totalResults:0
        }
        document.title =`${this.capitalizeFirstLetter(this.props.category)} Headlines`
    }

async componentDidMount(){
   
    this.updatearticles();
}

  handlePreviousclick= async()=>{
    
  
    this.setState({
      page: this.state.page - 1
    })
    this.updatearticles();
  }

  handleNextclick=async()=>{
   
  
    this.setState({
      page:this.state.page + 1
    })
    this.updatearticles();
  
  
   
  }

  
  fetchMoreData = async() => {
    this.setState(
      {
        page:this.state.page+1
      }
    )

    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}&from=2024-01-29`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedata=await data.json();
    console.log(parsedata);
    this.setState(
      {articles:this.state.articles.concat(parsedata.articles), 
        totalResults:parsedata.totalResults,
        loading:false
      }
    )

  };

  render() {
    return (
        <div  style={{background:"black"}}>
                <h3 className='text-white' style={{display:"flex",justifyContent:"center",padding:"20px"}}>{this.capitalizeFirstLetter(this.props.category)}  Headlines</h3>
                {this.state.loading && <Load/>}
                
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Load/>}
        >
          <div className='container'>
          <div className="row">
            
                { this.state.articles.map((element)=>{
                    
                    return  <div className='col md-3 my-3' key={element.url}>
      
                    <NewsItem  title={element.title?element.title.slice(0,80):" "} description={element.description?element.description.slice(0,80):" "} Imgurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>

                    
                </div>

                
                })}
                </div>
                </div>
                </InfiniteScroll>

                
        </div>
    )
  }
}
