export const About = () => {
    return (
            <div className="max-w-screen-lg mx-auto">
        <img
            className="h-181 rounded-lg shadow-xl dark:shadow-gray-800 mt-20 mx-auto"
            src="src/assets/images/photo-in-head.png"
            alt="about"
        />
            <h1 className="font-inter font-bold text-[52px] tracking-tight">Про кафедру</h1>
            <p className="font-inter font-light text-[24px] tracking-tight">Кафедра інтелектуальних програмних систем спеціалізується в області комп'ютерних наук, штучного інтелекту та програмної інженерії. Завідувач кафедри - доктор фізико-математичних наук, професор Провотар О.І.</p>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
                <div>
                    <div className="font-inter font-medium text-[76px] tracking-tight text-[#12A1DD]">4</div>
                    <div className="font-inter font-medium text-[48px] tracking-tight h-fit">професори</div>
                </div>
                <div>
                    <div className="font-inter font-medium text-[76px] tracking-tight text-[#12A1DD]">10</div>
                    <div className="font-inter font-medium text-[48px] tracking-tight">доцентів</div>
                </div>
                <div>
                    <div className="font-inter font-medium text-[76px] tracking-tight text-[#12A1DD]">5</div>
                    <div className="font-inter font-medium text-[48px] tracking-tight">асистентів</div>
                </div>
            </div>
            <p className="font-inter font-light text-[32px] tracking-tight">Нині співробітники забезпечують підготовку бакалаврів за спеціальностями:</p>
            <div className="grid grid-cols-2 justify-items-center">
                <div className="border-solid border-2 p-8 border-[#12A1DD] rounded">
                    <div className="font-inter font-medium text-[32px] tracking-tight">121 Інженерія програмного забезпечення</div>
                    <div className="font-inter font-light text-[24px] tracking-tight">освітня програма "Програмна інженерія", факультет комп'ютерних наук та кібернетики</div>
                </div>
                <div className="border-solid border-2 p-8 border-[#12A1DD] rounded">
                    <div className="font-inter font-medium text-[32px] tracking-tight">122 Комп'ютерні науки</div>
                    <div className="font-inter font-light text-[24px] tracking-tight">освітня програма "Інформатика", факультет комп'ютерних наук та кібернетики</div>
                </div>
            </div>
            <div className="font-inter font-medium text-[48px] tracking-tight">
                На сьогодні на кафедрі навчається <span className ="text-[#12A1DD]">267 студентів</span> та <span className ="text-[#12A1DD]">4 аспіранти</span>
            </div>
            <div className="font-inter font-medium text-[32px] tracking-tight">Навчаючись на інтелектуальних програмних систем ви зможете:</div>
            <ul  className="list-disc pl-5">
                <li className="font-inter font-light text-[24px] tracking-tight mb-2 ml-5" >
                    стати висококваліфікованим спеціалістом по проектуванню та розробці різного роду програмного забезпечення та інтелектуальних програмних систем
                </li>
                <li className="font-inter font-light text-[24px] tracking-tight mb-2 ml-5">
                    ставити та розв'язувати задачі в різних предметних областях, використовуючи при цьому дискретні моделі процесів, методи та засоби штучного інтелекту та найсучасніші інформаційні технології.
                </li>
            </ul>

            <div className="flex justify-between">
                <div className="flex-initial font-inter font-medium text-[32px] tracking-tight w-7/12">
                    Випускники кафедри працюють у провідних IT-компаніях та науково-дослідних установах України та світу.
                    Вони є <span className ="text-[#12A1DD]">знаними спеціалістами</span> в галузі розробки програмного забезпечення
                </div>
                <div className="flex-initial w-6/12">
                    <img src="src/assets/images/logos.png" alt="logos"/>

                </div>
            </div>

            <p className="font-light text-[24px] tracking-tight w-9/12" >Запрошуємо абітурієнтів, студентів, аспірантів та докторантів на кафедру інтелектуальних програмних систем. </p>
            <a href='/' className="font-weight text-[24px] tracking-tight ">Дізнайся більше про навчання на кафедрі та правила прийому</a>

        </div>
    )
}
