"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CheckoutFormProps {
  onSubmit: (details: any) => void
}

export function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(details)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-8">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" required value={details.name} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required value={details.email} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" required value={details.phone} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="address">Delivery Address</Label>
        <Input id="address" name="address" required value={details.address} onChange={handleChange} />
      </div>
      <Button type="submit">Continue to Payment</Button>
    </form>
  )
}

