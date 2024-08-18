import { Paragraph } from "@/components/styled/Paragrph";

export const About = () => {
  return (
    <div className="flex gap-5 justify-between items-start flex-wrap-reverse md:flex-nowrap">
      <div className="w-[480px] flex flex-col gap-8">
        <h2 className="font-bold text-5xl">Про нас</h2>
        <Paragraph>Кафедра інтелектуальних програмних систем спеціалізується в області
          комп'ютерних наук, штучного інтелекту та програмної інженерії.</Paragraph>
        <Paragraph>
        Співробітники кафедри активно ведуть дослідження в цих галузях і
          активно залучають до цього студентів.
        </Paragraph>
        <p className="font-medium text-2xl">Дізнатися більше про кафедру</p>
      </div>
      <img
        className="rounded-2xl max-w-full md:max-w-[50%]"
        src="/src/static/img/faculty.png"
      />
    </div>
  );
};
