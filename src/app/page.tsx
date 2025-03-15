import { FormDemo } from "../components/FormDemo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-transparent p-md">
      <div className="w-full max-w-xl mb-xl">
        <h1 className="text-xl font-bold mb-md text-center">
          Form Integration Demo
        </h1>
        <FormDemo />
      </div>
    </div>
  );
}
