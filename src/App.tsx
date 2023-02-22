import ReactOtpInput from "./ReactOtpInput";
import OtpInput from "./OtpInput";
import { useState } from "react";

export default function App() {
  const [otp, setOtp] = useState("");
  const onChange = (value: string) => setOtp(value);

  console.log(otp);

  return (
    <div>
      <ReactOtpInput />
      <OtpInput value={otp} valueLength={6} onChange={onChange} />
    </div>
  );
}
