import type { MovieDetailsResponse } from "../../api/types";
import { Text } from "../../components/Typography/Text";
import { Badge } from "../../components/Badge/Badge";
import { List } from "../../components/List/List";
import { LayoutWrapper } from "../../components/Layout/LayoutWrapper";

interface MovieContentProps {
  movie: MovieDetailsResponse;
}

export const MovieContent = (props: MovieContentProps) => {
  return (
    <>
      <LayoutWrapper $direction="column" $gap="small">
        <Text $weight="bold">Overview</Text>
        <Text $size="small">{props.movie.overview}</Text>
      </LayoutWrapper>
      <LayoutWrapper $direction="column" $gap="small">
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
      </LayoutWrapper>
    </>
  );
};
