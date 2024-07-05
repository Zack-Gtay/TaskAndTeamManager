import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, LanguageIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LanguageDropdown({ currentLanguage, onSelect }) {
  const languageTable = {
    en: {
      en: "English",
      it: "Italian",
      es: "Spanish",
      fr: "French",
      de: "German",
    },
    es: {
      en: "Inglés",
      it: "Italiano",
      es: "Español",
      fr: "Francés",
      de: "Alemán",
    },
    fr: {
      en: "Anglais",
      it: "Italienne",
      es: "Espagnol",
      fr: "Français",
      de: "Allemand",
    },
    de: {
      en: "Englisch",
      es: "Spanisch",
      it: "Italienische",
      fr: "Französisch",
      de: "Deutsch",
    },
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
  };

  const languageOptions = languageTable[currentLanguage] || languageTable.en; // Default to English if currentLanguage is not found
  const options = _.entries(languageOptions);

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <LanguageIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <p className="hidden md:list-item lg:list-item">
              {languageOptions[currentLanguage] || "Language"}
            </p>

            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {options.map((option) => {
                const selected = option[0] === currentLanguage;
                const nativeVersion =
                  languageTable[option[0]]?.[option[0]] || option[1];
                return (
                  <Menu.Item key={option[0]}>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          selected ? "font-bold" : "font-normal",
                          "block px-4 py-2 text-sm"
                        )}
                        onClick={() => handleOptionSelect(option[0])}
                      >
                        {option[1]} ({nativeVersion})
                      </div>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

LanguageDropdown.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
