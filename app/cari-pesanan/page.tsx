import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ArrowLeft, Clock, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function CariPesananPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center h-14 sm:h-16">
              <Button variant="ghost" className="mr-2 sm:mr-4 p-2" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="text-sm sm:text-base">Kembali</span>
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
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Card */}
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-4 sm:pb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold">Cari Pesanan</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Masukkan nomor invoice untuk melihat status dan detail pesanan Anda
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="space-y-3">
              <Label htmlFor="invoice" className="text-sm sm:text-base font-medium">
                Nomor Invoice
              </Label>
              <div className="relative">
                <Input
                  id="invoice"
                  placeholder="Contoh: #BATL-OG749ESDED51"
                  className="h-11 sm:h-12 text-sm sm:text-base pl-4 pr-12"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <p className="text-xs sm:text-sm text-gray-500 flex items-center">
                <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                Invoice dikirim via WhatsApp atau email setelah pembayaran
              </p>
            </div>

            <Button className="w-full h-11 sm:h-12 text-sm sm:text-base font-medium">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Cari Pesanan
            </Button>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0" />
                <h3 className="font-semibold text-blue-800 text-sm sm:text-base">Status Real-time</h3>
              </div>
              <p className="text-xs sm:text-sm text-blue-700">
                Pantau status pesanan Anda secara real-time dari pending hingga selesai
              </p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center mb-2">
                <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0" />
                <h3 className="font-semibold text-green-800 text-sm sm:text-base">Bantuan 24/7</h3>
              </div>
              <p className="text-xs sm:text-sm text-green-700">
                Tim support siap membantu jika ada kendala dengan pesanan Anda
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <Card className="mt-4 sm:mt-6 bg-gray-50">
          <CardContent className="p-3 sm:p-4 text-center">
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Tidak menemukan invoice atau butuh bantuan?</p>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">
              Hubungi Customer Service
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
