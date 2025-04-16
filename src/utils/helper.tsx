import { link } from "fs";
import { FaqIcon, Support } from "./icons";

export const USER_GUIDES_LIST = [
  {
    title: "Portail 360",
    link: "#portail",
  },
  {
    title: "Jenkins",
    link: "#jenkins",
  },
  {
    title: "Artifactory/Xray",
    link: "#artifactory",
  },
  {
    title: "Release",
    link: "#release",
  },
  {
    title: "Ansible Tower",
    link: "#ansible",
  },
  {
    title: "ArgoCD",
    link: "#argocd",
  },
  {
    title: "Infra as Code",
    link: "#infra-as-code",
  },
];

export const CONTACT_LIST = [
  {
    icon: <FaqIcon />,
    title: "FAQs",
    link: "#faqs",
  },
  {
    icon: <Support />,
    title: "Contact Support",
    link: "#contact",
  },
];

export const TABLE_HEADING_LIST = [
  "ID",
  "Space",
  "Offer",
  "Team",
  "APP ID",
  "Action",
];