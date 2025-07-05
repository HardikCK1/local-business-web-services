export interface ContentData {
  company: {
    name: string
    tagline: string
    email: string
    address: string
    businessHours: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    description: string
    stats: {
      clients: string
      delivery: string
      revenue: string
    }
  }
  services: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      description: string
      features: string[]
    }>
  }
  pricing: {
    title: string
    subtitle: string
    plans: Array<{
      name: string
      price: string
      description: string
      features: string[]
      popular?: boolean
      badge?: string
    }>
    addons: Array<{
      name: string
      price: string
      description: string
    }>
  }
  testimonials: Array<{
    name: string
    business: string
    content: string
    result: string
  }>
  team: Array<{
    name: string
    role: string
    description: string
  }>
}

export const defaultContent: ContentData = {
  company: {
    name: "LocalWeb Pro",
    tagline: "Professional Websites for Local Businesses",
    email: "hello@localwebpro.com",
    address: "123 Business Ave, Your City, ST 12345",
    businessHours: "Monday - Friday, 9AM - 6PM EST",
  },
  hero: {
    badge: "Trusted by 500+ Local Businesses",
    title: "Transform Your Business Online",
    subtitle: "Professional websites that convert visitors into customers",
    description:
      "Get online in 7 days with our proven system that's helped local businesses increase revenue by 40% on average.",
    stats: {
      clients: "500+",
      delivery: "7",
      revenue: "40%",
    },
  },
  services: {
    title: "Complete Digital Solutions",
    subtitle:
      "From stunning websites to powerful e-commerce platforms, we provide everything your business needs to succeed online.",
    items: [
      {
        title: "Professional Website Design",
        description: "Custom-designed websites that reflect your brand and convert visitors into customers.",
        features: [
          "Custom design tailored to your brand",
          "Mobile-first responsive design",
          "Fast loading speeds (under 3 seconds)",
          "Contact forms and lead capture",
        ],
      },
      {
        title: "E-commerce Solutions",
        description: "Sell your products online with secure payment processing and inventory management.",
        features: [
          "Secure payment processing",
          "Inventory management system",
          "Customer accounts and order tracking",
          "Sales analytics and reporting",
        ],
      },
      {
        title: "SEO Optimization",
        description: "Get found by customers searching for your services with our advanced SEO strategies.",
        features: [
          "Local SEO optimization",
          "Google My Business setup",
          "Keyword research and optimization",
          "Monthly SEO reports",
        ],
      },
    ],
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle:
      "Choose the perfect plan for your business. One-time setup fee, no recurring costs unless you choose maintenance.",
    plans: [
      {
        name: "Starter",
        price: "$200",
        description: "Perfect single-page website for small businesses",
        badge: "Most Affordable",
        features: [
          "1 professional landing page",
          "Mobile-responsive design",
          "Contact form integration",
          "Google Maps integration",
          "Basic SEO setup",
          "SSL certificate & security",
          "7-day delivery",
          "3 months free support",
        ],
      },
      {
        name: "Professional",
        price: "$300",
        description: "Multi-page website for growing businesses",
        popular: true,
        badge: "Most Popular",
        features: [
          "Up to 3 professional pages",
          "Online booking/appointment system",
          "Photo gallery & portfolio",
          "Social media integration",
          "Advanced SEO optimization",
          "Google Analytics setup",
          "Customer review system",
          "6 months free support",
        ],
      },
      {
        name: "Premium",
        price: "$500",
        description: "Complete solution for established businesses",
        badge: "Full-Featured",
        features: [
          "Up to 5 professional pages",
          "Full e-commerce functionality",
          "Inventory management system",
          "Email marketing integration",
          "Multi-location support",
          "Custom features & integrations",
          "Advanced analytics & reporting",
          "12 months free support",
          "Priority development",
        ],
      },
    ],
    addons: [
      {
        name: "Monthly Maintenance",
        price: "$100/month",
        description:
          "Available only for Premium plan clients - includes updates, backups, security monitoring, and content changes",
      },
      {
        name: "Advanced SEO Package",
        price: "$150/month",
        description: "Comprehensive SEO strategy with keyword research, content optimization, and monthly reporting",
      },
      {
        name: "Social Media Management",
        price: "$200/month",
        description: "Complete social media management across all major platforms with content creation",
      },
      {
        name: "Google Ads Management",
        price: "$300/month",
        description: "Professional Google Ads campaign management with optimization and reporting",
      },
    ],
  },
  testimonials: [
    {
      name: "Maria Rodriguez",
      business: "Casa Bella Restaurant",
      content:
        "LocalWeb Pro transformed our restaurant's online presence. The new booking system and mobile-friendly design brought us 40% more reservations in just 2 months!",
      result: "+40% Reservations",
    },
    {
      name: "James Thompson",
      business: "Thompson Auto Repair",
      content:
        "The online booking system is a game-changer. Our customers love how easy it is to schedule appointments, and we've seen a 60% increase in bookings.",
      result: "+60% Bookings",
    },
    {
      name: "Sarah Chen",
      business: "Elegant Boutique",
      content:
        "Our new e-commerce site is beautiful and so easy to use. We've doubled our online sales and customers constantly compliment the design.",
      result: "2x Online Sales",
    },
  ],
  team: [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description:
        "10+ years in web design and digital marketing. Passionate about helping local businesses grow through effective online presence.",
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      description:
        "Full-stack developer with expertise in modern web technologies. Ensures every website is fast, secure, and scalable.",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      description:
        "Creative designer with a keen eye for user experience. Creates beautiful, functional designs that convert visitors into customers.",
    },
  ],
}
