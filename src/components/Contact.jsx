import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  ShieldCheck, 
  Building, 
  CheckCircle,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, ALL_75_DISTRICTS } from '../data/companyData';

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    claimType: 'Motor OD / TP Investigation',
    district: 'Lucknow',
    urgency: 'Standard (48-72h)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFC] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wider uppercase border border-slate-200">
            <Mail className="w-3.5 h-3.5 text-bronze-600" />
            <span>Corporate Liaison & Allocation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy-950 font-heading tracking-tight">
            Connect With Our Lucknow Command Center
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Assign single claims, initiate routine panel investigations, or schedule a corporate empanelment discussion for your insurance portfolio across Uttar Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Addresses & Verified Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Operational Office Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-luxury">
              <div className="flex items-center gap-2 text-xs font-bold text-bronze-600 uppercase tracking-wider mb-2">
                <Building className="w-4 h-4" />
                <span>Primary Operational Hub</span>
              </div>
              
              <h3 className="text-xl font-bold text-navy-950 font-heading">
                {COMPANY_INFO.contact.operationalOffice.title}
              </h3>
              
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {COMPANY_INFO.contact.operationalOffice.addressLine1},<br />
                {COMPANY_INFO.contact.operationalOffice.addressLine2} – {COMPANY_INFO.contact.operationalOffice.pincode}
              </p>
              
              <div className="mt-5 pt-5 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-navy-800 shrink-0" />
                  <span><strong>Working Hours:</strong> {COMPANY_INFO.contact.workingHours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-navy-800 shrink-0" />
                  <a 
                    href={`mailto:${COMPANY_INFO.contact.officialEmail}`}
                    className="text-navy-950 hover:underline font-medium font-mono"
                  >
                    {COMPANY_INFO.contact.officialEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Registered Office Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card-subtle">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Statutory Registered Address</span>
              </div>
              
              <h4 className="text-base font-bold text-navy-950 font-heading">
                {COMPANY_INFO.contact.registeredOffice.title}
              </h4>
              
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {COMPANY_INFO.contact.registeredOffice.addressLine1},<br />
                {COMPANY_INFO.contact.registeredOffice.addressLine2} – {COMPANY_INFO.contact.registeredOffice.pincode}
              </p>

              <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500 font-mono">
                ROC Jurisdiction: <strong>{COMPANY_INFO.roc}</strong> | CIN: <strong>{COMPANY_INFO.cin}</strong>
              </div>
            </div>

            {/* Google Maps Embed for Aliganj, Lucknow */}
            <div className="bg-white rounded-3xl p-2.5 border border-slate-200 shadow-luxury overflow-hidden">
              <div className="p-3 text-xs font-semibold text-slate-700 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-bronze-600" />
                  Aliganj, Lucknow Location Map
                </span>
                <a 
                  href="https://maps.google.com/?q=Aliganj+Lucknow+Uttar+Pradesh+226024" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-navy-800 hover:underline text-[11px] font-semibold"
                >
                  Open in Google Maps ↗
                </a>
              </div>
              <iframe
                title="Office Location Map - Aliganj Lucknow"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14231.84904576329!2d80.93297375!3d26.8927891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957d1976a4457%3A0x6b4478441461ffcb!2sAliganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl w-full"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Case Assignment & Inquiries Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 lg:p-10 border border-slate-200 shadow-luxury">
              <div className="mb-7">
                <h3 className="text-2xl font-bold text-navy-950 font-heading">
                  Submit Investigation Mandate / Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Insurance claim managers can submit claim details below for immediate triage allocation.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950 font-heading">
                    Mandate Received by Aliganj Command Desk
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you. Your inquiry for <strong>{formData.claimType}</strong> in <strong>{formData.district}</strong> has been logged. Our senior claims triage coordinator will contact {formData.contactPerson || 'you'} at <strong>{formData.email}</strong> within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 text-xs font-semibold rounded-xl bg-navy-950 text-white hover:bg-navy-900 transition-colors"
                  >
                    Submit Another Case
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Corporate Insurance Company / TPA *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. ICICI Lombard / Tata AIG / TPA"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Claim Manager / Officer Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Official Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="claims.manager@insurer.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Contact / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Investigation Vertical *
                      </label>
                      <select
                        value={formData.claimType}
                        onChange={(e) => setFormData({ ...formData, claimType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 font-medium bg-white"
                      >
                        <option>Motor OD / TP Investigation</option>
                        <option>Theft & Staged Incident Verification</option>
                        <option>MACT Court Case Evidentiary Support</option>
                        <option>Non-Motor & Commercial Property Loss</option>
                        <option>Health Hospitalization / IPD Audit</option>
                        <option>Livestock Insurance Field Verification</option>
                        <option>Vendor & Investigator Network Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Target UP District *
                      </label>
                      <select
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 font-medium bg-white"
                      >
                        {ALL_75_DISTRICTS.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Urgency SLA Requirement
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Standard (48-72h)', 'Priority (24-48h)', 'Emergency Red Flag (< 24h)'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, urgency: opt })}
                          className={`py-2 px-2 rounded-xl text-[11px] font-semibold border transition-all ${
                            formData.urgency === opt
                              ? 'bg-navy-950 text-white border-navy-950'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Case Summary / Policy Details / Specific Red Flags
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Include claim number, policy type, vehicle/hospital details, and specific red flags to investigate..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-bronze-500 via-amber-500 to-bronze-600 hover:from-amber-400 hover:to-bronze-500 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch Case Mandate to Lucknow HQ</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    All submitted data is treated with strict non-disclosure under our corporate confidentiality protocols.
                  </p>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
