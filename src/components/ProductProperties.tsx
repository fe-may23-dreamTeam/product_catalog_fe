type Props = {
  properties: { name: string; value: string }[];
};

export const ProductProperties = (props: Props) => {
  const { properties } = props;

  return (
    <ul className="flex flex-col gap-y-2 my-2">
      {properties.map((property) => (
        <li className="flex justify-between">
          <div className="text-xs text-grey_secondary font-bold">
            {property.name}
          </div>
          <div className="text-xs text-grey_primary font-bold">
            {property.value}
          </div>
        </li>
      ))}
    </ul>
  );
};
