import Image from "next/image";
import GuestsList from "../components/GuestsList";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-md p-4">
        <h1 className="text-lg font-semibold text-center">Married Wow</h1>
        <div className="grid grid-cols-2 gap-2">
          <Image
            src="/chomps.jpeg"
            alt="chomps"
            width={150}
            height={150}
            className="w-full h-auto rounded-md"
          />
          <Image
            src="/zhan.jpeg"
            alt="zhan"
            width={150}
            height={150}
            className="w-full h-auto rounded-md"
          />
        </div>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 p-2">
          Yes me is me I getting Married
        </p>
        <h1 className="text-lg font-semibold text-center">Come Pls</h1>
        <GuestsList />
      </div>
    </div>
  );
}
