export interface NavItem {
  text: string
  icon: string
  link: string
}

export const CONTACT_ROUTE = '/contact'

export const NAV_ITEMS: NavItem[] = [
  { text: 'لیست محصولات', icon: 'category', link: '/products' },
  { text: 'دریافت مشاوره', icon: 'book', link: '/consultation' },
  { text: 'سوالات متداول', icon: 'message-question', link: '/faq' },
  { text: 'تماس با ما', icon: 'phone-call-blue', link: CONTACT_ROUTE },
]

export function isNavItemActive(link: string, currentPath: string): boolean {
  if (link === '/products') {
    return currentPath === '/products' || currentPath.startsWith('/products/')
  }

  return currentPath === link
}
