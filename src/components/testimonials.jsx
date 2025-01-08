'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote } from 'lucide-react'

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
    content: "Jaime has been an invaluable asset to our music festival, contributing his expertise and artistic vision across various platforms. His designs enhance all aspects of our presentation, from our website to promotional materials like banners, posters, and booklets. He even creates captivating title pages for our key documents, always understanding and executing our vision perfectly. Jaime's ability to refine details quickly and efficiently, combined with his positive, can-do attitude, makes him an essential part of our team. His talent and enthusiasm consistently leave us impressed and grateful for his work. ",
    avatar: "/placeholder.svg?height=40&width=40"
  },
]

export default function TestimonialsCarousel() {
  return (
    <Carousel className="w-full px-4 sm:px-6">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="p-4 border rounded-md mb-2">
              <Quote className="w-6 h-6 text-muted-foreground mb-2" />
              <p className="text-sm sm:text-base mb-4 text-muted-foreground">
                {testimonial.content}
              </p>
              <div className="flex items-center space-x-3 gap-2">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4 gap-2 space-x-2">
        <CarouselPrevious className="relative left-0 right-auto translate-x-0 bg-background hover:bg-background/80" />
        <CarouselNext className="relative left-auto right-0 translate-x-0 bg-background hover:bg-background/80" />
      </div>
    </Carousel>
  )
}

