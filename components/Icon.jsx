import Image from "next/image";

export default function Icon(props) {
  const { name, alt, width = '50px', ...rest } = props
  return (
    <Image
      src={`./src/assets/${name}.png`}
      alt={alt ?? name}
      {...rest}
    />
  )
}
