import { Path, FieldValues, UseFormRegister } from "react-hook-form";
import { Form } from "react-bootstrap";

type InputProps<TFieldValue extends FieldValues> = {
  label: string;
  name: Path<TFieldValue>;
  type?: string;
  register: UseFormRegister<TFieldValue>;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  formText?: string;
  success?: string;
  disabled?: boolean;
};


const Input = <TFieldValue extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
  onBlur,
  formText,
  success,
  disabled,
}: InputProps<TFieldValue>) => {
  const onblurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
      register(name).onBlur(event);
    } else {
      register(name).onBlur(event);
    }
  };
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        {...register(name)}
        onBlur={onblurHandler}
        isInvalid={error ? true : false}
        isValid={success ? true : false}
        disabled={disabled}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
      {formText && <Form.Text muted>{formText}</Form.Text>}
    </Form.Group>
  )
}

export default Input

