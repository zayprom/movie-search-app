import styled from "styled-components";
import {
  getMovieDetailRoute,
  getTranslatedTitle,
  getYearFromDate,
} from "../../utils/movieHelpers";
import type { Movie } from "../../api/types";
import { Link } from "react-router";
import { Fullscreen } from "lucide-react";
import { Text } from "../../components/Typography/Text";
import { Badge } from "../../components/Badge/Badge";
import { LayoutWrapper } from "../../components/Layout/LayoutWrapper";

export const MovieCardHoveredContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.6rem;
  color: #333;
  width: 100%;
  min-height: 20%;
  height: fit-content;
  bottom: 0;
  left: 0;
  background-color: #fff;
`;

export const MovieCardLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  text-decoration: none;
  color: #333;
  font-size: 0.8rem;
  font-weight: 400;
  background-color: #eee;
  padding: 0.4rem;
  border-radius: 50px;

  transition: all 0.3s ease-out;

  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

interface MovieCardHoveredDataProps {
  movieData: Movie;
}

export const MovieCardHoveredData = (props: MovieCardHoveredDataProps) => {
  const movieTitle = getTranslatedTitle(
    props.movieData.original_language === "en",
    props.movieData.original_title,
    props.movieData.title
  );

  return (
    <MovieCardHoveredContent>
      <LayoutWrapper
        $direction="column"
        $align="flex-start"
        $justifyContent="flex-start"
        $gap="small"
      >
        <LayoutWrapper
          $direction="row"
          $justifyContent="space-between"
          $align="center"
          $isFullWidth
        >
          <Text $size="xsmall" $weight="medium">
            {movieTitle}
          </Text>
          <MovieCardLink
            title="More information"
            to={getMovieDetailRoute(props.movieData.id)}
          >
            <Fullscreen size={12} color="#333" />
          </MovieCardLink>
        </LayoutWrapper>
        <LayoutWrapper
          $direction="row"
          $align="center"
          $justifyContent="flex-start"
          $gap="xsmall"
        >
          {props.movieData.release_date ? (
            <Badge $size="small">
              <Text $size="xsmall" $weight="medium">
                {getYearFromDate(props.movieData.release_date)}
              </Text>
            </Badge>
          ) : null}
          {props.movieData.adult ? (
            <Badge $size="small">
              <Text $size="xsmall" $weight="medium">
                18+
              </Text>
            </Badge>
          ) : null}
          <Badge $size="small">
            <Text $size="xsmall" $weight="medium">
              {props.movieData.vote_average.toFixed(1)}
            </Text>
          </Badge>
        </LayoutWrapper>
      </LayoutWrapper>
    </MovieCardHoveredContent>
  );
};
