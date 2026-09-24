export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
  highlight?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/praveeny5117",
    icon: "Github",
    handle: "github.com/praveeny5117",
    highlight: true
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/praveen-y-751125178/",
    icon: "Linkedin",
    handle: "linkedin.com/in/praveen-y-751125178",
    highlight: true
  },
  {
    name: "Email",
    url: "mailto:yonaspraveen@gmail.com",
    icon: "Mail",
    handle: "yonaspraveen@gmail.com",
    highlight: true
  }
];
