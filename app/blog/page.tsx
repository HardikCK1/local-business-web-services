import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "10 Essential Features Every Local Business Website Needs",
    excerpt:
      "Discover the must-have features that will help your local business website convert more visitors into customers.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Design",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "How to Improve Your Local SEO Rankings in 2024",
    excerpt:
      "Learn the latest local SEO strategies that will help your business show up when customers search for your services.",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "SEO",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "The ROI of Professional Web Design for Small Businesses",
    excerpt: "Why investing in professional web design pays off and how to measure the return on your investment.",
    author: "Emily Rodriguez",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Business",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Mobile-First Design: Why It Matters for Local Businesses",
    excerpt:
      "Understanding why mobile-first design is crucial for local businesses and how it impacts customer experience.",
    author: "Sarah Johnson",
    date: "2023-12-28",
    readTime: "4 min read",
    category: "Web Design",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "E-commerce Trends That Will Shape 2024",
    excerpt: "Stay ahead of the curve with these emerging e-commerce trends that will impact online retail in 2024.",
    author: "Mike Chen",
    date: "2023-12-20",
    readTime: "8 min read",
    category: "E-commerce",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Building Trust Online: Website Security Best Practices",
    excerpt: "Essential security measures every business website needs to protect customer data and build trust.",
    author: "Emily Rodriguez",
    date: "2023-12-15",
    readTime: "5 min read",
    category: "Security",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Our Blog
            </Badge>
            <h1 className="text-4xl font-bold sm:text-6xl">Insights & Tips for Local Business Success</h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest web design trends, digital marketing strategies, and business growth tips.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Featured Post</Badge>
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    alt="Featured blog post"
                    className="w-full h-64 md:h-full object-cover"
                    src="/placeholder.svg?height=400&width=600"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge variant="outline" className="mb-4">
                    Web Design
                  </Badge>
                  <h2 className="text-2xl font-bold mb-4">10 Essential Features Every Local Business Website Needs</h2>
                  <p className="text-muted-foreground mb-6">
                    Discover the must-have features that will help your local business website convert more visitors
                    into customers. From contact forms to online booking systems, we cover everything you need to know.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>Sarah Johnson</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Jan 15, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-600 to-amber-600">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl">Latest Articles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights and practical tips to help your business grow online.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={post.image || "/placeholder.svg"}
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-slate-800">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold sm:text-5xl">Stay Updated</h2>
            <p className="text-xl text-orange-100">
              Get the latest web design tips, business growth strategies, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500"
              />
              <Button variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
