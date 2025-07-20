"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define available languages
export type LanguageCode = "en" | "ar" | "az"

type LanguageContextType = {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
  dir: "ltr",
})

// Translations for each language
const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.tours": "Tours",
    "nav.contact": "Contact Us",

    // Home page
    "home.discover": "Discover",
    "home.explore": "Explore Tours",
    "home.featuredTours": "Featured Tour Packages",
    "home.viewDetails": "View Details",
    "home.whyChooseUs": "Why Choose Us",
    "home.arabicDrivers": "Arabic-Speaking Drivers",
    "home.arabicDriversDesc":
      "All our drivers are fluent in Arabic, making communication easy and comfortable throughout your journey.",
    "home.expertGuides": "Expert Local Guides",
    "home.expertGuidesDesc": "Our guides are locals who know every hidden gem in Azerbaijan.",
    "home.customized": "Customized Experiences",
    "home.customizedDesc": "We tailor each tour to match your interests and preferences.",
    "home.authentic": "Authentic Cultural Immersion",
    "home.authenticDesc": "Experience the true culture and traditions of Azerbaijan.",
    "home.readyToExplore": "Ready to Explore Azerbaijan?",
    "home.contactUsNow": "Contact Us Now",
    "home.scrollDown": "Scroll Down",
    "home.viewAllTourPackages": "View All Tour Packages",
    "home.hearWhatClientsSay": "Hear what our clients have to say about their unforgettable experiences with us.",
    "home.personalizedJourney":
      "Let us create a personalized journey that matches your interests and preferences. Contact us today to start planning your unforgettable adventure.",

    // Packages page
    "packages.title": "Tour Packages",
    "packages.subtitle":
      "Discover Azerbaijan with our carefully curated tour packages. From city explorations to mountain retreats, we offer unforgettable experiences.",
    "packages.showMore": "Show More",
    "packages.showLess": "Show Less",
    "packages.seeDetails": "See Details",
    "packages.highlights": "Highlights:",
    "packages.duration": "Duration",
    "packages.groupSize": "Group Size",
    "packages.startingFrom": "Starting from",
    "packages.readyToExplore": "Ready to Explore These Amazing Cities?",
    "packages.letUsGuide":
      "Let us guide you through the wonders of Azerbaijan with our expert local knowledge and personalized service.",

    // City details
    "city.about": "About",
    "city.history": "History",
    "city.culturalNotes": "Cultural Notes",
    "city.whyVisit": "Why Visit",
    "city.attractions": "Top Attractions in",
    "city.readyToExplore": "Ready to Explore",
    "city.contactToVisit": "Contact Us to Plan Your Visit",
    "city.backToCities": "Back to all cities",
    "city.richHeritage": "Rich cultural heritage and history",
    "city.uniqueArchitecture": "Unique architectural monuments",
    "city.authenticExperiences": "Authentic local experiences",
    "city.traditionalCrafts": "Traditional crafts and cuisine",
    "city.breathtakingLandscapes": "Breathtaking natural landscapes",

    // About page
    "about.title": "About Us",
    "about.whoAreWe": "Who Are We?",
    "about.whoAreWeContent1":
      "TravelBakufromArabia was founded in 2018 by Mohammed Al-Farsi, an Arab traveler who fell in love with Azerbaijan during his first visit. After spending several years exploring every corner of this beautiful country, Mohammed decided to create a specialized travel agency to help other Arab travelers discover the hidden gems of Azerbaijan.",
    "about.whoAreWeContent2":
      "Our team consists of passionate travel experts who have extensive knowledge of Azerbaijan's culture, history, and landscapes. We pride ourselves on creating authentic experiences that go beyond typical tourist attractions, allowing our clients to truly immerse themselves in the local way of life.",
    "about.whoAreWeContent3":
      "Based in Baku with a satellite office in Dubai, we serve clients from across the Arab world who are looking for unique travel experiences in the Caucasus region. Our multilingual guides speak Arabic, Azerbaijani, English, and Russian, ensuring seamless communication throughout your journey.",
    "about.founderStory": "Our Founder's Story",
    "about.founderName": "Mohammed Al-Farsi",
    "about.founderContent1":
      "\"My journey with Azerbaijan began in 2015 when I visited Baku for a business conference. What was supposed to be a brief trip turned into a three-week adventure as I fell in love with the country's diverse landscapes, rich culture, and warm hospitality.",
    "about.founderContent2":
      "I was particularly fascinated by the unique blend of Eastern and Western influences that shape Azerbaijan's identity. As someone who grew up in Saudi Arabia and studied in Europe, I found myself drawn to this cultural crossroads.",
    "about.founderContent3":
      "After returning home, I couldn't stop thinking about Azerbaijan. I decided to learn the language, starting with basic phrases and eventually becoming conversational. I bought a Mercedes G-Class for my explorations and spent the next two years traveling throughout the country, from the Caspian Sea coast to the remote mountain villages of the Greater Caucasus. These experiences inspired me to create TravelBakufromArabia, to share my passion for this remarkable country with fellow travelers from the Arab world.\"",
    "about.values": "Our Values",
    "about.value1Title": "Authentic Experiences",
    "about.value1Desc":
      "We believe travel should be transformative. Our tours go beyond sightseeing to offer genuine cultural immersion and meaningful connections with local communities.",
    "about.value2Title": "Responsible Tourism",
    "about.value2Desc":
      "We are committed to sustainable travel practices that respect the environment and benefit local economies. We partner with eco-friendly accommodations and support community initiatives.",
    "about.value3Title": "Personalized Service",
    "about.value3Desc":
      "No two travelers are alike. We take the time to understand your interests and preferences to create customized itineraries that reflect your unique travel style.",
    "about.whyChooseUs": "Why Choose Us",
    "about.reason1Title": "Arabic-Speaking Drivers",
    "about.reason1Desc":
      "All our drivers are fluent in Arabic, ensuring smooth communication and a comfortable experience throughout your journey in Azerbaijan.",
    "about.reason2Title": "Insider Knowledge",
    "about.reason2Desc":
      "Our team has explored every corner of Azerbaijan, discovering hidden gems that most tourists never see. We share these special places with you.",
    "about.reason3Title": "Personalized Service",
    "about.reason3Desc":
      "We understand that each traveler has unique needs. As your driver and guide, I'll help you find suitable accommodations and dining options based on your preferences.",
    "about.reason4Title": "24/7 Support",
    "about.reason4Desc":
      "I'm available around the clock to assist with any questions or concerns that may arise during your trip.",
    "about.reason5Title": "Luxury Transportation",
    "about.reason5Desc":
      "Travel in comfort with our premium vehicles, including Mercedes-Benz for a smooth and enjoyable journey.",
    "about.reason6Title": "Local Connections",
    "about.reason6Desc":
      "My strong local relationships allow me to recommend authentic experiences not available to the general public, from local restaurants to special cultural events.",
    "about.photoGallery": "Photo Gallery",
    "about.photoGalleryDesc": "Browse through photos of our vehicles, travels, and experiences across Azerbaijan.",

    // Contact page
    "contact.title": "Contact Us",
    "contact.getInTouch": "Get In Touch",
    "contact.getInTouchDesc":
      "Have questions about our tours or need help planning your trip to Azerbaijan? We're here to help! Reach out to us using any of the methods below.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.followUs": "Follow Us",
    "contact.sendMessage": "Send Us a Message",
    "contact.yourName": "Your Name",
    "contact.emailAddress": "Email Address",
    "contact.subject": "Subject",
    "contact.yourMessage": "Your Message",
    "contact.send": "Send Message",
    "contact.formSubmitted": "Thank you for your message! We will get back to you soon.",
    "contact.emailValue": "TravelBakufromArabia@gmail.com",
    "contact.addressValue": "Baku, Azerbaijan",

    // Tour details
    "tour.back": "Back to all packages",
    "tour.bookNow": "Book This Tour",
    "tour.included": "What's Included",
    "tour.notIncluded": "What's Not Included",
    "tour.needHelp": "Need Help?",
    "tour.needHelpDesc": "Have questions about this tour? Contact our travel experts for assistance.",
    "tour.contactUs": "Contact Us",
    "tour.itinerary": "Detailed Itinerary",
    "tour.day": "Day",
    "tour.activities": "Activities:",
    "tour.highlights": "Highlights",
    "tour.driverGuide": "Professional driver and guide services",
    "tour.transportation": "Transportation in comfortable vehicle",
    "tour.arabicDriver": "Arabic-speaking driver",
    "tour.assistance": "Assistance with finding restaurants and accommodations",
    "tour.guidance": "Guidance to all attractions mentioned in itinerary",
    "tour.accommodation": "Accommodation costs (hotels, guesthouses)",
    "tour.meals": "Meals and food expenses",
    "tour.entranceFees": "Entrance fees to attractions",
    "tour.flights": "International flights",
    "tour.insurance": "Travel insurance",
    "tour.personal": "Personal expenses",
    "tour.photoGallery": "Photo Gallery",
    "tour.testimonials": "What Our Clients Say",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.quickLinks": "Quick Links",
    "footer.contactUs": "Contact Us",
    "footer.newsletter": "Newsletter",
    "footer.subscribeText": "Subscribe to our newsletter for the latest updates on tours and special offers.",
    "footer.yourEmail": "Your email address",
    "footer.subscribe": "Subscribe",
    "footer.thankYou": "Thank you for subscribing!",
    "footer.aboutShort":
      "Discover the beauty of Azerbaijan with our personalized tour packages. From the vibrant capital of Baku to the serene mountain retreats, we offer unforgettable experiences.",

    // Tour packages common
    "tours.common.includes.guide": "Professional guide",
    "tours.common.includes.pickup": "Hotel pickup",
    "tours.common.includes.lunch": "Lunch",
    "tours.common.includes.entranceFees": "Entrance fees",
    "tours.common.includes.water": "Bottled water",
    "tours.common.includes.transportation": "Transportation",
    "tours.common.excludes.personalExpenses": "Personal expenses",
    "tours.common.excludes.optionalActivities": "Optional activities",
    "tours.common.excludes.hotels": "Hotels and reservations",
    "tours.common.excludes.lunch": "Lunch",
    "tours.common.excludes.souvenirs": "Souvenir purchases",

    // Baku Tour
    "tours.bakuTour.title": "Baku City Tour",
    "tours.bakuTour.duration": "1 day",
    "tours.bakuTour.groupSize": "2-7 people",
    "tours.bakuTour.location": "Baku",
    "tours.bakuTour.description": "Explore the vibrant capital of Azerbaijan with our comprehensive city tour.",

    // Qabala Tour
    "tours.qabalaTour.title": "Qabala Tour",
    "tours.qabalaTour.duration": "1 day",
    "tours.qabalaTour.groupSize": "2-7 people",
    "tours.qabalaTour.location": "Qabala",
    "tours.qabalaTour.description": "Discover the natural beauty of Qabala with this day tour from Baku.",
    "tours.qabalaTour.excludes.cableCar": "Cable car tickets",

    // Quba Tour
    "tours.qubaTour.title": "Quba Tour",
    "tours.qubaTour.duration": "1 day",
    "tours.qubaTour.groupSize": "2-7 people",
    "tours.qubaTour.location": "Quba",
    "tours.qubaTour.description": "Explore the charming town of Quba, known for its apple orchards and carpet weaving traditions.",
    "tours.qubaTour.excludes.carpetWorkshop": "Carpet workshop entrance",

    // Qusar Tour
    "tours.qusarTour.title": "Qusar Tour",
    "tours.qusarTour.duration": "1 day",
    "tours.qusarTour.groupSize": "2-7 people",
    "tours.qusarTour.location": "Qusar",
    "tours.qusarTour.description": "Visit the beautiful mountain resort of Shahdag and experience winter sports or summer hiking.",
    "tours.qusarTour.excludes.skiEquipment": "Ski equipment rental",
    "tours.qusarTour.excludes.liftPasses": "Ski lift passes",

    // Ismayilli Tour
    "tours.ismayilliTour.title": "Ismayilli Tour",
    "tours.ismayilliTour.duration": "1 day",
    "tours.ismayilliTour.groupSize": "2-7 people",
    "tours.ismayilliTour.location": "Ismayilli",
    "tours.ismayilliTour.description": "Experience the wine region of Azerbaijan and discover local vineyards.",
    "tours.ismayilliTour.excludes.wineTasting": "Wine tasting fees",

    // Sheki Tour
    "tours.shekiTour.title": "Sheki Tour",
    "tours.shekiTour.duration": "1 day",
    "tours.shekiTour.groupSize": "2-7 people",
    "tours.shekiTour.location": "Sheki",
    "tours.shekiTour.description": "Visit the historic city of Sheki and its famous Khan Palace.",

    // Transport Service
    "tours.transport.title": "Transport Service",
    "tours.transport.duration": "Flexible",
    "tours.transport.groupSize": "1-4 people",
    "tours.transport.location": "Any location",
    "tours.transport.description": "Professional transportation service with Arabic-speaking driver.",
    "tours.transport.includes.driver": "Professional Arabic-speaking driver",
    "tours.transport.includes.vehicle": "Comfortable vehicle",
    "tours.transport.includes.fuel": "Fuel costs included",
    "tours.transport.includes.meetGreet": "Meet & greet service",
    "tours.transport.includes.luggage": "Luggage assistance",
    "tours.transport.excludes.guide": "Tour guide services",
    "tours.transport.excludes.entranceFees": "Entrance fees",

    "tour.dailyTours": "Daily Tours",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.tours": "الجولات",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",

    // Home page
    "home.discover": "اكتشف",
    "home.explore": "استكشف الجولات",
    "home.featuredTours": "باقات الجولات المميزة",
    "home.viewDetails": "عرض التفاصيل",
    "home.whyChooseUs": "لماذا تختارنا",
    "home.arabicDrivers": "سائقون يتحدثون العربية",
    "home.arabicDriversDesc": "جميع سائقينا يتحدثون العربية بطلاقة، مما يجعل التواصل سهلاً ومريحاً طوال رحلتك.",
    "home.expertGuides": "مرشدون محليون خبراء",
    "home.expertGuidesDesc": "مرشدونا من السكان المحليين الذين يعرفون كل الأماكن المخفية في أذربيجان.",
    "home.customized": "تجارب مخصصة",
    "home.customizedDesc": "نقوم بتخصيص كل جولة لتتناسب مع اهتماماتك وتفضيلاتك.",
    "home.authentic": "انغماس ثقافي أصيل",
    "home.authenticDesc": "استمتع بالثقافة والتقاليد الحقيقية لأذربيجان.",
    "home.readyToExplore": "هل أنت مستعد لاستكشاف أذربيجان؟",
    "home.contactUsNow": "اتصل بنا الآن",
    "home.scrollDown": "مرر لأسفل",
    "home.viewAllTourPackages": "عرض جميع باقات الجولات",
    "home.hearWhatClientsSay": "اسمع ما يقوله عملاؤنا عن تجاربهم التي لا تُنسى معنا.",
    "home.personalizedJourney":
      "دعنا نصمم لك رحلة مخصصة تناسب اهتماماتك وتفضيلاتك. اتصل بنا اليوم لبدء التخطيط لمغامرتك التي لا تُنسى.",

    // Packages page
    "packages.title": "باقات الجولات",
    "packages.subtitle":
      "اكتشف أذربيجان مع باقات الجولات المختارة بعناية. من استكشافات المدينة إلى ملاذات الجبال، نقدم تجارب لا تُنسى.",
    "packages.showMore": "عرض المزيد",
    "packages.showLess": "عرض أقل",
    "packages.seeDetails": "مشاهدة التفاصيل",
    "packages.highlights": "أبرز المعالم:",
    "packages.duration": "المدة",
    "packages.groupSize": "حجم المجموعة",
    "packages.startingFrom": "الانطلاق من",
    "packages.readyToExplore": "هل أنت مستعد لاستكشاف هذه المدن الرائعة؟",
    "packages.letUsGuide": "دعنا نرشدك عبر عجائب أذربيجان بمعرفتنا المحلية الخبيرة وخدمتنا الشخصية.",

    // City details
    "city.about": "حول",
    "city.history": "التاريخ",
    "city.culturalNotes": "ملاحظات ثقافية",
    "city.whyVisit": "لماذا تزور",
    "city.attractions": "أهم المعالم السياحية في",
    "city.readyToExplore": "هل أنت مستعد لاستكشاف",
    "city.contactToVisit": "اتصل بنا لتخطيط زيارتك",
    "city.backToCities": "العودة إلى جميع المدن",
    "city.richHeritage": "تراث ثقافي وتاريخي غني",
    "city.uniqueArchitecture": "معالم معمارية فريدة",
    "city.authenticExperiences": "تجارب محلية أصيلة",
    "city.traditionalCrafts": "حرف وأطعمة تقليدية",
    "city.breathtakingLandscapes": "مناظر طبيعية خلابة",

    // About page
    "about.title": "من نحن",
    "about.whoAreWe": "من نحن؟",
    "about.whoAreWeContent1":
      "تأسست شركة TravelBakufromArabia في عام 2018 على يد محمد الفارسي، وهو مسافر عربي وقع في حب أذربيجان خلال زيارته الأولى. بعد قضاء عدة سنوات في استكشاف كل ركن من أركان هذا البلد الجميل، قرر محمد إنشاء وكالة سفر متخصصة لمساعدة المسافرين العرب الآخرين على اكتشاف الكنوز الخفية في أذربيجان.",
    "about.whoAreWeContent2":
      "يتكون فريقنا من خبراء سفر متحمسين لديهم معرفة واسعة بثقافة وتاريخ ومناظر أذربيجان الطبيعية. نحن نفخر بإنشاء تجارب أصيلة تتجاوز مناطق الجذب السياحي النموذجية، مما يتيح لعملائنا الانغماس حقًا في أسلوب الحياة المحلي.",
    "about.whoAreWeContent3":
      "يقع مقرنا في باكو مع مكتب فرعي في دبي، ونخدم العملاء من جميع أنحاء العالم العربي الذين يبحثون عن تجارب سفر فريدة في منطقة القوقاز. يتحدث مرشدونا متعددو اللغات العربية والأذربيجانية والإنجليزية والروسية، مما يضمن التواصل السلس طوال رحلتك.",
    "about.founderStory": "قصة المؤسس",
    "about.founderName": "محمد الفارسي",
    "about.founderContent1":
      '"بدأت رحلتي مع أذربيجان في عام 2015 عندما زرت باكو لحضور مؤتمر للأعمال. ما كان من المفترض أن يكون رحلة قصيرة تحول إلى مغامرة استمرت ثلاثة أسابيع حيث وقعت في حب المناظر الطبيعية المتنوعة للبلاد وثقافتها الغنية وضيافتها الدافئة.',
    "about.founderContent2":
      "كنت مفتونًا بشكل خاص بالمزيج الفريد من التأثيرات الشرقية والغربية التي تشكل هوية أذربيجان. بصفتي شخصًا نشأ في المملكة العربية السعودية ودرس في أوروبا، وجدت نفسي منجذبًا إلى هذا التقاطع الثقافي.",
    "about.founderContent3":
      'بعد العودة إلى الوطن، لم أستطع التوقف عن التفكير في أذربيجان. قررت تعلم اللغة، بدءًا من العبارات الأساسية وأصبحت في النهاية محادثًا. اشتريت سيارة مرسيدس G-Class لاستكشافاتي وقضيت العامين التاليين في السفر في جميع أنحاء البلاد، من ساحل بحر قزوين إلى القرى الجبلية النائية في القوقاز الكبير. ألهمتني هذه التجارب لإنشاء TravelBakufromArabia، لمشاركة شغفي بهذا البلد الرائع مع المسافرين من العالم العربي."',
    "about.values": "قيمنا",
    "about.value1Title": "تجارب أصيلة",
    "about.value1Desc":
      "نؤمن بأن السفر يجب أن يكون تحويليًا. تتجاوز جولاتنا مشاهدة المعالم السياحية لتقديم انغماس ثقافي حقيقي وروابط ذات معنى مع المجتمعات المحلية.",
    "about.value2Title": "السياحة المسؤولة",
    "about.value2Desc":
      "نحن ملتزمون بممارسات السفر المستدامة التي تحترم البيئة وتفيد الاقتصادات المحلية. نتعاون مع أماكن إقامة صديقة للبيئة وندعم مبادرات المجتمع.",
    "about.value3Title": "خدمة شخصية",
    "about.value3Desc":
      "لا يوجد مسافران متشابهان. نأخذ الوقت الكافي لفهم اهتماماتك وتفضيلاتك لإنشاء مسارات مخصصة تعكس أسلوب سفرك الفريد.",
    "about.whyChooseUs": "لماذا تختارنا",
    "about.reason1Title": "سائقون يتحدثون العربية",
    "about.reason1Desc":
      "جميع سائقينا يتحدثون العربية بطلاقة، مما يضمن تواصلًا سلسًا وتجربة مريحة طوال رحلتك في أذربيجان",
    "about.reason2Title": "معرفة داخلية",
    "about.reason2Desc":
      "استكشف فريقنا كل ركن من أركان أذربيجان، واكتشف الجواهر الخفية التي لا يراها معظم السياح أبدًا. نشارك هذه الأماكن الخاصة معك.",
    "about.reason3Title": "خدمة شخصية",
    "about.reason3Desc":
      "نحن نفهم أن كل مسافر لديه احتياجات فريدة. بصفتي سائقك ومرشدك، سأساعدك في العثور على أماكن إقامة ومطاعم مناسبة بناءً على تفضيلاتك.",
    "about.reason4Title": "دعم على مدار الساعة",
    "about.reason4Desc": "أنا متاح على مدار الساعة للمساعدة في أي أسئلة أو مخاوف قد تنشأ أثناء رحلتك.",
    "about.reason5Title": "نقل فاخر",
    "about.reason5Desc": "سافر براحة مع سياراتنا الفاخرة، بما في ذلك مرسيدس بنز للحصول على رحلة سلسة وممتعة.",
    "about.reason6Title": "اتصالات محلية",
    "about.reason6Desc":
      "تتيح لي علاقاتي المحلية القوية التوصية بتجارب أصيلة غير متاحة للجمهور العام، من المطاعم المحلية إلى الفعاليات الثقافية الخاصة.",
    "about.photoGallery": "معرض الصور",
    "about.photoGalleryDesc": "تصفح صور سياراتنا ورحلاتنا وتجاربنا في جميع أنحاء أذربيجان.",

    // Contact page
    "contact.title": "اتصل بنا",
    "contact.getInTouch": "تواصل معنا",
    "contact.getInTouchDesc":
      "هل لديك أسئلة حول جولاتنا أو تحتاج إلى مساعدة في تخطيط رحلتك إلى أذربيجان؟ نحن هنا للمساعدة! تواصل معنا باستخدام أي من الطرق أدناه.",
    "contact.phone": "الهاتف",
    "contact.email": "البريد الإلكتروني",
    "contact.address": "العنوان",
    "contact.followUs": "تابعنا",
    "contact.sendMessage": "أرسل لنا رسالة",
    "contact.yourName": "اسمك",
    "contact.emailAddress": "البريد الإلكتروني",
    "contact.subject": "الموضوع",
    "contact.yourMessage": "رسالتك",
    "contact.send": "إرسال الرسالة",
    "contact.formSubmitted": "شكرًا لرسالتك! سنعود إليك قريبًا.",
    "contact.emailValue": "TravelBakufromArabia@gmail.com",
    "contact.addressValue": "باكو، أذربيجان",

    // Tour details
    "tour.back": "العودة إلى جميع الباقات",
    "tour.bookNow": "احجز هذه الجولة",
    "tour.included": "ما هو مشمول",
    "tour.notIncluded": "ما هو غير مشمول",
    "tour.needHelp": "بحاجة إلى مساعدة؟",
    "tour.needHelpDesc": "هل لديك أسئلة حول هذه الجولة؟ اتصل بخبراء السفر لدينا للحصول على المساعدة.",
    "tour.contactUs": "اتصل بنا",
    "tour.itinerary": "تفاصيل المسار",
    "tour.day": "اليوم",
    "tour.activities": "الأنشطة:",
    "tour.highlights": "أبرز المعالم",
    "tour.driverGuide": "خدمات سائق ومرشد محترف",
    "tour.transportation": "النقل في مركبة مريحة",
    "tour.arabicDriver": "سائق يتحدث العربية",
    "tour.assistance": "المساعدة في العثور على المطاعم وأماكن الإقامة",
    "tour.guidance": "الإرشاد إلى جميع المعالم المذكورة في المسار",
    "tour.accommodation": "تكاليف الإقامة (فنادق، بيوت ضيافة)",
    "tour.meals": "وجبات الطعام ونفقات الطعام",
    "tour.entranceFees": "رسوم دخول المعالم السياحية",
    "tour.flights": "الرحلات الجوية الدولية",
    "tour.insurance": "تأمين السفر",
    "tour.personal": "النفقات الشخصية",
    "tour.photoGallery": "معرض الصور",
    "tour.testimonials": "ما يقوله عملاؤنا",

    // Footer
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contactUs": "اتصل بنا",
    "footer.newsletter": "النشرة الإخبارية",
    "footer.subscribeText": "اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات حول الجولات والعروض الخاصة.",
    "footer.yourEmail": "عنوان بريدك الإلكتروني",
    "footer.subscribe": "اشترك",
    "footer.thankYou": "شكرًا لاشتراكك!",
    "footer.aboutShort":
      "اكتشف جمال أذربيجان مع باقات الجولات المخصصة لدينا. من العاصمة النابضة بالحياة باكو إلى ملاذات الجبال الهادئة، نقدم تجارب لا تُنسى.",

    // Tour packages common
    "tours.common.includes.guide": "مرشد سياحي محترف",
    "tours.common.includes.pickup": "توصيل من الفندق",
    "tours.common.includes.lunch": "الغداء",
    "tours.common.includes.entranceFees": "رسوم الدخول",
    "tours.common.includes.water": "مياه معدنية",
    "tours.common.includes.transportation": "المواصلات",
    "tours.common.excludes.personalExpenses": "المصروفات الشخصية",
    "tours.common.excludes.optionalActivities": "الأنشطة الاختيارية",
    "tours.common.excludes.hotels": "الفنادق والحجوزات",
    "tours.common.excludes.lunch": "الغداء",
    "tours.common.excludes.souvenirs": "مشتريات التذكارات",

    // Baku Tour
    "tours.bakuTour.title": "جولة مدينة باكو",
    "tours.bakuTour.duration": "يوم واحد",
    "tours.bakuTour.groupSize": "2-7 أشخاص",
    "tours.bakuTour.location": "باكو",
    "tours.bakuTour.description": "اكتشف عاصمة أذربيجان النابضة بالحياة مع جولتنا الشاملة في المدينة.",

    // Qabala Tour
    "tours.qabalaTour.title": "جولة قبلة",
    "tours.qabalaTour.duration": "يوم واحد",
    "tours.qabalaTour.groupSize": "2-7 أشخاص",
    "tours.qabalaTour.location": "قبلة",
    "tours.qabalaTour.description": "اكتشف الجمال الطبيعي لقبلة مع هذه الجولة اليومية من باكو.",
    "tours.qabalaTour.excludes.cableCar": "تذاكر التلفريك",

    // Quba Tour
    "tours.qubaTour.title": "جولة قوبا",
    "tours.qubaTour.duration": "يوم واحد",
    "tours.qubaTour.groupSize": "2-7 أشخاص",
    "tours.qubaTour.location": "قوبا",
    "tours.qubaTour.description": "اكتشف مدينة قوبا الساحرة، المعروفة ببساتين التفاح وتقاليد نسج السجاد.",
    "tours.qubaTour.excludes.carpetWorkshop": "دخول ورشة السجاد",

    // Qusar Tour
    "tours.qusarTour.title": "جولة قوسار",
    "tours.qusarTour.duration": "يوم واحد",
    "tours.qusarTour.groupSize": "2-7 أشخاص",
    "tours.qusarTour.location": "قوسار",
    "tours.qusarTour.description": "زيارة منتجع شاهداغ الجبلي الجميل وتجربة الرياضات الشتوية أو المشي لمسافات طويلة في الصيف.",
    "tours.qusarTour.excludes.skiEquipment": "تأجير معدات التزلج",
    "tours.qusarTour.excludes.liftPasses": "تذاكر المصعد",

    // Ismayilli Tour
    "tours.ismayilliTour.title": "جولة إسماعيلي",
    "tours.ismayilliTour.duration": "يوم واحد",
    "tours.ismayilliTour.groupSize": "2-7 أشخاص",
    "tours.ismayilliTour.location": "إسماعيلي",
    "tours.ismayilliTour.description": "تجربة منطقة النبيذ في أذربيجان واكتشاف الكروم المحلية.",
    "tours.ismayilliTour.excludes.wineTasting": "رسوم تذوق النبيذ",

    // Sheki Tour
    "tours.shekiTour.title": "جولة شكي",
    "tours.shekiTour.duration": "يوم واحد",
    "tours.shekiTour.groupSize": "2-7 أشخاص",
    "tours.shekiTour.location": "شكي",
    "tours.shekiTour.description": "زيارة مدينة شكي التاريخية وقصر الخان الشهير.",

    // Transport Service
    "tours.transport.title": "خدمة النقل",
    "tours.transport.duration": "مرن",
    "tours.transport.groupSize": "1-4 أشخاص",
    "tours.transport.location": "أي موقع",
    "tours.transport.description": "خدمة نقل احترافية مع سائق يتحدث العربية.",
    "tours.transport.includes.driver": "سائق محترف يتحدث العربية",
    "tours.transport.includes.vehicle": "سيارة مريحة",
    "tours.transport.includes.fuel": "تكاليف الوقود مشمولة",
    "tours.transport.includes.meetGreet": "خدمة الاستقبال والترحيب",
    "tours.transport.includes.luggage": "المساعدة في الأمتعة",
    "tours.transport.excludes.guide": "خدمات المرشد السياحي",
    "tours.transport.excludes.entranceFees": "رسوم الدخول",

    "tour.dailyTours": "جولات يومية",
  },
  az: {
    // Navigation
    "nav.home": "Ana Səhifə",
    "nav.tours": "Turlar",
    "nav.about": "Haqqımızda",
    "nav.contact": "Əlaqə",

    // Home page
    "home.discover": "Kəşf et",
    "home.explore": "Turları Kəşf et",
    "home.featuredTours": "Seçilmiş Tur Paketləri",
    "home.viewDetails": "Ətraflı Bax",
    "home.whyChooseUs": "Niyə Bizi Seçməlisiniz",
    "home.arabicDrivers": "Ərəb dilli Sürücülər",
    "home.arabicDriversDesc":
      "Bütün sürücülərimiz ərəb dilində sərbəst danışırlar, bu da səyahətiniz boyunca ünsiyyəti asan və rahat edir.",
    "home.expertGuides": "Peşəkar Yerli Bələdçilər",
    "home.expertGuidesDesc": "Bələdçilərimiz Azərbaycanın hər gizli guşəsini tanıyan yerli sakinlərdir.",
    "home.customized": "Fərdi Təcrübələr",
    "home.customizedDesc": "Hər turu sizin maraqlarınıza və üstünlüklərinizə uyğun hazırlayırıq.",
    "home.authentic": "Orijinal Mədəni İmmersiya",
    "home.authenticDesc": "Azərbaycanın həqiqi mədəniyyətini və ənənələrini yaşayın.",
    "home.readyToExplore": "Azərbaycanı Kəşf Etməyə Hazırsınız?",
    "home.contactUsNow": "İndi Bizimlə Əlaqə Saxlayın",
    "home.scrollDown": "Aşağı Sürüşdür",
    "home.viewAllTourPackages": "Bütün Tur Paketlərinə Baxın",
    "home.hearWhatClientsSay":
      "Müştərilərimizin bizimlə yaşadıqları unudulmaz təcrübələr haqqında dediklərini dinləyin.",
    "home.personalizedJourney":
      "Sizin maraqlarınıza və üstünlüklərinizə uyğun fərdi səyahət yaradaq. Unudulmaz macəranızı planlaşdırmağa başlamaq üçün bu gün bizimlə əlaqə saxlayın.",

    // Packages page
    "packages.title": "Tur Paketləri",
    "packages.subtitle":
      "Diqqətlə hazırlanmış tur paketlərimizlə Azərbaycanı kəşf edin. Şəhər gəzintilərdən dağ istirahətinə qədər, biz unudulmaz təcrübələr təklif edirik.",
    "packages.showMore": "Daha Çox Göstər",
    "packages.showLess": "Daha Az Göstər",
    "packages.seeDetails": "Ətraflı Bax",
    "packages.highlights": "Əsas Məqamlar:",
    "packages.duration": "Müddət",
    "packages.groupSize": "Qrup Ölçüsü",
    "packages.startingFrom": "Başlanğıc nöqtəsi",
    "packages.readyToExplore": "Bu Möhtəşəm Şəhərləri Kəşf Etməyə Hazırsınız?",
    "packages.letUsGuide":
      "Ekspert yerli biliklərimiz və fərdi xidmətimizlə sizi Azərbaycanın möcüzələri ilə tanış edək.",

    // City details
    "city.about": "Haqqında",
    "city.history": "Tarix",
    "city.culturalNotes": "Mədəni Qeydlər",
    "city.whyVisit": "Niyə Ziyarət Etməli",
    "city.attractions": "Əsas Görməli Yerlər",
    "city.readyToExplore": "Kəşf etməyə hazırsınız",
    "city.contactToVisit": "Ziyarətinizi planlaşdırmaq üçün bizimlə əlaqə saxlayın",
    "city.backToCities": "Bütün şəhərlərə qayıt",
    "city.richHeritage": "Zəngin mədəni irs və tarix",
    "city.uniqueArchitecture": "Unikal memarlıq abidələri",
    "city.authenticExperiences": "Orijinal yerli təcrübələr",
    "city.traditionalCrafts": "Ənənəvi sənətkarlıq və mətbəx",
    "city.breathtakingLandscapes": "Heyrətamiz təbiət mənzərələri",

    // About page
    "about.title": "Haqqımızda",
    "about.whoAreWe": "Biz Kimik?",
    "about.whoAreWeContent1":
      "TravelBakufromArabia 2018-ci ildə ilk səfəri zamanı Azərbaycana aşiq olan ərəb səyyahı Mohammed Al-Farsi tərəfindən təsis edilmişdir. Bu gözəl ölkənin hər guşəsini bir neçə il ərzində kəşf etdikdən sonra, Mohammed digər ərəb səyyahlarına Azərbaycanın gizli incilərini kəşf etmək üçün ixtisaslaşmış səyahət agentliyi yaratmağa qərar verdi.",
    "about.whoAreWeContent2":
      "Komandamız Azərbaycanın mədəniyyəti, tarixi və landşaftları haqqında geniş biliyə malik həvəsli səyahət mütəxəssislərindən ibarətdir. Biz müştərilərimizə yerli həyat tərzinə həqiqətən daxil olmağa imkan verən, tipik turist cəlbediciliklərindən kənara çıxan orijinal təcrübələr yaratmaqla fəxr edirik.",
    "about.whoAreWeContent3":
      "Bakıda yerləşən və Dubayda peyk ofisi olan şirkətimiz, Qafqaz bölgəsində unikal səyahət təcrübələri axtaran ərəb dünyasının hər yerindən olan müştərilərə xidmət edir. Çoxdilli bələdçilərimiz ərəb, Azərbaycan, ingilis və rus dillərində danışırlar, bu da səyahətiniz boyunca səlis ünsiyyəti təmin edir.",
    "about.founderStory": "Təsisçimizin Hekayəsi",
    "about.founderName": "Mohammed Al-Farsi",
    "about.founderContent1":
      '"Mənim Azərbaycanla səyahətim 2015-ci ildə Bakıya bir biznes konfransına getdiyim zaman başladı. Qısa bir səyahət olması nəzərdə tutulan şey, ölkənin müxtəlif landşaftlarına, zəngin mədəniyyətinə və isti qonaqpərvərliyinə aşiq olduğum üçün üç həftəlik macəraya çevrildi.',
    "about.founderContent2":
      "Mən xüsusilə Azərbaycanın kimliyini formalaşdıran Şərq və Qərb təsirlərinin unikal qarışığına heyran idim. Səudiyyə Ərəbistanında böyüyən və Avropada təhsil alan biri kimi, özümü bu mədəni kəsişməyə cəlb olunmuş tapdım.",
    "about.founderContent3":
      'Evə qayıtdıqdan sonra Azərbaycan haqqında düşünməyi dayandıra bilmədim. Dili öyrənməyə qərar verdim, əsas ifadələrdən başlayaraq və nəhayət danışıq qabiliyyətinə çatdım. Kəşflərim üçün Mercedes G-Class aldım və növbəti iki ili ölkə boyunca səyahət etməklə keçirdim, Xəzər dənizi sahilindən Böyük Qafqazın ucqar dağ kəndlərinə qədər. Bu təcrübələr məni TravelBakufromArabia yaratmağa ilhamlandırdı, bu qeyri-adi ölkəyə olan ehtirasımı ərəb dünyasından olan həmkarlarımla bölüşmək üçün."',
    "about.values": "Dəyərlərimiz",
    "about.value1Title": "Orijinal Təcrübələr",
    "about.value1Desc":
      "Biz inanırıq ki, səyahət transformativ olmalıdır. Bizim turlarımız görməli yerlərdən kənara çıxaraq həqiqi mədəni immersiya və yerli icmalarla mənalı əlaqələr təklif edir.",
    "about.value2Title": "Məsuliyyətli Turizm",
    "about.value2Desc":
      "Biz ətraf mühitə hörmət edən və yerli iqtisadiyyatlara fayda verən davamlı səyahət təcrübələrinə sadiqik. Biz ekoloji cəhətdən təmiz yerləşmə yerləri ilə əməkdaşlıq edirik və icma təşəbbüslərini dəstəkləyirik.",
    "about.value3Title": "Fərdiləşdirilmiş Xidmət",
    "about.value3Desc":
      "Heç bir iki səyyah eyni deyil. Biz sizin maraqlarınızı və üstünlüklərinizi anlamaq üçün vaxt ayırırıq ki, unikal səyahət üslubunuzu əks etdirən fərdiləşdirilmiş marşrutlar yaradaq.",
    "about.whyChooseUs": "Niyə Bizi Seçməlisiniz",
    "about.reason1Title": "Ərəb dilli Sürücülər",
    "about.reason1Desc":
      "Bütün sürücülərimiz ərəb dilində sərbəst danışırlar, bu da Azərbaycanda səyahətiniz boyunca rahat ünsiyyət və rahat təcrübə təmin edir.",
    "about.reason2Title": "Daxili Bilik",
    "about.reason2Desc":
      "Komandamız Azərbaycanın hər guşəsini kəşf edib, əksər turistlərin heç vaxt görmədiyi gizli inciləri kəşf edib. Biz bu xüsusi yerləri sizinlə bölüşürük.",
    "about.reason3Title": "Fərdiləşdirilmiş Xidmət",
    "about.reason3Desc":
      "Biz hər bir səyyahın unikal ehtiyacları olduğunu anlayırıq. Sürücünüz və bələdçiniz kimi, mən sizə üstünlüklərinizə əsasən uyğun yerləşmə və yemək seçimləri tapmağa kömək edəcəyəm.",
    "about.reason4Title": "24/7 Dəstək",
    "about.reason4Desc":
      "Mən səyahətiniz zamanı yarana biləcək hər hansı sual və ya narahatlıqla bağlı kömək etmək üçün gün ərzində əlçatanam.",
    "about.reason5Title": "Lüks Nəqliyyat",
    "about.reason5Desc": "Premium avtomobillərimizlə, o cümlədən Mercedes-Benz ilə rahat və zövqlü səyahət edin.",
    "about.reason6Title": "Yerli Əlaqələr",
    "about.reason6Desc":
      "Güclü yerli əlaqələrim mənə yerli restoranlardan xüsusi mədəni tədbirlərə qədər geniş ictimaiyyətə açıq olmayan orijinal təcrübələr tövsiyə etməyə imkan verir.",
    "about.photoGallery": "Foto Qalereyası",
    "about.photoGalleryDesc":
      "Azərbaycan boyunca avtomobillərimizin, səyahətlərimizin və təcrübələrimizin şəkillərinə baxın.",

    // Contact page
    "contact.title": "Əlaqə",
    "contact.getInTouch": "Bizimlə Əlaqə Saxlayın",
    "contact.getInTouchDesc":
      "Turlarımız haqqında suallarınız var və ya Azərbaycana səyahətinizi planlaşdırmaqda köməyə ehtiyacınız var? Biz kömək etməyə hazırıq! Aşağıdakı üsullardan istifadə edərək bizimlə əlaqə saxlayın.",
    "contact.phone": "Telefon",
    "contact.email": "E-poçt",
    "contact.address": "Ünvan",
    "contact.followUs": "Bizi İzləyin",
    "contact.sendMessage": "Bizə Mesaj Göndərin",
    "contact.yourName": "Adınız",
    "contact.emailAddress": "E-poçt Ünvanı",
    "contact.subject": "Mövzu",
    "contact.yourMessage": "Mesajınız",
    "contact.send": "Mesaj Göndər",
    "contact.formSubmitted": "Mesajınız üçün təşəkkür edirik! Tezliklə sizə cavab verəcəyik.",
    "contact.emailValue": "TravelBakufromArabia@gmail.com",
    "contact.addressValue": "Bakı, Azərbaycan",

    // Tour details
    "tour.back": "Bütün paketlərə qayıt",
    "tour.bookNow": "Bu Turu Sifariş Et",
    "tour.included": "Daxil Olanlar",
    "tour.notIncluded": "Daxil Olmayanlar",
    "tour.needHelp": "Köməyə Ehtiyacınız Var?",
    "tour.needHelpDesc": "Bu tur haqqında suallarınız var? Yardım üçün səyahət mütəxəssislərimizlə əlaqə saxlayın.",
    "tour.contactUs": "Bizimlə Əlaqə Saxlayın",
    "tour.itinerary": "Ətraflı Marşrut",
    "tour.day": "Gün",
    "tour.activities": "Fəaliyyətlər:",
    "tour.highlights": "Əsas Məqamlar",
    "tour.driverGuide": "Peşəkar sürücü və bələdçi xidmətləri",
    "tour.transportation": "Rahat nəqliyyat vasitəsində daşınma",
    "tour.arabicDriver": "Ərəb dilli sürücü",
    "tour.assistance": "Restoran və yerləşmə yerlərini tapmaqda kömək",
    "tour.guidance": "Marşrutda qeyd olunan bütün cəlbedici yerlərə bələdçilik",
    "tour.accommodation": "Yerləşmə xərcləri (otellər, qonaq evləri)",
    "tour.meals": "Yeməklər və qida xərcləri",
    "tour.entranceFees": "Cəlbedici yerlərə giriş haqları",
    "tour.flights": "Beynəlxalq uçuşlar",
    "tour.insurance": "Səyahət sığortası",
    "tour.personal": "Şəxsi xərclər",
    "tour.photoGallery": "Foto Qalereyası",
    "tour.testimonials": "Müştərilərimiz nə deyir",

    // Footer
    "footer.rights": "Bütün hüquqlar qorunur.",
    "footer.quickLinks": "Sürətli Keçidlər",
    "footer.contactUs": "Bizimlə Əlaqə Saxlayın",
    "footer.newsletter": "Xəbər Bülleteni",
    "footer.subscribeText":
      "Turlar və xüsusi təkliflər haqqında ən son yenilikləri əldə etmək üçün xəbər bülletenimizə abunə olun.",
    "footer.yourEmail": "E-poçt ünvanınız",
    "footer.subscribe": "Abunə ol",
    "footer.thankYou": "Abunə olduğunuz üçün təşəkkür edirik!",
    "footer.aboutShort":
      "Fərdi tur paketlərimizlə Azərbaycanın gözəlliyini kəşf edin. Canlı paytaxt Bakıdan sakit dağ istirahət yerlərinə qədər, biz unudulmaz təcrübələr təklif edirik.",

    // Tour packages common
    "tours.common.includes.guide": "Peşəkar bələdçi",
    "tours.common.includes.pickup": "Hoteldən transfer",
    "tours.common.includes.lunch": "Nahar",
    "tours.common.includes.entranceFees": "Giriş haqları",
    "tours.common.includes.water": "Butulka su",
    "tours.common.includes.transportation": "Nəqliyyat",
    "tours.common.excludes.personalExpenses": "Şəxsi xərclər",
    "tours.common.excludes.optionalActivities": "Əlavə fəaliyyətlər",
    "tours.common.excludes.hotels": "Otellər və rezervasiyalar",
    "tours.common.excludes.lunch": "Nahar",
    "tours.common.excludes.souvenirs": "Suvenir alışları",

    // Baku Tour
    "tours.bakuTour.title": "Bakı Turu",
    "tours.bakuTour.duration": "1 gün",
    "tours.bakuTour.groupSize": "2-7 nəfər",
    "tours.bakuTour.location": "Bakı",
    "tours.bakuTour.description": "Azərbaycanın canlı paytaxtını bizim hərtərəfli şəhər turu ilə kəşf edin. Ərəbdilli sürücü və bələdçiniz sizə UNESCO-nun Dünya İrsi Siyahısına daxil edilmiş İçərişəhəri, məşhur Alov Qüllələrini göstərəcək və ən yaxşı yerli mətbəxi kəşf etməyə kömək edəcək.",

    // Qabala Tour
    "tours.qabalaTour.title": "Qəbələ Turu",
    "tours.qabalaTour.duration": "1 gün",
    "tours.qabalaTour.groupSize": "2-7 nəfər",
    "tours.qabalaTour.location": "Qəbələ",
    "tours.qabalaTour.description": "Bakıdan bir günlük turla Qəbələnin təbii gözəlliyini kəşf edin. Möhtəşəm dağ mənzərələrini seyr edin, Tufandağ Dağ Kurortunu ziyarət edin və sakit Nohur Gölündən həzz alın.",
    "tours.qabalaTour.excludes.cableCar": "Kanat yolu biletləri",

    // Quba Tour
    "tours.qubaTour.title": "Quba Turu",
    "tours.qubaTour.duration": "1 gün",
    "tours.qubaTour.groupSize": "2-7 nəfər",
    "tours.qubaTour.location": "Quba",
    "tours.qubaTour.description": "Alma bağları və xalça toxuma ənənələri ilə tanınan füsunkar Quba şəhərini kəşf edin. Dağ yəhudilərinin məskəni olan unikal Qırmızı Qəsəbəni ziyarət edin.",
    "tours.qubaTour.excludes.carpetWorkshop": "Xalça emalatxanası haqları",

    // Qusar Tour
    "tours.qusarTour.title": "Qusar Turu",
    "tours.qusarTour.duration": "1 gün",
    "tours.qusarTour.groupSize": "2-7 nəfər",
    "tours.qusarTour.location": "Qusar",
    "tours.qusarTour.description": "Azərbaycanın əsas xizək kurortu Şahdağın vətəni olan Qusarı ziyarət edin. Möhtəşəm dağ mənzərələrindən, ənənəvi kəndlərdən və təmiz dağ havasından həzz alın.",
    "tours.qusarTour.excludes.skiEquipment": "Xizək avadanlığı",
    "tours.qusarTour.excludes.liftPasses": "Lift biletləri",

    // Ismayilli Tour
    "tours.ismayilliTour.title": "İsmayıllı Turu",
    "tours.ismayilliTour.duration": "1 gün",
    "tours.ismayilliTour.groupSize": "2-7 nəfər",
    "tours.ismayilliTour.location": "İsmayıllı",
    "tours.ismayilliTour.description": "Üzüm bağları, füsunkar dağ mənzərələri və müxtəlif etnik kəndləri ilə tanınan İsmayıllını kəşf edin. Misgərləri ilə məşhur olan Lahıc kəndinə baş çəkin.",
    "tours.ismayilliTour.excludes.wineTasting": "Şərab dequstasiyası haqları",

    // Sheki Tour
    "tours.shekiTour.title": "Şəki Turu",
    "tours.shekiTour.duration": "1 gün",
    "tours.shekiTour.groupSize": "2-7 nəfər",
    "tours.shekiTour.location": "Şəki",
    "tours.shekiTour.description": "Ənənəvi memarlığı, ipək istehsalı və şirin paxlavası ilə məşhur olan tarixi Şəkini kəşf edin. UNESCO-nun Dünya İrsi Siyahısına daxil edilmiş Xan Sarayını ziyarət edin.",

    // Transport Service
    "tours.transport.title": "Nəqliyyat Xidməti",
    "tours.transport.duration": "Çevik",
    "tours.transport.groupSize": "1-7 nəfər",
    "tours.transport.location": "Bakı",
    "tours.transport.description": "Azərbaycanda etibarlı nəqliyyata ehtiyacınız var? Nəqliyyat xidmətimiz ərəbdilli sürücülərlə rahat avtomobillər təqdim edir.",
    "tours.transport.includes.driver": "Peşəkar sürücü",
    "tours.transport.includes.vehicle": "Rahat avtomobil",
    "tours.transport.includes.fuel": "Yanacaq xərcləri",
    "tours.transport.includes.meetGreet": "Qarşılama və müşayiət",
    "tours.transport.includes.luggage": "Baqaj köməyi",
    "tours.transport.excludes.guide": "Tur bələdçisi",
    "tours.transport.excludes.entranceFees": "Giriş haqları",

    "tour.dailyTours": "Günlük Turlar",
  },
}

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en")
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr")

  // Set language and update document direction
  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang)
    const newDir = lang === "ar" ? "rtl" : "ltr"
    setDir(newDir)
    document.documentElement.dir = newDir
    document.documentElement.lang = lang
    // Store language preference
    localStorage.setItem("language", lang)
  }

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  // Initialize language from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as LanguageCode | null
    if (savedLanguage && ["en", "ar", "az"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  return <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext)
