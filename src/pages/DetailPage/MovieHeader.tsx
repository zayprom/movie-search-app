import { Heading } from "../../components/Typography/Heading";
import { Clock, ThumbsUp } from "lucide-react";
import { MovieDetailsRow } from "./DetailPage.internal";
import {
  getTranslatedTitle,
  getYearFromDate,
  formatRuntime,
} from "../../utils/movieHelpers";
import type { MovieDetailsResponse } from "../../api/types";
import { Text } from "../../components/Typography/Text";
import { Badge } from "../../components/Badge/Badge";
import { List } from "../../components/List/List";

interface MovieHeaderProps {
  movie: MovieDetailsResponse;
}

export const MovieHeader = (props: MovieHeaderProps) => {
  const movieTitle = getTranslatedTitle(
    props.movie.original_language === "en",
    props.movie.original_title,
    props.movie.title
  );

  const releaseYear = props.movie.release_date
    ? `(${getYearFromDate(props.movie.release_date)})`
    : "(No release date)";

  const hasGenres = props.movie.genres.length > 0;
  const hasRuntime = props.movie.runtime && props.movie.runtime > 0;

  return (
    <>
      <MovieDetailsRow>
        <Heading>
          {movieTitle} {releaseYear}
        </Heading>
        {props.movie.tagline ? (
          <Text $isItalic>{props.movie.tagline}</Text>
        ) : null}
        {hasGenres || hasRuntime ? (
          <List>
            {hasGenres &&
              props.movie.genres.map((genre) => (
                <Badge $size="small" key={genre.id}>
                  <span>{genre.name}</span>
                </Badge>
              ))}
            {hasRuntime && (
              <Badge $size="small">
                <Clock size={12} color="#333" />
                <span>{formatRuntime(props.movie.runtime!)}</span>
              </Badge>
            )}
          </List>
        ) : null}
      </MovieDetailsRow>
      <MovieDetailsRow>
        <Badge $size="large">
          <ThumbsUp size={24} color="#333" />
          {props.movie.vote_average.toFixed(1)}
        </Badge>
      </MovieDetailsRow>
    </>
  );
};
