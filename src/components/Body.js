import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import {useEffect} from "react";
import Shimmer from "./Shimmer"



const Body=()=>{
    //state variable-Super powerful variable
    //it maintains the state of the component

    const[listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const[searchText,setSearchText]=useState("");
    
    //whenever stat variables update ,react triggers a reconciliation cycle(re renders this component)

    
    //array destructuring
    // const arr=useState(resList);
    // const [listOfRestaurants,setListOfRestaurants]=arr;
    // const listOfRestaurants=arr[0];
    // const setListOfRestaurants=arr[1];
    
    //useEffect hook
    useEffect(()=>{
       fetchData(); //api call
    },[]);

    const fetchData= async()=>{
      const data=await fetch
      ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1542629&lng=72.8600404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json=await data.json();
      console.log(json.data);
      //optional chaining
    
      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
  //conditional rendering
  //   if(listOfRestaurants.length===0){
  //     return <Shimmer />
  //  }
 return listOfRestaurants.length === 0 ?
  <Shimmer /> : 
  (
    <div className="body">
        <div className="filter">
          <div className="search">
           <input type="text" className="search-box" value={searchText} onChange={(e)=>{
             setSearchText(e.target.value);
           }}/>
           <button onClick={()=>{
            //filter the restaurants cards and update the UI
            //search text
            console.log(searchText);
            const  filteredRestaurant=listOfRestaurants.filter((res)=>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
            }}>
              Search
              </button>
          </div>
          <button className="filter-btn" 
          onClick={()=>{
            const filteredList= listOfRestaurants.filter((res)=>
              res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}>
            Top Rated Restaurants</button>
          </div>
        <div className="res-container">
          {
          filteredRestaurant.map((restaurant)=>
              (<RestaurantCard key={restaurant.info.id} resData={restaurant}
              />
          ))}
        </div>
      </div>   
    );
  };

export default Body;