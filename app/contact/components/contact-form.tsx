"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useEffect, useState } from "react";

export default function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    product: "",
    contact: "",
    message: "",
  });

  function updateFormValue(key: keyof typeof formValues, value: string) {
    setFormValues((curr) => ({ ...formValues, [key]: value }));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="grid place-items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47171.878470417345!2d-71.055129!3d42.358673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37151e2379bb3%3A0xa9ef3ffe663978b6!2s75%20State%20St%2C%20Boston%2C%20MA%2002109!5e0!3m2!1sen!2sus!4v1715573120521!5m2!1sen!2sus"
          width="600"
          height="450"
          className="max-w-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="p-8">
        <form className="flex flex-col gap-4">
          <InputGroup name="name" label="Name" />
          <InputGroup name="email" label="Email" />
          <InputGroup name="product" label="Product" />
          <InputGroup name="contact" label="Phone Number" />
          <InputGroup name="message" label="Message" isTextArea />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}

const InputGroup = ({
  name,
  label,
  placeholder,
  onChange,
  isTextArea,
}: {
  name: string;
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  isTextArea?: boolean;
}) => (
  <div className="flex flex-col gap-2">
    <Label htmlFor={name}>{label}</Label>
    {isTextArea ? (
      <Textarea
        name={name}
        placeholder={placeholder}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      />
    ) : (
      <Input
        name={name}
        placeholder={placeholder}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      />
    )}
  </div>
);
