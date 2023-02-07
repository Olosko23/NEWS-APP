import React, {useState, useEffect} from 'react'
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';
import  isLoading  from './components/loading';

function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);
  const url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f5724406ac6d493c9395e5b1aaf4f5d6`;

  useEffect(() =>{
    setLoading(true);
    fetch(url)
    .then((res) => res.json())
    .then((data => {
      setItems(data.articles);
      console.log(data.articles)
      setLoading(false);
    }));
  },[category])

  return (
    <div className="w-full h-full py-2">
      <div className="font-semibold text-3xl text-center py-2">The world of information</div>
      <Menu active={active} setActive={setActive} setCategory={setCategory}/>
      {loading ? <isLoading /> : <NewsGrid items={items}/>}
    </div>
  )
}

export default App
