export interface Product {
  id: string;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  price: number;
  image: string;
  category: 'premium' | 'gift' | 'stuffed';
  isOrganic: boolean;
}

export const mockProducts: Product[] = [
  {
    id: "p1",
    name_en: "Royal Ajwa Dates",
    name_ar: "تمور عجوة مَلَكية",
    description_en: "Exclusive Ajwa dates from the heart of Al-Madinah, reserved for royalty.",
    description_ar: "تمور العجوة الحصرية من قلب المدينة المنورة، مخصصة للملوك.",
    price: 150,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Medjool_dates_as_luxury_item.jpg",
    category: "premium",
    isOrganic: true
  },
  {
    id: "p2",
    name_en: "Premium Medjool",
    name_ar: "مجدول فاخر",
    description_en: "Large, sweet and succulent Medjool dates, affectionately known as the 'King of Dates'.",
    description_ar: "تمور مجدولة كبيرة وحلوة وطرية، تُعرف بمودة باسم \"ملك التمور\".",
    price: 90,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Medjool-Date.jpg",
    category: "premium",
    isOrganic: true
  },
  {
    id: "p3",
    name_en: "Al-Bariq Signature Gift Box",
    name_ar: "صندوق هدايا البرق المميز",
    description_en: "An elegant black and gold gift box featuring an assortment of our finest dates.",
    description_ar: "صندوق هدايا أنيق باللونين الأسود والذهبي يضم تشكيلة من أروع تمورنا.",
    price: 250,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Bowl_of_Dates.jpg",
    category: "gift",
    isOrganic: false
  },
  {
    id: "p4",
    name_en: "Pistachio Stuffed Khidri",
    name_ar: "خضري محشو بالفستق",
    description_en: "Chewy Khidri dates generously stuffed with roasted premium pistachios.",
    description_ar: "تمور خضري لذيذة محشوة بسخاء بالفستق المحمص الفاخر.",
    price: 120,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Medjool_dates_with_cambozola_cheese_and_almonds_%288546218569%29.jpg",
    category: "stuffed",
    isOrganic: false
  },
  {
    id: "p5",
    name_en: "Mabroom Delights",
    name_ar: "مفروم ديلايتس",
    description_en: "Long, slender dates with a subtle sweetness and a firm, chewy texture.",
    description_ar: "تمور طويلة ونحيلة ذات حلاوة خفيفة وملمس ثابت ولزج.",
    price: 85,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/DATES_MEDJOOL.jpg",
    category: "premium",
    isOrganic: true
  },
  {
    id: "p6",
    name_en: "Royal Gold Gift Set",
    name_ar: "مجموعة هدايا رويال جولد",
    description_en: "A prestigious gift set with gold leaf detailing, perfect for special occasions.",
    description_ar: "مجموعة هدايا مرموقة مع تفاصيل أوراق الذهب، مثالية للمناسبات الخاصة.",
    price: 450,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/DriedDates.JPG",
    category: "gift",
    isOrganic: false
  }
];
