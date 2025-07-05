"use client"

import { Check, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useContent } from "@/components/content-provider"

export default function PricingPage() {
  const content = useContent()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Pricing Plans
            </Badge>
            <h1 className="text-4xl font-bold sm:text-6xl">{content.pricing.title}</h1>
            <p className="text-xl text-muted-foreground">{content.pricing.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {content.pricing.plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 transition-colors ${
                  plan.popular ? "border-orange-200 shadow-xl scale-105" : "hover:border-orange-200"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-4 py-1">
                    {plan.badge}
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-lg"> one-time</span>
                  </div>
                  {plan.badge && !plan.popular && (
                    <Badge variant="outline" className="w-fit mx-auto mt-2">
                      {plan.badge}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">What's Included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                        : "bg-transparent"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <a href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl">Optional Add-On Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your website with these professional add-on services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {content.pricing.addons.map((addon, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{addon.name}</CardTitle>
                      <div className="text-2xl font-bold text-orange-600 mt-2">{addon.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{addon.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="/contact">Learn More</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Are there any recurring fees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No! Our pricing is one-time setup fees only. Monthly maintenance is available as an optional add-on
                  for Premium plan clients only.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you build my website?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Starter websites are delivered in 3-5 days, Professional in 5-7 days, and Premium in 7-10 days. Rush
                  delivery available for additional fee.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What's included in the maintenance add-on?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monthly maintenance includes security updates, backups, content changes, performance monitoring, and
                  priority support. Available only for Premium plan clients.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Can I upgrade my plan later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! You can upgrade at any time by paying the difference between plans. We'll add the additional
                  features to your existing website.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-orange-50 to-amber-50">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl font-medium text-muted-foreground mb-6">
                "The Professional plan was perfect for our restaurant. The online reservation system has increased our
                bookings by 40%, and the one-time fee made it very affordable!"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-red-400" />
                <div className="text-left">
                  <p className="font-semibold text-lg">Maria Rodriguez</p>
                  <p className="text-muted-foreground">Owner, Casa Bella Restaurant</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold sm:text-5xl">Ready to Choose Your Plan?</h2>
            <p className="text-xl text-orange-100">
              Start with any plan and upgrade as your business grows. All plans come with free support during the
              initial period.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50" asChild>
                <a href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                asChild
              >
                <a href="/services">View All Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
