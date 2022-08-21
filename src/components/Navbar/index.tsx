import Link from "next/link";
import { NavbarContainer } from "./styles";

interface NavbarProps {
  active: boolean;
}

export default function Navbar({ active }: NavbarProps) {
  return (
    <NavbarContainer active={active}>
      <Link href="/">
        <div className="logo">
          <img src="../../logos/gelzin.svg" alt="gelzin" />
        </div>
      </Link>
    </NavbarContainer>
  );
}
