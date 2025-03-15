"use client";

import React, { useState, FormEvent } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export function FormDemo() {
  // Form state
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "555-123-4567", // Pre-filled and disabled value
  });

  // Form validation
  const [errors, setErrors] = useState({
    email: false,
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types in the email field
    if (name === "email" && errors.email) {
      setErrors({ ...errors, email: false });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formState.email.includes("@")) {
      setErrors({ ...errors, email: true });
      return;
    }

    // Simulate API submission
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      // In a real application, you would send a POST request to your API
      // Example: await fetch('/api/submit-form', { method: 'POST', body: JSON.stringify(formState) })

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      setSubmitResult(
        "Form submitted successfully! Check console for form data."
      );
      console.log("Form data that would be sent to the server:", formState);
    } catch (error) {
      setSubmitResult("Error submitting form. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-md">
      <h2 className="text-lg font-bold">Form with Input Components</h2>

      <form onSubmit={handleSubmit} className="space-y-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <Input
            label="First Name"
            helpText="im gay"
            name="firstName"
            placeholder="Enter first name"
            value={formState.firstName}
            onChange={handleChange}
            required
          />

          <Input
            label="Last Name"
            helpText="im gay"
            name="lastName"
            placeholder="Enter last name"
            value={formState.lastName}
            onChange={handleChange}
            required
            error={true}
          />
        </div>

        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter email address"
          value={formState.email}
          onChange={handleChange}
          helpText={
            errors.email
              ? "Please enter a valid email address"
              : "We'll never share your email"
          }
          error={errors.email}
          required
        />

        <Input
          label="Phone Number"
          name="phone"
          placeholder="Enter phone number"
          value={formState.phone}
          onChange={handleChange}
          helpText="This field is pre-filled and cannot be modified"
          disabled={true}
        />

        <div className="pt-sm">
          <Button variant="primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Form"}
          </Button>
        </div>

        {submitResult && (
          <div
            className={`p-sm rounded-xs ${
              submitResult.includes("Error")
                ? "bg-destructive-100 text-destructive-700"
                : "bg-positive-100 text-positive-700"
            }`}
          >
            {submitResult}
          </div>
        )}
      </form>
    </div>
  );
}
