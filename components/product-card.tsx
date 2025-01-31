"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Modal } from "./modal"
import { Camera } from "lucide-react"

interface ProductCardProps {
  name: string
  imageUrl: string
  tryOnLink?: string
}

export function ProductCard({
  name,
  imageUrl,
  tryOnLink = "https://ar.vervear.com/glasses/675f91cf6a00d6990d91f08e",
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="aspect-square relative mb-4 bg-[#F8F8F6]">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-contain" />
      </div>
      <h3 className="font-montserrat text-[14px] font-medium text-center mb-3 min-h-[48px] line-clamp-2 text-[#515151]">
        {name}
      </h3>
      <Button
        className="w-full bg-[#aa70a7] hover:bg-[#aa70a7]/90 text-white text-sm h-auto md:h-10 py-3 md:py-2 flex items-center justify-center gap-2"
        onClick={() => setIsModalOpen(true)}
      >
        <Camera className="w-4 h-4" />
        TRY-ON
      </Button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {tryOnLink ? (
            <iframe src={tryOnLink} className="w-full h-full border-0" allow="camera" title="Virtual Try-On" />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-semibold">Virtual Try-On coming soon</p>
            </div>
          )}
        </Modal>
      )}
    </div>
  )
}

