import { useRouter } from "next/router";
import { ArrowLeft } from "phosphor-react";
import { ArrowContainer } from "./styles";

export default function BackArrow() {
  const router = useRouter();

  return (
    <ArrowContainer>
      <ArrowLeft onClick={router.back} />
    </ArrowContainer>
  );
}
