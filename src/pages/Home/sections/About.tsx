export const About = () => {
  return (
    <div className="flex gap-5 justify-between">
      <div className="w-[480px] flex flex-col gap-8">
        <h2 className="font-bold text-5xl">Про нас</h2>
        <p className="font-light text-2xl leading-7">
          Кафедра інтелектуальних програмних систем спеціалізується в області
          комп'ютерних наук, штучного інтелекту та програмної інженерії.
        </p>
        <p className="font-light text-2xl leading-7">
          Співробітники кафедри активно ведуть дослідження в цих галузях і
          активно залучають до цього студентів.
        </p>
        <p className="font-medium text-2xl">Дізнатися більше про кафедру</p>
      </div>
      <img
        style={{    
          height: "402px",
          width: "570px",
          borderRadius: '12px'
        }}
        src="/src/static/img/faculty.png"
      />
    </div>
  );
};
