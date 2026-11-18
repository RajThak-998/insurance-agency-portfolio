import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Clock, 
  Send, 
  ShieldCheck, 
  Building, 
  CheckCircle,
  ExternalLink
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
    <section id="contact" className="py-20 lg:py-24 bg-[#F1F5F9] dark:bg-[#0D1522] relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-200 text-xs font-semibold tracking-wider uppercase border border-slate-300 dark:border-slate-700">
            <Mail className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
            <span>Corporate Liaison & Allocation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect With Our Lucknow Command Center
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Assign single claims, initiate routine panel investigations, or schedule a corporate empanelment discussion for your insurance portfolio across Uttar Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Addresses & Verified Details */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Operational Office Card */}
            <div className="bg-white dark:bg-[#111827] rounded p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-2 font-mono">
                <Building className="w-3.5 h-3.5" />
                <span>Primary Operational Hub</span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {COMPANY_INFO.contact.operationalOffice.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {COMPANY_INFO.contact.operationalOffice.addressLine1},<br />
                {COMPANY_INFO.contact.operationalOffice.addressLine2} – {COMPANY_INFO.contact.operationalOffice.pincode}
              </p>
              
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500 shrink-0" />
                  <span><strong>Working Hours:</strong> {COMPANY_INFO.contact.workingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500 shrink-0" />
                  <a 
                    href={`mailto:${COMPANY_INFO.contact.officialEmail}`}
                    className="text-slate-900 dark:text-slate-200 hover:text-amber-700 dark:hover:text-amber-400 font-mono font-medium"
                  >
                    {COMPANY_INFO.contact.officialEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Registered Office Card */}
            <div className="bg-white dark:bg-[#111827] rounded p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Statutory Registered Address</span>
              </div>
              
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {COMPANY_INFO.contact.registeredOffice.title}
              </h4>
              
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                {COMPANY_INFO.contact.registeredOffice.addressLine1},<br />
                {COMPANY_INFO.contact.registeredOffice.addressLine2} – {COMPANY_INFO.contact.registeredOffice.pincode}
              </p>

              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                ROC: <strong>{COMPANY_INFO.roc}</strong> | CIN: <strong>{COMPANY_INFO.cin}</strong>
              </div>
            </div>

            {/* Google Maps Embed for Aliganj, Lucknow */}
            <div className="bg-white dark:bg-[#111827] rounded p-2.5 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-2 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
                  Aliganj, Lucknow Location Map
                </span>
                <a 
                  href="https://maps.google.com/?q=Aliganj+Lucknow+Uttar+Pradesh+226024" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-800 dark:text-amber-400 hover:underline text-[11px] font-semibold flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <iframe
                title="Office Location Map - Aliganj Lucknow"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14231.84904576329!2d80.93297375!3d26.8927891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957d1976a4457%3A0x6b4478441461ffcb!2sAliganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="190"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded w-full"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Case Assignment & Inquiries Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#111827] rounded p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Submit Investigation Mandate / Inquiry
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Insurance claim managers can submit claim specifications below for immediate triage allocation.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 dark:bg-emerald-950/20 rounded border border-emerald-200 dark:border-emerald-800/80 text-center space-y-3.5">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-950 dark:text-emerald-200">
                    Mandate Received by Aliganj Command Desk
                  </h4>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-md mx-auto leading-relaxed">
                    Thank you. Your inquiry for <strong>{formData.claimType}</strong> in <strong>{formData.district}</strong> has been logged. Our senior claims triage coordinator will contact {formData.contactPerson || 'you'} at <strong>{formData.email}</strong> within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 text-xs font-semibold rounded bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Case
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Corporate Insurance Company / TPA *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. ICICI Lombard / Tata AIG / TPA"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1522] text-xs focus:outline-none focus:ring-1 focus:ring-amber-600 font-medium text-slate-900 dark:text-white placeholder-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Claim Manager / Officer Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1522] text-xs focus:outline-none focus:ring-1 focus:ring-amber-600 font-medium text-slate-900 dark:text-white placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Official Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="claims.manager@insurer.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1522] text-xs focus:outline-none focus:ring-1 focus:ring-amber-600 font-medium text-slate-900 dark:text-white placeholder-slate-400 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Direct Phone / Mobile No.
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 94150 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1522] text-xs focus:outline-none focus:ring-1 focus:ring-amber-600 font-medium text-slate-900 dark:text-white placeholder-slate-400 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Investigation Vertical *
                      </label>
                      <select
                        value={formData.claimType}
                        onChange={(e) => setFormData({ ...formData, claimType: e.target.value })}
                        className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1522] text-xs focus:outline-none focus:ring-1 focus:ring-amber-600 font-medium text-slate-900 dark:text-white"
                      >
                        <option>Motor OD / TP Investigation</option>
                        <option>Theft & Staged Incident Verification</option>
                        <option>Non-Motor & Commercial Property Loss</option>
                        <option>Health Hospitalization / IPD Audit</option>
                        <option>Livestock Insurance Field Verification</option>
                        <option>Pan-UP Field Coordination / Empanelment</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Target UP District *
                      </label>
                      <select
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1522] text-xs focus:outline-none focus:ring-1 focus:ring-amber-600 font-medium text-slate-900 dark:text-white"
                      >
                        {ALL_75_DISTRICTS.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Urgency SLA Target
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1522] text-xs focus:outline-none focus:ring-1 focus:ring-amber-600 font-medium text-slate-900 dark:text-white"
                    >
                      <option>Standard (48-72h)</option>
                      <option>Priority Verification (24-48h)</option>
                      <option>Emergency Red Flag (&lt; 24h)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Case Particulars / Claim Summary
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Brief details of claim: policy number, loss location, key suspicious circumstances, or specific checks required..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1522] text-xs focus:outline-none focus:ring-1 focus:ring-amber-600 font-medium text-slate-900 dark:text-white placeholder-slate-400"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white font-semibold text-xs tracking-wide shadow-sm transition-all active:scale-[0.98] border border-amber-800 dark:border-amber-500 flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Mandate to Lucknow Operations Desk</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center">
                    All case submissions are treated under statutory corporate non-disclosure and IRDAI evidentiary compliance.
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
