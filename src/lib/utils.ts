import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getProducts = async () => {
  const response = await axios
    .get("/api/products")
    .then(({ data }: any) => data);
  console.log(response);
  return response;
};

export const scrollToSection = (sectionId: string) => {
  var section = document.getElementById(sectionId);
  console.log(section);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function sanitizeString(input: string): string {
  return input.replace(/<script.*?>.*?<\/script>/gi, ''); // Basic XSS prevention
}

export function validatePrice(price:string) : string {
  return parseFloat(price).toFixed(2); // Ensure price is a number with two decimal places
}

export function sanitizeUrl(url:string) : string {
  return encodeURI(url); // Ensure the URL is correctly encoded
}


