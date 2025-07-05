"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type ContentData, defaultContent } from "@/lib/content"
import { ContentStorage } from "@/lib/storage"

const ContentContext = createContext<ContentData>(defaultContent)

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentData>(defaultContent)

  useEffect(() => {
    setContent(ContentStorage.getContent())
  }, [])

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>
}

export const useContent = () => useContext(ContentContext)
