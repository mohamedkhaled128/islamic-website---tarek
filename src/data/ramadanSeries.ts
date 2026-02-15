export interface Video {
  title: string;
  id: string;
}

export interface Series {
  name: string;
  description: string;
  videos: Video[];
}

export const ramadanSeries: Series[] = [
  {
    name: "د. محمد راتب النابلسي",
    description: "سلسلة إيمانية رمضانية",
    videos: [
      { title: "الحلقة 1 – معنى الصيام", id: "K2F9z2kZbL4" },
      { title: "الحلقة 2 – أثر القرآن", id: "dJ6y8FZp2QY" }
    ]
  },
  {
    name: "الشيخ مشاري راشد",
    description: "تلاوات مختارة في رمضان",
    videos: [
      { title: "سورة الرحمن", id: "Z8k4rN6G9bE" },
      { title: "سورة يوسف", id: "Y9n0a5Y4V9E" }
    ]
  }
];
