"use client"

import { Search, Gamepad2, Smartphone, CreditCard, Zap, Shield, Clock, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [activeService, setActiveService] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Search results data
  const searchResults = [
    { name: "Mobile Legends", category: "MOBA", image: "/placeholder.svg?height=60&width=60" },
    { name: "Free Fire", category: "Battle Royale", image: "/placeholder.svg?height=60&width=60" },
    { name: "PUBG Mobile", category: "Battle Royale", image: "/placeholder.svg?height=60&width=60" },
    { name: "Genshin Impact", category: "RPG", image: "/placeholder.svg?height=60&width=60" },
  ].filter((game) => game.name.toLowerCase().includes(searchQuery.toLowerCase()))

  // Service products data
  const serviceProducts = {
    game: [
      { name: "Mobile Legends", price: "Mulai Rp 1.500", image: "/placeholder.svg?height=80&width=80" },
      { name: "Free Fire", price: "Mulai Rp 1.200", image: "/placeholder.svg?height=80&width=80" },
      { name: "PUBG Mobile", price: "Mulai Rp 2.000", image: "/placeholder.svg?height=80&width=80" },
      { name: "Genshin Impact", price: "Mulai Rp 15.000", image: "/placeholder.svg?height=80&width=80" },
      { name: "Valorant", price: "Mulai Rp 12.000", image: "/placeholder.svg?height=80&width=80" },
      { name: "Call of Duty", price: "Mulai Rp 8.000", image: "/placeholder.svg?height=80&width=80" },
    ],
    pulsa: [
      { name: "Telkomsel", price: "Mulai Rp 5.000", image: "/placeholder.svg?height=80&width=80" },
      { name: "XL Axiata", price: "Mulai Rp 5.000", image: "/placeholder.svg?height=80&width=80" },
      { name: "Indosat", price: "Mulai Rp 5.000", image: "/placeholder.svg?height=80&width=80" },
      { name: "Tri", price: "Mulai Rp 5.000", image: "/placeholder.svg?height=80&width=80" },
    ],
    ewallet: [
      { name: "OVO", price: "Mulai Rp 10.000", image: "/placeholder.svg?height=80&width=80" },
      { name: "Dana", price: "Mulai Rp 10.000", image: "/placeholder.svg?height=80&width=80" },
      { name: "GoPay", price: "Mulai Rp 10.000", image: "/placeholder.svg?height=80&width=80" },
      { name: "ShopeePay", price: "Mulai Rp 10.000", image: "/placeholder.svg?height=80&width=80" },
    ],
    pln: [
      { name: "PLN Token 20K", price: "Rp 20.500", image: "/placeholder.svg?height=80&width=80" },
      { name: "PLN Token 50K", price: "Rp 50.500", image: "/placeholder.svg?height=80&width=80" },
      { name: "PLN Token 100K", price: "Rp 100.500", image: "/placeholder.svg?height=80&width=80" },
      { name: "PLN Token 200K", price: "Rp 200.500", image: "/placeholder.svg?height=80&width=80" },
    ],
  }

  // Popular Games - Reduced for mobile
  const popularGames = [
    { name: "Mobile Legends", image: "/placeholder.svg?height=100&width=100" },
    { name: "Free Fire", image: "/placeholder.svg?height=100&width=100" },
    { name: "PUBG Mobile", image: "/placeholder.svg?height=100&width=100" },
    { name: "Genshin Impact", image: "/placeholder.svg?height=100&width=100" },
    { name: "Valorant", image: "/placeholder.svg?height=100&width=100" },
    { name: "Call of Duty", image: "/placeholder.svg?height=100&width=100" },
    { name: "Honkai Impact", image: "/placeholder.svg?height=100&width=100" },
    { name: "Arena of Valor", image: "/placeholder.svg?height=100&width=100" },
    { name: "Clash of Clans", image: "/placeholder.svg?height=100&width=100" },
    { name: "Clash Royale", image: "/placeholder.svg?height=100&width=100" },
    { name: "Brawl Stars", image: "/placeholder.svg?height=100&width=100" },
    { name: "Among Us", image: "/placeholder.svg?height=100&width=100" },
  ]

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    setShowSearchResults(value.length > 0)
  }

  const handleServiceClick = (service: string) => {
    setActiveService(activeService === service ? null : service)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs sm:text-sm lg:text-lg">K</span>
              </div>
              <span className="text-base sm:text-lg lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Konterkuy
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <Link href="/" className="text-blue-600 font-semibold text-sm lg:text-base">
                Home
              </Link>
              <Link
                href="/cari-pesanan"
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm lg:text-base"
              >
                Cari Pesanan
              </Link>
              <Link
                href="/daftar-harga"
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm lg:text-base"
              >
                Daftar Harga
              </Link>
              <Link
                href="/kalkulator-ml"
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm lg:text-base"
              >
                Kalkulator ML
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              {/* Desktop Auth Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 text-sm" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-sm"
                  asChild
                >
                  <Link href="/register">Register</Link>
                </Button>
              </div>

              {/* Mobile Login Button - di sebelah kanan sebelum burger menu */}
              <Button className="md:hidden bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 h-8" asChild>
                <Link href="/login">Login</Link>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden p-2">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    <nav className="space-y-2">
                      <Link
                        href="/"
                        className="flex items-center p-3 rounded-lg hover:bg-gray-100 text-blue-600 font-semibold"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="/cari-pesanan"
                        className="flex items-center p-3 rounded-lg hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Cari Pesanan
                      </Link>
                      <Link
                        href="/daftar-harga"
                        className="flex items-center p-3 rounded-lg hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Daftar Harga
                      </Link>
                      <Link
                        href="/kalkulator-ml"
                        className="flex items-center p-3 rounded-lg hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Kalkulator ML
                      </Link>
                    </nav>
                    <div className="pt-4 border-t space-y-3">
                      <Button variant="outline" className="w-full border-blue-200 text-blue-600" asChild>
                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                          Login
                        </Link>
                      </Button>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600" asChild>
                        <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                          Register
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full hidden sm:block">
            <div className="w-full h-full bg-gradient-to-l from-blue-100/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Game Characters Banner"
                width={600}
                height={400}
                className="object-contain opacity-20"
              />
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
              <span className="text-gray-900">TOPUP GAME</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                LEGAL & MURAH
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 mb-4 sm:mb-6 lg:mb-10 leading-relaxed">
              Platform top up game terpercaya dengan harga terjangkau dan proses otomatis 24 jam. Dapatkan diamond, UC,
              dan item game lainnya dengan aman dan cepat!
            </p>

            {/* Search Bar */}
            <div className="max-w-lg relative">
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <Input
                  placeholder="Cari game favorit kamu..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 sm:pl-12 h-11 sm:h-12 lg:h-14 text-sm sm:text-base lg:text-lg bg-white border-blue-200 rounded-xl sm:rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {showSearchResults && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-10 sm:right-12 top-1/2 transform -translate-y-1/2 p-1"
                    onClick={() => {
                      setSearchQuery("")
                      setShowSearchResults(false)
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
                <Button className="absolute right-1 top-1 sm:top-2 h-9 sm:h-10 text-xs sm:text-sm lg:text-base bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg sm:rounded-xl px-3 sm:px-4">
                  Cari
                </Button>
              </div>

              {/* Search Results Popup */}
              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-blue-200 rounded-xl sm:rounded-2xl shadow-xl z-50 max-h-80 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <div className="p-3 sm:p-4">
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-500 mb-3">Hasil Pencarian</h3>
                      {searchResults.map((game, index) => (
                        <Link key={index} href="/produk">
                          <div className="flex items-center space-x-3 p-2 sm:p-3 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors">
                            <Image
                              src={game.image || "/placeholder.svg"}
                              alt={game.name}
                              width={32}
                              height={32}
                              className="sm:w-10 sm:h-10 rounded-lg flex-shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{game.name}</p>
                              <p className="text-xs sm:text-sm text-gray-500">{game.category}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      <p className="text-sm">Tidak ada hasil untuk "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 sm:py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Layanan Kami</h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai layanan digital terlengkap dengan harga terjangkau dan proses cepat
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
            {/* Top Up Game */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-3 sm:p-4 lg:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl lg:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3">
                  Top Up Game
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
                  Mobile Legends, Free Fire, PUBG, dan game populer lainnya
                </p>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 text-xs sm:text-sm h-8 sm:h-9"
                  onClick={() => handleServiceClick("game")}
                >
                  {activeService === "game" ? "Tutup" : "Lihat Game"}
                </Button>
              </CardContent>
            </Card>

            {/* Pulsa & Data */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-3 sm:p-4 lg:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl lg:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3">
                  Pulsa & Data
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
                  Semua operator Telkomsel, XL, Indosat, Tri, Axis
                </p>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 text-xs sm:text-sm h-8 sm:h-9"
                  onClick={() => handleServiceClick("pulsa")}
                >
                  {activeService === "pulsa" ? "Tutup" : "Beli Pulsa"}
                </Button>
              </CardContent>
            </Card>

            {/* E-Wallet */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-3 sm:p-4 lg:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl lg:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3">
                  E-Wallet
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
                  OVO, Dana, GoPay, LinkAja, ShopeePay
                </p>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 text-xs sm:text-sm h-8 sm:h-9"
                  onClick={() => handleServiceClick("ewallet")}
                >
                  {activeService === "ewallet" ? "Tutup" : "Top Up"}
                </Button>
              </CardContent>
            </Card>

            {/* PLN Token */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-3 sm:p-4 lg:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl lg:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3">
                  PLN Token
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
                  Token listrik prabayar semua nominal
                </p>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 text-xs sm:text-sm h-8 sm:h-9"
                  onClick={() => handleServiceClick("pln")}
                >
                  {activeService === "pln" ? "Tutup" : "Beli Token"}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Product Cards */}
          {activeService && (
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="flex justify-between items-center mb-4 lg:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  {activeService === "game" && "Game Populer"}
                  {activeService === "pulsa" && "Operator Pulsa"}
                  {activeService === "ewallet" && "E-Wallet"}
                  {activeService === "pln" && "PLN Token"}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveService(null)}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
                {serviceProducts[activeService as keyof typeof serviceProducts]?.map((product, index) => (
                  <Link key={index} href="/produk">
                    <Card className="hover:shadow-lg transition-all cursor-pointer border-blue-200">
                      <CardContent className="p-2 sm:p-3 lg:p-4 text-center">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="mx-auto mb-2 rounded-lg w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                        />
                        <h4 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm lg:text-base truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs lg:text-sm text-blue-600 font-medium">{product.price}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-8 sm:py-12 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Game Populer</h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600">Top up game favorit dengan harga terbaik</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {popularGames.map((game, index) => (
              <Link key={index} href="/produk">
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg bg-white">
                  <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
                    <div className="mb-2 sm:mb-3 lg:mb-4">
                      <Image
                        src={game.image || "/placeholder.svg"}
                        alt={game.name}
                        width={60}
                        height={60}
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto rounded-lg object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base mb-2 lg:mb-3 truncate">
                      {game.name}
                    </h3>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 w-full text-xs lg:text-sm h-7 sm:h-8"
                    >
                      Top Up
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 sm:py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:scale-110 transition-transform shadow-xl">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Proses Instan</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Transaksi otomatis dan langsung masuk ke akun game Anda dalam hitungan detik
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:scale-110 transition-transform shadow-xl">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">100% Aman</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Ribuan customer puas dengan layanan kami. Terpercaya dan bergaransi
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:scale-110 transition-transform shadow-xl">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">24/7 Support</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Tim support siap membantu Anda kapan saja melalui WhatsApp dan live chat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-24 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Siap untuk Top Up Game Favorit?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-blue-100 mb-4 sm:mb-6 lg:mb-10 leading-relaxed">
            Bergabung dengan ribuan gamer yang sudah mempercayai layanan kami. Dapatkan harga terbaik dan proses
            tercepat!
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 h-auto shadow-xl"
          >
            Mulai Top Up Sekarang
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm sm:text-base lg:text-lg">K</span>
                </div>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold">Konterkuy</span>
              </div>
              <p className="text-blue-200 leading-relaxed text-sm lg:text-base">
                Platform top up game terpercaya dengan layanan 24 jam dan harga terjangkau untuk semua gamer Indonesia.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6">Layanan</h3>
              <ul className="space-y-2 lg:space-y-3 text-blue-200 text-sm lg:text-base">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Top Up Game
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pulsa & Data
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    E-Wallet
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    PLN Token
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6">Bantuan</h3>
              <ul className="space-y-2 lg:space-y-3 text-blue-200 text-sm lg:text-base">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cara Order
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Metode Pembayaran
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6">Hubungi Kami</h3>
              <ul className="space-y-2 lg:space-y-3 text-blue-200 text-sm lg:text-base">
                <li>WhatsApp: +62 838-4402-3208</li>
                <li>Email: support@konterkuy.id</li>
                <li>Jam Operasional: 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 text-center text-blue-200 text-sm lg:text-base">
            <p>&copy; 2023 Konterkuy. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
