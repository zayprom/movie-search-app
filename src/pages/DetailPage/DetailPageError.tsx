import { useNavigate } from "react-router";
import { Header } from "../../components/Header/Header";
import { MainContent } from "../../components/Layout/MainContent";
import { SpinnerCircle } from "../../components/Spinner/Spinner.internal";
import Button from "../../components/Button/Button";
import { MoveLeft } from "lucide-react";
import { LayoutWrapper } from "../../components/Layout/LayoutWrapper";

interface DetailPageErrorProps {
  type: "invalid" | "loading" | "error";
  errorMessage?: string;
}

export const DetailPageError = (props: DetailPageErrorProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  if (props.type === "invalid") {
    return (
      <>
        <Header>
          <Button title="Go back" $isCircle onClick={handleBackClick}>
            <MoveLeft size={12} color="#333" />
          </Button>
        </Header>
        <MainContent>
          <p>Invalid movie ID.</p>
        </MainContent>
      </>
    );
  }

  if (props.type === "loading") {
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
            <SpinnerCircle />
            <p>Loading movie details…</p>
          </LayoutWrapper>
        </MainContent>
      </>
    );
  }

  if (props.type === "error") {
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
            <p>
              Error loading movie details
              {props.errorMessage ? `: ${props.errorMessage}` : "."}
            </p>
          </LayoutWrapper>
        </MainContent>
      </>
    );
  }

  return null;
};
