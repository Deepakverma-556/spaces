interface HeadingProps {
  text: string;
}
function Heading({ text }: HeadingProps) {
  return <p className="font-medium text-xl leading-[100%]">{text}</p>;
}

export default Heading;
