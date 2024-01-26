interface BadgeProps {
  text: string;
}

export const Badge = ({ text }: BadgeProps) => {
  return (
    <span className='py-1 px-2 text-semibold bg-yellow-100 text-xs rounded text-black'>
      {text}
    </span>
  );
};
