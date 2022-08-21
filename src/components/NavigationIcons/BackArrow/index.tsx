import Link from "next/link";
import { ArrowLeft } from "phosphor-react";
import { ArrowContainer } from "./styles";

export default function BackArrow() {
  return (
    <ArrowContainer>
      <Link href="/">
        <ArrowLeft />
      </Link>
    </ArrowContainer>
  );
}
