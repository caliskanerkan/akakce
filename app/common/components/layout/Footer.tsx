import pkg from "package.json";
import { Container } from "~/common/components/layout/Container";
import { Tag } from "~/common/components/layout/Tag";

export default function Footer() {
  return (
    <Tag
      as='footer'
      className='h-[40px] bg-white border-t border-gray-300 flex justify-center items-center'
    >
      <Container className='flex items-center justify-center gap-2'>
        <div className='text-xs text-gray-700'>Made with</div>
        <div className='text-xs'>❤️</div>
        <div className='text-xs text-gray-700'>{pkg.author}</div>
      </Container>
    </Tag>
  );
}
