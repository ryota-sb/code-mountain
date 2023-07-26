export type ContactFormInput = {
  name: string;
  email: string;
  message: string;
};

export type ProductObject = {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  images: string[];
  description: string;
  features: string[];
  skills: string[];
  githubSrc: string;
  url: string;
};
