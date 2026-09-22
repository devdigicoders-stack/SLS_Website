import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center border border-slate-200 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-pharma-50 text-pharma-600 flex items-center justify-center mx-auto mb-4">
          <Pill className="w-8 h-8 -rotate-45" />
        </div>
        <h1 className="font-display font-black text-4xl text-slate-900">404</h1>
        <h2 className="font-display font-bold text-lg text-slate-700 mt-1">Page or Formulation Not Found</h2>
        <p className="text-xs text-slate-500 mt-3 mb-6">
          The requested medical page or formulation catalogue url could not be located.
        </p>
        <div className="flex gap-2 justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 px-5 py-2.5 bg-pharma-600 text-white font-bold text-xs rounded-xl shadow-md hover:bg-pharma-700 transition"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/products"
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition"
          >
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
