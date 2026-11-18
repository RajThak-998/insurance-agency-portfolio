import React, { useState } from 'react';
import { X, FileText, Send, Check } from 'lucide-react';

export default function CaseTriageModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [claimType, setClaimType] = useState('Motor OD / TP Investigation');
  const [urgency, setUrgency] = useState('Standard SLA (24-48h)');
  const [insurerName, setInsurerName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [claimNo, setClaimNo] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white dark:bg-[#0D1826] rounded-2xl max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transition-colors">
        
        {/* Modal Header */}
        <div className="bg-slate-50 dark:bg-[#0B1521] text-slate-900 dark:text-white p-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#0F3D30] text-white flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Initiate Field Investigation / Triage
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Autocratic Management Services • Central Claims Operations Desk
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/60 text-[#0F3D30] dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                Investigation Mandate Dispatched
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                Case reference has been queued for immediate triage. An operations coordinator will confirm investigator deployment at <strong>{contactEmail}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-md bg-[#EA580C] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Insurer / Corporate Client Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ICICI Lombard / Star Health / TPA"
                  value={insurerName}
                  onChange={(e) => setInsurerName(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#111C2B] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#EA580C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="officer@insurer.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#111C2B] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#EA580C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Claim / Policy Ref # *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="CLM-2025-XXXX"
                    value={claimNo}
                    onChange={(e) => setClaimNo(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#111C2B] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#EA580C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Investigation Type
                  </label>
                  <select
                    value={claimType}
                    onChange={(e) => setClaimType(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#111C2B] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#EA580C]"
                  >
                    <option>Motor OD / TP Investigation</option>
                    <option>Health IPD / Mediclaim Verification</option>
                    <option>Commercial Property / Fire Survey</option>
                    <option>Theft & Anti-Fraud Forensics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Scene / Hub Location
                  </label>
                  <input
                    type="text"
                    placeholder="City / Region"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#111C2B] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#EA580C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Required Turnaround Priority
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#111C2B] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#EA580C]"
                >
                  <option>Emergency First Response (12-24h)</option>
                  <option>Standard SLA (24-48h)</option>
                  <option>Routine Audit (48-72h)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-[#EA580C] hover:bg-[#D97706] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Deploy Field Investigation Mandate</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
