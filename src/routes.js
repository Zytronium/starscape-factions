// src/routes.js
const modules = import.meta.glob('./pages/*.jsx', { eager: true })

export const routes = Object.entries(modules).map(([filePath, mod]) => {
  // './pages/Home.jsx' -> '/', './pages/test.jsx' -> '/test'
  let path = filePath.replace('./pages', '').replace(/\.jsx$/, '').toLowerCase()
  if (path === '/home' || path === '/index' || path === '') path = '/'
  return {
    path,
    Component: mod.default
  }
})
