import { ArrowUp } from "phosphor-react";
import { ScrollUpContainer } from "./styles";

export default function ScrollUp() {
  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ScrollUpContainer>
      <ArrowUp onClick={handleScrollUp} />
    </ScrollUpContainer>
  );
}
