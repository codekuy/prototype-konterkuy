import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DaftarHargaPage() {
  const priceData = [
    {
      service: "Axis - Axis Pulsa Transfer 5.000",
      public: "Rp 5.955",
      reseller: "Rp 5.905",
      h2h: "Rp 5.805",
      status: "aktif",
    },
    {
      service: "Axis - Axis Pulsa Transfer 10.000",
      public: "Rp 10.722",
      reseller: "Rp 10.672",
      h2h: "Rp 10.572",
      status: "aktif",
    },
    {
      service: "Axis - Axis Pulsa Transfer 15.000",
      public: "Rp 15.260",
      reseller: "Rp 15.210",
      h2h: "Rp 15.110",
      status: "gangguan",
    },
    {
      service: "Axis - Axis Pulsa Transfer 20.000",
      public: "Rp 20.470",
      reseller: "Rp 20.420",
      h2h: "Rp 20.320",
      status: "aktif",
    },
    {
      service: "Axis - Axis Pulsa Transfer 25.000",
      public: "Rp 25.585",
      reseller: "Rp 25.535",
      h2h: "Rp 25.435",
      status: "aktif",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center">
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
            <Button variant="outline" size="sm" className="hidden sm:flex text-xs sm:text-sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Daftar Harga Layanan</h1>
          <p className="text-sm sm:text-base text-gray-600">
            Lihat harga terbaru untuk semua layanan top up dan pembayaran
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-4 sm:mb-6">
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Cari layanan..." className="pl-10 h-9 sm:h-10 text-sm" />
              </div>
              <Select defaultValue="all-category">
                <SelectTrigger className="h-9 sm:h-10 text-sm">
                  <SelectValue placeholder="Pilih Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-category">Semua Kategori</SelectItem>
                  <SelectItem value="pulsa">Pulsa Transfer</SelectItem>
                  <SelectItem value="game">Top Up Game</SelectItem>
                  <SelectItem value="ewallet">E-Wallet</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-status">
                <SelectTrigger className="h-9 sm:h-10 text-sm">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-status">Semua Status</SelectItem>
                  <SelectItem value="aktif">Aktif</SelectItem>
                  <SelectItem value="gangguan">Gangguan</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex space-x-2">
                <Button className="flex-1 h-9 sm:h-10 text-xs sm:text-sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="sm:hidden">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price Table */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">AXIS - PULSA TRANSFER</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[250px] text-xs sm:text-sm">Layanan</TableHead>
                    <TableHead className="text-center text-xs sm:text-sm">Harga Publik</TableHead>
                    <TableHead className="text-center text-xs sm:text-sm">Harga Reseller</TableHead>
                    <TableHead className="text-center text-xs sm:text-sm">Harga H2H</TableHead>
                    <TableHead className="text-center text-xs sm:text-sm">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {priceData.map((item, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="font-medium text-xs sm:text-sm">{item.service}</TableCell>
                      <TableCell className="text-center font-semibold text-gray-900 text-xs sm:text-sm">
                        {item.public}
                      </TableCell>
                      <TableCell className="text-center font-semibold text-blue-600 text-xs sm:text-sm">
                        {item.reseller}
                      </TableCell>
                      <TableCell className="text-center font-semibold text-purple-600 text-xs sm:text-sm">
                        {item.h2h}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant={item.status === "aktif" ? "default" : "destructive"}
                          className={`text-xs ${item.status === "aktif" ? "bg-green-100 text-green-800" : ""}`}
                        >
                          {item.status === "aktif" ? "Aktif" : "Gangguan"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">Harga Publik</h3>
              <p className="text-xs sm:text-sm text-blue-700">Harga untuk customer umum tanpa registrasi member</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold text-green-800 mb-2 text-sm sm:text-base">Harga Reseller</h3>
              <p className="text-xs sm:text-sm text-green-700">
                Harga khusus untuk member reseller dengan minimal transaksi
              </p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold text-purple-800 mb-2 text-sm sm:text-base">Harga H2H</h3>
              <p className="text-xs sm:text-sm text-purple-700">Harga terbaik untuk member H2H dengan volume tinggi</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
