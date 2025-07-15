import { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function InputField({
  label,
  ...props
}: Readonly<InputFieldProps>) {
  return (
    <div className='relative flex-1'>
      <label
        htmlFor={props.id}
        className='label'
      >
        {label}
      </label>

      <input
        {...props}
        className={`input-field`}
      />
    </div>
  );
}
