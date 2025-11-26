import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-[#003D7C] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-wide text-accent">
            Quantitative Finance Conference 2026
          </p>
          <p className="mt-1 text-xs text-slate-400 md:text-sm">
            Hosted by the Centre for Quantitative Finance, National University of Singapore.
          </p>
        </div>

        <div className="grid gap-4 text-sm md:grid-cols-2 md:gap-8">
          <div className="flex items-start gap-2">
            <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
            <p className="text-slate-300">
              <span className="font-medium text-slate-100">
                General enquiries:
              </span>{' '}
              <a
                href="mailto:askcqf@nus.edu.sg"
                className="underline-offset-2 hover:text-accent hover:underline"
              >
                askcqf@nus.edu.sg
              </a>
            </p>
          </div>

          <div className="flex items-start gap-2">
            <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
            <p className="text-slate-300">
              <span className="font-medium text-slate-100">
                Programme contact:
              </span>{' '}
              <a
                href="mailto:cy.goh@nus.edu.sg"
                className="underline-offset-2 hover:text-accent hover:underline"
              >
                cy.goh@nus.edu.sg
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Centre for Quantitative Finance, National University of Singapore.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}