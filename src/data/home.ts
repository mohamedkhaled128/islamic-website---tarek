/**
 * Professional Home Page Content — Ramadan Website
 */

import type { SvgSectionProps } from '../types';

export type HomeNavItem = {
  name: string;
  href: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon?: string;
};

export type CTASection = {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
};

const ramadanContent = {
  /* ================= HERO ================= */
  hero: {
    badge: '  ',
    title: '',
    subtitle:
      '',
    elegy:
      'تم إنشاء هذا الموقع ليكون صدقة جارية باسم أخي وحبيبي طارق عاطف رحمه الله عليه،ونسأل الله أن يجعل كل خيرٍ ينتفع به الناس من خلال هذا الموقع في ميزان حسناته.نهدف من خلال هذا الموقع إلى نشر الخير والمعرفة الدينية، ومساعدة الناس على التقرب إلى الله عز وجل،وتذكير بعضنا البعض بالآخرة.',
    backgroundImage: '/images/ramadan-hero.jpg',
  },

  /* ================= NAVIGATION ================= */
  navItems: [
    { name: 'القرآن الكريم', href: '/quran' },
    { name: 'مواقيت الصلاه والتقويم ', href: '/hijri-calendar' },
    { name: 'الأذكار', href: '/adhkar' },
    { name: 'برامجك', href: '/about' },
  ] as HomeNavItem[],

  /* ================= FEATURES ================= */
  features: [
    {
      title: 'القرآن الكريم',
      description:
        'تصفح القرآن كاملاً، قراءة واضحة، وتنقل سريع بين السور والأجزاء.',
      icon: 'book-open',
    },
    {
      title: 'التقويم الهجري',
      description:
        'متابعة الأيام الهجرية ومواقيت الشهر الكريم بدقة وسهولة.',
      icon: 'calendar',
    },
    {
      title: 'الأذكار اليومية',
      description:
        'أذكار الصباح والمساء وأدعية مختارة لتعيش روحانية الشهر.',
      icon: 'moon',
    },
  ] as FeatureItem[],

  /* ================= CTA ================= */
  cta: {
    title: 'ابدأ رحلتك الإيمانية الآن',
    description:
      'خصص وقتًا يوميًا للقرآن والذكر، واجعل رمضان نقطة تحول حقيقية في حياتك.',
    primaryButton: {
      text: 'ابدأ بالقرآن',
      href: '/quran',
    },
    secondaryButton: {
      text: 'تصفح الأذكار',
      href: '/adhkar',
    },
  } as CTASection,

  /* ================= SADAQA SECTION ================= */
  sadaqaSection: {
    title: 'صدقة جارية لروح طارق عاطف رحمه الله',
    description: `
تم إنشاء هذا الموقع ليكون صدقة جارية باسم أخي وحبيبي طارق عاطف رحمه الله عليه،
ونسأل الله أن يجعل كل خيرٍ ينتفع به الناس من خلال هذا الموقع في ميزان حسناته

نهدف من خلال هذا الموقع إلى نشر الخير والمعرفة الدينية، ومساعدة الناس على التقرب إلى الله عز وجل،
وتذكير بعضنا البعض بالآخرة واخيرا 
اتمني ان لا تنسوه من دعائكم، وأن يكون هذا الموقع سببًا في نفع الناس ورفع درجات طارق في الآخرة.
  `,
    hadith: `
"إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلاَّ مِنْ ثَلاَث:
صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ،
أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ"
  `,
    prayer: `
نسأل الله أن يجعل هذا الموقع امتدادًا لأحلامك في نفع الناس وخدمة المجتمع،
وأن يكون كل من ينتفع به سببًا في رفع درجاتك في الآخرة.

اللهم اغفر لطارق وارحمه، وعافه واعف عنه،
وأكرم نزله، ووسع مدخله، واغسله بالماء والثلج والبرد،
ونقه من الذنوب كما نقيت الثوب الأبيض من الدنس.

اللهم اجعل هذا الموقع صدقة جارية لروح طارق،
وبلّغه الفردوس الأعلى.
  `,
  },

  /* ================= FOOTER ================= */
  footer: {
    copyright: `© ${new Date().getFullYear()} موقع رمضان — جميع الحقوق محفوظة`,
    tagline: 'تم تطوير هذا الموقع بنية الصدقة الجارية ونشر الخير.',
  },

  /** @deprecated لم يعد مستخدماً في الصفحة الرئيسية */
  sections: [] as ReadonlyArray<{
    description: string;
    buttonText: string;
    targetURL: string;
    SVGComponent: React.ElementType<SvgSectionProps>;
  }>,
};

export default ramadanContent;
