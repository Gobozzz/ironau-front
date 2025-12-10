interface Props {
  size?: string;
}

export function Loader({ size = "sm" }: Props) {
  let class_size = "w-5 h-5";
  if (size == "sm") {
    class_size = "w-5 h-5";
  } else if (size == "base") {
    class_size = "w-11 h-11";
  } else if (size == "lg") {
    class_size = "w-16 h-16";
  }
  return (
    <div
      className={`bg-foreground rounded-full p-1 relative animate-spin ${class_size} `}
    >
      <div className="bg-background w-full h-full rounded-full"></div>
      <div className="bg-background w-1 h-full absolute top-0 left-1/2 -translate-x-1/2"></div>
    </div>
  );
}
