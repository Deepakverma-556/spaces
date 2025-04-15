interface buttonProp {
  myClass: string;
  text: string;
}
function CustomButton({ myClass, text }: buttonProp) {
  return <button className={`${myClass} font-semibold text-[13px] leading-[100%] text-black h-8 w-8 flex items-center justify-center`}>{text}</button>;
}

export default CustomButton;
