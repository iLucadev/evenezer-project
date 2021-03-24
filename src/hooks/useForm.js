import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    email2: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (cart) => {
    setErrors(validate(values));
  };

  /* const valuesAreEmpty = !Object.values(values).some(
    (x) => x !== null && x !== ""
  );

  const errorsIsEmpty = Object.keys(errors).length;
 */
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
