import React from 'react';
import NewsItem from './NewsItem';

function NewsGrid({items}){
return(
    <div className="max-w-6xl mx-auto grid place-items-center grid-cols-1 lg:grid-cols-2 4xl:grid-cols-3">
        {items.map((item, i) =>(
        <NewsItem key={i} item={item} />
        ))}
    </div>
)
}
export default NewsGrid;