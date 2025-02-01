import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { IndianRupee } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  price: number
}

export function PaymentModal({ isOpen, onClose, productName, price }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(price)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically integrate with a payment gateway
    alert("Payment processed successfully!")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#FEFAE0] max-w-[500px] w-[95vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#D4A373]">Complete Your Purchase</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">{productName}</h3>
            <p className="text-lg font-bold text-[#aa70a7] flex items-center">
              <IndianRupee className="w-5 h-5 mr-1" />
              {formatPrice(price)}
            </p>
          </div>
          <div className="space-y-4">
            <Label>Payment Method</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Credit/Debit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi">UPI</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="netbanking" id="netbanking" />
                <Label htmlFor="netbanking">Net Banking</Label>
              </div>
            </RadioGroup>
          </div>
          {paymentMethod === "card" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" required />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" required />
                </div>
              </div>
            </div>
          )}
          {paymentMethod === "upi" && (
            <div>
              <Label htmlFor="upiId">UPI ID</Label>
              <Input id="upiId" placeholder="yourname@upi" required />
            </div>
          )}
          {paymentMethod === "netbanking" && (
            <div>
              <Label htmlFor="bank">Select Bank</Label>
              <select id="bank" className="w-full p-2 border rounded" required>
                <option value="">Select a bank</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
              </select>
            </div>
          )}
          <Button type="submit" className="w-full bg-[#D4A373] hover:bg-[#D4A373]/90 text-white">
            Pay {formatPrice(price)}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

