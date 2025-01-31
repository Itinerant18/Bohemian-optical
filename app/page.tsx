"use client"

import { useState, useMemo } from "react"
import { Banner } from "../components/banner"
import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { ProductGrid } from "../components/product-grid"
import { Pagination } from "../components/pagination"
import { BrandFilter } from "../components/brand-filter"
import { products } from "../data/products"
import { ContactInfo } from "../components/contact-info"

export default function VirtualTryOn() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.some((brand) => product.name.includes(brand))
      return matchesSearch && matchesBrand
    })
  }, [searchQuery, selectedBrands])

  const totalPages = Math.ceil(filteredProducts.length / 15)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleBrandChange = (brands: string[]) => {
    setSelectedBrands(brands)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-[#f8f8f6]">
      <Banner />
      <Header
        selectedBrand={selectedBrands[0] || ""}
        onBrandChange={(brand) => handleBrandChange(brand ? [brand] : [])}
        isOpen={isSideMenuOpen}
        setIsOpen={setIsSideMenuOpen}
      />
      <Hero />
      <main className="container mx-auto px-4 lg:px-[90px] py-8 md:py-12" id="products">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
            <span className="text-[#aa70a7]">Virtual Try-On</span> <span className="text-black">Products</span>
          </h1>
          <div className="flex flex-col gap-4 sticky top-0 z-10 bg-[#f8f8f6] py-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <BrandFilter
                selectedBrands={selectedBrands}
                onBrandChange={handleBrandChange}
                onMobileFilterClick={() => setIsSideMenuOpen(true)}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                onSearch={handleSearch}
              />
            </div>
          </div>
          <ProductGrid currentPage={currentPage} products={filteredProducts} />
          <ContactInfo />
        </div>
      </main>
    </div>
  )
}

