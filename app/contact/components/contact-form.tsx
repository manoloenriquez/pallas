"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import emailjs from "emailjs-com";

import { FormEvent, useEffect, useState } from "react";
import { sendEmail } from "../actions";

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

  function clearForm() {
    setFormValues({
      name: "",
      email: "",
      product: "",
      contact: "",
      message: "",
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const EMAIL_SERVICE_ID = process.env.EMAIL_SERVICE_ID;
    const EMAIL_TEMPLATE_ID = process.env.EMAIL_TEMPLATE_ID;
    const EMAIL_PUBLIC_KEY = process.env.EMAIL_PUBLIC_KEY;
    try {
      await emailjs.send(
        EMAIL_SERVICE_ID!,
        EMAIL_TEMPLATE_ID!,
        {
          from_name: formValues.name,
          message: formValues.message,
          product: formValues.product,
          contact: formValues.contact,
          email: formValues.email,
        },
        EMAIL_PUBLIC_KEY
      );

      clearForm();
    } catch (e) {
      console.error(e);
    }
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputGroup
            name="name"
            value={formValues.name}
            label="Name"
            onChange={(value) => updateFormValue("name", value)}
          />
          <InputGroup
            name="email"
            value={formValues.email}
            label="Email"
            onChange={(value) => updateFormValue("email", value)}
          />
          <ProductSelect
            name="product"
            value={formValues.product}
            label="Product"
            onChange={(value) => updateFormValue("product", value)}
          />
          <InputGroup
            name="contact"
            value={formValues.contact}
            label="Phone Number"
            onChange={(value) => updateFormValue("contact", value)}
          />
          <InputGroup
            name="message"
            value={formValues.message}
            label="Message"
            isTextArea
            onChange={(value) => updateFormValue("message", value)}
          />
          <Button type="submit" className="bg-pallasred">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

const InputGroup = ({
  name,
  value,
  label,
  placeholder,
  onChange,
  isTextArea,
}: {
  name: string;
  value: string;
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
        value={value}
        placeholder={placeholder}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      />
    ) : (
      <Input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      />
    )}
  </div>
);

const ProductSelect = ({
  name,
  value,
  label,
  placeholder,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}) => {
  const items = [
    "Fuse Cutout",
    "Lightning Arresters",
    "Fuse Link",
    "Meter Base",
    "Disconnect Switch",
    "Insulator (Pin & Spool)",
    "Fuse Tube",
    "69KV Transmission Products",
    "115KV Transmission Products",
    "230KV Transmission Products",
  ];

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Select name={name} onValueChange={onChange} value={value}>
        <SelectTrigger>
          <SelectValue placeholder="Product" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem value={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
