"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronDown, Mail, Phone } from "lucide-react"
import { BookingModal } from "./booking-modal"

export function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="bg-[#FEFAE0] container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 sm:pt-12 sm:pb-6 lg:pt-16 lg:pb-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 col-span-full lg:col-span-1 order-1 lg:order-1">
            <h1 className="font-playfair text-[30px] sm:text-[40px] leading-[1.4] lg:text-[55px] lg:leading-[1.3] font-bold tracking-tight max-w-[700px] mx-auto lg:mx-0">
              VIRTUAL <span className="text-[#D4A373]">TRY-ON</span> AT BOHEMIAN OPTICAL IN{" "}
              <span className="text-[#D4A373]">KANDI</span>
            </h1>
            <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="font-montserrat h-14 sm:h-12 bg-[#CCD5AE] hover:bg-[#CCD5AE]/90 text-[#4A4A4A] px-8 text-base sm:text-sm font-medium"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                VIEW ALL PRODUCTS
              </Button>
              <Button
                className="font-montserrat h-14 sm:h-12 bg-[#D4A373] hover:bg-[#D4A373]/90 text-white px-8 text-base sm:text-sm font-medium flex items-center gap-2"
                onClick={() => setIsBookingOpen(true)}
              >
                <Mail className="w-4 h-4" />
                BOOK APPOINTMENT
              </Button>
              <Button
                className="font-montserrat h-14 sm:h-12 bg-[#D4A373] hover:bg-[#D4A373]/90 text-white px-8 text-base sm:text-sm font-medium flex items-center gap-2"
                onClick={() => (window.location.href = "tel:+917602676448")}
              >
                <Phone className="w-4 h-4" />
                CALL US
              </Button>
            </div>
          </div>
          <div className="relative col-span-full lg:col-span-1 order-2 lg:order-2 w-full max-w-[600px] mx-auto">
            <div className="aspect-[1/1] lg:aspect-auto w-full h-full lg:h-[500px] relative">
              <Image
                src="https://res.cloudinary.com/drnavq85s/image/upload/v1737603176/Leah_s_Glasses_qqyz2h.png"
                alt="Virtual Try-On Demo"
                fill
                className="object-contain rounded-[32px] w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 sm:mt-12">
          <ChevronDown className="w-6 h-6 text-[#D4A373] animate-bounce" />
        </div>
      </div>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}

