import React from 'react';

function NewsItem({item}){
    //const websiteUrl = item.websiteurl;
    //const website = websiteUrl.split("https://").pop().split('/'[0])
    
    const date = item.publishedAt
    const formatDate = date.replace("T", '')
    const formatTime = formatDate.replace("Z", '')

    return (
        <div href={item.url} >
            <div className="grid place-items-center">
                <img src={item.urlToImage} alt={item.title} />
            </div>
            <div>
                <div>
                    <span>{item.source.name}</span>
                </div>
                <div>
                    <h2>{item.title}</h2>
                </div>
                <p>{item.description}</p>
                <div>
                    <small><b>Published At: </b>{formatTime}</small>
                </div>
            </div>
        </div>
    )
}

export default NewsItem