"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { type ContentData, defaultContent } from "@/lib/content"
import { ContentStorage } from "@/lib/storage"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Save, Eye, Download, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AdminPage() {
  const [content, setContent] = useState<ContentData>(defaultContent)
  const [enquiries, setEnquiries] = useState<any[]>([])
  const { toast } = useToast()

  useEffect(() => {
    setContent(ContentStorage.getContent())
    setEnquiries(ContentStorage.getEnquiries())
  }, [])

  const handleSave = () => {
    ContentStorage.saveContent(content)
    toast({
      title: "Content Saved",
      description: "Your changes have been saved successfully.",
    })
  }

  const handleExport = () => {
    const dataStr = JSON.stringify(content, null, 2)
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)
    const exportFileDefaultName = "website-content.json"

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const importedContent = JSON.parse(e.target?.result as string)
          setContent(importedContent)
          toast({
            title: "Content Imported",
            description: "Content has been imported successfully.",
          })
        } catch (error) {
          toast({
            title: "Import Error",
            description: "Failed to import content. Please check the file format.",
            variant: "destructive",
          })
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Website Admin Panel</h1>
            <p className="text-muted-foreground">Manage your website content and view enquiries</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <label className="cursor-pointer">
              <Button variant="outline" asChild>
                <span>
                  <Upload className="h-4 w-4 mr-2" />
                  Import
                </span>
              </Button>
              <input type="file" accept=".json" onChange={handleImport} className="hidden" />
            </label>
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
            <Button variant="outline" asChild>
              <a href="/" target="_blank" rel="noreferrer">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </a>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="company" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="enquiries">Enquiries</TabsTrigger>
          </TabsList>

          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
                <CardDescription>Update your basic company details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input
                      id="company-name"
                      value={content.company.name}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          company: { ...content.company, name: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="tagline">Tagline</Label>
                    <Input
                      id="tagline"
                      value={content.company.tagline}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          company: { ...content.company, tagline: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={content.company.email}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        company: { ...content.company, email: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={content.company.address}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        company: { ...content.company, address: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="hours">Business Hours</Label>
                  <Input
                    id="hours"
                    value={content.company.businessHours}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        company: { ...content.company, businessHours: e.target.value },
                      })
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>Update your homepage hero content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="hero-badge">Badge Text</Label>
                  <Input
                    id="hero-badge"
                    value={content.hero.badge}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, badge: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="hero-title">Main Title</Label>
                  <Input
                    id="hero-title"
                    value={content.hero.title}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, title: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="hero-subtitle">Subtitle</Label>
                  <Input
                    id="hero-subtitle"
                    value={content.hero.subtitle}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, subtitle: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="hero-description">Description</Label>
                  <Textarea
                    id="hero-description"
                    value={content.hero.description}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, description: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="stat-clients">Clients Stat</Label>
                    <Input
                      id="stat-clients"
                      value={content.hero.stats.clients}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          hero: {
                            ...content.hero,
                            stats: { ...content.hero.stats, clients: e.target.value },
                          },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="stat-delivery">Delivery Stat</Label>
                    <Input
                      id="stat-delivery"
                      value={content.hero.stats.delivery}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          hero: {
                            ...content.hero,
                            stats: { ...content.hero.stats, delivery: e.target.value },
                          },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="stat-revenue">Revenue Stat</Label>
                    <Input
                      id="stat-revenue"
                      value={content.hero.stats.revenue}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          hero: {
                            ...content.hero,
                            stats: { ...content.hero.stats, revenue: e.target.value },
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing">
            <Card>
              <CardHeader>
                <CardTitle>Pricing Plans</CardTitle>
                <CardDescription>Update your pricing plans and add-ons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="pricing-title">Section Title</Label>
                    <Input
                      id="pricing-title"
                      value={content.pricing.title}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          pricing: { ...content.pricing, title: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="pricing-subtitle">Section Subtitle</Label>
                    <Textarea
                      id="pricing-subtitle"
                      value={content.pricing.subtitle}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          pricing: { ...content.pricing, subtitle: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Pricing Plans</h3>
                  {content.pricing.plans.map((plan, index) => (
                    <Card key={index} className="p-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label>Plan Name</Label>
                          <Input
                            value={plan.name}
                            onChange={(e) => {
                              const newPlans = [...content.pricing.plans]
                              newPlans[index] = { ...plan, name: e.target.value }
                              setContent({
                                ...content,
                                pricing: { ...content.pricing, plans: newPlans },
                              })
                            }}
                          />
                        </div>
                        <div>
                          <Label>Price</Label>
                          <Input
                            value={plan.price}
                            onChange={(e) => {
                              const newPlans = [...content.pricing.plans]
                              newPlans[index] = { ...plan, price: e.target.value }
                              setContent({
                                ...content,
                                pricing: { ...content.pricing, plans: newPlans },
                              })
                            }}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label>Description</Label>
                        <Textarea
                          value={plan.description}
                          onChange={(e) => {
                            const newPlans = [...content.pricing.plans]
                            newPlans[index] = { ...plan, description: e.target.value }
                            setContent({
                              ...content,
                              pricing: { ...content.pricing, plans: newPlans },
                            })
                          }}
                        />
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testimonials">
            <Card>
              <CardHeader>
                <CardTitle>Testimonials</CardTitle>
                <CardDescription>Manage customer testimonials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {content.testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label>Customer Name</Label>
                        <Input
                          value={testimonial.name}
                          onChange={(e) => {
                            const newTestimonials = [...content.testimonials]
                            newTestimonials[index] = { ...testimonial, name: e.target.value }
                            setContent({
                              ...content,
                              testimonials: newTestimonials,
                            })
                          }}
                        />
                      </div>
                      <div>
                        <Label>Business Name</Label>
                        <Input
                          value={testimonial.business}
                          onChange={(e) => {
                            const newTestimonials = [...content.testimonials]
                            newTestimonials[index] = { ...testimonial, business: e.target.value }
                            setContent({
                              ...content,
                              testimonials: newTestimonials,
                            })
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label>Testimonial Content</Label>
                      <Textarea
                        value={testimonial.content}
                        onChange={(e) => {
                          const newTestimonials = [...content.testimonials]
                          newTestimonials[index] = { ...testimonial, content: e.target.value }
                          setContent({
                            ...content,
                            testimonials: newTestimonials,
                          })
                        }}
                      />
                    </div>
                    <div className="mt-4">
                      <Label>Result</Label>
                      <Input
                        value={testimonial.result}
                        onChange={(e) => {
                          const newTestimonials = [...content.testimonials]
                          newTestimonials[index] = { ...testimonial, result: e.target.value }
                          setContent({
                            ...content,
                            testimonials: newTestimonials,
                          })
                        }}
                      />
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="enquiries">
            <Card>
              <CardHeader>
                <CardTitle>Customer Enquiries</CardTitle>
                <CardDescription>View and manage customer enquiries</CardDescription>
              </CardHeader>
              <CardContent>
                {enquiries.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">No enquiries yet.</p>
                ) : (
                  <div className="space-y-4">
                    {enquiries.map((enquiry) => (
                      <Card key={enquiry.id} className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold">{enquiry.name}</h3>
                            <p className="text-sm text-muted-foreground">{enquiry.email}</p>
                          </div>
                          <Badge variant="outline">{new Date(enquiry.timestamp).toLocaleDateString()}</Badge>
                        </div>
                        <div className="grid gap-2 text-sm">
                          <p>
                            <strong>Business:</strong> {enquiry.business || "Not provided"}
                          </p>
                          <p>
                            <strong>Service:</strong> {enquiry.service || "Not specified"}
                          </p>
                          <p>
                            <strong>Message:</strong> {enquiry.message}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
