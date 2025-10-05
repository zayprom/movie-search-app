import { MovieDetailsRow } from "./DetailPage.internal";
import type { MovieDetailsResponse } from "../../api/types";
import { Text } from "../../components/Typography/Text";
import { Badge } from "../../components/Badge/Badge";
import { List } from "../../components/List/List";

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
            <List>
              {props.movie.production_companies.map((company) => (
                <Badge $size="small" $isInverted key={company.id}>
                  <span>{company.name}</span>
                </Badge>
              ))}
            </List>
          </>
        ) : null}
      </MovieDetailsRow>
    </>
  );
};
