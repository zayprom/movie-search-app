import { useNavigate, useParams } from "react-router";
import { Header } from "../../components/Header/Header";
import { MainContent } from "../../components/Layout/MainContent";
import { useMovieDetails } from "../../hooks/useMovieDetailsQuery";
import { DetailPageError } from "./DetailPageError";
import { MovieHeader } from "./MovieHeader";
import { MoviePoster } from "./MoviePoster";
import { MovieContent } from "./MovieContent";
import Button from "../../components/Button/Button";
import { MoveLeft } from "lucide-react";
import { LayoutWrapper } from "../../components/Layout/LayoutWrapper";
import { Section } from "../../components/Layout/Section";

export const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movieId = Number(id);

  const { data, isLoading, isError, error } = useMovieDetails(movieId);

  const handleBackClick = () => {
    navigate(-1);
  };

  if (isNaN(movieId) || movieId <= 0) {
    return <DetailPageError type="invalid" />;
  }

  if (isLoading) {
    return <DetailPageError type="loading" />;
  }

  if (isError || !data) {
    return <DetailPageError type="error" errorMessage={error?.message} />;
  }

  return (
    <>
      <Header>
        <Button title="Go back" $isCircle onClick={handleBackClick}>
          <MoveLeft size={12} color="#333" />
        </Button>
      </Header>
      <MainContent>
        <LayoutWrapper
          $direction="row"
          $justifyContent="flex-start"
          $gap="medium"
          $isSmallScreen
          $isFullWidth
          $isAutoHeight
        >
          <MoviePoster movie={data} />
          <Section $direction="column" $align="flex-start" $isAutoWidth $hasGap>
            <MovieHeader movie={data} />
            <MovieContent movie={data} />
          </Section>
        </LayoutWrapper>
      </MainContent>
    </>
  );
};
