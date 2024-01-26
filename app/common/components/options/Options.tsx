import clsx from "clsx";

interface OptionsProps {
  options: string[];
  description?: string;
  selected?: string;
  onSelect?: (value: string) => void;
}

export const Options = ({
  options,
  selected,
  onSelect,
  description = "Seçenekler:",
}: OptionsProps) => {
  const onClickHandler = (value: string) => {
    onSelect?.(value);
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='text-xs text-black'> {description} </div>
      <div className='flex gap-2'>
        {options.map((option) => (
          <div
            className={clsx(
              "border border-gray-200 p-4 rounded-md hover:border-gray-500 select-none cursor-pointer",
              selected === option && "border-gray-500"
            )}
            key={option}
            onClick={() => onClickHandler(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
