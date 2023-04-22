import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

const DisplayProducts = ({ products }) => {
  console.log(products);

  if (products.length === 0) {
    return (
      <>
        <Heading size="md">
          Oops! looks like not present at the moment...
        </Heading>
        <Heading size="md">Try searching something else</Heading>
        <Image
          src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
          alt="gifs"
        />
      </>
    );
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
      {products?.map((el) => (
        <Card key={el._id}>
          <CardBody>
            <Image
              src={el.imageUrl}
              al={el.name}
              w={{ base: "300px", md: "400px" }}
              h={{ base: "300px", md: "400px" }}
            />
          </CardBody>
          <CardFooter>
            <Heading size="md">{el.name}</Heading>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default DisplayProducts;
