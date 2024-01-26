import { Container } from "~/common/components/layout/Container";
import { Logo } from "~/common/components/logo/Logo";

export default function Header() {
  return (
    <header className='h-[60px] bg-white border-b border-gray-300 flex justify-center items-center'>
      <Container>
        <Logo />
      </Container>
    </header>
  );
}
