import  {useEffect, useRef, useState} from "react";

type DropDownItemProps= {
    title: string,
    points: string[] | undefined
}


export const DropDownItem = ({title, points}: DropDownItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        setTimeout(() => setIsOpen(true), 500); // Затримка відкриття
    };

    // Функція обробки виходу курсора тепер на контейнері
    const handleMouseLeaveContainer = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} onMouseLeave={handleMouseLeaveContainer} className="relative inline-block">
            <button
                onMouseEnter={handleMouseEnter}
                className="text-black hover:text-background: #12A1DD; text-center inline-flex "
                type="button"
            >
                {title}
            </button>

            {isOpen && (
                <div className="absolute b-10 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {points?.map((item: string) =>
                            <li>
                                <a href="/"
                                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    {item}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};
