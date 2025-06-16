"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import {
  User,
  ShoppingCart,
  Wallet,
  History,
  Settings,
  LogOut,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Download,
  Plus,
  Search,
  Filter,
  Bell,
  CreditCard,
  Smartphone,
  Shield,
  Key,
  Mail,
  Phone,
  Copy,
  ExternalLink,
  Menu,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const recentOrders = [
    {
      id: "#ML001",
      game: "Mobile Legends",
      product: "28 Diamond",
      amount: "Rp 7.500",
      status: "success",
      date: "25 Nov 2024, 14:30",
      target: "123456789 (1234)",
      paymentMethod: "QRIS",
      customerName: "ARIEL",
      customerPhone: "+62 838-4402-3208",
      notes: "Proses otomatis",
    },
    {
      id: "#FF002",
      game: "Free Fire",
      product: "100 Diamond",
      amount: "Rp 15.000",
      status: "pending",
      date: "24 Nov 2024, 09:15",
      target: "987654321",
      paymentMethod: "Dana",
      customerName: "ARIEL",
      customerPhone: "+62 838-4402-3208",
      notes: "Menunggu pembayaran",
    },
    {
      id: "#PB003",
      game: "PUBG Mobile",
      product: "60 UC",
      amount: "Rp 12.000",
      status: "success",
      date: "23 Nov 2024, 16:45",
      target: "456789123",
      paymentMethod: "OVO",
      customerName: "ARIEL",
      customerPhone: "+62 838-4402-3208",
      notes: "Berhasil diproses",
    },
    {
      id: "#GI004",
      game: "Genshin Impact",
      product: "60 Genesis Crystal",
      amount: "Rp 16.000",
      status: "failed",
      date: "22 Nov 2024, 11:20",
      target: "600123456",
      paymentMethod: "GoPay",
      customerName: "ARIEL",
      customerPhone: "+62 838-4402-3208",
      notes: "Pembayaran gagal",
    },
    {
      id: "#VL005",
      game: "Valorant",
      product: "475 VP",
      amount: "Rp 45.000",
      status: "success",
      date: "21 Nov 2024, 20:10",
      target: "Player#1234",
      paymentMethod: "Bank Transfer",
      customerName: "ARIEL",
      customerPhone: "+62 838-4402-3208",
      notes: "Transaksi berhasil",
    },
  ]

  const allOrders = [
    ...recentOrders,
    {
      id: "#ML006",
      game: "Mobile Legends",
      product: "85 Diamond",
      amount: "Rp 22.000",
      status: "success",
      date: "20 Nov 2024, 13:25",
      target: "111222333 (5678)",
      paymentMethod: "QRIS",
      customerName: "ARIEL",
      customerPhone: "+62 838-4402-3208",
      notes: "Proses otomatis",
    },
    {
      id: "#FF007",
      game: "Free Fire",
      product: "210 Diamond",
      amount: "Rp 30.000",
      status: "success",
      date: "19 Nov 2024, 08:40",
      target: "444555666",
      paymentMethod: "Dana",
      customerName: "ARIEL",
      customerPhone: "+62 838-4402-3208",
      notes: "Berhasil diproses",
    },
  ]

  const transactionHistory = [
    { id: "TRX001", type: "Top Up Saldo", amount: "+Rp 100.000", date: "2024-11-25 10:00", status: "success" },
    { id: "TRX002", type: "Pembelian Diamond ML", amount: "-Rp 7.500", date: "2024-11-25 14:30", status: "success" },
    { id: "TRX003", type: "Top Up Saldo", amount: "+Rp 50.000", date: "2024-11-24 15:20", status: "success" },
    { id: "TRX004", type: "Pembelian UC PUBG", amount: "-Rp 12.000", date: "2024-11-23 16:45", status: "success" },
    { id: "TRX005", type: "Refund", amount: "+Rp 16.000", date: "2024-11-22 12:00", status: "success" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-600" />
      case "failed":
        return <XCircle className="w-4 h-4 text-red-600" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Berhasil</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Gagal</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "success":
        return "Berhasil"
      case "pending":
        return "Pending"
      case "failed":
        return "Gagal"
      default:
        return "Unknown"
    }
  }

  // Mobile Navigation Component
  const MobileNavigation = () => (
    <div className="grid grid-cols-5 gap-1 p-2">
      <Button
        variant={activeTab === "dashboard" ? "default" : "ghost"}
        className="flex-col h-16 text-xs"
        onClick={() => {
          setActiveTab("dashboard")
          setMobileMenuOpen(false)
        }}
      >
        <User className="w-4 h-4 mb-1" />
        Dashboard
      </Button>
      <Button
        variant={activeTab === "pesanan" ? "default" : "ghost"}
        className="flex-col h-16 text-xs"
        onClick={() => {
          setActiveTab("pesanan")
          setMobileMenuOpen(false)
        }}
      >
        <ShoppingCart className="w-4 h-4 mb-1" />
        Pesanan
      </Button>
      <Button
        variant={activeTab === "saldo" ? "default" : "ghost"}
        className="flex-col h-16 text-xs"
        onClick={() => {
          setActiveTab("saldo")
          setMobileMenuOpen(false)
        }}
      >
        <Wallet className="w-4 h-4 mb-1" />
        Saldo
      </Button>
      <Button
        variant={activeTab === "riwayat" ? "default" : "ghost"}
        className="flex-col h-16 text-xs"
        onClick={() => {
          setActiveTab("riwayat")
          setMobileMenuOpen(false)
        }}
      >
        <History className="w-4 h-4 mb-1" />
        Riwayat
      </Button>
      <Button
        variant={activeTab === "pengaturan" ? "default" : "ghost"}
        className="flex-col h-16 text-xs"
        onClick={() => {
          setActiveTab("pengaturan")
          setMobileMenuOpen(false)
        }}
      >
        <Settings className="w-4 h-4 mb-1" />
        Pengaturan
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Konterkuy
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/cari-pesanan" className="text-gray-600 hover:text-gray-900">
                Cari Pesanan
              </Link>
              <Link href="/daftar-harga" className="text-gray-600 hover:text-gray-900">
                Daftar Harga
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>

              {/* Mobile Profile Button */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="sm:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    {/* Mobile Profile */}
                    <div className="text-center pb-4 border-b">
                      <Avatar className="w-16 h-16 mx-auto mb-3">
                        <AvatarImage src="/placeholder.svg?height=64&width=64" />
                        <AvatarFallback className="text-lg font-semibold bg-blue-100 text-blue-600">AR</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-gray-900">ARIEL</h3>
                      <p className="text-sm text-gray-500">Member H2H</p>
                      <Badge className="mt-2 bg-green-100 text-green-800">Verified</Badge>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="space-y-2">
                      <Link href="/" className="flex items-center p-3 rounded-lg hover:bg-gray-100">
                        <span>Home</span>
                      </Link>
                      <Link href="/cari-pesanan" className="flex items-center p-3 rounded-lg hover:bg-gray-100">
                        <span>Cari Pesanan</span>
                      </Link>
                      <Link href="/daftar-harga" className="flex items-center p-3 rounded-lg hover:bg-gray-100">
                        <span>Daftar Harga</span>
                      </Link>
                    </div>

                    <div className="pt-4 border-t">
                      <Button variant="outline" className="w-full">
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-30 sm:hidden">
        <MobileNavigation />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8 pb-20 sm:pb-8">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Desktop Sidebar */}
          <div className="lg:col-span-1 hidden lg:block">
            <Card>
              <CardContent className="p-6">
                {/* Profile Section */}
                <div className="text-center mb-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback className="text-lg font-semibold bg-blue-100 text-blue-600">AR</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold text-gray-900">ARIEL</h2>
                  <p className="text-sm text-gray-500">Member H2H</p>
                  <Badge className="mt-2 bg-green-100 text-green-800">Verified</Badge>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "dashboard" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("dashboard")}
                  >
                    <User className="w-4 h-4 mr-3" />
                    Dashboard
                  </Button>
                  <Button
                    variant={activeTab === "pesanan" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("pesanan")}
                  >
                    <ShoppingCart className="w-4 h-4 mr-3" />
                    Pesanan
                  </Button>
                  <Button
                    variant={activeTab === "saldo" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("saldo")}
                  >
                    <Wallet className="w-4 h-4 mr-3" />
                    Saldo
                  </Button>
                  <Button
                    variant={activeTab === "riwayat" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("riwayat")}
                  >
                    <History className="w-4 h-4 mr-3" />
                    Riwayat
                  </Button>
                  <Button
                    variant={activeTab === "pengaturan" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("pengaturan")}
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    Pengaturan
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Dashboard Tab */}
            {activeTab === "dashboard" && (
              <div className="space-y-4 lg:space-y-6">
                {/* Welcome Message */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-white">
                  <h1 className="text-xl lg:text-2xl font-bold mb-2">Selamat datang kembali, ARIEL! 👋</h1>
                  <p className="text-blue-100 text-sm lg:text-base">
                    Anda memiliki 19 pesanan aktif dan saldo Rp 917.225
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                  <Card>
                    <CardContent className="p-4 lg:p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs lg:text-sm text-gray-600 mb-1">Total Pesanan</p>
                          <p className="text-xl lg:text-2xl font-bold text-gray-900">19</p>
                        </div>
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex items-center mt-3 lg:mt-4 text-xs lg:text-sm">
                        <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-1" />
                        <span className="text-green-500">+12%</span>
                        <span className="text-gray-500 ml-1">dari bulan lalu</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 lg:p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs lg:text-sm text-gray-600 mb-1">Saldo</p>
                          <p className="text-lg lg:text-2xl font-bold text-gray-900">Rp 917.225</p>
                        </div>
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <Wallet className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                        </div>
                      </div>
                      <Button size="sm" className="mt-3 lg:mt-4 text-xs">
                        Top Up Saldo
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 lg:p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs lg:text-sm text-gray-600 mb-1">Deposit</p>
                          <p className="text-xl lg:text-2xl font-bold text-gray-900">0</p>
                        </div>
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
                        </div>
                      </div>
                      <p className="text-xs lg:text-sm text-gray-500 mt-3 lg:mt-4">Tidak ada deposit pending</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Orders - Mobile Optimized */}
                <Card>
                  <CardHeader className="pb-3 lg:pb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-lg lg:text-xl">Pesanan Terbaru</CardTitle>
                        <CardDescription className="text-sm">5 transaksi terakhir Anda</CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveTab("pesanan")}
                        className="text-xs lg:text-sm"
                      >
                        Lihat Semua
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentOrders.slice(0, 3).map((order, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex items-center space-x-3 flex-1 min-w-0">
                            <div className="flex items-center justify-center w-8 h-8 flex-shrink-0">
                              {getStatusIcon(order.status)}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center space-x-2">
                                <p className="font-medium text-gray-900 text-sm lg:text-base truncate">{order.game}</p>
                                <span className="text-gray-400 hidden sm:inline">•</span>
                                <p className="text-xs lg:text-sm text-gray-600 hidden sm:block">{order.product}</p>
                              </div>
                              <p className="text-xs text-gray-500 sm:hidden">{order.product}</p>
                              <p className="text-xs text-gray-500 truncate">
                                {order.id} • {order.date.split(",")[0]}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0">
                            <div className="text-right">
                              <p className="font-semibold text-gray-900 text-sm lg:text-base">{order.amount}</p>
                              <p className="text-xs text-gray-500">{getStatusText(order.status)}</p>
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" size="sm" onClick={() => setSelectedOrder(order)}>
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-sm sm:max-w-md mx-4">
                                <DialogHeader>
                                  <DialogTitle>Detail Transaksi</DialogTitle>
                                  <DialogDescription>Informasi lengkap pesanan Anda</DialogDescription>
                                </DialogHeader>
                                {selectedOrder && (
                                  <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm text-gray-600">Invoice</span>
                                      <div className="flex items-center space-x-2">
                                        <span className="font-mono text-sm">{selectedOrder.id}</span>
                                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                          <Copy className="w-3 h-3" />
                                        </Button>
                                      </div>
                                    </div>
                                    <Separator />
                                    <div className="space-y-3">
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Game</span>
                                        <span className="text-sm font-medium">{selectedOrder.game}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Produk</span>
                                        <span className="text-sm font-medium">{selectedOrder.product}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Target</span>
                                        <span className="text-sm font-medium font-mono">{selectedOrder.target}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Jumlah</span>
                                        <span className="text-sm font-medium">{selectedOrder.amount}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Status</span>
                                        {getStatusBadge(selectedOrder.status)}
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Pembayaran</span>
                                        <span className="text-sm font-medium">{selectedOrder.paymentMethod}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Tanggal</span>
                                        <span className="text-sm font-medium">{selectedOrder.date}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Catatan</span>
                                        <span className="text-sm font-medium">{selectedOrder.notes}</span>
                                      </div>
                                    </div>
                                    <Separator />
                                    <div className="flex space-x-2">
                                      <Button variant="outline" size="sm" className="flex-1">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                      </Button>
                                      <Button variant="outline" size="sm" className="flex-1">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Detail
                                      </Button>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions - Mobile Optimized */}
                <Card>
                  <CardHeader className="pb-3 lg:pb-6">
                    <CardTitle className="text-lg lg:text-xl">Aksi Cepat</CardTitle>
                    <CardDescription className="text-sm">Akses fitur yang sering digunakan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                      <Button variant="outline" className="h-16 lg:h-20 flex-col">
                        <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 mb-2" />
                        <span className="text-xs lg:text-sm">Pesan Lagi</span>
                      </Button>
                      <Button variant="outline" className="h-16 lg:h-20 flex-col">
                        <Wallet className="w-5 h-5 lg:w-6 lg:h-6 mb-2" />
                        <span className="text-xs lg:text-sm">Top Up Saldo</span>
                      </Button>
                      <Button variant="outline" className="h-16 lg:h-20 flex-col">
                        <History className="w-5 h-5 lg:w-6 lg:h-6 mb-2" />
                        <span className="text-xs lg:text-sm">Riwayat</span>
                      </Button>
                      <Button variant="outline" className="h-16 lg:h-20 flex-col">
                        <Download className="w-5 h-5 lg:w-6 lg:h-6 mb-2" />
                        <span className="text-xs lg:text-sm">Download</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Pesanan Tab */}
            {activeTab === "pesanan" && (
              <div className="space-y-4 lg:space-y-6">
                <Card>
                  <CardHeader className="pb-3 lg:pb-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
                      <div>
                        <CardTitle className="text-lg lg:text-xl">Semua Pesanan</CardTitle>
                        <CardDescription className="text-sm">Riwayat lengkap transaksi Anda</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="text-xs lg:text-sm">
                          <Filter className="w-4 h-4 mr-2" />
                          Filter
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs lg:text-sm">
                          <Search className="w-4 h-4 mr-2" />
                          Cari
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {allOrders.map((order, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 lg:p-4 border rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex items-center space-x-3 lg:space-x-4 flex-1 min-w-0">
                            <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0">
                              {getStatusIcon(order.status)}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center space-x-2">
                                <p className="font-semibold text-gray-900 text-sm lg:text-base truncate">
                                  {order.game}
                                </p>
                                <span className="text-gray-400 hidden sm:inline">•</span>
                                <p className="text-xs lg:text-sm text-gray-600 hidden sm:block">{order.product}</p>
                              </div>
                              <p className="text-xs text-gray-600 sm:hidden">{order.product}</p>
                              <p className="text-xs lg:text-sm text-gray-500 font-mono truncate">{order.target}</p>
                              <p className="text-xs text-gray-500 truncate">
                                {order.id} • {order.date.split(",")[0]}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
                            <div className="text-right">
                              <p className="font-semibold text-gray-900 text-sm lg:text-base">{order.amount}</p>
                              {getStatusBadge(order.status)}
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" size="sm" onClick={() => setSelectedOrder(order)}>
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-sm sm:max-w-md mx-4">
                                <DialogHeader>
                                  <DialogTitle>Detail Transaksi</DialogTitle>
                                  <DialogDescription>Informasi lengkap pesanan Anda</DialogDescription>
                                </DialogHeader>
                                {selectedOrder && (
                                  <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm text-gray-600">Invoice</span>
                                      <div className="flex items-center space-x-2">
                                        <span className="font-mono text-sm">{selectedOrder.id}</span>
                                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                          <Copy className="w-3 h-3" />
                                        </Button>
                                      </div>
                                    </div>
                                    <Separator />
                                    <div className="space-y-3">
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Game</span>
                                        <span className="text-sm font-medium">{selectedOrder.game}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Produk</span>
                                        <span className="text-sm font-medium">{selectedOrder.product}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Target</span>
                                        <span className="text-sm font-medium font-mono">{selectedOrder.target}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Jumlah</span>
                                        <span className="text-sm font-medium">{selectedOrder.amount}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Status</span>
                                        {getStatusBadge(selectedOrder.status)}
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Pembayaran</span>
                                        <span className="text-sm font-medium">{selectedOrder.paymentMethod}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Tanggal</span>
                                        <span className="text-sm font-medium">{selectedOrder.date}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Catatan</span>
                                        <span className="text-sm font-medium">{selectedOrder.notes}</span>
                                      </div>
                                    </div>
                                    <Separator />
                                    <div className="flex space-x-2">
                                      <Button variant="outline" size="sm" className="flex-1">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                      </Button>
                                      <Button variant="outline" size="sm" className="flex-1">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Detail
                                      </Button>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Saldo Tab */}
            {activeTab === "saldo" && (
              <div className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg lg:text-xl">Saldo Saat Ini</CardTitle>
                      <CardDescription className="text-sm">Total saldo yang tersedia</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <p className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">Rp 917.225</p>
                        <Button className="w-full">
                          <Plus className="w-4 h-4 mr-2" />
                          Top Up Saldo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg lg:text-xl">Metode Top Up</CardTitle>
                      <CardDescription className="text-sm">Pilih metode pembayaran</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="w-5 h-5 text-blue-600" />
                          <span className="text-sm lg:text-base">Bank Transfer</span>
                        </div>
                        <span className="text-xs lg:text-sm text-gray-500">Gratis</span>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center space-x-3">
                          <Smartphone className="w-5 h-5 text-green-600" />
                          <span className="text-sm lg:text-base">E-Wallet</span>
                        </div>
                        <span className="text-xs lg:text-sm text-gray-500">Gratis</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg lg:text-xl">Riwayat Top Up</CardTitle>
                    <CardDescription className="text-sm">10 transaksi top up terakhir</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {transactionHistory
                        .filter((t) => t.type.includes("Top Up"))
                        .map((transaction, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium text-sm lg:text-base">{transaction.type}</p>
                              <p className="text-xs lg:text-sm text-gray-500">{transaction.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-green-600 text-sm lg:text-base">{transaction.amount}</p>
                              <Badge className="bg-green-100 text-green-800 text-xs">Berhasil</Badge>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Riwayat Tab */}
            {activeTab === "riwayat" && (
              <div className="space-y-4 lg:space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg lg:text-xl">Riwayat Transaksi</CardTitle>
                    <CardDescription className="text-sm">Semua aktivitas keuangan Anda</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transactionHistory.map((transaction, index) => (
                        <div key={index} className="flex items-center justify-between p-3 lg:p-4 border rounded-lg">
                          <div className="flex items-center space-x-3 lg:space-x-4 flex-1 min-w-0">
                            <div
                              className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                transaction.amount.startsWith("+") ? "bg-green-100" : "bg-red-100"
                              }`}
                            >
                              {transaction.amount.startsWith("+") ? (
                                <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" />
                              ) : (
                                <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5 text-red-600" />
                              )}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-sm lg:text-base truncate">{transaction.type}</p>
                              <p className="text-xs lg:text-sm text-gray-500 truncate">
                                {transaction.id} • {transaction.date}
                              </p>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p
                              className={`font-semibold text-sm lg:text-base ${
                                transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {transaction.amount}
                            </p>
                            <Badge className="bg-green-100 text-green-800 text-xs">Berhasil</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Pengaturan Tab */}
            {activeTab === "pengaturan" && (
              <div className="space-y-4 lg:space-y-6">
                <Tabs defaultValue="profile" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 text-xs lg:text-sm">
                    <TabsTrigger value="profile">Profil</TabsTrigger>
                    <TabsTrigger value="security">Keamanan</TabsTrigger>
                    <TabsTrigger value="notifications">Notifikasi</TabsTrigger>
                  </TabsList>

                  <TabsContent value="profile" className="space-y-4 lg:space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg lg:text-xl">Informasi Profil</CardTitle>
                        <CardDescription className="text-sm">Kelola informasi akun Anda</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="fullname" className="text-sm">
                              Nama Lengkap
                            </Label>
                            <Input id="fullname" defaultValue="ARIEL" className="text-sm" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="username" className="text-sm">
                              Username
                            </Label>
                            <Input id="username" defaultValue="ariel123" className="text-sm" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm">
                            Email
                          </Label>
                          <Input id="email" type="email" defaultValue="ariel@example.com" className="text-sm" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm">
                            Nomor WhatsApp
                          </Label>
                          <Input id="phone" defaultValue="+62 838-4402-3208" className="text-sm" />
                        </div>
                        <Button className="w-full lg:w-auto">Simpan Perubahan</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-4 lg:space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg lg:text-xl">Keamanan Akun</CardTitle>
                        <CardDescription className="text-sm">Kelola keamanan dan privasi akun</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 lg:space-y-6">
                        <div className="flex items-center justify-between p-3 lg:p-4 border rounded-lg">
                          <div className="flex items-center space-x-3 flex-1 min-w-0">
                            <Key className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-sm lg:text-base">Ubah Password</p>
                              <p className="text-xs lg:text-sm text-gray-500">Terakhir diubah 3 bulan lalu</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="text-xs lg:text-sm">
                            Ubah
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 lg:p-4 border rounded-lg">
                          <div className="flex items-center space-x-3 flex-1 min-w-0">
                            <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-sm lg:text-base">Verifikasi Email</p>
                              <p className="text-xs lg:text-sm text-gray-500">Email sudah terverifikasi</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 text-xs">Verified</Badge>
                        </div>

                        <div className="flex items-center justify-between p-3 lg:p-4 border rounded-lg">
                          <div className="flex items-center space-x-3 flex-1 min-w-0">
                            <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-sm lg:text-base">Verifikasi WhatsApp</p>
                              <p className="text-xs lg:text-sm text-gray-500">WhatsApp sudah terverifikasi</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 text-xs">Verified</Badge>
                        </div>

                        <div className="flex items-center justify-between p-3 lg:p-4 border rounded-lg">
                          <div className="flex items-center space-x-3 flex-1 min-w-0">
                            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-sm lg:text-base">Two-Factor Authentication</p>
                              <p className="text-xs lg:text-sm text-gray-500">Tambahan keamanan untuk akun</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="text-xs lg:text-sm">
                            Aktifkan
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="notifications" className="space-y-4 lg:space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg lg:text-xl">Pengaturan Notifikasi</CardTitle>
                        <CardDescription className="text-sm">Kelola preferensi notifikasi Anda</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm lg:text-base">Email Notifications</p>
                            <p className="text-xs lg:text-sm text-gray-500">Terima notifikasi via email</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-xs lg:text-sm">
                            Aktif
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm lg:text-base">WhatsApp Notifications</p>
                            <p className="text-xs lg:text-sm text-gray-500">Terima notifikasi via WhatsApp</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-xs lg:text-sm">
                            Aktif
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm lg:text-base">Promo & Penawaran</p>
                            <p className="text-xs lg:text-sm text-gray-500">Terima info promo terbaru</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-xs lg:text-sm">
                            Aktif
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
