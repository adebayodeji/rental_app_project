"use client";
import PropertyCard from "./PropertyCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Container from "../partials/Container";

async function getPokemons({ pageParam }: { pageParam: number }) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/ability?limit=20&offset=${pageParam}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  let filtered = await data.results.map((pokemon: {}, index: number) => {
    let paddedIndex =
      pageParam === 0
        ? ("00" + (index + 1)).slice(-3)
        : ("00" + (index + 1 + pageParam)).slice(-3);

    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`;
    return {
      ...pokemon,
      imageUrl: image,
    };
  });
  return filtered;
}

const PropertiesPage = () => {
  const { ref, inView } = useInView();

  const {
    data: pokemons,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage.length === 20 ? allPages.length * 20 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <Container>
      <div
        className="
          pt-24
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-4
          2xl:grid-cols-6
          gap-1
          w-full
          "
      >
        {pokemons?.pages?.map((page) =>
          page.map(
            (
              property: {
                imageUrl: string;
                name: string;
              },
              index: number
            ) => {
              if (page.length == index + 1) {
                return (
                  <PropertyCard
                    data={{
                      image: property.imageUrl,
                      type: "Dummy property type",
                      id: index.toString(),
                    }}
                    key={index}
                    innerRef
                  />
                );
              } else {
                return (
                  <PropertyCard
                    data={{
                      image: property.imageUrl,
                      type: "Dummy property type",
                      id: index.toString(),
                    }}
                    key={index}
                  />
                );
              }
            }
          )
        )}
      </div>
    </Container>
  );
};

export default PropertiesPage;
