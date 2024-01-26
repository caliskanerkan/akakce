import { Container } from "~/common/components/layout/Container";
import { ComponentType } from "~/common/model/ComponentType";

export default function Content({ children }: ComponentType) {
  return (
    <main className='flex justify-center h-layout bg-gray-50 overflow-y-auto'>
      <Container>{children}</Container>
    </main>
  );
}
