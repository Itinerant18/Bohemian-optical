"use client"

import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { CheckoutForm } from "@/components/checkout-form"
import { PaymentModal } from "@/components/payment-modal"

export default function CartPage() {
  const { cart, removeFromCart, getCartTotal } = useCart()
  const [showCheckoutForm, setShowCheckoutForm] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [userDetails, setUserDetails] = useState<any>(null)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleCheckout = (details: any) => {
    setUserDetails(details)
    setShowCheckoutForm(false)
    setShowPaymentModal(true)
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link href="/">
          <Button className="mt-4">Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
          </div>
          <div className="flex items-center">
            <p className="font-semibold mr-4">{formatPrice(item.price * item.quantity)}</p>
            <Button variant="ghost" onClick={() => removeFromCart(item.id)}>
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      ))}
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl font-bold">Total: {formatPrice(getCartTotal())}</p>
        <Button onClick={() => setShowCheckoutForm(true)}>Proceed to Checkout</Button>
      </div>
      {showCheckoutForm && <CheckoutForm onSubmit={handleCheckout} />}
      {showPaymentModal && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          total={getCartTotal()}
          userDetails={userDetails}
        />
      )}
    </div>
  )
}

