import Image from "next/image";
import { MessageCircle } from "lucide-react";
import ButtonIcon from "./button-icon";

interface CardContactRealtorProps {
  name: string;
  description: string;
  imageUrl: string;
}

const CardContactRealtor = ({
  name,
  description,
  imageUrl,
}: CardContactRealtorProps) => {
  return (
    <div className="flex justify-between items-center p-2 border-b border-primary/20">
      <div className="flex gap-4 items-center">
        <div className="rounded-full w-15 h-15 overflow-hidden relative border border-primary">
          <Image
            src={imageUrl}
            alt="Logo da Empresa"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p>{name}</p>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      <ButtonIcon icon={<MessageCircle />} />
    </div>
  );
};

export default CardContactRealtor;
