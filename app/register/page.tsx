"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header dengan Back dan Login */}
        <Button variant="ghost" className="mb-4 sm:mb-6 p-2" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="text-sm sm:text-base">Kembali ke Home</span>
          </Link>
        </Button>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-4 sm:pb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-white font-bold text-lg sm:text-xl">K</span>
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold">Buat Akun Baru</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Daftar untuk mendapatkan harga khusus dan akses ke dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullname" className="text-sm sm:text-base">
                  Nama Lengkap
                </Label>
                <Input
                  id="fullname"
                  placeholder="Masukkan nama lengkap"
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Masukkan email aktif"
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm sm:text-base">
                  Username
                </Label>
                <Input id="username" placeholder="Pilih username unik" className="h-10 sm:h-11 text-sm sm:text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-sm sm:text-base">
                  Nomor WhatsApp
                </Label>
                <Input id="whatsapp" placeholder="Contoh: 08123456789" className="h-10 sm:h-11 text-sm sm:text-base" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm sm:text-base">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Min. 6 karakter"
                      className="h-10 sm:h-11 pr-10 text-sm sm:text-base"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-sm sm:text-base">
                    Konfirmasi
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Ulangi password"
                      className="h-10 sm:h-11 pr-10 text-sm sm:text-base"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full h-10 sm:h-11 text-sm sm:text-base font-medium">Daftar Sekarang</Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Sudah punya akun?{" "}
                <Link href="/login" className="text-blue-600 hover:underline font-medium">
                  Masuk di sini
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mt-4 sm:mt-6 bg-green-50 border-green-200">
          <CardContent className="p-3 sm:p-4">
            <h3 className="font-semibold text-green-800 mb-2 sm:mb-3 text-sm sm:text-base">Keuntungan Member:</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-green-700">
              <li className="flex items-center">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-600 flex-shrink-0" />
                Harga khusus lebih murah
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-600 flex-shrink-0" />
                Riwayat transaksi tersimpan
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-600 flex-shrink-0" />
                Notifikasi status pesanan
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
