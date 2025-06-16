import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Shield, Zap, Star, Info } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProdukPage() {
  const topUpOptions = [
    { diamonds: "5 Diamond", price: "Rp 1.500", originalPrice: "Rp 2.000", popular: false },
    { diamonds: "12 Diamond", price: "Rp 3.500", originalPrice: "Rp 4.000", popular: false },
    { diamonds: "28 Diamond", price: "Rp 7.500", originalPrice: "Rp 8.500", popular: true },
    { diamonds: "85 Diamond", price: "Rp 22.000", originalPrice: "Rp 25.000", popular: false },
    { diamonds: "170 Diamond", price: "Rp 44.000", originalPrice: "Rp 48.000", popular: false },
    { diamonds: "355 Diamond", price: "Rp 88.000", originalPrice: "Rp 95.000", popular: false },
  ]

  const paymentMethods = [
    { name: "QRIS", fee: "Gratis", icon: "/placeholder.svg?height=40&width=40" },
    { name: "OVO", fee: "Gratis", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Dana", fee: "Gratis", icon: "/placeholder.svg?height=40&width=40" },
    { name: "GoPay", fee: "Gratis", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Bank Transfer", fee: "Rp 2.500", icon: "/placeholder.svg?height=40&width=40" },
  ]

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Game Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 text-white">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Mobile Legends"
              width={60}
              height={60}
              className="rounded-lg sm:rounded-xl w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Mobile Legends: Bang Bang</h1>
              <p className="text-purple-100 mb-2 sm:mb-3 text-sm sm:text-base">
                Top up diamond dengan harga terjangkau dan proses instan
              </p>
              <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
                <div className="flex items-center">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Legal & Aman
                </div>
                <div className="flex items-center">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Proses Instan
                </div>
                <div className="flex items-center">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Rating 4.9/5
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Game Data Form */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3">
                    1
                  </span>
                  Masukkan Data Game
                </CardTitle>
                <CardDescription className="text-sm">
                  Pastikan User ID dan Zone ID sudah benar untuk menghindari kesalahan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="user-id" className="text-sm sm:text-base">
                      User ID
                    </Label>
                    <Input id="user-id" placeholder="Contoh: 123456789" className="h-10 sm:h-11 text-sm sm:text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zone-id" className="text-sm sm:text-base">
                      Zone ID
                    </Label>
                    <Input id="zone-id" placeholder="Contoh: 1234" className="h-10 sm:h-11 text-sm sm:text-base" />
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-start">
                    <Info className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">Cara menemukan User ID & Zone ID:</p>
                      <p>Buka game → Profile → Account → User ID (Zone ID)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Diamond Selection */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3">
                    2
                  </span>
                  Pilih Jumlah Diamond
                </CardTitle>
                <CardDescription className="text-sm">Pilih paket diamond sesuai kebutuhan Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {topUpOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`relative p-3 sm:p-4 border-2 rounded-lg sm:rounded-xl cursor-pointer transition-all hover:border-blue-300 hover:shadow-md ${
                        option.popular ? "border-blue-500 bg-blue-50" : "border-gray-200"
                      }`}
                    >
                      {option.popular && (
                        <Badge className="absolute -top-2 left-3 sm:left-4 bg-blue-600 text-xs">Populer</Badge>
                      )}
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{option.diamonds}</h3>
                          <p className="text-xs sm:text-sm text-gray-500 line-through">{option.originalPrice}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-base sm:text-lg font-bold text-blue-600">{option.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3">
                    3
                  </span>
                  Pilih Metode Pembayaran
                </CardTitle>
                <CardDescription className="text-sm">
                  Pilih metode pembayaran yang paling nyaman untuk Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 sm:space-y-3">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <Image
                          src={method.icon || "/placeholder.svg"}
                          alt={method.name}
                          width={32}
                          height={32}
                          className="sm:w-10 sm:h-10 rounded flex-shrink-0"
                        />
                        <span className="font-medium text-sm sm:text-base">{method.name}</span>
                      </div>
                      <Badge variant={method.fee === "Gratis" ? "default" : "secondary"} className="text-xs">
                        {method.fee}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-base sm:text-lg">Ringkasan Pesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Produk</span>
                    <span>28 Diamond ML</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Harga</span>
                    <span>Rp 7.500</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Biaya Admin</span>
                    <span className="text-green-600">Gratis</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-blue-600">Rp 7.500</span>
                  </div>
                </div>

                <Button className="w-full h-10 sm:h-12 text-sm sm:text-base font-medium">Beli Sekarang</Button>

                <div className="text-xs text-gray-500 text-center">
                  Dengan melanjutkan, Anda menyetujui syarat dan ketentuan kami
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
