import { cn } from "@/utils/util";
// import { ProgressSpinner } from 'primereact/progressspinner';
import ReactLoading from "react-loading";

export const ButtonLoader = ({
  size,
  color = "white",
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <ReactLoading
      type="bars"
      height={size ?? 30}
      width={size ?? 30}
      color={color}
    />
  );
};

export const Spinner = ({ size, color }: { size?: number; color?: string }) => {
  // return <ReactLoading type="spin" height={size ?? 20} width={size ?? 20} color={color ?? "#227A5F"} />
  return (
    <div
      className={cn("loaderSpinner size-5 border-2", {
        [`h-[${size}px}]`]: size,
        [`w-[${size}px}]`]: size,
        [`border-${color}`]: color,
      })}
    ></div>
  );
};

export const ChangePictureSpinner = () => {
  return (
    <div className="h-[56px] w-[56px] flex justify-center items-center rounded-[50%] bg-white border-[1px] border-[#D3D9E4] flex-shrink-0">
      <Spinner />
    </div>
  );
};

export default function FullScreenLoader({ text }: { text?: string }) {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen pointer-events-none bg-opacity-5 bg-slate-400">
      <div className="flex flex-col items-center justify-center card">
        {/* <p className="mb-[20px] font-semibold text-lg w-max">{text ? text : "Please wait..."}</p> */}
        <Spinner />
        {text && <p className="mt-4 text-xl font-bold">{text}</p>}
      </div>
    </div>
  );
}
