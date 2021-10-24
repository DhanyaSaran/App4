import React, { useState, useEffect } from "react";
import { StyleSheet, View ,Text} from 'react-native';
const First = () => {
 /*  const [posts, setPosts] = useState(
    "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0"
  ); */
  const [page, setPage] = useState(0);
  const [details,setDetails] = useState([])

  const fetchNews = async () => {

    fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`, { method: "GET" })
      .then((response) => response.json())
      .then((responseData) => {
        setDetails(responseData.nbHits)
        console.log(responseData.nbHits);
        
      })

      .catch((error) => {
        console.error(error)})
        setPage(page + 1)
  
  };

  
   useEffect(() => {
   setInterval(() => {
      (fetchNews()), 1000;
    });
  });
 


  const handleChange = (e) => {
    //pageno
    
    setPage(page + 1);
    setPosts(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
    );
  };
 
  return (
    <View>
      <Text>ye</Text>
   {
       details.map((v,i)=>(
       <Text> {v.nbHits}</Text>

     ))
   }

</View>
  );
};

export default First;
