import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Artur Cardoso",
    role: "Eize.pt",
    content: "I was very pleased with the work and with Jaime's follow-up. It was a project carried out outside of working hours, and Jaime was always available on the days when I had extra time after hours, which made things much easier for me. He had a lot of patience in explaining the various nuances of the different options we had available, making me feel comfortable to make the right decision.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Tamila Kharambura & Paul Tulloch",
    role: "Directors, Hortênsia Music Festival",
    content: "Jaime has been an invaluable asset to our music festival, contributing his expertise and artistic vision across various platforms. His designs enhance all aspects of our presentation, from our website to promotional materials like banners, posters, and booklets. He even creates captivating title pages for our key documents, always understanding and executing our vision perfectly. Jaime’s ability to refine details quickly and efficiently, combined with his positive, can-do attitude, makes him an essential part of our team. His talent and enthusiasm consistently leave us impressed and grateful for his work.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  
]

export default function TestimonialsCarousel() {
  return (
    <div className="w-full px-5">
      <Carousel>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="grid items-center justify-center align-middle p-6">
                <div className="grid gap-2 lg:gap-50">
                  <p className="text-xl lg:text-xl p-6">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center space-x-3 p-6">
                    
                    <div className="text-sm font-semibold mt-4">
                      <div className="pt-5">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
