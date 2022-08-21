import LoadingCircle from "../LoadingCircle";
import { LoadingContainer } from "./styles";

export default function LoadingScreen() {
  return (
    <LoadingContainer>
      <LoadingCircle />
    </LoadingContainer>
  );
}
