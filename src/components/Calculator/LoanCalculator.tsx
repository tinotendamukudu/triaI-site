'use client';

import { useState } from 'react';
import { Home, Car, Calculator, Check, ChevronDown } from 'lucide-react';
import Button from '../buttons/Button';

// --- Types & Constants ---

type CalculatorType = 'mortgage' | 'vehicle';

type InsuranceType = 'rta' | 'third-party' | 'third-party-fire' | 'comprehensive';

const INSURANCE_OPTS: { value: InsuranceType; label: string; rate: number }[] = [
  { value: 'rta', label: 'RTA Cover', rate: 0 }, // Flat fee usually
  { value: 'third-party', label: 'Full Third Party', rate: 0.02 }, // 2%
  { value: 'third-party-fire', label: 'Full Third Party Fire and Theft', rate: 0.035 }, // 3.5%
  { value: 'comprehensive', label: 'Comprehensive', rate: 0.05 }, // 5%
];

const PERIOD_OPTS = [
  { value: 4, label: '4 Months', multiplier: 0.4 },
  { value: 6, label: '6 Months', multiplier: 0.6 },
  { value: 12, label: '1 Year', multiplier: 1 },
];

// --- Helper Functions ---

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// --- Sub-Components ---

const MortgageCalculator = () => {
  const [income, setIncome] = useState(2500);
  const [years, setYears] = useState(20);
  
  // Assumptions
  const interestRate = 0.12; // 12% Annual
  const debtBurdenRatio = 0.40; // Can use 40% of income for repayment

  const calculateMortgage = () => {
    const monthlyRate = interestRate / 12;
    const numberOfPayments = years * 12;
    const maxMonthlyPayment = income * debtBurdenRatio;
    
    // PV = PMT * ( (1 - (1+r)^-n) / r )
    const maxLoanAmount = maxMonthlyPayment * ( (1 - Math.pow(1 + monthlyRate, -numberOfPayments)) / monthlyRate );

    return {
      maxLoan: maxLoanAmount,
      monthlyPayment: maxMonthlyPayment
    };
  };

  const { maxLoan, monthlyPayment } = calculateMortgage();

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-stretch animate-fadeIn">
      {/* Input Section */}
      <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-300/50 relative z-10">
        <div className="space-y-10">
          <div className="border-b pb-4 mb-6">
            <h3 className="text-xl font-bold text-primary">Mortgage Calculator</h3>
            <p className="text-gray-500 text-sm mt-1">Estimate your borrowing power based on income</p>
          </div>

          {/* Gross Salary Input */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Gross Salary/Income</label>
              <div className="bg-blue-50 text-primary px-4 py-2 rounded-lg font-bold text-xl border border-blue-100 min-w-[120px] text-right">
                {formatCurrency(income)}
              </div>
            </div>
            <input 
              type="range" 
              min="500" 
              max="50000" 
              step="100"
              value={income}
              onChange={(e) => setIncome(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary hover:accent-amber-500 transition-all"
            />
            <div className="flex justify-between text-xs text-gray-400 font-medium">
              <span>$500</span>
              <span>$50,000+</span>
            </div>
          </div>

          {/* Repayment Period Input */}
          <div className="space-y-4">
            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider block">Repayment Period (Years)</label>
            <div className="relative">
              <select 
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value))}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
              >
                {[5, 10, 15, 20, 25, 30].map(y => (
                    <option key={y} value={y}>{y} Years</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-primary text-white rounded-3xl p-8 relative overflow-hidden h-full flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 space-y-8">
            <div>
              <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-2">Estimated Loan Capability</p>
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                {formatCurrency(maxLoan)}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
               <div className="flex justify-between items-center text-sm mb-2">
                 <span className="text-blue-100">Monthly Repayment (Est.)</span>
                 <span className="font-bold text-xl">{formatCurrency(monthlyPayment)}</span>
               </div>
               <p className="text-xs text-blue-300 mt-4 leading-relaxed">
                 *Figures are estimates based on a 40% debt burden ratio. Actual eligibility subject to credit assessment and current interest rates.
               </p>
            </div>

            <Button variant="secondary" className="w-full justify-center mt-4">
              Apply for Mortgage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const VehicleCalculator = () => {
    const [insuranceType, setInsuranceType] = useState<InsuranceType>('comprehensive');
    const [period, setPeriod] = useState(12); // months
    const [vehicleValue, setVehicleValue] = useState(15000); // Standard value
  
    const calculatePremium = () => {
      const selectedType = INSURANCE_OPTS.find(t => t.value === insuranceType);
      const selectedPeriod = PERIOD_OPTS.find(p => p.value === period);
      
      if (!selectedType || !selectedPeriod) return 0;
  
      let basePremium = 0;
      
      if (insuranceType === 'rta') {
        basePremium = 50 * selectedPeriod.multiplier; // Fixed low cost
      } else {
        // Rate based calculation
        basePremium = (vehicleValue * selectedType.rate) * selectedPeriod.multiplier;
        // Apply minimums
        if (basePremium < 50) basePremium = 50; 
      }
  
      return basePremium;
    };
  
    const premium = calculatePremium();
  
    return (
      <div className="grid lg:grid-cols-12 gap-8 items-stretch animate-fadeIn">
        {/* Input Section */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-300/50 relative z-10">
          <div className="space-y-10">
            <div className="border-b pb-4 mb-6">
                <h3 className="text-xl font-bold text-primary">Vehicle Insurance Calculator</h3>
                <p className="text-gray-500 text-sm mt-1">Check premiums for your vehicle cover</p>
            </div>
            
            {/* Insurance Type */}
            <div className="space-y-4">
              <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider block">Insurance Type</label>
              <div className="relative">
                <select 
                  value={insuranceType}
                  onChange={(e) => setInsuranceType(e.target.value as InsuranceType)}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                >
                  {INSURANCE_OPTS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Vehicle Value - Only for non-RTA */}
            {insuranceType !== 'rta' && (
                <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-end">
                    <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Vehicle Value</label>
                    <div className="bg-blue-50 text-primary px-4 py-2 rounded-lg font-bold text-xl border border-blue-100 min-w-[120px] text-right">
                        {formatCurrency(vehicleValue)}
                    </div>
                    </div>
                    <input 
                    type="range" 
                    min="2000" 
                    max="100000" 
                    step="500"
                    value={vehicleValue}
                    onChange={(e) => setVehicleValue(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary hover:accent-amber-500 transition-all"
                    />
                     <div className="flex justify-between text-xs text-gray-400 font-medium">
                        <span>$2,000</span>
                        <span>$100,000+</span>
                    </div>
                </div>
            )}
  
            {/* Period */}
            <div className="space-y-4">
              <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider block">Period</label>
              <div className="relative">
                <select 
                  value={period}
                  onChange={(e) => setPeriod(parseInt(e.target.value))}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                >
                  {PERIOD_OPTS.map(p => (
                      <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
  
        {/* Results Section */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-primary text-white rounded-3xl p-8 relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 space-y-8">
              <div>
                <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-2">Estimated Premium</p>
                <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  {formatCurrency(premium)}
                </div>
                <p className="text-blue-200 text-sm mt-2 font-medium bg-blue-900/40 inline-block px-3 py-1 rounded-full">For {PERIOD_OPTS.find(p => p.value === period)?.label}</p>
              </div>
  
              <div className="pt-8 border-t border-white/10 space-y-4">
                 <div className="flex items-start gap-3 text-sm text-blue-100">
                    <div className="bg-secondary/20 p-1 rounded-full mt-0.5"><Check className="w-3 h-3 text-secondary" /></div>
                    <span>Instant coverage upon payment</span>
                 </div>
                 <div className="flex items-start gap-3 text-sm text-blue-100">
                    <div className="bg-secondary/20 p-1 rounded-full mt-0.5"><Check className="w-3 h-3 text-secondary" /></div>
                    <span>Digital certificate issued immediately</span>
                 </div>
              </div>
              <Button variant="secondary" className="w-full justify-center mt-4">
                Get Insurance Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default function LoanCalculator() {
    const [activeType, setActiveType] = useState<CalculatorType>('mortgage');

    return (
        <section className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden font-sans">
            {/* Background Decorations */}
             <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-amber-50 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        Financial <span className="text-secondary">Tools</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Plan for your future with our smart calculators.
                    </p>
                </div>

                {/* Toggle Controls */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm inline-flex">
                        <button
                            onClick={() => setActiveType('mortgage')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                                activeType === 'mortgage' 
                                ? 'bg-primary text-white shadow-md' 
                                : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                            }`}
                        >
                            <Home className="w-4 h-4" />
                            Mortgage Calculator
                        </button>
                        <button
                            onClick={() => setActiveType('vehicle')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                                activeType === 'vehicle' 
                                ? 'bg-primary text-white shadow-md' 
                                : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                            }`}
                        >
                            <Car className="w-4 h-4" />
                            Vehicle Insurance
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="transition-all duration-500 ease-in-out min-h-[600px]">
                    {activeType === 'mortgage' ? <MortgageCalculator /> : <VehicleCalculator />}
                </div>

            </div>
        </section>
    );
}