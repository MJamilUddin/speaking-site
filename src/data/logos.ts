export interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

export const logos: Logo[] = [
  {
    id: "logo-1",
    description: "Teach First",
    image: "/teach first logo.png",
    className: "h-12 w-auto",
  },
  {
    id: "logo-2",
    description: "Sainsbury's",
    image: "/sainsburys-logo.png",
    className: "h-16 w-auto",
  },
  {
    id: "logo-3",
    description: "SKT",
    image: "/skt logo.png",
    className: "h-16 w-auto",
  },
  {
    id: "logo-4",
    description: "YWF",
    image: "/YWF_logo.png",
    className: "h-20 w-auto",
  },
  {
    id: "logo-5",
    description: "Seedlab",
    image: "/seedlab logo.webp",
    className: "h-12 w-auto",
  },
  {
    id: "logo-6",
    description: "Hulm",
    image: "/Hulm Logo.png",
    className: "h-12 w-auto",
  },
];
