import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function DataCome({ cat }) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6790924c3ab24483a5b4d0601d650001`;
    if (cat) {
      url = `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=6790924c3ab24483a5b4d0601d650001`;
    }
    const response = await axios.get(url);
    setData(response.data.articles);
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.length > 0 && data.filter((item) =>
  item.title.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div>
      <div className=' ml-2'>
        <h2 className='text-2xl mt-2 font-semibold'>Top<span className='bg-red-700 text-rose-100 rounded-md px-5 font-bold'>News</span>HeadLine</h2>
        <div className='mt-2 py-4 w-full  justify-around rounded-full flex'><div className='flex w-full'><input className='rounded-3xl w-1/2  border-gray-400'
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleSearchChange}
        /><BiSearchAlt2 size='1.8rem' className='mt-2  bg-red-500 text-white rounded-full p-1 ' /></div>
          <div className=' lg:flex lg:justify-evenly lg:w-full hidden'>
            <p className=' lg:bg-gray-200 rounded-full lg:p-2 shadow-md shadow-gray-400 lg:px-9 font-bold'><span className='text-1xl text-red-500'>N</span>ews<span className='text-red-600 text-1xl'>24</span></p>
            <a href='https://twitter.com/news24tvchannel?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><button className='shadow-md mt-1 font-semibold shadow-gray-400 bg-blue-400 p-1 px-9 rounded-2xl '>Twitter</button></a>
            <a href='https://www.youtube.com/c/News24youtube'><button className='shadow-md mt-1 font-semibold shadow-gray-400 bg-red-500 p-1 px-9 rounded-2xl'>youtube</button></a>
            <a href='https://www.facebook.com/news24channel/'><button className='shadow-md mt-1 font-semibold shadow-gray-400 bg-blue-500 p-1 px-9 rounded-2xl'>Facebook</button></a>

          </div>
        </div>

        <div className='mt-2 p-2 lg:flex lg:flex-row flex-wrap w-full'>

          {filteredData.map((item, index) => (
            <div className='flex shadow-sm shadow-gray-400 flex-col p-5  lg:basis-1/3 ' key={index}>
              <h5 className='font-bold font-serif'>{item.title}</h5>
              <img src={item.urlToImage} alt='/image cannot be reloaded' />
              <p className='font-semibold'>{item.description}</p>
              <p>{item.content}</p>
              <p className='font-thin font-sans text-gray-700 m-1'>{item.publishedAt}</p>
              <p className='text-blue-500 bg-gray-100 rounded-full px-5 p-1 w-1/2 '>

                <a href={item.url} >Read more</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
