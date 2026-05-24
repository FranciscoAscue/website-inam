import {
  Building2,
  Briefcase,
  Calendar,
  Cpu,
  Factory,
  Network,
  Package,
  Truck,
  User,
  Warehouse,
  Wrench,
} from 'lucide-react';
import type { FormEvent } from 'react';

const services = [
  { id: 'warehousing', label: 'Warehousing & Storage', icon: Warehouse },
  { id: 'manufacturing', label: 'Manufacturing Services', icon: Factory },
  { id: 'transportation', label: 'Transportation & Distribution', icon: Truck },
  { id: 'supply-chain', label: 'Supply Chain Management', icon: Network },
  { id: 'value-added', label: 'Value-Added Services', icon: Wrench },
  { id: 'technology', label: 'Technology Integration', icon: Cpu },
];

export default function RFQForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log('Form submitted:', data);
    alert('Thank you for your request! We will contact you within 24 hours.');
    form.reset();
  };

  return (
    <form className="space-y-6" id="rfq-form" onSubmit={handleSubmit} name="rfq-form">
      <div>
        <div className="mb-6 flex items-center">
          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-teal-600">
            <User className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field id="firstName" label="First Name" required />
          <Field id="lastName" label="Last Name" required />
          <Field id="email" label="Email Address" type="email" required />
          <Field id="phone" label="Phone Number" type="tel" required />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="mb-6 flex items-center">
          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-purple-600 to-pink-600">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Company Information</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field id="company" label="Company Name" required />
          <div>
            <label htmlFor="industry" className="mb-2 block text-sm font-medium text-gray-700">
              Industry <span className="text-red-500">*</span>
            </label>
            <select
              id="industry"
              name="industry"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 transition focus:border-transparent focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an industry</option>
              <option value="ecommerce">E-Commerce & Retail</option>
              <option value="healthcare">Healthcare & Pharmaceuticals</option>
              <option value="automotive">Automotive & Manufacturing</option>
              <option value="technology">Technology & Electronics</option>
              <option value="consumer-goods">Consumer Goods</option>
              <option value="food-beverage">Food & Beverage</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="mb-6 flex items-center">
          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-green-600 to-emerald-600">
            <Briefcase className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Service Requirements</h2>
        </div>
        <div className="space-y-6">
          <div>
            <p className="mb-3 block text-sm font-medium text-gray-700">
              Services Needed <span className="text-red-500">*</span>
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <label
                    key={service.id}
                    htmlFor={service.id}
                    className="group flex cursor-pointer items-center space-x-3 rounded-lg border-2 border-gray-200 p-4 transition-all hover:border-blue-400 hover:bg-blue-50"
                  >
                    <input
                      type="checkbox"
                      id={service.id}
                      name="services"
                      value={service.id}
                      className="h-5 w-5 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 transition-colors group-hover:bg-blue-100">
                      <IconComponent className="h-4 w-4 text-gray-600 transition-colors group-hover:text-blue-600" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-gray-700 transition-colors group-hover:text-gray-900">
                      {service.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="timeline" className="mb-2 flex items-center text-sm font-medium text-gray-700">
                <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                Timeline <span className="ml-1 text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <select
                  id="timeline"
                  name="timeline"
                  required
                  className="w-full appearance-none rounded-lg border-2 border-gray-300 bg-white px-4 py-2 pl-10 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (Within 1 month)</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-plus-months">6+ months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="volume" className="mb-2 flex items-center text-sm font-medium text-gray-700">
                <Package className="mr-2 h-4 w-4 text-gray-500" />
                Estimated Monthly Volume
              </label>
              <div className="relative">
                <Package className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="volume"
                  name="volume"
                  placeholder="e.g., 10,000 units"
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 pl-10 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="details" className="mb-2 block text-sm font-medium text-gray-700">
              Project Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="details"
              name="details"
              rows={6}
              required
              placeholder="Please provide details about your requirements, including product specifications, storage needs, shipping destinations, or any other relevant information..."
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 transition focus:border-transparent focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          className="flex w-full items-center justify-center space-x-2 rounded-lg bg-linear-to-r from-blue-600 to-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-teal-700 hover:shadow-xl active:scale-95"
        >
          <span>Submit Request</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <p className="mt-4 text-center text-sm text-gray-500">
          By submitting this form, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
}

function Field({ id, label, required = false, type = 'text' }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 transition focus:border-transparent focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
