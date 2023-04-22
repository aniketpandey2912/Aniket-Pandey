import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

import React, { useState } from "react";
import axios from "axios";
import { url } from "./conts";
import DisplayProducts from "./DisplayProducts";
import Loader from "./Loader";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [firstRender, setFirstRender] = useState(true);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const getDataApi = async () => {
    setLoading(true);
    try {
      let res = await axios.get(`${url}/ads`, {
        headers: {
          keyword,
        },
      });
      setKeyword("");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (keyword === "") {
      setError(true);
    } else {
      setFirstRender(false);
      setProducts([]);
      setError(false);
      getDataApi();
    }
  };

  return (
    <Center>
      <VStack>
        <Heading>Search</Heading>
        <Flex columnGap="5px">
          <Input type="text" value={keyword} onChange={handleChange} />
          <Button isLoading={loading} colorScheme="blue" onClick={handleSearch}>
            Search
          </Button>
        </Flex>
        {error && <Text color="red">Input field can't be empty</Text>}
        {firstRender && (
          <Image
            src="https://i.gifer.com/origin/22/229d93768bce2f815ee0be08fa49a29b.gif"
            alt="first-time"
          />
        )}
        {products.length !== 0 && <DisplayProducts products={products.data} />}
        {loading && <Loader />}
      </VStack>
    </Center>
  );
};

export default Search;
