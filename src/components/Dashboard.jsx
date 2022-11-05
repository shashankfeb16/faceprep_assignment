import { Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/dataReducer/action";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { results } = useSelector((state) => state.data);

  // console.log(results)

  useEffect(() => {
    dispatch(getData());
  }, []);

  console.log(results);
  return (
    <Box>
      <Heading>Dashboard</Heading>
      {results.map((el) => {
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
    </Box>
  );
};

export default Dashboard;
