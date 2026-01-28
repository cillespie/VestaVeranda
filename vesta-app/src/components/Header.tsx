'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const guides = [
  // Valentine's Day Collection
  { label: '💕 Valentine\'s Day Outdoor Date Ideas', href: '/guides/valentines-day-outdoor-date' },
  { label: '💝 Gift Ideas for the Outdoor Lover', href: '/guides/valentines-gift-ideas' },
  { label: '❄️ Cozy Winter Date Night', href: '/guides/winter-date-night' },
  { label: '🔥 Best Fire Pits for Romantic Evenings', href: '/guides/romantic-fire-pits' },
  { label: '🍷 Romantic Outdoor Dinner Setup', href: '/guides/romantic-dinner-setup' },
  { label: '💰 Valentine\'s on a Budget', href: '/guides/valentines-budget' },
  // General Guides
  { label: 'Fire Pit on Composite Deck', href: '/guides/fire-pit-composite-deck' },
  { label: 'Robot Mowers for Hills', href: '/guides/robot-mower-hills' },
  { label: 'Ooni vs Gozney Pizza Ovens', href: '/guides/ooni-vs-gozney' },
  { label: 'Backyard Lighting (No Electricity)', href: '/guides/backyard-lighting-no-electricity' },
  { label: 'Lawn Games for Weddings', href: '/guides/lawn-games-weddings' },
  { label: 'Patio Furniture Guide', href: '/guides/patio-furniture-guide' },
  { label: 'Gazebo vs Pergola', href: '/guides/gazebo-vs-pergola' },
];

const comparisons = [
  { label: 'Solo Stove vs Breeo', href: '/compare/solo-stove-vs-breeo' },
  { label: 'Jackery vs Bluetti', href: '/compare/jackery-vs-bluetti' },
];

const setups = [
  { label: '$500 Patio Makeover', href: '/setups/500-patio-makeover' },
  { label: 'Cozy Fire Pit Corner', href: '/setups/cozy-fire-pit-corner' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [guidesDropdownOpen, setGuidesDropdownOpen] = useState(false);
  const [comparisonsDropdownOpen, setComparisonsDropdownOpen] = useState(false);
  const [setupsDropdownOpen, setSetupsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-md py-3'
        : 'bg-charcoal/30 backdrop-blur-sm py-4'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.jpg"
            alt="Vesta Veranda Living"
            width={72}
            height={72}
            className="w-16 h-16 rounded-full border-2 border-white/20 group-hover:opacity-90 transition-opacity object-cover"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Guides Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setGuidesDropdownOpen(true)}
            onMouseLeave={() => setGuidesDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 font-medium transition-colors ${isScrolled ? 'text-charcoal/80 hover:text-charcoal' : 'text-white/90 hover:text-white'
                }`}
            >
              Guides
              <ChevronDown className="w-4 h-4" />
            </button>

            {guidesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white rounded-xl shadow-xl border border-warm-gray-100 py-2 min-w-[300px]">
                  {guides.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="block px-4 py-2.5 text-charcoal/80 hover:bg-limestone hover:text-charcoal transition-colors text-sm"
                    >
                      {guide.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Comparisons Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setComparisonsDropdownOpen(true)}
            onMouseLeave={() => setComparisonsDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 font-medium transition-colors ${isScrolled ? 'text-charcoal/80 hover:text-charcoal' : 'text-white/90 hover:text-white'
                }`}
            >
              Comparisons
              <ChevronDown className="w-4 h-4" />
            </button>

            {comparisonsDropdownOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white rounded-xl shadow-xl border border-warm-gray-100 py-2 min-w-[240px]">
                  {comparisons.map((comparison) => (
                    <Link
                      key={comparison.href}
                      href={comparison.href}
                      className="block px-4 py-2.5 text-charcoal/80 hover:bg-limestone hover:text-charcoal transition-colors text-sm"
                    >
                      {comparison.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Setups Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSetupsDropdownOpen(true)}
            onMouseLeave={() => setSetupsDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 font-medium transition-colors ${isScrolled ? 'text-charcoal/80 hover:text-charcoal' : 'text-white/90 hover:text-white'
                }`}
            >
              Setups
              <ChevronDown className="w-4 h-4" />
            </button>

            {setupsDropdownOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white rounded-xl shadow-xl border border-warm-gray-100 py-2 min-w-[240px]">
                  {setups.map((setup) => (
                    <Link
                      key={setup.href}
                      href={setup.href}
                      className="block px-4 py-2.5 text-charcoal/80 hover:bg-limestone hover:text-charcoal transition-colors text-sm"
                    >
                      {setup.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA Button (Desktop) */}
        <Link
          href="/#featured"
          className={`hidden md:inline-flex btn ${isScrolled ? 'btn-primary' : 'btn-ghost'
            }`}
        >
          Explore Top Picks
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 -mr-2 transition-colors ${isScrolled ? 'text-stone-800' : 'text-white'
            }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[88px] bg-white z-40 transition-all duration-300 ${isMobileMenuOpen
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-full pointer-events-none'
          }`}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col h-full overflow-y-auto pb-32">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors text-xl font-heading font-semibold text-stone-800"
          >
            Home
          </Link>

          {/* Guides Section */}
          <div className="mt-4">
            <div className="text-sm font-bold text-charcoal/50 uppercase tracking-wider mb-2 px-4">
              Guides
            </div>
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-charcoal/80 hover:bg-limestone hover:text-charcoal rounded-lg transition-colors"
              >
                {guide.label}
              </Link>
            ))}
          </div>

          {/* Comparisons Section */}
          <div className="mt-4">
            <div className="text-sm font-bold text-charcoal/50 uppercase tracking-wider mb-2 px-4">
              Comparisons
            </div>
            {comparisons.map((comparison) => (
              <Link
                key={comparison.href}
                href={comparison.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-charcoal/80 hover:bg-limestone hover:text-charcoal rounded-lg transition-colors"
              >
                {comparison.label}
              </Link>
            ))}
          </div>

          {/* Setups Section */}
          <div className="mt-4">
            <div className="text-sm font-bold text-charcoal/50 uppercase tracking-wider mb-2 px-4">
              Setup Inspiration
            </div>
            {setups.map((setup) => (
              <Link
                key={setup.href}
                href={setup.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-charcoal/80 hover:bg-limestone hover:text-charcoal rounded-lg transition-colors"
              >
                {setup.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-stone-100">
            <Link
              href="/#featured"
              className="btn btn-primary w-full justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explore Top Picks
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
