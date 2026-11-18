import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Clock, 
  Send,
  Check
} from 'lucide-react';
import { ALL_75_DISTRICTS } from '../data/companyData';

export default function CaseTriageModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [claimType, setClaimType] = useState('Motor OD / TP Investigation');
  const [district, setDistrict] = useState('Lucknow');
  const [urgency, setUrgency] = useState('Standard SLA (48-72h)');
  const [insurerName, setInsurerName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [claimNo, setClaimNo] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getEstimatedTAT = () => {
    if (urgency.includes('Emergency')) return '12 - 24 Hours';
    if (district === 'Lucknow' || district === 'Kanpur Nagar' || district === 'Sitapur') {
      return '24 - 36 Hours';
    }
    return '36 - 48 Hours';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white dark:bg-[#111827] rounded max-w-xl w-full border border-slate-200 dark:border-slate-800 shadow-modal overflow-hidden transition-colors">
        
        {/* Modal Header */}
        <div className="bg-slate-50 dark:bg-[#0D1522] text-slate-900 dark:text-white p-5 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-amber-700 dark:bg-amber-600 text-white flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Initiate Field Investigation / Triage
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Autocratic Management Services • Lucknow Command Hub
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Investigation Mandate Logged
            </h4>
            <div className="p-4 bg-slate-50 dark:bg-[#0D1522] rounded border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-2 text-left max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Claim Vertical:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{claimType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Target District:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{district}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Estimated Ground TAT:</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 font-mono tabular-nums">{getEstimatedTAT()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Confirmation Sent To:</span>
                <span className="font-semibold text-slate-900 dark:text-white font-mono">{contactEmail || 'Provided Email'}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Our central investigation desk at Aliganj, Lucknow has logged the reference and dispatched local field coordination.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-5 py-2 rounded bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold hover:bg-slate-800"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-3.5">
            
            {/* Dynamic TAT Banner */}
            <div className="p-3 bg-slate-50 dark:bg-[#0D1522] rounded border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
                <span className="text-slate-700 dark:text-slate-300">Estimated Field Response in {district}:</span>
              </div>
              <span className="font-bold text-slate-900 dark:text-white bg-white dark:bg-[#111827] px-2.5 py-0.5 rounded border border-slate-200 dark:border-slate-800 font-mono tabular-nums">
                {getEstimatedTAT()}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Claim Investigation Vertical
                </label>
                <select
                  value={claimType}
                  onChange={(e) => setClaimType(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-slate-300 dark:border-slate-700 font-medium bg-white dark:bg-[#0D1522] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-600"
                >
                  <option>Motor OD / TP Investigation</option>
                  <option>Theft & Staged Incident Verification</option>
                  <option>MACT Court Case Evidentiary Support</option>
                  <option>Non-Motor & Commercial Property Loss</option>
                  <option>Health Hospitalization / IPD Audit</option>
                  <option>Livestock Insurance Field Verification</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Target UP District (75 Districts)
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-slate-300 dark:border-slate-700 font-medium bg-white dark:bg-[#0D1522] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-600"
                >
                  {ALL_75_DISTRICTS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Insurance Carrier / TPA Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. HDFC ERGO / ICICI Lombard"
                  value={insurerName}
                  onChange={(e) => setInsurerName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-slate-300 dark:border-slate-700 font-medium bg-white dark:bg-[#0D1522] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-600 placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Claim / Policy Reference No.
                </label>
                <input
                  type="text"
                  placeholder="e.g. CLM-UP-2026-904"
                  value={claimNo}
                  onChange={(e) => setClaimNo(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-slate-300 dark:border-slate-700 font-medium bg-white dark:bg-[#0D1522] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-600 placeholder-slate-400 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Officer Official Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="investigator.manager@insurer.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-slate-300 dark:border-slate-700 font-medium bg-white dark:bg-[#0D1522] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-600 placeholder-slate-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Turnaround Urgency
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-slate-300 dark:border-slate-700 font-medium bg-white dark:bg-[#0D1522] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-600"
                >
                  <option>Standard SLA (48-72h)</option>
                  <option>Priority Verification (24-48h)</option>
                  <option>Emergency Red Flag (&lt; 24h)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white font-semibold text-xs tracking-wide shadow-sm transition-all active:scale-[0.98] border border-amber-800 dark:border-amber-500 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Mandate to Lucknow HQ</span>
              </button>
            </div>

            <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center">
              All transmissions adhere to IRDAI data security and statutory confidentiality covenants.
            </p>

          </form>
        )}

      </div>
    </div>
  );
}
