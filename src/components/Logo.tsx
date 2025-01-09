import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/ball.png"
      alt="Logo"
      width={25}
      height={25}
      // style={{ position: "absolute" }}
    />
  );
}
