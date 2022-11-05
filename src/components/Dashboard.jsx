import { Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/dataReducer/action";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data,setData] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  // const { results } = useSelector((state) => state.data);

  // console.log(results)
  const fetchData = ()=>{
    axios.get(`https://randomuser.me/api/?page=${page}&results=50`).then((res)=>{
      setData([...data,...res.data.results])
    })
    // dispatch(getData(page));
    // setData(results);
    setTimeout(()=>{
      setPage(page+1)
    },1000)
  }
  useEffect(() => {
    fetchData()
  }, []);

  console.log(data)
  return (
    <Box>
      <Heading>Dashboard</Heading>
      <InfiniteScroll dataLength={data.length} next={fetchData}  hasMore={true}  loader={<Heading>Loading...</Heading>}>
      {data.map((el) => {
        return (
          <Box>
            <Text>
              Name: {el.name.title + " " + el.name.first + " " + el.name.last}
            </Text>
            <Text>{el.gender}</Text>
            <Image
              borderRadius="full"
              boxSize="50px"
              src={el.picture.medium}
              alt="Dan Abramov"
            ></Image>
            
          </Box>
        );
      })}
      </InfiniteScroll>
      
    </Box>
  );
};

export default Dashboard;
