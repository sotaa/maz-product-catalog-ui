export interface FooterLink {
  text: string
  link: string
}

export interface SocialLink {
  icon: string
  href: string
  label: string
}

export interface FooterTopSocialLink extends FooterLink {
  icon: string
}

export const FOOTER_SUPPORT_TEXT =
  'هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم'

export const FOOTER_QUICK_LINKS: FooterLink[] = [
  { text: 'درباره ما', link: '/about' },
  { text: 'بلاگ', link: '/blog' },
  { text: 'تماس با ما', link: '/contact' },
  { text: 'خدمات پس از فروش', link: '/after-sales' },
]

export const FOOTER_GUIDE_LINKS: FooterLink[] = [
  { text: 'قوانین و مقررات', link: '/terms' },
  { text: 'دریافت مشاوره', link: '/consultation' },
  { text: 'انتقادات و پیشنهادات', link: '/feedback' },
]

export const FOOTER_TOP_SOCIAL_LINKS: FooterTopSocialLink[] = [
  { icon: 'telegram', text: 'تلگرام', link: '#' },
  { icon: 'instagram', text: 'اینستاگرام', link: '#' },
  { icon: 'linkedin', text: 'لینکدین', link: '#' },
]

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  { icon: 'telegram', href: '#', label: 'تلگرام' },
  { icon: 'instagram', href: '#', label: 'اینستاگرام' },
  { icon: 'twitter', href: '#', label: 'توییتر' },
  { icon: 'youtube', href: '#', label: 'یوتیوب' },
  { icon: 'linkedin', href: '#', label: 'لینکدین' },
]

export const FOOTER_COPYRIGHT =
  'تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر گونه کپی برداری پیگرد قانونی دارد.'
