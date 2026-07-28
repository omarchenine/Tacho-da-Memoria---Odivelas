"use client";

import { useState } from "react";
import { Calendar, Users, Clock, Phone, Mail, User, AlignLeft, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface FormState {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  requests: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  time?: string;
  guests?: string;
}

export default function ReservationForm() {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    requests: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const times = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
  ];

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = t("reservations.error.name");
      isValid = false;
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = t("reservations.error.phone");
      isValid = false;
    } else if (!/^[0-9+ \-]{9,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      tempErrors.phone = t("reservations.error.phoneInvalid");
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = t("reservations.error.email");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = t("reservations.error.emailInvalid");
      isValid = false;
    }

    if (!formData.date) {
      tempErrors.date = t("reservations.error.date");
      isValid = false;
    } else {
      const selectedDate = new Date(formData.date + "T12:00:00");
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        tempErrors.date = t("reservations.error.datePast");
        isValid = false;
      } else if (selectedDate.getDay() === 1) {
        tempErrors.date = t("reservations.error.closed");
        isValid = false;
      }
    }

    if (!formData.time) {
      tempErrors.time = t("reservations.error.time");
      isValid = false;
    }

    if (!formData.guests || parseInt(formData.guests) < 1) {
      tempErrors.guests = t("reservations.error.guests");
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) {
      setServerError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/reservations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            language,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setIsSuccess(true);
        } else {
          setServerError(data.error || t("reservations.error.server"));
        }
      } catch {
        setServerError(t("reservations.error.server"));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      guests: "2",
      requests: "",
    });
    setErrors({});
    setServerError(null);
    setIsSuccess(false);
  };

  return (
    <section id="reservations" className="py-24 bg-cream/35 relative overflow-hidden">
      {/* Decorative terracotta dot */}
      <div className="absolute -bottom-10 right-10 w-48 h-48 bg-terracotta/5 rounded-full filter blur-xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-serif text-terracotta text-sm font-semibold tracking-widest uppercase mb-3 block">
            {t("reservations.subtitle")}
          </span>
          <h2 className="font-serif text-charcoal text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("reservations.title")}
          </h2>
          <div className="h-0.5 w-20 bg-gold mx-auto mb-6" />
          <p className="text-charcoal/70 font-light text-base">
            {t("reservations.description")}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-xl border border-olive/5 overflow-hidden transition-all duration-300">
          {isSuccess ? (
            <div className="p-8 sm:p-16 text-center space-y-6 animate-fade-in">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-olive/10 text-olive mx-auto">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                {t("reservations.success.title")}
              </h3>
              <div className="max-w-md mx-auto space-y-4 bg-cream/30 p-6 rounded-lg border border-olive/5 text-left text-sm text-charcoal/80">
                <p><strong>{t("reservations.success.details")}</strong></p>
                <div className="grid grid-cols-2 gap-y-2 text-xs sm:text-sm">
                  <span className="text-charcoal/50">{t("reservations.success.nameLabel")}</span> <span>{formData.name}</span>
                  <span className="text-charcoal/50">{t("reservations.success.dateLabel")}</span> <span>{formData.date}</span>
                  <span className="text-charcoal/50">{t("reservations.success.timeLabel")}</span> <span>{formData.time}</span>
                  <span className="text-charcoal/50">{t("reservations.success.guestsLabel")}</span> <span>{formData.guests} {t("reservations.success.guestsValue")}</span>
                  <span className="text-charcoal/50">{t("reservations.success.phoneLabel")}</span> <span>{formData.phone}</span>
                </div>
              </div>
              <p className="text-charcoal/60 text-sm max-w-md mx-auto font-light">
                {t("reservations.success.message")} <strong>{formData.email}</strong>. {t("reservations.success.changeNote")}
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded bg-olive text-cream hover:bg-olive-dark shadow transition-all duration-200"
              >
                {t("reservations.success.another")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-charcoal/80 uppercase tracking-wider flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-olive/80" /> {t("reservations.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("reservations.namePlaceholder")}
                    className={`w-full px-4 py-3 rounded border text-sm transition-colors ${
                      errors.name ? "border-red-500 bg-red-50/20" : "border-olive/20"
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-charcoal/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-olive/80" /> {t("reservations.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("reservations.phonePlaceholder")}
                    className={`w-full px-4 py-3 rounded border text-sm transition-colors ${
                      errors.phone ? "border-red-500 bg-red-50/20" : "border-olive/20"
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-charcoal/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-olive/80" /> {t("reservations.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("reservations.emailPlaceholder")}
                    className={`w-full px-4 py-3 rounded border text-sm transition-colors ${
                      errors.email ? "border-red-500 bg-red-50/20" : "border-olive/20"
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Number of Guests */}
                <div className="space-y-1.5">
                  <label htmlFor="guests" className="text-xs font-semibold text-charcoal/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-olive/80" /> {t("reservations.guests")}
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-olive/20 bg-white text-sm transition-colors cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? t("reservations.person") : t("reservations.persons")}
                      </option>
                    ))}
                    <option value="13+">{t("reservations.moreThan12")}</option>
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                  <label htmlFor="date" className="text-xs font-semibold text-charcoal/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-olive/80" /> {t("reservations.date")}
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded border text-sm transition-colors bg-white cursor-pointer ${
                      errors.date ? "border-red-500 bg-red-50/20" : "border-olive/20"
                    }`}
                  />
                  {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
                </div>

                {/* Time */}
                <div className="space-y-1.5">
                  <label htmlFor="time" className="text-xs font-semibold text-charcoal/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-olive/80" /> {t("reservations.time")}
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded border text-sm bg-white cursor-pointer transition-colors ${
                      errors.time ? "border-red-500 bg-red-50/20" : "border-olive/20"
                    }`}
                  >
                    <option value="">{t("reservations.timePlaceholder")}</option>
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.time && <p className="text-xs text-red-500">{errors.time}</p>}
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-1.5">
                <label htmlFor="requests" className="text-xs font-semibold text-charcoal/80 uppercase tracking-wider flex items-center gap-1.5">
                  <AlignLeft className="h-3.5 w-3.5 text-olive/80" /> {t("reservations.requests")}
                </label>
                <textarea
                  id="requests"
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  rows={4}
                  placeholder={t("reservations.requestsPlaceholder")}
                  className="w-full px-4 py-3 rounded border border-olive/20 text-sm transition-colors resize-none"
                />
              </div>

              {/* Submit Button & Server Error */}
              <div className="text-center pt-2 space-y-4">
                {serverError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded text-sm text-center">
                    {serverError}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 border border-transparent text-base font-medium rounded text-cream bg-terracotta hover:bg-terracotta-dark shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none ${
                    isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? t("reservations.submitting") : t("reservations.submit")}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
