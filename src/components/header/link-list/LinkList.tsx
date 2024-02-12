import { HeaderButton } from "../header-button/HeaderButton";

const links = [
  "Про кафедру",
  "Навчання",
  "Абітурієнтам",
  "Наука",
  "Бібліотека",
  "Контакти",
];

export const LinkList = () => {
  const list = links.map((link) => <HeaderButton>{link}</HeaderButton>);
  return (
    <ul className="flex flex-wrap items-center justify-center h-full">
      {list}
    </ul>
  );
};
