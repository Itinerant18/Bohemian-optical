"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { BookingModal } from "./booking-modal"

interface HeaderProps {
  selectedBrand: string
  onBrandChange: (brand: string) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function Header({ selectedBrand, onBrandChange, isOpen, setIsOpen }: HeaderProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const brands = ["All", "Gucci", "Saint Laurent", "Fendi", "Cazal"]

  const handleBrandSelect = (brand: string) => {
    onBrandChange(brand === "All" ? "" : brand)
    setIsOpen(false)
  }

  return (
    <header className="border-b border-[#E9EDC9] bg-[#FEFAE0]">
      <div className="container mx-auto px-4 lg:px-[90px]">
        <div className="max-w-[1440px] mx-auto py-4 flex justify-between items-center">
          <div className="w-32 sm:w-48 md:w-64">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bohemian-optical-high-resolution-logo-eYbJPkb5XqZlp4wToUFJfYLrqO8OP1.png"
              alt="Bohemian Optical"
              width={240}
              height={80}
              className="w-full h-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+917602676448" className="flex items-center gap-2 text-[#D4A373] hover:text-[#D4A373]/80">
              <Phone className="h-5 w-5" />
              <span>+91 7602676448</span>
            </a>
            <Button className="bg-[#D4A373] hover:bg-[#D4A373]/90 text-white" onClick={() => setIsBookingOpen(true)}>
              Book Appointment
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="w-[38px] h-[38px]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#FEFAE0]">
              <div className="mt-8 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+917602676448"
                    className="flex items-center gap-2 text-[#D4A373] hover:text-[#D4A373]/80"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+91 7602676448</span>
                  </a>
                  <Button
                    className="w-full bg-[#D4A373] hover:bg-[#D4A373]/90 text-white"
                    onClick={() => {
                      setIsOpen(false)
                      setIsBookingOpen(true)
                    }}
                  >
                    Book Appointment
                  </Button>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-medium">Filter by Brand</h3>
                  <RadioGroup value={selectedBrand || "All"} onValueChange={handleBrandSelect}>
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <RadioGroupItem value={brand} id={brand} />
                        <Label htmlFor={brand}>{brand}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
      </div>
    </header>
  )
}

