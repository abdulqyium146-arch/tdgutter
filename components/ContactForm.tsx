'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  'Roof Cleaning',
  'Gutter Cleaning',
  'Gutter Repairs',
  'Gutter Installation',
  'Gutter Guard Installation & Repair',
  'Solar Panel Cleaning',
  'House Washing',
  'Window Cleaning',
  'Free Gutter Inspection',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form data:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  const inputClass =
    'w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 font-body text-white placeholder-slate-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200';
  const errorClass = 'font-body text-red-400 text-sm mt-1';
  const labelClass = 'font-body font-medium text-white text-sm mb-1.5 block';

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {submitted && (
        <div
          className="bg-gold/10 border border-gold rounded-xl p-4 flex items-center gap-3"
          role="alert"
        >
          <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-body text-gold font-medium">
            {"We'll be in touch within 24 hours!"}
          </p>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className={labelClass}>Full Name</label>
        <input
          id="contact-name"
          type="text"
          placeholder="John Smith"
          className={inputClass}
          aria-invalid={!!errors.name}
          {...register('name')}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>Email Address</label>
        <input
          id="contact-email"
          type="email"
          placeholder="john@example.com"
          className={inputClass}
          aria-invalid={!!errors.email}
          {...register('email')}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-phone" className={labelClass}>Phone Number</label>
        <input
          id="contact-phone"
          type="tel"
          placeholder="(614) 350-5978"
          className={inputClass}
          aria-invalid={!!errors.phone}
          {...register('phone')}
        />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-service" className={labelClass}>Service Needed</label>
        <select
          id="contact-service"
          className={inputClass}
          aria-invalid={!!errors.service}
          {...register('service')}
          defaultValue=""
        >
          <option value="" disabled>Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.service && <p className={errorClass}>{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>Message</label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
          aria-invalid={!!errors.message}
          {...register('message')}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold text-navy-900 font-body font-semibold py-3.5 rounded-full hover:bg-gold-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
