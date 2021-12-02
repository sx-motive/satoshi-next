import Image from "next/image";

export default function MotiveImage(props) {
  return <Image src={props.src} quality={100} layout="fill" alt="img" />;
}
