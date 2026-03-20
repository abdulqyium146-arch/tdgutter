'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { services } from '@/lib/services';

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  address: z.string().min(5, 'Address required'),
  city: z.string().min(2, 'City required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  services: z.array(z.string()).min(1, 'Select at least one service'),
  preferredDate: z.string().optional(),
  notes: z.string().optional(),
  isVeteran: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ServiceRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { services: [], isVeteran: false },
  });

  const selectedServices = watch('services');

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Service request:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 8000);
  };

  const inputClass =
    'w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 font-body text-white placeholder-slate-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200';
  const labelClass = 'font-body font-medium text-white text-sm mb-1.5 block';
  const errorClass = 'font-body text-red-400 text-xs mt-1';

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {submitted && (
        <div
          className="bg-gold/10 border border-gold rounded-xl p-5 flex items-start gap-3"
          role="alert"
        >
          <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-body font-semibold text-gold">Request Submitted!</p>
            <p className="font-body text-slate text-sm mt-0.5">{"We'll contact you within 24 hours to confirm your appointment."}</p>
          </div>
        </div>
      )}

      {/* Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sr-name" className={labelClass}>Full Name *</label>
          <input id="sr-name" type="text" placeholder="John Smith" className={inputClass} {...register('name')} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="sr-phone" className={labelClass}>Phone Number *</label>
          <input id="sr-phone" type="tel" placeholder="(619) 885-3894" className={inputClass} {...register('phone')} />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="sr-email" className={labelClass}>Email Address *</label>
        <input id="sr-email" type="email" placeholder="john@example.com" className={inputClass} {...register('email')} />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-1">
          <label htmlFor="sr-address" className={labelClass}>Street Address *</label>
          <input id="sr-address" type="text" placeholder="123 Main St" className={inputClass} {...register('address')} />
          {errors.address && <p className={errorClass}>{errors.address.message}</p>}
        </div>
        <div>
          <label htmlFor="sr-city" className={labelClass}>City *</label>
          <input id="sr-city" type="text" placeholder="Redding" className={inputClass} {...register('city')} />
          {errors.city && <p className={errorClass}>{errors.city.message}</p>}
        </div>
      </div>

      {/* Services */}
      <div>
        <label className={labelClass}>Services Requested *</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {services.map((service) => {
            const checked = selectedServices?.includes(service.id);
            return (
              <label
                key={service.id}
                className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                  checked
                    ? 'bg-gold/10 border-gold'
                    : 'bg-navy-900 border-navy-700 hover:border-slate-dark'
                }`}
              >
                <input
                  type="checkbox"
                  value={service.id}
                  className="mt-0.5 flex-shrink-0"
                  {...register('services')}
                />
                <span className={`font-body text-sm ${checked ? 'text-gold' : 'text-slate'}`}>
                  {service.title}
                </span>
              </label>
            );
          })}
        </div>
        {errors.services && <p className={errorClass}>{errors.services.message}</p>}
      </div>

      {/* Date */}
      <div>
        <label htmlFor="sr-date" className={labelClass}>Preferred Date</label>
        <input
          id="sr-date"
          type="date"
          className={inputClass}
          style={{ colorScheme: 'dark' }}
          {...register('preferredDate')}
        />
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="sr-notes" className={labelClass}>Additional Notes</label>
        <textarea
          id="sr-notes"
          rows={4}
          placeholder="Any additional details about your property or needs..."
          className={`${inputClass} resize-none`}
          {...register('notes')}
        />
      </div>

      {/* Veteran checkbox */}
      <label className="flex items-center gap-3 p-4 rounded-xl bg-gold/5 border border-gold/30 cursor-pointer hover:bg-gold/10 transition-colors">
        <input
          type="checkbox"
          className="w-5 h-5 flex-shrink-0"
          {...register('isVeteran')}
        />
        <div>
          <span className="font-body font-semibold text-gold text-sm block">
            I am a Veteran, Active Military, or First Responder
          </span>
          <span className="font-body text-slate text-xs">
            I am eligible for the Top Down veteran & first responder discount
          </span>
        </div>
        <svg className="w-5 h-5 text-gold ml-auto flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold text-navy-900 font-body font-semibold py-4 rounded-full hover:bg-gold-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
      >
        {isSubmitting ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting Request...
          </>
        ) : (
          'Submit Service Request'
        )}
      </button>
    </form>
  );
}
