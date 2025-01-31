import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AppointmentForm } from "./appointment-form"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#FEFAE0] max-w-[600px] w-[95vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#D4A373]">Book an Appointment</DialogTitle>
        </DialogHeader>
        <AppointmentForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  )
}

