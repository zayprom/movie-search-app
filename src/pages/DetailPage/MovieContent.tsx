import { MovieDetailsRow, MovieDetailsList } from "./DetailPage.internal";
import type { MovieDetailsResponse } from "../../api/types";
import { Text } from "../../components/Typography/Text";
import { Badge } from "../../components/Badge/Badge";

interface MovieContentProps {
  movie: MovieDetailsResponse;
}

export const MovieContent = (props: MovieContentProps) => {
  return (
    <>
      <MovieDetailsRow>
        <Text $weight="bold">Overview</Text>
        <Text $size="small">{props.movie.overview}</Text>
      </MovieDetailsRow>
      <MovieDetailsRow>
        {props.movie.production_companies.length > 0 ? (
          <>
            <Text $weight="bold">Production</Text>
            <MovieDetailsList>
              {props.movie.production_companies.map((company) => (
                <Badge $kind="small" $isInverted key={company.id}>
                  <span>{company.name}</span>
                </Badge>
              ))}
            </MovieDetailsList>
          </>
        ) : null}
      </MovieDetailsRow>
    </>
  );
};
