import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Capability {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface Props {
  capabilities: Capability[];
}

export default function CapabilityAccordion({ capabilities }: Props) {
  const [openItem, setOpenItem] = useState<string | null>('item-0');

  return (
    <div className="space-y-4">
      {capabilities.map((capability, index) => {
        const value = `item-${index}`;
        const isOpen = openItem === value;

        return (
          <div
            key={value}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? null : value)}
              className="group flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
              aria-expanded={isOpen}
            >
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-teal-500 text-white shadow-md">
                  <div
                    className="h-6 w-6"
                    dangerouslySetInnerHTML={{
                      __html: capability.icon
                        .replace('w-12 h-12', 'w-6 h-6')
                        .replace('currentColor', 'white'),
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{capability.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{capability.description}</p>
                </div>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen ? (
              <div className="border-t border-gray-200 bg-gray-50 px-6 py-5">
                <ul className="space-y-3">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 shrink-0 text-teal-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
