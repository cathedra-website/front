import { SectionHeader } from "./Section/SectionHeader";
import { Paragraph } from "../../components/common/paragraph/Paragrph";
import { MainSection } from "./Section/MainSection";
import { AdditionalSection } from "./Section/AdditionalSection";
import { HistoryProps } from "./types";
import { List } from "@/components/common/list/List";

const historySections: HistoryProps[] = [
  {
    timePeriod: "1990-2001 рр.",
    lecturerInfo: {
      imgSrc: "/src/static/img/popov.png",
      name: "Попов Юрій Дмитрович",
      post: "завідувач кафедри ІС, доктор технічних наук, професор",
    },
    first: (
      <Paragraph>
        В зв'язку з бурхливим розвитком інформатики, як окремої галузі науки, що
        виділилася в межах кібернетики, в Київському державному університеті
        імені Тараса Григоровича Шевченка в травні 1990 року на факультеті
        кібернетики за наказом ректора № 323-32 від 03.05.1990 р. була створена
        нова кафедра загальної інформатики.
      </Paragraph>
    ),
    second: (
      <>
        <Paragraph>
          Завідувачем кафедри був призначений вихованець кафедри економічної
          кібернетики факультету кібернетики Київського університету, доктор
          технічних наук, професор Юрій Дмитрович Попов, який до того працював
          завідувачем кафедри дослідження операцій факультету кібернетики
          Київського університету.{" "}
        </Paragraph>
        <Paragraph>
          Головним завданням в майбутній роботі кафедри було визначено
          викладання дисциплін з інформатики та обчислювальної техніки на
          неспеціалізованих факультетах, забезпечення наукового та методичного
          керівництва розробкою комп‘ютерних технологій навчання та управління.
          В 1990–1992 роках кафедра була обслуговуючою, з 1992 року стала
          випускаючою.
        </Paragraph>
        <Paragraph>
          Згідно з ухвалою Вченої Ради Київського національного університету
          імені Тараса Шевченка від 1 червня 1998 року, у зв'язку зі зміною
          тематики наукових досліджень, кафедру було перейменовано на кафедру
          інформаційних систем.
        </Paragraph>
        <Paragraph>
          В цей час на ній працювало 9 штатних викладачів, у тому числі: 1
          доктор наук, 5 доцентів, кандидатів наук, 3 асистента, 4 співробітника
          (із них 3 – співробітники НДЧ).
        </Paragraph>
      </>
    ),
    third: (
      <>
        <Paragraph>
          Навчальний процес завжди був тісно пов'язаний з актуальними
          дослідженнями науки і техніки. За час існування кафедри викладачами та
          співробітниками НДЧ виконувались науково-дослідні роботи за планами
          ДКНТ та Міносвіти, пов'язані зі створенням автоматизованих
          інформаційних та навчаючих систем.
        </Paragraph>
        <Paragraph>
          Під керівництвом професорів Попова Ю.Д. та Провотаря О.І. виконувалась
          наукова робота в рамках наукових програм Київського національного
          університету імені Тараса Шевченка "Перспективні інформаційні
          технології, пристрої комплексної автоматизації, системи зв'язку",
          "Розробка систем інтелектуалізації інформаційних технологій та
          дистанційного навчання", "Створення теоретичних основ, методів та
          засобів інтелектуалізації інформаційно-комунікаційних технологій для
          розподілених комп'ютерних систем"
        </Paragraph>
        <Paragraph>
          На кафедрі успішно розв'язуються задачі автоматизації процесу обробки
          облікової та управлінської інформації. Були розроблені нові версії
          систем автоматизації управлінської діяльності вищого навчального
          закладу, реалізовані нові апаратні та програмні компоненти
          комп'ютерної мережі Київського національного університету імені Тараса
          Шевченка.
        </Paragraph>
        <Paragraph>
          Розроблено та впроваджено в Льотно-дослідницькому інституті методику і
          програмний комплекс попередньої обробки сплайн-функціями інформації,
          яка циклічно змінюється, нові методи усунення неоднозначності, яка
          виникає при багато-шкальних вимірюваннях.
        </Paragraph>
        <Paragraph>
          У 2000 році на сервері факультету кібернетики за адресою
          www.unicyb.kiev.ua розміщено WEB-сайт факультету кібернетики,
          розроблений групою студентів кафедри під керівництвом професора Попова
          Ю.Д. та доцента Шевченка В.П.
        </Paragraph>
        <Paragraph>
          Завдяки сайту відкрився доступ до електронної бібліотеки факультету
          кібернетики, до відповідних розділів, присвячених окремим навчальним
          курсам, науковим роботам студентів, їх науковим, виробничим та іншим
          досягненням. Так, наприклад, була створена та підключена до мережі
          Internet навчальна електронна бібліотека факультету кібернетики з
          таких нормативних курсів: "Дискретна математика", "Програмування",
          "Дослідження операцій", "Методи оптимізації", "Бази даних", "Основи
          проектування баз знань", "Теорія оптимального керу-вання" та багатьох
          спеціальних курсів.
        </Paragraph>
      </>
    ),
  },
  {
    timePeriod: "2001-2003 рр.",
    lecturerInfo: {
      imgSrc: "/src/static/img/bublyk.png",
      name: "Бублик Володимир Васильович",
      post: "В.О. завідувача кафедри ІС, кандидат фізико-математичних наук, доцент",
    },
    first: (
      <Paragraph>
        У зв'язку з виходом на пенсію Ю.Д. Попова, з вересня 2001 року (до
        вересня 2003 р.) обов'язки завідувача кафедри виконував кандидат
        фізико-математичних наук, доцент Бублик Володимир Васильович.
      </Paragraph>
    ),
    second: (
      <>
        <Paragraph>
          Виконуючому обов'язки завідувача кафедри – В.В. Бублику вдалося
          зберегти колектив, дружню і творчу атмосферу.
        </Paragraph>
        <Paragraph>
          Зміна назви кафедри, яка відбулася кількома роками раніше, відобразила
          нові тенденції в переміщенні центру ваги наукових інтересів кафедри у
          напрямку сучасних технологій розробки інформаційних систем, зокрема
          проектування програмного забезпечення, в першу чергу для застосувань у
          мережі Інтернет, розвитку електронного навчання, застосуванням
          сучасних технологій мультимедіа.
        </Paragraph>
        <Paragraph>
          За активної участі доцента Шевченка В.П. було розроблено навчальний
          план нової спеціальності з програмного забезпечення, впровадження якої
          привело до значного зростання інтересу студентів до проблематики
          кафедри.
        </Paragraph>
        <Paragraph>
          Навчальний план розроблявся на підставі рекомендацій АСМ і спирався
          значною мірою на виховання навиків практичної роботи в першу чергу за
          рахунок використання групових методів розробки інформаційних систем.
        </Paragraph>
        <Paragraph>
          На підтримку групових методів розробки було підготовлено та подано на
          розгляд Європейської Комісії спільний європейський проект за програмою
          ТЕМПУС за участю провідних університетів Європи та України.
        </Paragraph>
      </>
    ),
    third: (
      <>
        <Paragraph>
          Науково-дослідна робота кафедри проводилась згідно з програмою
          "Інформатизація суспільства". У цей період були створені програмні
          оболонки для дистанційних курсів, досліджувались інформаційні
          технології електронного навчання, зокрема, дистанційного. На
          факультеті кібернетики була розгорнута експериментальна версія системи
          адміністрування навчальним процесом OpenUSS.
        </Paragraph>
        <Paragraph>
          На кафедрі працює науковий семінар студентів-старшокурсників і
          аспірантів. Учасниками семінару були створені і реалізовані на
          платформі ІЛІАС електронні навчальні курси з об'єктно-орієнтованого
          програмування мовами С++, Java, C#, проектування програмного
          забезпечення, іноземних мов та інші.
        </Paragraph>
      </>
    ),
  },
  {
    timePeriod: "2003-сьогодні",
    lecturerInfo: {
      imgSrc: "/src/static/img/provotar.png",
      name: "Провотар Олександр Іванович",
      post: "завідувач кафедри ІС доктор фізико-математичних наук, професор",
    },
    first: (
      <Paragraph>
        З вересня 2003 р. кафедрою завідує доктор фізико-математичних наук,
        професор Олександр Іванович Провотар.
      </Paragraph>
    ),
    second: (
      <>
        <Paragraph>
          Новим завідувачем кафедри були зроблені кроки в напрямку розробки
          нових нормативних та спеціальних курсів, що дозволило відкрити нову
          спеціальність "Програмне забезпечення автоматизованих систем" за
          напрямком "Комп'ютерні науки".
        </Paragraph>
        <Paragraph>
          Викладачі кафедри читають лекції з дискретної математики,
          програмування, алгоритмів, логіки та теорії складності, загальної
          алгебри, алгоритмів та структур даних, комп'ютерних мереж, нейронних
          мереж, розподілених обчислень, системного програмування і операційних
          систем, інформаційних систем, програмної інженерії, захисту
          інформації, комп'ютерної алгебри, комп'ютерної графіки, технології
          програмування та інші.
        </Paragraph>
        <Paragraph>
          Зміцнилися зв'язки з установами НАН України та університетами, що
          займаються подібною тематикою наукових досліджень. Зокрема, з
          Інститутом кібернетики імені В.М. Глушкова НАН України, Національним
          технічним університетом "Київський політехнічний інститут".
        </Paragraph>
      </>
    ),
    third: (
      <>
        <Paragraph>Кафедра підтримує наукові зв'язки зі спорідненими кафедрами:</Paragraph>
        <List
          list={[
            "НаУКМА,",
            "Лейпцігського університету,",
            "Технічного університету м. Берлін,",
            "Університету м. Констранц,",
            "Оксфордського університету,",
            "Університету м. Кардіфф,",
          ]}
        />
        <Paragraph>а також з провідними ІТ-компаніями:</Paragraph>
        <List 
            list={[
                'Microsoft,',
                'EPAM Systems,',
                'ABBYY Україна,',
                'Informix,',
                '1C Україна.',
            ]}
        />
        <Paragraph>Розширилось коло міжнародних зв'язків кафедри зі спорідненими кафедрами Жешувського університету (Польща) та університету міста Агдер (Норвегія).</Paragraph>
        
      </>
    ),
  },
];

export const HistoryPage = () => {
  return (
    <div>
      <h2 className="font-bold text-[52px] mb-9">Історія кафедри</h2>
      {historySections.map((item) => (
        <div className="flex flex-col gap-5 mb-9">
          <SectionHeader>{item.timePeriod}</SectionHeader>
          {item.first}
          <MainSection lecturerInfo={item.lecturerInfo}>
            {item.second}
          </MainSection>
          <AdditionalSection>{item.third}</AdditionalSection>
        </div>
      ))}
    </div>
  );
};