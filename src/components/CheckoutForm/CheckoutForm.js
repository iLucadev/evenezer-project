import React, { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import validate from "../../hooks/validateInfo";

const CheckoutForm = ({ buyNow, cart }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  /*   const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });

  if (!valuesAreEmpty && errorsIsEmpty == 0) {
    setBuyer({
      ...buyer,
      name: values.username,
      email: values.email,
      phone: values.phone,
    });

    buyNow(buyer, cart);
  } */

  return (
    <section className="row-span-5">
      <form className="form space-y-6">
        <div className="form-inputs flex">
          <label htmlFor="username" className="form-label w-1/4">
            Name
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input w-2/4  border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="enter your full name"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && (
            <span className="text-red-500 w-1/4">{errors.username}</span>
          )}
        </div>
        <div className="form-inputs flex">
          <label htmlFor="email" className="form-label w-1/4">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input w-2/4  border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="enter your email address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="text-red-500 w-1/4">{errors.email}</span>
          )}
        </div>
        <div className="form-inputs flex">
          <label htmlFor="email" className="form-label w-1/4">
            Confirm your email
          </label>
          <input
            id="email2"
            type="email"
            name="email2"
            className="form-input w-2/4  border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="confirm your email address"
            value={values.email2}
            onChange={handleChange}
          />
          {errors.email2 && (
            <span className="text-red-500 w-1/4">{errors.email2}</span>
          )}
        </div>
        <div className="form-inputs flex">
          <label htmlFor="phone" className="form-label w-1/4">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="form-input w-2/4  border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="enter your phone number"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <span className="text-red-500 w-1/4">{errors.phone}</span>
          )}
        </div>
        <button
          type="button"
          onClick={() => handleSubmit()}
          className="form-input-btn flex justify-center items-center mx-auto w-1/4 h-10 font-semibold text-white bg-purple-600 hover:bg-purple-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        >
          Checkout
        </button>
      </form>
    </section>
  );
};

export default CheckoutForm;
