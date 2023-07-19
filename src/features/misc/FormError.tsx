import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

function FormError({ error }: { error: string }) {
  return (
    <>
      <p className="mt-2 pl-5 text-sm text-red-700">{error}</p>
      <ExclamationCircleIcon className="absolute right-3 top-3 h-7 w-7 text-red-700" />
    </>
  );
}
export default FormError;
