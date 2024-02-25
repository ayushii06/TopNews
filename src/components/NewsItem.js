import React, { Component } from 'react'

export default class news extends Component {

    
    constructor(){
        super();
        console.log("Hello I am cosntructor");
        this.state={
                articles:this.articles,
                loading:false
        }
    }
  render() {
          
    let {title,description,Imgurl,url,author,date,source} = this.props;
    return (

        <>
        
            <div className="card container bg-dark " style={{width:"20rem",border:"1px solid white"}}>
               <div className='text-light'>
               <span class="position-absolute  translate-middle badge rounded-pill bg-dark" style={{zIndex:'1',left:'50%',top:'3%'
            }}>
{source}</span></div>
                <img src={!Imgurl?"https://www.searchenginejournal.com/wp-content/uploads/2023/12/2-ff-chatgpt-for-keyword-research-657a84d71aa7d-sej.jpg":Imgurl} className="card-img-top my-2" alt="..." height="160vh"/>
                    <div className="card-body">
                        <h5 className='card-title text-light'>{title}....</h5>
                        <p className="card-text text-light">{description}....</p>
                        <p class="card-text "><small class="text-white">By - {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>

                        <a href={url} rel="noopener" className="btn btn-outline-light">Read More</a>
                    </div>
            </div>
        </>
    )
  }
}