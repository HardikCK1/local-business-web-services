import { ArrowRight, Check, Code, Smartphone, Search, ShoppingCart, BarChart, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl font-bold sm:text-6xl">Complete Digital Solutions for Local Businesses</h1>
            <p className="text-xl text-muted-foreground">
              From stunning websites to powerful e-commerce platforms, we provide everything your business needs to
              succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="grid gap-12 lg:gap-16">
            {/* Website Design */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Professional Website Design</h2>
                  <p className="text-lg text-muted-foreground">
                    Custom-designed websites that reflect your brand and convert visitors into customers. Every site is
                    mobile-responsive, fast-loading, and optimized for search engines.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <span>Custom design tailored to your brand</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <span>Mobile-first responsive design</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <span>Fast loading speeds (under 3 seconds)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <span>Contact forms and lead capture</span>
                    </li>
                  </ul>
                </div>
                <Button className="bg-gradient-to-r from-orange-600 to-amber-600">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <img
                  alt="Website Design Service"
                  className="rounded-2xl shadow-2xl"
                  height="400"
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                />
              </div>
            </div>

            {/* E-commerce */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  alt="E-commerce Solutions"
                  className="rounded-2xl shadow-2xl"
                  height="400"
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">E-commerce Solutions</h2>
                  <p className="text-lg text-muted-foreground">
                    Sell your products online with our powerful e-commerce platforms. Secure payment processing,
                    inventory management, and customer analytics included.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <span>Secure payment processing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <span>Inventory management system</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <span>Customer accounts and order tracking</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <span>Sales analytics and reporting</span>
                    </li>
                  </ul>
                </div>
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* SEO Services */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">SEO Optimization</h2>
                  <p className="text-lg text-muted-foreground">
                    Get found by customers searching for your services. Our SEO strategies help local businesses rank
                    higher in Google and attract more qualified leads.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <span>Local SEO optimization</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <span>Google My Business setup</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <span>Keyword research and optimization</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <span>Monthly SEO reports</span>
                    </li>
                  </ul>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <img
                  alt="SEO Services"
                  className="rounded-2xl shadow-2xl"
                  height="400"
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete your digital presence with our additional services designed to help your business grow.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Mobile App Development</CardTitle>
                <CardDescription>
                  Native mobile apps for iOS and Android to keep your customers engaged on the go.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Digital Marketing</CardTitle>
                <CardDescription>
                  Social media management, Google Ads, and email marketing to drive more customers to your business.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-4">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Round-the-clock technical support and maintenance to keep your website running smoothly.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold sm:text-5xl">Ready to Get Started?</h2>
            <p className="text-xl text-orange-100">
              Let's discuss your project and create a custom solution that fits your business needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
