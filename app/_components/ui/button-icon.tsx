interface ButtonIconProps {
    icon: React.ReactNode;
    // You can add props here if needed in the future
}
const ButtonIcon = ({ icon }: ButtonIconProps) => {
    return (
      <div className="text-gray-500 border border-primary/50 p-2 rounded-xs hover:text-white hover:bg-primary/50 hover:border-primary cursor-pointer">
        {icon}
      </div>
    );
}
 
export default ButtonIcon;