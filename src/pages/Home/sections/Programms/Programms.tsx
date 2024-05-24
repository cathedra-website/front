import { Divider } from "@/components/common/divider/Divider";
import { Programm } from "./Programm";
import { ProgrammProps } from "./programm-props";

// might be better on backend
// slug hardcoded for now, should be changed
const programms: ProgrammProps[] = [
  {
    degree: "ОС Бакалавр",
    description:
      "Кафедра інтелектуальних програмних систем здійснює підготовку бакалаврів в галузі знань 12 Інформаційні технології за спеціальністю 121 Інженерія програмного забезпечення в рамках освітньої програми Програмна інженерія.",
    fullName: 'Освітня програма "Програмна інженерія"',
    slug: 'bakalavr'
  },
  {
    degree: "ОС Магістр",
    description:
      "Кафедра інтелектуальних програмних систем здійснює підготовку магістрів в галузі знань 12 Інформаційні технології за спеціальністю 121 Інженерія програмного забезпечення в рамках освітньої програми Програмне забезпечення систем.",
    fullName: 'Освітня програма "Програмне забезпечення систем"',
    slug: 'magistr'
  },
];

export const Programms = () => {
  return (
    <div className="flex flex-col gap-[34px]">
      <h2 className="text-[52px] font-bold">Наші програми</h2>
      <Divider />
      {programms.map((item) => (
        <>
          <Programm {...item} />
          <Divider />
        </>
      ))}
    </div>
  );
};
