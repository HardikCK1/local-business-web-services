import { type ContentData, defaultContent } from "./content"

// In a real deployment, you'd use a proper database
// For now, we'll use localStorage for demo purposes
export class ContentStorage {
  private static CONTENT_KEY = "localweb_content"
  private static ENQUIRIES_KEY = "localweb_enquiries"

  static getContent(): ContentData {
    if (typeof window === "undefined") return defaultContent

    try {
      const stored = localStorage.getItem(this.CONTENT_KEY)
      return stored ? JSON.parse(stored) : defaultContent
    } catch {
      return defaultContent
    }
  }

  static saveContent(content: ContentData): void {
    if (typeof window === "undefined") return
    localStorage.setItem(this.CONTENT_KEY, JSON.stringify(content))
  }

  static getEnquiries(): any[] {
    if (typeof window === "undefined") return []

    try {
      const stored = localStorage.getItem(this.ENQUIRIES_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  }

  static saveEnquiry(enquiry: any): void {
    if (typeof window === "undefined") return

    const enquiries = this.getEnquiries()
    const newEnquiry = {
      ...enquiry,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
    }
    enquiries.unshift(newEnquiry)
    localStorage.setItem(this.ENQUIRIES_KEY, JSON.stringify(enquiries))
  }
}
