# Guía SEO — VM Agency (vmagencia.es)

> Generado: Mayo 2026
> Dominio: vmagencia.es
> Nicho: Marketing Digital, Automatización con IA, Desarrollo Web

---

## Índice

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Investigación de Palabras Clave](#2-investigación-de-palabras-clave)
3. [Arquitectura del Sitio y URL](#3-arquitectura-del-sitio-y-url)
4. [SEO On-Page](#4-seo-on-page)
5. [SEO Técnico](#5-seo-técnico)
6. [Core Web Vitals](#6-core-web-vitals)
7. [Estructura de Datos (Schema)](#7-estructura-de-datos-schema)
8. [Plan de Contenido y Blog](#8-plan-de-contenido-y-blog)
9. [SEO Local](#9-seo-local)
10. [Métrica y Seguimiento](#10-métrica-y-seguimiento)
11. [Checklist de Implementación](#11-checklist-de-implementación)

---

## 1. Resumen Ejecutivo

### Estado actual del sitio
- **SPA en React** (Create React App) con enrutamiento interno sin router
- Páginas: Home, FAQ, Formulario (3 idiomas: ES/EN/BG), 4 Packs de servicios
- WebP en imágenes, videos WebM, animaciones CSS nativas
- JS Bundle: ~96 KB gzipped (bueno)
- Sin blog, sin artículos, sin página "Acerca de"

### Objetivos SEO prioritarios
1. Indexar todas las páginas en Google
2. Posicionar para búsquedas de servicios de marketing digital con IA
3. Optimizar Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1)
4. Conseguir rich results con Schema markup
5. Construir autoridad temática

---

## 2. Investigación de Palabras Clave

### 2.1 Palabras Clave Principales (Head Terms)

| Palabra Clave | Intención | Vol. Est. | Dificultad | Prioridad |
|---|---|---|---|---|
| agencia marketing digital | Comercial | Alta | Alta | ⭐⭐⭐ |
| marketing digital con IA | Comercial | Media | Media | ⭐⭐⭐ |
| automatización marketing | Comercial | Media | Media | ⭐⭐⭐ |
| desarrollo web profesional | Comercial | Alta | Alta | ⭐⭐ |
| agencia marketing Madrid | Comercial | Media | Media | ⭐⭐⭐ |

### 2.2 Palabras Clave de Servicios (Middle Funnel)

| Palabra Clave | Intención | Servicio Relacionado |
|---|---|---|
| automatización de procesos con IA | Comercial | Pack 3 |
| captación de clientes online | Comercial | Pack 2 |
| análisis de datos marketing | Comercial | Pack 4 |
| diseño de páginas web | Comercial | Pack 1 |
| consultoría marketing digital | Comercial | Formulario |
| chatbot IA para negocio | Comercial | Pack 3 |
| estrategia marketing redes sociales | Comercial | Pack 2 |
| optimización SEO web | Comercial | Pack 1 |

### 2.3 Palabras Clave Long Tail (Alta Conversión)

```
"agencia de marketing digital con inteligencia artificial en [ciudad]"
"automatización de marketing para pequeñas empresas"
"cuánto cuesta una página web profesional"
"agencia de captación de clientes online"
"cómo automatizar mi negocio con IA"
"consultoría de marketing digital para pymes"
"desarrollo de página web con IA"
"beneficios de automatización marketing"
```

### 2.4 Preguntas Frecuentes (Para FAQ y Contenido)

- ¿Qué es el marketing digital con IA?
- ¿Cómo puede la IA automatizar mi negocio?
- ¿Cuánto cuesta desarrollar una página web profesional?
- ¿Qué beneficios tiene la automatización de marketing?
- ¿Cómo captar más clientes online?
- ¿Qué incluye un servicio de marketing digital?
- ¿Cómo elegir agencia de marketing digital?

### 2.5 Distribución por Página

| Página | Keywords Objetivo |
|---|---|
| `/` Home | "agencia marketing digital IA", "marketing digital [ciudad]" |
| `/services/pack1` | "diseño web profesional", "desarrollo web IA", "crear página web" |
| `/services/pack2` | "captación clientes online", "estrategia marketing digital" |
| `/services/pack3` | "automatización IA", "automatizar negocio", "chatbot IA" |
| `/services/pack4` | "análisis datos marketing", "consultoría datos IA" |
| `/faq` | "preguntas marketing digital", "FAQ automatización IA" |
| `/es/formulario` | "consultoría marketing gratuita", "diagnóstico negocio online" |

---

## 3. Arquitectura del Sitio y URL

### 3.1 Estructura Actual

```
/
├── /
├── /faq
├── /services/pack1
├── /services/pack2
├── /services/pack3
├── /services/pack4
├── /es/formulario
├── /en/formulario
├── /bg/formulario
```

### 3.2 Mejoras Propuestas

**Añadir páginas faltantes:**
- `/blog/` — Blog principal
- `/acerca-de` — Página "Sobre nosotros"
- `/contacto` — Página de contacto
- `/casos-de-exito` — Casos de éxito / testimonios
- `/aviso-legal` — Aviso legal / privacidad (obligatorio)

**Mejorar URLs existentes:**
- `/services/pack1` → `/diseno-web-profesional` (URL semántica)
- `/services/pack2` → `/captacion-clientes-online`
- `/services/pack3` → `/automatizacion-ia`
- `/services/pack4` → `/analisis-datos-marketing`
- `/faq` → `/preguntas-frecuentes`

### 3.3 Estructura de Navegación Interna (Siloing)

```
Home
├── Servicios
│   ├── Diseño Web Profesional
│   ├── Captación de Clientes
│   ├── Automatización con IA
│   └── Análisis de Datos
├── Casos de Éxito
├── Blog
│   ├── Marketing Digital
│   ├── IA y Automatización
│   └── Desarrollo Web
├── FAQ
├── Sobre Nosotros
└── Contacto
```

> **Regla de oro:** URLs a máximo 3 clics desde la home.
> **Enlazado interno:** Cada página de servicio debe enlazar a las otras 3 y al blog relacionado.

---

## 4. SEO On-Page

### 4.1 Home Page

```html
<title>VM Agency | Marketing Digital con IA y Automatización</title>
<meta name="description" content="Agencia de marketing digital especializada en IA, automatización y desarrollo web. Transformamos tu negocio con tecnología inteligente." />
<meta name="keywords" content="agencia marketing digital, inteligencia artificial, automatización, desarrollo web" />
```

**H1:** "Transformamos tu negocio con marketing digital impulsado por IA"
**H2:** Secciones: Servicios, Casos de Éxito, FAQ, Contacto

### 4.2 Páginas de Servicio

Cada pack debe tener:
- **Title único** con keyword principal + "VM Agency"
- **Meta description** con beneficio + CTA
- **H1** con nombre del servicio
- **H2/H3** con características y beneficios

Ejemplo Pack 1:
```html
<title>Diseño Web Profesional con IA | VM Agency</title>
<meta name="description" content="Creamos páginas web profesionales optimizadas con IA. Desarrollo web moderno, rápido y enfocado en conversión. Solicita tu presupuesto." />
<H1>Diseño Web Profesional</H1>
<H2>Características del servicio</H2>
<H3>Optimización SEO incluida</H3>
```

### 4.3 Imágenes

Todas las imágenes deben tener:
- `alt` descriptivo con keyword (ej: "agencia marketing digital IA Madrid")
- `width` y `height` para CLS
- Nombre de archivo con guiones (ej: `diseno-web-profesional.webp`)

---

## 5. SEO Técnico

### 5.1 Estado Actual ✅

- [x] WebP en imágenes
- [x] Gzip compresión (.htaccess)
- [x] Caché de navegador (1 año)
- [x] Sitemap.xml creado
- [x] Robots.txt configurado
- [x] loading="lazy" en imágenes below-fold
- [x] Animaciones CSS (sin JS)
- [x] Google Fonts con preconnect
- [x] Meta description + title reales
- [x] JS Bundle reducido (~96 KB)
- [x] Videos con preload="none"

### 5.2 Pendiente ❌

- [ ] **HSTS**: Añadir `Strict-Transport-Security` en .htaccess
- [ ] **Open Graph**: Meta tags para redes sociales (Facebook, Twitter)
- [ ] **Canonical**: Añadir `<link rel="canonical">` en cada página
- [ ] **hreflang**: Para versiones ES/EN/BG en el <head>
- [ ] **Página 404 personalizada**: Mejorar la experiencia
- [ ] **Service Worker**: Para caché offline y mejor rendimiento
- [ ] **Migrar a Vite**: CRA es lento en build y bundle más grande que Vite
- [ ] **Preload de imágenes LCP**: Hero images con `<link rel="preload">`

### 5.3 .htaccess — Mejoras de Seguridad y SEO

Añadir al final del `.htaccess` actual:

```apache
# HSTS (HTTP Strict Transport Security)
<IfModule mod_headers.c>
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>

# Redirección www a non-www (elige una)
RewriteCond %{HTTP_HOST} ^www\.vmagencia\.es [NC]
RewriteRule ^(.*)$ https://vmagencia.es/$1 [L,R=301]

# Redirección HTTP a HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [L,R=301]
```

### 5.4 hreflang — Para las 3 versiones de idioma

En el `<head>` del index.html o mediante inyección JS:

```html
<link rel="alternate" hreflang="es" href="https://vmagencia.es/" />
<link rel="alternate" hreflang="en" href="https://vmagencia.es/en" />
<link rel="alternate" hreflang="bg" href="https://vmagencia.es/bg" />
<link rel="alternate" hreflang="x-default" href="https://vmagencia.es/" />
```

### 5.5 Open Graph — Para compartir en redes

```html
<meta property="og:title" content="VM Agency | Marketing Digital con IA" />
<meta property="og:description" content="Agencia de marketing digital especializada en IA y automatización." />
<meta property="og:image" content="https://vmagencia.es/og-image.jpg" />
<meta property="og:url" content="https://vmagencia.es/" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## 6. Core Web Vitals

### 6.1 Objetivos

| Métrica | Bueno | Actual (estimado) | Acción |
|---|---|---|---|
| LCP | < 2.5s | ~1.5s | ✅ OK, preload hero images |
| INP | < 200ms | ~300-400ms | Eliminar JS bloqueante, usar `scheduler.yield()` |
| CLS | < 0.1 | ~0.05 | ✅ OK, imágenes con width/height |

### 6.2 Mejora de INP (Total Blocking Time)

El INP es la métrica más crítica ahora. El TBT de 570ms que viste indica JS bloqueando el hilo principal.

**Acciones concretas:**
1. Mover `NeuralStatic` (canvas) a `requestIdleCallback` para que no bloquee el inicio
2. Asegurar que todos los scripts third-party se carguen con `async` o `defer`
3. Dividir tareas largas con `scheduler.yield()` donde sea posible
4. Eliminar librerías JS no críticas del bundle inicial

### 6.3 LCP

El LCP está bien (~1.5s) pero se puede mejorar:
```html
<link rel="preload" href="/images_webp/human-hand.webp" as="image" />
<link rel="preload" href="/images_webp/robot-hand.webp" as="image" />
```

---

## 7. Estructura de Datos (Schema)

### 7.1 Organization Schema (Home)

Añadir en la home:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VM Agency",
  "url": "https://vmagencia.es",
  "logo": "https://vmagencia.es/images_webp/VMlogo.webp",
  "description": "Agencia de marketing digital especializada en IA y automatización",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ES"
  }
}
```

### 7.2 Service Schema (Páginas de Pack)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Diseño Web Profesional",
  "provider": {
    "@type": "Organization",
    "name": "VM Agency"
  },
  "description": "Creamos páginas web profesionales optimizadas con inteligencia artificial.",
  "offers": {
    "@type": "Offer",
    "price": "Consultar",
    "priceCurrency": "EUR"
  }
}
```

### 7.3 FAQ Schema (Página FAQ)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "¿Qué es el marketing digital con IA?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "El marketing digital con IA utiliza inteligencia artificial para automatizar y optimizar campañas..."
    }
  }]
}
```

### 7.4 BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://vmagencia.es/"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Diseño Web Profesional",
    "item": "https://vmagencia.es/services/pack1"
  }]
}
```

---

## 8. Plan de Contenido y Blog

### 8.1 Pilares de Contenido

| Pilar | Keywords | Formato |
|---|---|---|
| Marketing Digital con IA | "marketing IA", "automatización marketing" | Guías, Casos de éxito |
| Automatización de Negocios | "automatizar empresa", "IA para pymes" | Tutoriales, Comparativas |
| Desarrollo Web | "diseño web", "página web profesional" | Guías, Portfolios |
| Captación de Clientes | "captar clientes online", "lead generation" | Estrategias, Checklists |

### 8.2 Calendario Editorial (Primeros 10 Artículos)

| # | Título | Keyword Objetivo | Pilar |
|---|---|---|---|
| 1 | "Cómo la IA está transformando el marketing digital en 2026" | marketing digital IA | Marketing IA |
| 2 | "Guía completa de automatización para pequeñas empresas" | automatizar pequeña empresa | Automatización |
| 3 | "¿Cuánto cuesta una página web profesional en 2026?" | precio página web | Desarrollo Web |
| 4 | "10 estrategias de captación de clientes online" | captar clientes online | Captación |
| 5 | "Qué es el marketing digital con IA y cómo empezar" | qué es marketing IA | Marketing IA |
| 6 | "Beneficios de automatizar tu negocio con inteligencia artificial" | beneficios automatización IA | Automatización |
| 7 | "Cómo elegir agencia de marketing digital" | elegir agencia marketing | Marketing IA |
| 8 | "Diferencias entre web estática y web dinámica" | web estática vs dinámica | Desarrollo Web |
| 9 | "Errores comunes en captación de clientes online" | errores captación clientes | Captación |
| 10 | "Casos de éxito: cómo ayudamos a empresas con IA" | casos éxito marketing IA | Marketing IA |

### 8.3 Estructura de Cada Artículo

- **Title**: 50-60 caracteres, con keyword
- **Meta description**: 150-160 caracteres, con keyword + CTA
- **H1**: Título del artículo
- **H2**: Subtemas principales (3-5)
- **H3**: Puntos específicos dentro de cada subtema
- **Imagen destacada**: Con alt text descriptivo
- **CTA al final**: "¿Quieres aplicar esto en tu negocio? Contáctanos"
- **Enlazado interno**: Mínimo 2 enlaces a páginas de servicio + 1 a otro artículo

### 8.4 Longitud Recomendada

- Artículo estándar: **1500-2500 palabras**
- Guía completa: **3000-5000 palabras**
- Cada artículo debe incluir: introducción, desarrollo (H2/H3), conclusión y CTA

---

## 9. SEO Local

### 9.1 Google Business Profile

Crear y optimizar ficha de Google Business Profile:
- Categoría principal: "Agencia de marketing digital"
- Categorías secundarias: "Consultoría de marketing", "Diseñador web"
- Fotos del equipo y oficina
- Publicaciones semanales
- Responder a todas las reseñas

### 9.2 Keywords Locales

```
agencia marketing digital Madrid
marketing digital con IA Madrid
desarrollo web Madrid
automatización IA Madrid
agencia marketing online Madrid
```

### 9.3 NAP (Name, Address, Phone)

Asegurar que el nombre, dirección y teléfono sean idénticos en:
- Web (footer o página de contacto)
- Google Business Profile
- Redes sociales
- Directorios online

---

## 10. Métrica y Seguimiento

### 10.1 Herramientas

| Herramienta | Propósito | Coste |
|---|---|---|
| **Google Search Console** | Indexación, clics, impresiones, errores | Gratis |
| **Google Analytics 4** | Tráfico, comportamiento, conversiones | Gratis |
| **PageSpeed Insights** | Core Web Vitals, rendimiento | Gratis |
| **Google Rich Results Test** | Validar Schema | Gratis |
| **Screaming Frog** (gratuito) | Auditoría técnica, hasta 500 URL | Gratis |
| **Ahrefs / Semrush** (recomendado) | Keywords, backlinks, competencia | Pago |

### 10.2 KPIs a Seguir

| KPI | Frecuencia | Objetivo |
|---|---|---|
| Impresiones Google | Semanal | +20% mes a mes |
| Clics orgánicos | Semanal | +15% mes a mes |
| CTR medio | Semanal | > 3% |
| Posición media | Semanal | < 10 para keywords target |
| Core Web Vitals (LCP/INP/CLS) | Mensual | Good en todas las páginas |
| Páginas indexadas | Mensual | 100% de páginas importantes |
| Tasa de conversión orgánica | Mensual | > 2% |

### 10.3 Google Search Console — Configuración Inicial

1. Verificar dominio en GSC
2. Subir sitemap.xml
3. Revisar "Cobertura" → corregir errores de indexación
4. Revisar "Rendimiento" → keywords que ya traen tráfico
5. Configurar "Filtros de URL" para parámetros

---

## 11. Checklist de Implementación

### FASE 1 — Urgente (Esta semana)

- [ ] Migrar sitemap.xml de `vmagency.ai` a `vmagencia.es`
- [ ] Verificar robots.txt permite crawlear CSS/JS
- [ ] Añadir `<meta property="og:...">` en index.html
- [ ] Añadir `<link rel="canonical">` en cada página
- [ ] Enviar sitemap a Google Search Console
- [ ] Solicitar indexación manual de páginas clave

### FASE 2 — Alta Prioridad (Este mes)

- [ ] Implementar Schema Organization en Home
- [ ] Implementar Schema FAQ en página FAQ
- [ ] Implementar Schema Service en cada pack
- [ ] Añadir hreflang para ES/EN/BG
- [ ] Redirigir HTTP → HTTPS si no está (verificar)
- [ ] Redirigir www → non-www
- [ ] Mejorar alt text de todas las imágenes

### FASE 3 — Prioridad Media (1-3 meses)

- [ ] Crear página /acerca-de con historia del negocio
- [ ] Crear /casos-de-exito con testimonios
- [ ] Implementar blog con primeros 5 artículos
- [ ] Crear página /contacto (o mejorar formulario existente)
- [ ] Migrar URLs de `/services/pack1` a URLs semánticas
- [ ] Añadir HSTS y cabeceras de seguridad

### FASE 4 — Prioridad Baja (3-6 meses)

- [ ] Migrar CRA a Vite para mejor rendimiento
- [ ] Implementar blog completo (10+ artículos)
- [ ] Construir backlinks (guest posting, colaboraciones)
- [ ] Optimizar para búsqueda por voz
- [ ] Implementar búsqueda interna en el sitio
- [ ] Service Worker para caché offline

---

## Resumen de Palabras Clave Prioritarias

Para empezar, enfócate en estas **10 keywords**:

| # | Keyword | Página Objetivo |
|---|---|---|
| 1 | agencia marketing digital | Home |
| 2 | marketing digital con IA | Home |
| 3 | automatización marketing | Pack 3 |
| 4 | diseño web profesional | Pack 1 |
| 5 | captación de clientes online | Pack 2 |
| 6 | análisis de datos marketing | Pack 4 |
| 7 | agencia marketing Madrid | Home + Local |
| 8 | automatizar negocio con IA | Pack 3 |
| 9 | consultoría marketing digital | Formulario |
| 10 | crear página web profesional | Pack 1 |

---

> **Nota:** Esta guía se actualizará según evolucione el sitio y los resultados en Search Console. El SEO es un proceso continuo, no una tarea única.
