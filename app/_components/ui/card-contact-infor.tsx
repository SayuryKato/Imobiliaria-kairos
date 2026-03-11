interface CardContactInforProps {
  icon: React.ReactNode;
  type: string;
  value: string;
  description: string;
}

const CardContactInfor = ({
  icon,
  type,
  value,
  description,
}: CardContactInforProps) => {
  return (
    <div className="flex flex-col gap-4 bg-black hover:bg-primary/5 hover:border border-b-primary p-4 w-full text-gray-400">
      <div className="flex  items-center gap-2">
        <div className="border border-primary/50 text-2xl mb-2 p-1 rounded-xs">
          {icon}
        </div>
        <h2 className="text-xl mb-2">{type}</h2>
      </div>
      <p className="text-primary text-2xl font-title">{value}</p>
      <p>{description}</p>
    </div>
  );
};

export default CardContactInfor;
