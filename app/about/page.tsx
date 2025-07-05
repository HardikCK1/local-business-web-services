import { Heart, Target, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              About LocalWeb Pro
            </Badge>
            <h1 className="text-4xl font-bold sm:text-6xl">We Help Local Businesses Thrive Online</h1>
            <p className="text-xl text-muted-foreground">
              Founded in 2020, LocalWeb Pro has helped over 500 local businesses transform their online presence and
              achieve remarkable growth through professional web design and digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold sm:text-4xl">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  We believe every local business deserves a professional online presence that drives real results. Our
                  mission is to make high-quality web design accessible and affordable for small and medium-sized
                  businesses.
                </p>
                <p className="text-lg text-muted-foreground">
                  We're not just web designers - we're your digital growth partners, committed to helping your business
                  succeed in an increasingly digital world.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-muted-foreground">Businesses Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">4</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                alt="Team working"
                className="rounded-2xl shadow-2xl"
                height="400"
                src="/placeholder.svg?height=400&width=600"
                width="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and ensure we deliver exceptional results for every client.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Client-First Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your success is our success. We listen to your needs, understand your goals, and create solutions that
                  deliver real business results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Results-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We don't just build pretty websites - we create digital experiences that convert visitors into
                  customers and drive revenue growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Speed & Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We deliver high-quality websites quickly without compromising on design, functionality, or
                  performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced team of designers, developers, and digital marketing experts are passionate about helping
              local businesses succeed.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-orange-400 to-red-400 mx-auto mb-4" />
                <CardTitle className="text-xl">Sarah Johnson</CardTitle>
                <CardDescription>Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  10+ years in web design and digital marketing. Passionate about helping local businesses grow through
                  effective online presence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-xl">Mike Chen</CardTitle>
                <CardDescription>Lead Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Full-stack developer with expertise in modern web technologies. Ensures every website is fast, secure,
                  and scalable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 mx-auto mb-4" />
                <CardTitle className="text-xl">Emily Rodriguez</CardTitle>
                <CardDescription>Design Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Creative designer with a keen eye for user experience. Creates beautiful, functional designs that
                  convert visitors into customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 w-full max-w-screen-xl">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold sm:text-5xl">Ready to Work Together?</h2>
            <p className="text-xl text-orange-100">
              Let's discuss your project and see how we can help your business grow online. Schedule a free consultation
              today.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
