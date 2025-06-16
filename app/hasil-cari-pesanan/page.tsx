import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CheckCircle, Clock, Copy, Download, MessageCircle, Package, CreditCard, User } from "lucide-react"
import Link from "next/link"

export default function HasilCariPesananPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14 sm:h-16">
            <Button variant="ghost" className="mr-2 sm:mr-4 p-2" asChild>
              <Link href="/cari-pesanan">
                <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">Cari Lagi</span>
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">K</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">Konterkuy</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Status Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">Pesanan Berhasil!</h1>
                <p className="text-green-100 text-sm sm:text-base">
                  Transaksi telah diproses dan diamond sudah masuk ke akun game
                </p>
              </div>
            </div>
            <Badge className="bg-white text-green-600 hover:bg-white text-xs sm:text-sm flex-shrink-0">SELESAI</Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Invoice Info */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                  Detail Pesanan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Invoice</p>
                    <div className="flex items-center space-x-2">
                      <p className="font-mono font-semibold text-sm sm:text-base">#BATL-OG749ESDED51</p>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Tanggal</p>
                    <p className="font-semibold text-sm sm:text-base">25 November 2024, 23:57:17 WIB</p>
                  </div>
                </div>
                <Separator />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Kategori</p>
                    <p className="font-semibold text-sm sm:text-base">Top Up Game</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Produk</p>
                    <p className="font-semibold text-sm sm:text-base">Mobile Legends - 28 Diamond</p>
                  </div>
                </div>
                <Separator />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Target</p>
                    <p className="font-semibold font-mono text-sm sm:text-base">123456789 (1234)</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Catatan</p>
                    <p className="font-semibold text-gray-500 text-sm sm:text-base">-</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Info */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600" />
                  Informasi Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Metode Pembayaran</p>
                    <p className="font-semibold text-sm sm:text-base">QRIS</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Status Pembayaran</p>
                    <Badge className="bg-green-100 text-green-800 text-xs">LUNAS</Badge>
                  </div>
                </div>
                <Separator />
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Harga</span>
                    <span className="font-semibold">Rp 7.500</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Biaya Admin</span>
                    <span className="font-semibold text-green-600">Gratis</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Diskon</span>
                    <span className="font-semibold text-green-600">-Rp 500</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-base sm:text-lg">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-blue-600">Rp 7.000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-600" />
                  Timeline Pesanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm sm:text-base">Pesanan Selesai</p>
                      <p className="text-xs sm:text-sm text-gray-500">25 Nov 2024, 23:58:30 WIB</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm sm:text-base">Pembayaran Dikonfirmasi</p>
                      <p className="text-xs sm:text-sm text-gray-500">25 Nov 2024, 23:57:45 WIB</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm sm:text-base">Pesanan Dibuat</p>
                      <p className="text-xs sm:text-sm text-gray-500">25 Nov 2024, 23:57:17 WIB</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {/* Customer Info */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center text-sm sm:text-base">
                  <User className="w-4 h-4 mr-2" />
                  Informasi Customer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Nama</p>
                  <p className="font-semibold text-sm sm:text-base">Guest User</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-sm sm:text-base">-</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">WhatsApp</p>
                  <p className="font-semibold text-sm sm:text-base">+62 812-3456-7890</p>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-sm sm:text-base">Aksi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full text-xs sm:text-sm h-9 sm:h-10" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Invoice
                </Button>
                <Button className="w-full text-xs sm:text-sm h-9 sm:h-10" variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Hubungi CS
                </Button>
                <Button className="w-full text-xs sm:text-sm h-9 sm:h-10">Pesan Lagi</Button>
              </CardContent>
            </Card>

            {/* Help */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-3 sm:p-4">
                <h3 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">Butuh Bantuan?</h3>
                <p className="text-xs sm:text-sm text-blue-700 mb-3">
                  Tim support kami siap membantu 24/7 melalui WhatsApp
                </p>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm h-8 sm:h-9">
                  Chat WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
