"use client"
import { useState } from "react"
import {
  ChevronDown,
  Shield,
  Zap,
  Linkedin,
  Twitter,
  Instagram,
  Menu,
  X,
  ExternalLink,
  Wallet,
  Search,
  Send,
  CheckCircle,
  Globe,
  Lock,
  UserX,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Replace this URL with your actual Google Forms URL
  const GOOGLE_FORMS_URL = "https://forms.gle/M3WbHxfXtbExnw45A"

  const handleJoinWaitlist = () => {
    window.open(GOOGLE_FORMS_URL, "_blank", "noopener,noreferrer")
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-auto" src="/logo.png" alt="TradeAm" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("why-tradeam")}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Why TradeAm
                </button>
                <Button
                  onClick={handleJoinWaitlist}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg"
                >
                  Join Waitlist
                </Button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-primary-600 p-2 transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-primary-100 animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md w-full text-left transition-all duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md w-full text-left transition-all duration-200"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("why-tradeam")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md w-full text-left transition-all duration-200"
              >
                Why TradeAm
              </button>
              <Button
                onClick={handleJoinWaitlist}
                className="w-full mt-2 bg-primary-600 hover:bg-primary-700 text-white transition-all duration-200"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32 bg-gradient-to-br from-primary-50 to-white overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Trade Crypto. <span className="text-primary-600 animate-gradient-text">The Nigerian Way.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Swap USDT or USDC for Naira safely — no middlemen, no stress.
            </p>
          </div>

          {/* Call to Action */}
          <div className="space-y-4 animate-fade-in-up animation-delay-400">
            <Button
              onClick={handleJoinWaitlist}
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto group"
            >
              Join the Waitlist & Secure Your Spot
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <p className="text-sm text-gray-600 animate-fade-in-up animation-delay-600">
              Get early access • Exclusive updates • Special launch offers
            </p>
          </div>

          {/* Stats */}
          <div className="pt-8 animate-fade-in-up animation-delay-800">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>10,000+ interested traders</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1000"></div>
                <span>Coming Q4 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("how-it-works")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-primary-700 transition-colors duration-200"
        >
          <ChevronDown className="w-8 h-8 text-primary-600" />
        </button>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">How TradeAm Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple, secure process designed for Nigerian crypto traders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Step 1 */}
            <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl animate-fade-in-up animation-delay-200">
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600"></div>
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Connect Your Wallet</h3>
                <p className="text-gray-700 text-sm">No signups, just Web3 authentication</p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl animate-fade-in-up animation-delay-400">
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600"></div>
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Browse Offers</h3>
                <p className="text-gray-700 text-sm">Find the best rates from verified traders</p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl animate-fade-in-up animation-delay-600">
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600"></div>
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Send/Receive Payment</h3>
                <p className="text-gray-700 text-sm">Naira via secure bank transfer</p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl animate-fade-in-up animation-delay-800">
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600"></div>
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Release Crypto Safely</h3>
                <p className="text-gray-700 text-sm">Smart contract handles escrow automatically</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center animate-fade-in-up animation-delay-1000">
            <p className="text-xl font-semibold text-gray-900 bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
              Simple. Secure. Built for Nigerians.
            </p>
          </div>
        </div>
      </section>

      {/* Why TradeAm Section */}
      <section id="why-tradeam" className="py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Why TradeAm is Different</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built from the ground up to solve real problems Nigerian crypto traders face
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white rounded-2xl animate-fade-in-up animation-delay-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Safe by Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  Smart contract escrow protects your funds with battle-tested blockchain security
                </p>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white rounded-2xl animate-fade-in-up animation-delay-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <UserX className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">No KYC Required</h3>
                <p className="text-gray-700 leading-relaxed">
                  Just connect your wallet and start trading - no lengthy verification processes
                </p>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white rounded-2xl animate-fade-in-up animation-delay-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Made for Nigeria</h3>
                <p className="text-gray-700 leading-relaxed">
                  Built with local banks and Naira in mind - optimized for Nigerian payment systems
                </p>
              </CardContent>
            </Card>

            {/* Benefit 4 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white rounded-2xl animate-fade-in-up animation-delay-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">No Scams, No Ghosting</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every transaction is trust-enforced through smart contracts and dispute resolution
                </p>
              </CardContent>
            </Card>

            {/* Benefit 5 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white rounded-2xl animate-fade-in-up animation-delay-1000 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fast & Direct</h3>
                <p className="text-gray-700 leading-relaxed">
                  Peer-to-peer trading with instant settlement - no waiting for centralized exchanges
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="target-audience" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">
            Built for Real People
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-left space-y-6 animate-fade-in-up animation-delay-200">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Crypto users tired of Binance limits</h4>
                  <p className="text-gray-600 text-sm">Frustrated with withdrawal restrictions and account freezes</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Traders who got burned on Telegram</h4>
                  <p className="text-gray-600 text-sm">Lost money to scammers and unreliable P2P groups</p>
                </div>
              </div>
            </div>
            <div className="text-left space-y-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Freelancers receiving USDT/USDC</h4>
                  <p className="text-gray-600 text-sm">Need reliable way to convert crypto payments to Naira</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Students, families, and side hustlers</h4>
                  <p className="text-gray-600 text-sm">Looking for safe, accessible crypto trading solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-2xl animate-fade-in-up animation-delay-600">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              If you've ever asked <span className="text-primary-600">"Who go swap USDT for me?"</span> — TradeAm is
              your answer.
            </p>
            <p className="text-gray-700">A platform built by Nigerians, for Nigerians and Africans.</p>
          </div>
        </div>
      </section>

      {/* Progress Update Section */}
      <section id="progress" className="py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">
            We're Not Just Talking. We Built It.
          </h2>
          <p className="text-xl text-gray-700 mb-12 animate-fade-in-up animation-delay-200">
            TradeAm is a fully working P2P platform with enterprise-grade features:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-left space-y-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Smart contract escrow</h4>
                  <p className="text-gray-600 text-sm">Audited and battle-tested on mainnet</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 animate-pulse animation-delay-200"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">WalletConnect integration</h4>
                  <p className="text-gray-600 text-sm">Seamless Web3 authentication</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 animate-pulse animation-delay-400"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Live trading interface</h4>
                  <p className="text-gray-600 text-sm">Real-time order book and matching</p>
                </div>
              </div>
            </div>
            <div className="text-left space-y-6 animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 animate-pulse animation-delay-600"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dispute & fraud protection</h4>
                  <p className="text-gray-600 text-sm">Multi-layer security and arbitration system</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 animate-pulse animation-delay-800"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Functional testnet version</h4>
                  <p className="text-gray-600 text-sm">Fully tested and ready for mainnet deployment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-up animation-delay-800">
            <p className="text-xl font-semibold text-gray-900">
              You're not waiting on an idea.{" "}
              <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                You're joining a movement.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section id="waitlist" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Be First to Trade Smart
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            We're opening up access to early users who want to trade crypto the Nigerian way — safe, fast,
            decentralized.
          </p>

          <div className="animate-fade-in-up animation-delay-400">
            <Button
              onClick={handleJoinWaitlist}
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto group"
            >
              Join Waitlist Now
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">
            Got Questions? We've Got You.
          </h2>

          <div className="space-y-6">
            <Card className="border-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Q: Is TradeAm secure?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Yes. Every trade uses smart contract escrow with multi-signature security. Funds are only released
                  when payment is confirmed by both parties and our automated verification system.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-400">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Q: Do I need to sign up?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: No traditional signup required. Just connect your Web3 wallet using WalletConnect — no email, no
                  passwords, no lengthy KYC processes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-600">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Q: What tokens are supported?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Currently USDT and USDC on Ethereum and Polygon networks. We're adding support for more stablecoins
                  and networks based on user demand.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Q: What are the fees?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: We charge a competitive 1% transaction fee split between buyer and seller. No hidden charges, no
                  monthly fees, no middleman markups.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Real People. Real Trades. Real Trust.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            TradeAm is how crypto was meant to work — local, secure, and peer-to-peer. Be part of the next wave of
            decentralized trading in Africa.
          </p>

          <div className="animate-fade-in-up animation-delay-400">
            <Button
              onClick={handleJoinWaitlist}
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto group"
            >
              Join the Waitlist Now
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-primary-400 mb-2">TradeAm</div>
              <p className="text-gray-400">© 2025 TradeAm. All rights reserved.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-6">
                <a href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  Terms
                </a>
                <a href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  Privacy Policy
                </a>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
