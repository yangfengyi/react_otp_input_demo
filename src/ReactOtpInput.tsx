import { useEffect, useRef, useState } from "react";

interface IReactOtpInput {}

export default function ReactOtpInput() {
  const [opts, setOpts] = useState<string[]>(new Array(6).fill(""));
  const [activeInputIdx, setActiveInputIdx] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { value } = target;
    console.log(value, index, "change");
    const newOtps = [...opts];
    newOtps[index] = value.substring(value?.length - 1);
    setOpts(newOtps);

    if (!value) {
      setActiveInputIdx(index - 1);
    } else {
      setActiveInputIdx(index + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;
    console.log(key, target);

    if (key === "Backspace" && target.value === "") {
      setActiveInputIdx(index - 1);
    }
  };

  useEffect(() => inputRef.current?.focus(), [activeInputIdx]);

  return (
    <div className="flex gap-2 mx-auto items-center justify-center pt-40">
      {opts.map((o: string, index: number) => (
        <input
          ref={activeInputIdx === index ? inputRef : null}
          value={o}
          autoComplete="false"
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="border w-10 h-10 color-black text-2xl flex justify-center items-center"
          key={index}
          maxLength={1}
        />
      ))}
    </div>
  );
}
