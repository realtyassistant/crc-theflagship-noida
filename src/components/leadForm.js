"use client";

import React, { useState } from "react";
import { FaArrowRightToBracket } from "../../public/icon";

export default function LeadForm() {
  const [leadForm, setLeadForm] = useState({
    name: "",
    number: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setLeadForm({ ...leadForm, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!leadForm.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(leadForm.name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    // Number validation
    if (!leadForm.number.trim()) {
      newErrors.number = "Number is required";
    } else if (!/^\d{10}$/.test(leadForm.number)) {
      newErrors.number = "Number must be exactly 10 digits";
    }

    // Email validation (optional but must be valid format if entered)
    if (leadForm.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadForm.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLeadFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("✅ Lead Submitted:", leadForm);
      setLeadForm({
        name: "",
        number: "",
        email: "",
      });
    } else {
      console.log("❌ Validation failed");
    }
  };

  return (
    <>
      <h2 className="custom-heading text-center text-themeColor !mb-3">Request Callback</h2>
      <p className="mb-5 text-[1.2rem] text-center">Get to know everything you want from our representative!</p>

      <form onSubmit={handleLeadFormSubmit} className="flex flex-col gap-5">
        <div>
          <input type="text" name="name" value={leadForm.name} onChange={handleChange} placeholder="Name*" className="p-3 border w-full" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input type="text" name="number" value={leadForm.number} onChange={handleChange} placeholder="Number*" className="p-3 border w-full" />
          {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
        </div>

        <div>
          <input type="text" name="email" value={leadForm.email} onChange={handleChange} placeholder="Email" className="p-3 border w-full" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <button type="submit" className="custom-btn flex items-center gap-4 justify-center bg-themeColor">
          <FaArrowRightToBracket /> Submit
        </button>
      </form>
    </>
  );
}
