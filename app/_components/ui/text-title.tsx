interface TextTitleProps {
  title: string;
  subtitle: string;
  br?: boolean;
}

const TextTitle = ({ title, subtitle, br = false }: TextTitleProps) => {
  return (
    <h1 className="font-title font-light text-4xl leading-[1.1] tracking-wide text-black">
      {title}
      {br && <br />}
      <span className="text-primary italic"> {subtitle}</span>
    </h1>
  );
};

export default TextTitle;
