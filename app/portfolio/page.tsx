import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const portfolioItems = [
  {
    title: "Casa Bella Restaurant",
    category: "Restaurant",
    description: "Modern restaurant website with online reservations and menu showcase",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Restaurant", "Booking System", "Mobile-First"],
    results: "+40% Reservations",
  },
  {
    title: "Thompson Auto Repair",
    category: "Automotive",
    description: "Professional auto repair website with appointment booking",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Automotive", "Appointments", "SEO"],
    results: "+60% Bookings",
  },
  {
    title: "Elegant Boutique",
    category: "Retail",
    description: "E-commerce fashion boutique with inventory management",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["E-commerce", "Fashion", "Inventory"],
    results: "2x Online Sales",
  },
  {
    title: "Green Thumb Landscaping",
    category: "Services",
    description: "Landscaping company website with project gallery",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Services", "Gallery", "Local SEO"],
    results: "+50% Leads",
  },
  {
    title: "Downtown Dental",
    category: "Healthcare",
    description: "Modern dental practice website with patient portal",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Healthcare", "Patient Portal", "HIPAA"],
    results: "+35% Patients",
  },
  {
    title: "Fitness First Gym",
    category: "Fitness",
    description: "Gym website with class schedules and membership management",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Fitness", "Scheduling", "Memberships"],
    results: "+45% Members",
  },
]

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Our Work
            </Badge>
            <h1 className="text-4xl font-bold sm:text-6xl">Success Stories That Speak for Themselves</h1>
            <p className="text-xl text-muted-foreground">
              See how we've helped local businesses transform their online presence and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={item.image || "/placeholder.svg"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-green-500 text-white mb-2">{item.results}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{item.category}</Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-orange-600 transition-colors" />
                  </div>
                  <CardTitle className="group-hover:text-orange-600 transition-colors">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl">Real Results, Real Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our websites don't just look good - they deliver measurable business results for our clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-orange-600">500+</div>
              <div className="text-muted-foreground">Websites Launched</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-orange-600">40%</div>
              <div className="text-muted-foreground">Average Revenue Increase</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-orange-600">98%</div>
              <div className="text-muted-foreground">Client Satisfaction Rate</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-orange-600">7</div>
              <div className="text-muted-foreground">Days Average Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold sm:text-5xl">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-orange-100">
              Let's create a website that delivers real results for your business. Get started with a free consultation
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              >
                View More Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
