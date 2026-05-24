import { useState, type ComponentType } from 'react';
import {
  AlertCircle,
  Car,
  CheckCircle2,
  Heart,
  Laptop,
  Lightbulb,
  Package,
  ShoppingCart,
  UtensilsCrossed,
} from 'lucide-react';

interface UseCase {
  industry: string;
  iconName: string;
  image: { src: string; [key: string]: any };
  challenge: string;
  solution: string;
  results: string[];
}

interface Props {
  useCases: UseCase[];
}

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  ShoppingCart,
  Heart,
  Car,
  Laptop,
  Package,
  UtensilsCrossed,
};

export default function UseCaseTabs({ useCases }: Props) {
  const industries = Array.from(new Set(useCases.map((uc) => uc.industry)));
  const [activeIndustry, setActiveIndustry] = useState(industries[0] ?? '');

  const activeUseCase = useCases.find((uc) => uc.industry === activeIndustry) ?? useCases[0];

  if (!activeUseCase) {
    return null;
  }

  const ActiveIcon = iconMap[activeUseCase.iconName];

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-wrap gap-2 border-b-2 border-gray-200 pb-2">
        {industries.map((industry) => {
          const useCase = useCases.find((uc) => uc.industry === industry);
          const IconComponent = useCase ? iconMap[useCase.iconName] : null;
          const isActive = industry === activeIndustry;

          return (
            <button
              key={industry}
              type="button"
              onClick={() => setActiveIndustry(industry)}
              className={`flex items-center gap-2 border-b-2 px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {IconComponent ? <IconComponent className="h-4 w-4" /> : null}
              {industry}
            </button>
          );
        })}
      </div>

      <div className="animate-fadeIn space-y-6">
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
            <div className="relative h-64 overflow-hidden lg:col-span-5 lg:h-auto">
              <img
                src={activeUseCase.image.src}
                alt={activeUseCase.industry}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
              <div className="absolute left-6 top-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/95 shadow-lg backdrop-blur-sm">
                  {ActiveIcon ? <ActiveIcon className="h-8 w-8 text-blue-600" /> : null}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="mb-2 text-2xl font-bold md:text-3xl">{activeUseCase.industry}</h2>
              </div>
            </div>

            <div className="p-8 lg:col-span-7 lg:p-10">
              <div className="space-y-6">
                <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-5">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-red-900">Challenge</h3>
                      <p className="leading-relaxed text-gray-700">{activeUseCase.challenge}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-5">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" />
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-blue-900">Solution</h3>
                      <p className="leading-relaxed text-gray-700">{activeUseCase.solution}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Results
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {activeUseCase.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-lg border border-green-100 bg-green-50 p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                        <span className="text-sm font-medium leading-relaxed text-gray-800">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
