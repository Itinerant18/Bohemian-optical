import { Phone, Mail, MapPin } from "lucide-react"

export function ContactInfo() {
  return (
    <div>
      <div className="bg-[#FAEDCD] py-12">
        <div className="container mx-auto px-4 lg:px-[90px]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#D4A373]">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 bg-[#FEFAE0] p-6 rounded-lg">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-[#D4A373]" />
                  <p>+91 7602676448</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-[#D4A373]" />
                  <p>userdefined2209@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-[#D4A373]" />
                  <p>Kandi, Murshidabad, WB, 742137</p>
                </div>
              </div>
              <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28958.29751537681!2d88.11918721562499!3d23.945229699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f970eba0a7e9b7%3A0xd2a0b5b0e4c7a7f0!2sKandi%2C%20West%20Bengal%20742137!5e0!3m2!1sen!2sin!4v1653992735559!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 bg-[#E9EDC9] text-[#4A4A4A]">
        <p className="text-sm">@its_bohemian_</p>
      </div>
    </div>
  )
}

