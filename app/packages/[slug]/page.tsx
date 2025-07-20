"use client"

import { useEffect, useState, useRef } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, MapPin, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/language-context"
import { motion, useScroll, useTransform } from "framer-motion"

interface Tour {
  id: number;
  title: string;
  image: string;
  duration: string;
  groupSize: string;
  startingPoint: string;
  price: string;
  slug: string;
  about: string;
  history: string;
  culturalNotes: string;
  attractions: any[];
  includes: string[];
  excludes: string[];
}

// Tour data
const tourPackages: Tour[] = [
  {
    id: 1,
    title: "Baku Tour",
    image: "/Baku/Bakutur.jpg?height=600&width=800&text=Baku Tour",
    duration: "1 day",
    groupSize: "2-7 people",
    startingPoint: "Baku",
    price: "$60",
    slug: "baku-tour",
    about:
      "Baku, the capital of Azerbaijan, is known for its medieval walled old city and modern skyline featuring the iconic Flame Towers. The city blends ancient history with contemporary architecture, offering visitors a unique cultural experience. Visit the UNESCO-listed Old City (Icherisheher), the Palace of the Shirvanshahs, and the modern Heydar Aliyev Center designed by Zaha Hadid.",
    history:
      "Baku has been inhabited since the Stone Age, with evidence of human settlements dating back to the 8th millennium BC. The city became an important center during the medieval period as part of various empires including the Shirvanshah dynasty. In the 19th century, Baku experienced a boom due to oil exploitation, which transformed it into an industrial center. The city's architecture reflects its diverse history, with influences from Persian, Ottoman, Russian, and Soviet periods.",
    culturalNotes:
      "Baku is a melting pot of cultures, where East meets West. The city hosts numerous cultural festivals throughout the year, celebrating music, film, and traditional arts. Azerbaijani hospitality is legendary, and visitors are often invited to share tea and sweets. The local cuisine features a blend of Turkish, Persian, and Central Asian influences, with specialties like plov (rice pilaf), dolma (stuffed vegetables), and various kebabs.",
    attractions: [
      {
        name: "Old City (Icherisheher)",
        image: "/Baku/Iceriseher.jpg?height=600&width=800&text=Old City",
        description:
          "The UNESCO-listed Old City is a maze of narrow streets with ancient buildings, the Maiden Tower, and the Palace of the Shirvanshahs. This historical core of Baku dates back to the 12th century and is surrounded by fortress walls.",
      },
      {
        name: "Flame Towers",
        image: "/Baku/FlameTowers2.jpg?height=600&width=800&text=Flame Towers",
        description:
          "These iconic skyscrapers have become the modern symbol of Baku. Their design represents flames, referencing Azerbaijan's historical connection with fire. At night, the towers are illuminated with LED displays that simulate flames.",
      },
      {
        name: "Heydar Aliyev Center",
        image: "/Baku/HaydarCenter.jpg?height=600&width=800&text=Heydar Aliyev Center",
        description:
          "Designed by renowned architect Zaha Hadid, this cultural center is famous for its distinctive flowing, curved style that eschews sharp angles. The building houses a museum, gallery spaces, and an auditorium.",
      },
      {
        name: "Baku Boulevard",
        image: "/Baku/Bulvar.jpg?height=400&width=600&text=Baku Boulevard",
        description:
          "This promenade along the Caspian Sea offers beautiful views, parks, cafes, and attractions. It's perfect for a leisurely stroll while enjoying the sea breeze and city views.",
      },
      {
        name: "Azerbaijan National Carpet Museum",
        image: "/Baku/Carpet.jpg?height=400&width=600&text=Carpet Museum",
        description:
          "Housed in a building designed to look like a rolled carpet, this museum showcases Azerbaijan's rich carpet-weaving tradition with exhibits of antique and contemporary carpets.",
      },
      {
        name: "Maiden Tower",
        image: "/Baku/Qizqalasi.jpg?height=400&width=600&text=Maiden Tower",
        description:
          "The Maiden Tower (Azerbaijani: Qız qalası) is a 12th-century monument in the Old City, Baku, Azerbaijan."
      },
    ],
    includes: [
      "Professional Arabic-speaking driver and guide",
      "Comfortable transportation throughout the day",
      "Pickup and drop-off at your hotel in Baku",
      "Bottled water",
      "Guidance to all attractions mentioned",
    ],
    excludes: [
      "Entrance fees to attractions",
      "Meals and beverages",
      "Personal expenses",
      "Gratuities (optional)",
      "Hotels and reservations"
    ],
  },
  {
    id: 2,
    title: "Qabala Tour",
    image: "/Qabala/Qabalamain2.jpg?height=400&width=800&text=Qabala Tour",
    duration: "1 day",
    groupSize: "2-7 people",
    startingPoint: "Baku",
    price: "$110",
    slug: "qabala-tour",
    about:
      "Qabala is a picturesque mountain resort town surrounded by the Greater Caucasus mountains. It's famous for its ski resort, beautiful forests, and waterfalls. The town offers a perfect retreat for nature lovers with activities like hiking, skiing, and exploring ancient ruins. Don't miss the Tufandag Mountain Resort, Nohur Lake, and the Seven Beauties Waterfall.",
    history:
      "Qabala (also spelled Gabala) was the ancient capital of Caucasian Albania from the 4th century BC to the 5th century AD. The city was an important trading center on the routes connecting the East and West. Archaeological excavations have revealed ancient fortifications, public buildings, and residential areas. After the fall of Caucasian Albania, Qabala remained an important regional center under various empires. In modern times, it has developed into a popular mountain resort destination.",
    culturalNotes:
      "Qabala preserves many traditional Azerbaijani customs and crafts. The region is known for its fruit orchards, especially apples and hazelnuts. Local cuisine features mountain specialties like saj (a dish cooked on a convex metal plate), various kebabs, and forest honey. The annual Qabala International Music Festival attracts classical music performers and enthusiasts from around the world to this mountain setting.",
    attractions: [
      {
        name: "Tufandag Mountain Resort",
        image: "/Qabala/Tufandag.jpg?height=400&width=600&text=Tufandag Resort",
        description:
          "This modern mountain resort offers skiing in winter and hiking, paragliding, and cable car rides with panoramic views in summer. The resort features multiple cable car lines that take visitors up to 2,000 meters above sea level.",
      },
      {
        name: "Nohur Lake",
        image: "/Qabala/Nohur.jpg?height=400&width=600&text=Nohur Lake",
        description:
          "A serene mountain lake surrounded by lush forests, Nohur Lake is perfect for picnics, boat rides, and enjoying the tranquil natural setting. The reflections of the surrounding mountains on the lake's surface create stunning photo opportunities.",
      },
      {
        name: "Seven Beauties Waterfall",
        image: "/Qabala/7gozel.jpg?height=400&width=600&text=Seven Beauties Waterfall",
        description:
          "This beautiful waterfall is located in a lush forest setting. The hike to the waterfall takes you through scenic woodland paths and offers a refreshing natural experience.",
      },
    ],
    includes: [
      "Professional Arabic-speaking driver and guide",
      "Comfortable transportation from Baku to Qabala and back",
      "Pickup and drop-off at your hotel in Baku",
      "Bottled water",
      "Guidance to all attractions mentioned",
    ],
    excludes: [
      "Cable car tickets at Tufandag Resort",
      "Entrance fees to attractions",
      "Meals and beverages",
      "Personal expenses",
      "Gratuities (optional)",
      "Hotels and reservations",
    ],
  },
  {
    id: 3,
    title: "Quba Tour",
    image: "/Quba/QubaTour.jpg?height=400&width=600&text=Quba Tour",
    duration: "1 day",
    groupSize: "2-7 people",
    startingPoint: "Baku",
    price: "$110",
    slug: "quba-tour",
    about:
      "Quba is renowned for its apple orchards, carpet weaving traditions, and the unique mountain village of Khinalug. The city is surrounded by lush forests and mountains, making it a perfect destination for eco-tourism. Visit the Red Settlement (home to Mountain Jews), the Afurja Waterfall, and experience the local carpet weaving traditions.",
    history:
      "Quba has a rich history dating back to ancient times. The city became particularly important in the 18th century when it was the capital of the Quba Khanate under Fatali Khan. During this period, the city flourished as a cultural and economic center. The Red Settlement was established in the 18th century when the Khan invited Jewish communities to settle in the region. The area's strategic location in the northeastern part of Azerbaijan made it an important point on trade routes through the Caucasus.",
    culturalNotes:
      "Quba is known for its distinctive carpet weaving tradition, with specific patterns and color schemes that identify carpets from this region. The area is also famous for its apple orchards, producing many varieties of apples that are considered among the best in Azerbaijan. The cultural diversity of Quba, with its Azerbaijani and Jewish communities, has created a unique local culture with distinctive cuisine, music, and traditions.",
    attractions: [
      {
        name: "Red Settlement (Qırmızı Qəsəbə)",
        image: "/placeholder.svg?height=400&width=600&text=Red Settlement",
        description:
          "This unique settlement is home to Mountain Jews who have lived in the region for centuries. It's one of the few all-Jewish towns outside of Israel and the United States, with distinctive architecture and cultural traditions.",
      },
      {
        name: "Afurja Waterfall",
        image: "/placeholder.svg?height=400&width=600&text=Afurja Waterfall",
        description:
          "The highest waterfall in Azerbaijan, Afurja cascades down from a height of 60 meters. The hike to the waterfall offers beautiful views of the surrounding mountains and forests.",
      },
      {
        name: "Khinalug Village",
        image: "/placeholder.svg?height=400&width=600&text=Khinalug Village",
        description:
          "One of the oldest continuously inhabited places in the world, this remote mountain village sits at an elevation of 2,350 meters. The villagers speak their own unique language and maintain ancient traditions.",
      },
      {
        name: "Quba Carpet Workshop",
        image: "/placeholder.svg?height=400&width=600&text=Quba Carpet Workshop",
        description:
          "Quba is famous for its carpet weaving tradition. Visit a local workshop to see artisans creating intricate carpets using traditional methods passed down through generations.",
      },
      {
        name: "Tenghi Canyon",
        image: "/placeholder.svg?height=400&width=600&text=Tenghi Canyon",
        description:
          "This dramatic canyon features vertical cliffs and a rushing river. The narrow path through the canyon offers an adventurous hiking experience with spectacular views.",
      },
    ],
    includes: [
      "Professional Arabic-speaking driver and guide",
      "Comfortable transportation from Baku to Quba and back",
      "Pickup and drop-off at your hotel in Baku",
      "Bottled water",
      "Guidance to all attractions mentioned",
    ],
    excludes: [
      "Entrance fees to attractions",
      "Meals and beverages",
      "Personal expenses",
      "Gratuities (optional)",
      "Hotels and reservations"
    ],
  },
  {
    id: 4,
    title: "Qusar Tour",
    image: "/Qusar/Shahdag.jpeg?height=400&width=600&text=Qusar Tour",
    duration: "1 day",
    groupSize: "2-7 people",
    startingPoint: "Baku",
    price: "$110",
    slug: "qusar-tour",
    about:
      "Qusar is a beautiful mountain region in northern Azerbaijan, home to the country's premier ski resort, Shahdag. With breathtaking mountain landscapes, traditional villages, and rich cultural heritage, Qusar offers both adventure and relaxation for visitors seeking to experience the natural beauty of the Caucasus mountains.",
    history:
      "Qusar has a rich history as part of the historical Lezgistan region. The area has been inhabited since ancient times and was part of various historical states including Caucasian Albania. The region's strategic location near the border with Dagestan made it an important crossroads for trade and cultural exchange. Qusar became particularly significant in the 18th century during the Quba Khanate period. The region's remote mountain villages have preserved ancient traditions and ways of life that date back centuries.",
    culturalNotes:
      "Qusar is predominantly inhabited by the Lezgi people, who have their own distinct language, traditions, and cultural practices. The region is known for its rich folklore, traditional music, and distinctive dance forms. Lezgi carpet weaving is renowned for its unique patterns and techniques. Local cuisine features mountain specialties like hinkal (dumplings), various meat dishes, and dairy products. Traditional crafts such as woodcarving, metalwork, and textile production continue to be practiced in the villages of Qusar.",
    attractions: [
      {
        name: "Shahdag Mountain Resort",
        image: "/placeholder.svg?height=400&width=600&text=Shahdag Resort",
        description:
          "Azerbaijan's largest ski resort offers world-class facilities for winter sports and summer mountain activities. With modern infrastructure, luxury hotels, and stunning alpine scenery, it's a year-round destination for outdoor enthusiasts.",
      },
      {
        name: "Laza Village",
        image: "/placeholder.svg?height=400&width=600&text=Laza Village",
        description:
          "This picturesque mountain village is famous for its beautiful waterfalls that freeze into spectacular ice formations in winter. The traditional stone houses and the surrounding landscape make it a photographer's paradise.",
      },
      {
        name: "Suvar Resort",
        image: "/placeholder.svg?height=400&width=600&text=Suvar Resort",
        description:
          "A popular mountain retreat offering comfortable accommodations, traditional cuisine, and easy access to hiking trails. The resort is known for its therapeutic mountain air and peaceful environment.",
      },
      {
        name: "Qusar Historical Museum",
        image: "/placeholder.svg?height=400&width=600&text=Qusar Museum",
        description:
          "Learn about the rich history and cultural heritage of the Qusar region through exhibits of traditional crafts, historical artifacts, and ethnographic displays that showcase the unique Lezgi culture.",
      },
      {
        name: "Hazar Baba Mountain",
        image: "/placeholder.svg?height=400&width=600&text=Hazar Baba Mountain",
        description:
          "This majestic mountain offers hiking opportunities with panoramic views of the surrounding landscape. The mountain is considered sacred by locals and has several legends associated with it.",
      },
    ],
    includes: [
      "Professional Arabic-speaking driver and guide",
      "Comfortable transportation from Baku to Qusar and back",
      "Pickup and drop-off at your hotel in Baku",
      "Bottled water",
      "Guidance to all attractions mentioned",
    ],
    excludes: [
      "Entrance fees to attractions",
      "Cable car or ski lift tickets",
      "Meals and beverages",
      "Personal expenses",
      "Gratuities (optional)",
      "Hotels and reservations"
    ],
  },
  {
    id: 5,
    title: "Ismayilli Tour",
    image: "/placeholder.svg?height=600&width=800&text=Ismayilli Tour",
    duration: "1 day",
    groupSize: "2-7 people",
    startingPoint: "Baku",
    price: "$110",
    slug: "ismayilli-tour",
    about:
      "Ismayilli is known for its vineyards, picturesque mountain scenery, and diverse ethnic villages. The region is famous for its wine production and natural beauty. Explore the Lahij village known for its coppersmiths, visit local wineries, and enjoy the stunning mountain landscapes and forests that surround the area.",
    history:
      "Ismayilli region has been inhabited since ancient times, with archaeological evidence dating back to the Bronze Age. The area was part of various historical states, including Caucasian Albania and later the Shirvan Khanate. The region's strategic location in the mountains made it an important crossroads for trade and cultural exchange. Many of the villages in the area, such as Lahij and Basgal, were established as craft centers, specializing in metalwork, silk production, and other traditional crafts that continue to this day.",
    culturalNotes:
      "Ismayilli is one of the most ethnically diverse regions of Azerbaijan, with Azerbaijanis living alongside communities of Lezgins, Molokans, Tats, and other groups. Each community has preserved its unique cultural traditions, languages, and crafts. The region is known for its distinctive cuisine, featuring mountain herbs, local cheeses, and dishes specific to each ethnic group. Traditional music and dance remain important parts of cultural life, especially during festivals and celebrations.",
    attractions: [
      {
        name: "Lahij Village",
        image: "/placeholder.svg?height=400&width=600&text=Lahij Village",
        description:
          "This ancient village is famous for its coppersmiths and cobblestone streets. The skilled artisans continue centuries-old traditions of metalwork, creating beautiful copper items using traditional methods.",
      },
      {
        name: "Ismayilli Vineyards",
        image: "/placeholder.svg?height=400&width=600&text=Ismayilli Vineyards",
        description:
          "The region is known for its wine production. Visit local wineries to learn about Azerbaijan's ancient winemaking traditions and taste a variety of local wines.",
      },
      {
        name: "Ivanovka Village",
        image: "/placeholder.svg?height=400&width=600&text=Ivanovka Village",
        description:
          "This unique village is home to Molokans (Russian sectarians) who have preserved their traditional lifestyle, architecture, and agricultural practices since the 19th century.",
      },
      {
        name: "Green Lake",
        image: "/placeholder.svg?height=400&width=600&text=Green Lake",
        description:
          "This beautiful mountain lake is surrounded by forests and offers a peaceful retreat. The emerald color of the water gives the lake its name and creates a magical atmosphere.",
      },
      {
        name: "Basgal Village",
        image: "/placeholder.svg?height=400&width=600&text=Basgal Village",
        description:
          "Known for its silk production and traditional crafts, Basgal features distinctive architecture with stone houses and narrow streets. The village has preserved many ancient traditions and crafts.",
      },
    ],
    includes: [
      "Professional Arabic-speaking driver and guide",
      "Comfortable transportation from Baku to Ismayilli and back",
      "Pickup and drop-off at your hotel in Baku",
      "Bottled water",
      "Guidance to all attractions mentioned",
    ],
    excludes: [
      "Entrance fees to attractions",
      "Meals and beverages",
      "Personal expenses",
      "Gratuities (optional)",
      "Hotels and reservations"
    ],
  },
  {
    id: 6,
    title: "Sheki Tour",
    image: "/placeholder.svg?height=600&width=800&text=Sheki Tour",
    duration: "1 day",
    groupSize: "2-7 people",
    startingPoint: "Baku",
    price: "$110",
    slug: "sheki-tour",
    about:
      "Sheki is a historic city famous for its traditional Azerbaijani architecture, silk production, and sweet baklava. The UNESCO-listed Khan's Palace with its stunning stained glass windows is a must-visit. Explore the caravanserais, craft workshops, and taste the local cuisine including the famous Sheki halva.",
    history:
      "Sheki is one of Azerbaijan's oldest settlements, with a history dating back 2,700 years. The city was an important stop on the Silk Road, fostering trade and cultural exchange. In the 18th century, Sheki became the capital of the Sheki Khanate under Muhammad Hasan Khan, who built the famous Khan's Palace. The city has long been known for its silk production, which became a major industry in the 19th century. Despite earthquakes and fires throughout its history, Sheki has preserved much of its historical architecture and cultural heritage.",
    culturalNotes:
      "Sheki is renowned for its distinctive culinary traditions, particularly the famous Sheki halva, a sweet pastry made with rice flour, sugar, and nuts. The city maintains strong traditions in various crafts, including silk production, pottery, metalwork, and the unique shebeke stained glass art. Sheki's cultural life is enriched by its theater tradition, with the Azerbaijan Drama Theater being one of the oldest in the country. The annual Sheki International Music Festival celebrates the rich musical heritage of the region.",
    attractions: [
      {
        name: "Sheki Khan's Palace",
        image: "/placeholder.svg?height=400&width=600&text=Sheki Khan's Palace",
        description:
          "This UNESCO World Heritage site is famous for its elaborate decoration and shebeke (stained glass windows made without nails or glue). Built in 1762, the palace features stunning murals, intricate patterns, and a masterful integration with the natural environment.",
      },
      {
        name: "Sheki Caravanserai",
        image: "/placeholder.svg?height=400&width=600&text=Sheki Caravanserai",
        description:
          "These historic inns once housed traders traveling the Silk Road. The well-preserved caravanserais feature traditional architecture with inner courtyards and numerous rooms for travelers and their goods.",
      },
      {
        name: "Albanian Church in Kish",
        image: "/placeholder.svg?height=400&width=600&text=Albanian Church",
        description:
          "Located in the nearby village of Kish, this ancient church dates back to the 1st-2nd century and is considered one of the oldest churches in the Caucasus. It's an important monument of Caucasian Albanian Christianity.",
      },
      {
        name: "Sheki Craft Workshops",
        image: "/placeholder.svg?height=400&width=600&text=Sheki Crafts",
        description:
          "Visit workshops where artisans create traditional shebeke stained glass, silk items, pottery, and other crafts using centuries-old techniques passed down through generations.",
      },
      {
        name: "Sheki Fortress",
        image: "/placeholder.svg?height=400&width=600&text=Sheki Fortress",
        description:
          "The medieval fortress walls surround the historic part of the city. Built in the 18th century, the fortress protected the city from invasions and features impressive stone walls and towers.",
      },
    ],
    includes: [
      "Professional Arabic-speaking driver and guide",
      "Comfortable transportation from Baku to Sheki and back",
      "Pickup and drop-off at your hotel in Baku",
      "Bottled water",
      "Guidance to all attractions mentioned",
    ],
    excludes: [
      "Entrance fees to Khan's Palace and other attractions",
      "Meals and beverages",
      "Personal expenses",
      "Gratuities (optional)",
      "Hotels and reservations"
    ],
  },
  {
    id: 7,
    title: "Transport Service",
    image: "/placeholder.svg?height=600&width=800&text=Transport Service",
    duration: "Flexible",
    groupSize: "1-7 people",
    startingPoint: "Baku",
    price: "$30",
    slug: "transport-service",
    about:
      "Our transport service provides reliable and comfortable transportation throughout Azerbaijan with professional Arabic-speaking drivers. Whether you need airport transfers, transportation within Baku, or custom routes to any destination in Azerbaijan, we can accommodate your needs.",
    history:
      "Our transport service was established to meet the growing demand for reliable, comfortable transportation with Arabic-speaking drivers in Azerbaijan. We have been serving tourists from Arab countries since 2018, providing a seamless travel experience throughout the country.",
    culturalNotes:
      "Our drivers are not only fluent in Arabic but also knowledgeable about local customs and traditions. They can provide cultural insights and recommendations, helping you navigate the local customs and etiquette during your stay in Azerbaijan.",

    attractions: [
      {
        name: "Airport Transfers",
        image: "/placeholder.svg?height=400&width=600&text=Airport Transfer",
        description:
          "Reliable pickup and drop-off service at Baku International Airport. Our drivers monitor flight arrivals and will be waiting for you even if your flight is delayed.",
      },
    ],
    includes :[
      "Professional Arabic-speaking driver",
      "Comfortable modern vehicle",
      "Pickup and drop-off at your specified locations",
      "Bottled water",
      "Assistance with luggage",
    ],
    excludes:["Meals and beverages", "Entrance fees to any attractions", "Personal expenses", "Gratuities (optional)","Hotels and reservations",],
  },
]

export default function TourPage() {
  const [tour, setTour] = useState<Tour | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { t, dir } = useLanguage()
  const targetRef = useRef(null)
  const params = useParams()
  const slug = params?.slug as string || ""
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0])

  useEffect(() => {
    setIsLoading(true)
    const foundTour = tourPackages.find((p) => p.slug === slug)
    if (foundTour) {
      setTour(foundTour)
    }
    setIsLoading(false)
  }, [slug])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    )
  }

  if (!tour) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tour Not Found</h1>
          <Link href="/packages" className="text-emerald-600 hover:text-emerald-700">
            Return to Tours
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" dir={dir}>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{tour.title}</h1>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-lg">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-emerald-300" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-emerald-300" />
              <span>{tour.groupSize}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-emerald-300" />
              <span>{tour.startingPoint}</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-emerald-300 mb-8">{tour.price}</div>
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6 rounded-full">
            <Link href="/contact" className="flex items-center gap-2">
              {t("tour.bookNow")}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        <div className="absolute bottom-8 left-8 z-10">
          <Button
            asChild
            variant="outline"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/50"
          >
            <Link href="/packages" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t("tour.back")}
            </Link>
          </Button>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ChevronRight className="h-6 w-6 rotate-90" />
        </motion.div>
      </section>

      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950" ref={targetRef}>
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <motion.div className="lg:col-span-2" style={{ opacity, y }}>
              <motion.h2
                className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                About {tour.title}
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {tour.about}
              </motion.p>

              <motion.h2
                className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                {t("city.history")}
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {tour.history}
              </motion.p>

              <motion.h2
                className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                {t("city.culturalNotes")}
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {tour.culturalNotes}
              </motion.p>
            </motion.div>

            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 sticky top-24 bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">What's Included</h3>
                  <ul className="space-y-3 mb-6">
                    {tour.includes.map((item: string, index: number) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-emerald-600 dark:text-emerald-400 mr-2 text-lg">✓</span>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">What's Not Included</h3>
                  <ul className="space-y-3">
                    {tour.excludes.map((item: string, index: number) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-red-500 mr-2 text-lg">✗</span>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 group">
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Book This Tour
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <Separator className="my-16" />

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">Top Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tour.attractions.map((attraction: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-none shadow-lg group bg-white dark:bg-gray-800">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={attraction.image || "/placeholder.svg"}
                        alt={attraction.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold">{attraction.name}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 text-gray-900 dark:text-white">
                        {attraction.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{attraction.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center py-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Ready to Experience {tour.title}?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your tour today and let us guide you through this amazing experience with our expert local knowledge
              and personalized service.
            </p>
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6 rounded-full">
              <Link href="/contact" className="flex items-center gap-2">
                Book Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
  </div>
  )
}
