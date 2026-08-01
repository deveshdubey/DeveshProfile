import React, { useState } from 'react';
import { X, Shield, Lock, Activity, Users, Cpu, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../../data/portfolioData';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'adobe' || passcode === '1234' || passcode === 'admin') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card w-full max-w-xl rounded-3xl border border-white/10 p-6 sm:p-8 relative shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#262939] text-[#dfe1f6] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#22D3EE]/20 text-[#22D3EE]">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#dfe1f6]">Engineering Console</h3>
            <p className="text-xs text-[#94A3B8] font-mono-code">Devesh Dubey's Developer Workstation</p>
          </div>
        </div>

        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#171b2a] border border-white/5 text-xs text-[#94A3B8] font-mono-code">
              Demo Security Gate: Enter passcode <span className="text-[#22D3EE] font-bold">adobe</span> or <span className="text-[#22D3EE] font-bold">admin</span> to access workspace telemetry.
            </div>

            <div>
              <label className="block text-xs font-mono-code text-[#94A3B8] mb-1">Passcode</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode..."
                  className="w-full bg-[#1b1f2e] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-[#dfe1f6] placeholder-[#94A3B8] focus:outline-none focus:border-[#22D3EE] transition-colors"
                />
              </div>
              {error && (
                <p className="text-xs text-red-400 font-mono-code mt-1">
                  Incorrect passcode. Try 'adobe' or 'admin'.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#22D3EE] hover:bg-[#06b6d4] text-[#00285d] font-bold text-sm py-3 rounded-xl transition-colors cursor-pointer"
            >
              Authenticate Session
            </button>
          </form>
        ) : (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div className="p-4 rounded-2xl bg-[#171b2a] border border-green-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-mono-code text-green-400 font-semibold">
                  Authenticated: Devesh Ramakant Dubey
                </span>
              </div>
              <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-green-500/20 text-green-300">
                ADMIN OK
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono-code">
              <div className="p-4 rounded-2xl bg-[#1b1f2e] border border-white/5 space-y-1">
                <p className="text-[11px] text-[#94A3B8]">WASM Pipeline Status</p>
                <p className="text-lg font-bold text-[#adc6ff]">60 FPS Active</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1b1f2e] border border-white/5 space-y-1">
                <p className="text-[11px] text-[#94A3B8]">Upcoming Mentees</p>
                <p className="text-lg font-bold text-[#ddb7ff]">14 Bookings</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1b1f2e] border border-white/5 space-y-1">
                <p className="text-[11px] text-[#94A3B8]">Core C++ Memory</p>
                <p className="text-lg font-bold text-green-400">0 Leaks</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1b1f2e] border border-white/5 space-y-1">
                <p className="text-[11px] text-[#94A3B8]">Build Engine</p>
                <p className="text-lg font-bold text-[#22D3EE]">v3.12.4-RELEASE</p>
              </div>
            </div>

            <button
              onClick={() => {
                setIsAuthenticated(false);
                setPasscode('');
                onClose();
              }}
              className="w-full bg-[#262939] hover:bg-[#303444] text-[#dfe1f6] font-mono-code text-xs font-semibold py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              Sign Out Console
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
