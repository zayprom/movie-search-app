import { Image } from "../../components/Image/Image";
import { getImageUrl } from "../../utils/movieHelpers";
import ImagePlaceholder from "../../assets/no-image-placeholder.jpg";
import type { MovieDetailsResponse } from "../../api/types";
import { Section } from "../../components/Layout/Section";

interface MoviePosterProps {
  movie: MovieDetailsResponse;
}

export const MoviePoster = (props: MoviePosterProps) => {
  return (
    <Section $direction="row" $align="center" $justifyContent="flex-start">
      <Image
        src={
          props.movie.poster_path
            ? getImageUrl(props.movie.poster_path)
            : ImagePlaceholder
        }
        alt={
          props.movie.poster_path
            ? `Poster of ${props.movie.original_title}`
            : `No image for ${props.movie.original_title}`
        }
        $width="20rem"
        loading="lazy"
      />
    </Section>
  );
};
