import { cormorant } from "../../font"

interface CardPropertyFilterProps {
    title: string;
    value: number;
}

const CardPropertyFilter = ({ title, value }: CardPropertyFilterProps) => {
    return (
      <div className="border-b border-primary p-4 w-full">
        <h3 className={`text-primary font-title text-4xl`}>{value}</h3>
        <p className="mt-2 text-gray-300">{title}</p>
      </div>
    );
}
 
export default CardPropertyFilter;