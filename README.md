# 🌐 CV Interactivo 3D — Sheila Cortés Fernández

Portfolio personal completamente **estático** (sin backend), construido con **Three.js** y desplegable directamente en **GitHub Pages**.

## ✨ Características

| Característica | Detalle |
|---|---|
| 🎮 Escena 3D interactiva | 8 objetos flotantes con tooltip y clic para navegar |
| ✨ Campo de partículas | 1800 estrellas + 280 partículas de color accent |
| 🖱️ Parallax de cámara | La escena responde al movimiento del ratón |
| 📊 Skill bars animadas | Se animan al entrar en el viewport (IntersectionObserver) |
| 🃏 Reveal cards | Cada tarjeta aparece con animación al hacer scroll |
| 🌙 Dark mode | Diseño oscuro con glassmorphism y gradientes |
| 📱 Responsive | Adaptado a móvil, tablet y escritorio |
| ⚡ Sin bundler | Cargado por CDN, sin npm, sin Webpack |

## 🚀 Cómo desplegar en GitHub Pages

### Opción A — Repositorio dedicado (recomendado)

1. **Sube la carpeta `cv-threejs`** como raíz de un nuevo repositorio:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/sheilacortesfdez/cv-interactivo.git
   git push -u origin main
   ```

2. Ve a **Settings → Pages** del repositorio.

3. En *Source*, selecciona la rama `main` y la carpeta `/ (root)`.

4. Pulsa **Save**. En unos segundos tu CV estará en:
   ```
   https://sheilacortesfdez.github.io/cv-interactivo/
   ```

### Opción B — Desde este monorepo

Si quieres publicar solo la subcarpeta `cv-threejs`:

```bash
# Instala gh-pages una sola vez (no queda como dependencia de producción)
npm install -g gh-pages

# Desde la raíz del repo
gh-pages -d back/InteractiveCv/cv-threejs
```

Esto crea automáticamente la rama `gh-pages` y publica el contenido.

---

## 📁 Estructura

```
cv-threejs/
├── index.html   ← HTML principal (secciones CV)
├── styles.css   ← Estilos (glassmorphism, animaciones, responsive)
├── main.js      ← Three.js + lógica (escena 3D, modales, reveal…)
└── README.md    ← Esta documentación
```

## 🔧 Personalización

Edita directamente el `index.html`:

- **Nombre y rol** → sección `#hero`
- **Habilidades y porcentajes** → atributo `data-pct` de cada `.skill-fill`
- **Experiencia y formación** → secciones `#experience` / `#education`
- **Proyectos** → sección `#projects` y modales al final del body
- **Links sociales** → sección `#contact` y sección `#about`

## 🎮 Interacción con la escena 3D

| Acción | Resultado |
|---|---|
| Mover el ratón | Parallax de cámara 3D |
| Hover sobre objeto | Tooltip con la tecnología |
| Clic sobre objeto | Navega a la sección relacionada |
| Scroll | La escena continúa en el fondo |

## 📦 Dependencias

Solo una, cargada por CDN (no requiere instalación):

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
```

---

Hecho con ❤️ y **Three.js** · Sheila Cortés Fernández © 2026

