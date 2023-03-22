import React, { useState, useEffect } from "react";
import axios from "axios";

function Temp() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=6790924c3ab24483a5b4d0601d650001"
      );
      setPosts(response.data.articles); // <-- update to set only articles array
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="App">
      <h3>Search Filter</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts.length > 0 ? (
          posts
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => 
            <>
                <div className='flex flex-col p-2 justify-center items-center lg:basis-1/3 '>
                  
                  <h5 className=''>{item.title}</h5>
                  <img src={item.urlToImage} alt='/'/>
                  <p>{item.description}</p>
                  <p>{item.content}</p>
                  <p className='text-blue-500'><a href={item.url}>Read more</a></p>
                </div>
              </>)
        ) : (
          <p>No posts found</p>
        )
      )}
    </div>
  );
}

export default Temp;
