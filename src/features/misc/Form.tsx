import { forwardRef } from "react";
import FormError from "./FormError";

function Form({
  children,
  onSubmit,
  action,
}: {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  action?: string;
}) {
  return (
    <form
      action={action}
      onSubmit={onSubmit}
      className="flex h-screen  flex-col justify-center gap-5  bg-white p-10 xl:min-h-screen xl:justify-center xl:px-20"
    >
      {children}
    </form>
  );
}

function InputGroup({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, error, ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          type={type}
          className={
            "w-full rounded-full border-2 px-5 py-3 placeholder:text-gray-300" +
            (error ? " border-red-700" : "")
          }
          {...props}
        />
        {error && <FormError error={error} />}
      </>
    );
  }
);

Form.InputGroup = InputGroup;
Form.Input = Input;

export default Form;
