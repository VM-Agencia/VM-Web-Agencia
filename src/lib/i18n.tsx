import { createContext, useContext, useState, type ReactNode } from "react"

import es from "../messages/es.json"
import en from "../messages/en.json"
import bg from "../messages/bg.json"

type Messages = Record<string, any>

const messages: Record<string, Messages> = { es, en, bg }

function resolveValue(obj: any, path: string): string {
  const keys = path.split(".")
  let current = obj
  for (const key of keys) {
    if (current == null || typeof current !== "object") return path.split(".").pop() || path
    current = current[key as keyof typeof current]
  }
  return typeof current === "string" ? current : path.split(".").pop() || path
}

type TranslateFn = (key: string, params?: Record<string, string | number>) => string

type I18nContextType = {
  locale: string
  setLocale: (l: string) => void
  t: (namespace: string) => TranslateFn
}

const I18nContext = createContext<I18nContextType>({
  locale: "es",
  setLocale: () => {},
  t: () => (key) => key.split(".").pop() || key,
})

export function I18nProvider({ locale: initialLocale = "es", children }: { locale?: string; children: ReactNode }) {
  const [locale, setLocale] = useState(initialLocale)

  const t = (namespace: string): TranslateFn => {
    return (key: string, params?: Record<string, string | number>) => {
      const fullPath = `${namespace}.${key}`
      const msg = messages[locale]
      let value = msg ? resolveValue(msg, fullPath) : fullPath
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          value = value.replace(`{${k}}`, String(v))
        })
      }
      return value
    }
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslations(namespace: string): TranslateFn {
  const { t } = useContext(I18nContext)
  return t(namespace)
}

export function useLocale(): string {
  return useContext(I18nContext).locale
}

export function useSetLocale(): (l: string) => void {
  return useContext(I18nContext).setLocale
}
