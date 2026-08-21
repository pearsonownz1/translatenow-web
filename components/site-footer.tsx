import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="px-6 pb-12 pt-8 md:px-12 lg:px-16">
      <hr className="rule" />
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="font-display text-[1.3rem] uppercase leading-none tracking-[0.12em]">
            TranslateNow
          </p>
          <p className="mt-3 max-w-xs text-[0.9rem] leading-relaxed text-ink/70">
            Certified translations for the filing.
          </p>
        </div>
        <div>
          <p className="font-stamp text-ink/45">Product</p>
          <ul className="mt-3 space-y-2 text-[0.9rem]">
            <li>
              <Link href="/certified-translation" className="hover:text-copper">
                Certified translation
              </Link>
            </li>
            <li>
              <Link href="/standard-translation" className="hover:text-copper">
                Standard translation
              </Link>
            </li>
            <li>
              <Link href="/notarized-translation" className="hover:text-copper">
                Notarized translation
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-copper">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:text-copper">
                How it works
              </Link>
            </li>
            <li>
              <Link href="/languages" className="hover:text-copper">
                Languages
              </Link>
            </li>
            <li>
              <Link href="/documents" className="hover:text-copper">
                Documents
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-stamp text-ink/45">Filings</p>
          <ul className="mt-3 space-y-2 text-[0.9rem]">
            <li>
              <Link href="/uscis" className="hover:text-copper">
                USCIS
              </Link>
            </li>
            <li>
              <Link href="/ircc" className="hover:text-copper">
                IRCC (Canada)
              </Link>
            </li>
            <li>
              <Link href="/industries/immigration" className="hover:text-copper">
                Immigration
              </Link>
            </li>
            <li>
              <Link href="/industries/legal" className="hover:text-copper">
                Legal
              </Link>
            </li>
            <li>
              <Link href="/industries/academic" className="hover:text-copper">
                Academic
              </Link>
            </li>
            <li>
              <Link href="/industries/medical" className="hover:text-copper">
                Medical
              </Link>
            </li>
            <li>
              <Link href="/industries/financial" className="hover:text-copper">
                Financial
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-stamp text-ink/45">Desk</p>
          <ul className="mt-3 space-y-2 text-[0.9rem]">
            <li>
              <Link href="/order" className="hover:text-copper">
                Start an order
              </Link>
            </li>
            <li>
              <Link href="/quote" className="hover:text-copper">
                Request a quote
              </Link>
            </li>
            <li>
              <Link href="/find-order" className="hover:text-copper">
                Find an order
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-copper">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-copper">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-copper">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/signin" className="hover:text-copper">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-stamp text-ink/45">Legal</p>
          <ul className="mt-3 space-y-2 text-[0.9rem]">
            <li>
              <Link href="/terms" className="hover:text-copper">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-copper">
                Privacy
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-[0.9rem] leading-relaxed text-ink/70">
            This is a demo storefront. No documents are uploaded or stored. No
            cards are processed. Nothing is charged.
          </p>
        </div>
      </div>
      <p className="mt-10 text-[0.75rem] leading-relaxed text-ink/45">
        USCIS and IRCC do not approve or endorse translation vendors. A
        certified order includes a signed accuracy statement written to the
        style of 8 CFR 103.2(b)(3) for U.S. filings. Acceptance still depends
        on the source document.
      </p>
    </footer>
  );
}
