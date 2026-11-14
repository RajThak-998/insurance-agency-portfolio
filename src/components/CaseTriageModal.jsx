import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  FileText, 
  Clock, 
  MapPin, 
  ShieldAlert, 
  Send,
  Building,
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full border border-white/10 shadow-luxury-dark overflow-hidden animate-fadeIn">
        
        {/* Modal Header */}
        <div className="bg-navy-950 text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-bronze-500 text-navy-950 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-white">
                Initiate Field Investigation / Triage
              </h3>
              <p className="text-xs text-slate-300">
                Autocratic Management Services • Lucknow Command Hub
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-heading text-navy-950">
              Investigation Mandate Logged
            </h4>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2 text-left max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Claim Vertical:</span>
                <span className="font-semibold text-navy-950">{claimType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target District:</span>
                <span className="font-semibold text-navy-950">{district}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated Ground TAT:</span>
                <span className="font-bold text-emerald-700">{getEstimatedTAT()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Confirmation Sent To:</span>
                <span className="font-semibold text-navy-950">{contactEmail || 'Provided Email'}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500">
              Our central investigation desk at Aliganj, Lucknow has logged the reference and dispatched local field coordination.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-navy-950 text-white text-xs font-semibold hover:bg-navy-900"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
            
            {/* Dynamic TAT Banner */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-bronze-600" />
                <span className="text-slate-700">Estimated Field Response in {district}:</span>
              </div>
              <span className="font-bold text-navy-950 bg-white px-2.5 py-0.5 rounded border border-slate-200 font-mono">
                {getEstimatedTAT()}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Claim Investigation Vertical
                </label>
                <select
                  value={claimType}
                  onChange={(e) => setClaimType(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-medium bg-white focus:outline-none focus:ring-2 focus:ring-navy-900"
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
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Target UP District (75 Districts)
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-medium bg-white focus:outline-none focus:ring-2 focus:ring-navy-900"
                >
                  {ALL_75_DISTRICTS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Insurance Carrier / TPA Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. HDFC ERGO / ICICI Lombard"
                  value={insurerName}
                  onChange={(e) => setInsurerName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-navy-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Claim / Policy Reference No.
                </label>
                <input
                  type="text"
                  placeholder="e.g. CLM-UP-2026-904"
                  value={claimNo}
                  onChange={(e) => setClaimNo(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-navy-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Officer Official Corporate Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="investigator.manager@insurer.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-navy-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Turnaround Urgency
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-medium bg-white focus:outline-none focus:ring-2 focus:ring-navy-900"
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
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-bronze-500 via-amber-500 to-bronze-600 hover:from-amber-400 hover:to-bronze-500 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Mandate to Lucknow HQ</span>
              </button>
            </div>

            <p className="text-[10px] text-slate-400 text-center">
              All transmissions adhere to IRDAI data security and confidentiality covenants.
            </p>

          </form>
        )}

      </div>
    </div>
  );
}
