const iconModules = import.meta.glob<string>('~/assets/icons/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function normalizeSvg(svg: string, iconName: string): string {
  const uniquePrefix = `icon-${iconName.replace(/[^a-z0-9-]/gi, '-')}`

  return svg
    .replace(/\s(width|height)="[^"]*"/g, '')
    .replace(/\bid="([^"]+)"/g, `id="${uniquePrefix}-$1"`)
    .replace(/url\(#([^)]+)\)/g, `url(#${uniquePrefix}-$1)`)
    .replace(/<g clip-path="url\([^"]+\)">/g, '<g>')
    .replace(/<defs>[\s\S]*?<\/defs>/g, '')
    .replace(/stroke="#[^"]+"/g, 'stroke="currentColor"')
    .replace(/fill="#[^"]+"/g, 'fill="currentColor"')
    .replace(/fill="black"/g, 'fill="currentColor"')
    .replace(/stroke="white"/g, 'stroke="currentColor"')
}

export function getIconSvg(name: string): string {
  const match = Object.entries(iconModules).find(([path]) =>
    path.endsWith(`/${name}.svg`),
  )

  return match ? normalizeSvg(match[1], name) : ''
}
