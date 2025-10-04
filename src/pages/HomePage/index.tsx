import { useEffect, useState } from "react";
import { Input } from "../../components/Form/Input";
import { MainContent } from "../../components/Layout/MainContent";
import { Header } from "../../components/Header/Header";

import { Heading } from "../../components/Typography/Heading";
import { useDebounce } from "../../hooks/useDebounce";
import { MoviesList } from "./MoviesList";
import { useSearchParams } from "react-router";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTerm = searchParams.get("search") ?? "";

  const [searchString, setSearchString] = useState<string>(currentTerm);

  useEffect(() => {
    setSearchString(currentTerm);
  }, [currentTerm]);

  const debouncedTerm = useDebounce(searchString, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchString(newValue);

    if (newValue) {
      setSearchParams({ search: newValue }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  return (
    <>
      <Header>
        <Input
          name="searchField"
          placeholder="Search..."
          value={searchString}
          onChange={handleChange}
        />
      </Header>
      <MainContent>
        <Heading>List of movies</Heading>
        <MoviesList debouncedTerm={debouncedTerm} />
      </MainContent>
    </>
  );
};
