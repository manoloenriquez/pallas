"use server";

import emailjs from "emailjs-com";

const EMAIL_SERVICE_ID = process.env.EMAIL_SERVICE_ID;
const EMAIL_TEMPLATE_ID = process.env.EMAIL_TEMPLATE_ID;
const EMAIL_PUBLIC_KEY = process.env.EMAIL_PUBLIC_KEY;

export async function sendEmail() {
  try {
    await emailjs.send(
      EMAIL_SERVICE_ID!,
      EMAIL_TEMPLATE_ID!,
      {
        from_name: "Lorem Ipsum",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam aliquam risus, eget vestibulum enim laoreet ac. Nullam et est orci. Etiam dictum augue velit, sit amet scelerisque velit aliquam vel. Morbi sit amet semper massa. Praesent in iaculis dui. Vivamus molestie id erat a placerat. Donec pretium eleifend dui.",
      },
      EMAIL_PUBLIC_KEY
    );
  } catch (e) {
    console.error(e);
  }
}
