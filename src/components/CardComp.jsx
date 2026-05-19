import { Card } from "flowbite-react";

export function CardComp({item, className, imageClassName, children}) {
  return (
    <Card className={className}>
      <img
        src={item.image}
        alt=""
        className={imageClassName}
      />
      {children}
        
      <h5 className="text-2xl font-bold tracking-tight text-white light:text-black">
        {item.title}
      </h5>
      <p className="font-light text-sm text-gray-300 dark:text-gray-400">
        {item.desc}
      </p>
    </Card>
  );
}
// width={500} height={500}
