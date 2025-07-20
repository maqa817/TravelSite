"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Clock, MapPin, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

// Featured tour packages data
const featuredTours = [
  {
    id: 1,
    titleKey: "tours.bakuTour.title",
    image: "/Baku/Bakutur.jpg?height=400&width=600&text=Baku City Tour",
    durationKey: "tours.bakuTour.duration",
    groupSizeKey: "tours.bakuTour.groupSize",
    locationKey: "tours.bakuTour.location",
    descriptionKey: "tours.bakuTour.description",
    slug: "baku-tour",
    price: "$60"
  },
  {
    id: 2,
    titleKey: "tours.qabalaTour.title",
    image: "/Qabala/Qabalaa.jpg?height=400&width=600&text=Qabala Tour",
    durationKey: "tours.qabalaTour.duration",
    groupSizeKey: "tours.qabalaTour.groupSize",
    locationKey: "tours.qabalaTour.location",
    descriptionKey: "tours.qabalaTour.description",
    slug: "qabala-tour",
    price: "$110"
  },
  {
    id: 3,
    titleKey: "tours.qubaTour.title",
    image: "/Quba/QubaTour.jpg?height=400&width=600&text=Quba Tour",
    durationKey: "tours.qubaTour.duration",
    groupSizeKey: "tours.qubaTour.groupSize",
    locationKey: "tours.qubaTour.location",
    descriptionKey: "tours.qubaTour.description",
    slug: "quba-tour",
    price: "$110"
  },
]

const cities = [
  {
    id: 1,
    nameKey: "Baku",
    image: "/Baku/BakuMain.jpg?height=800&width=1200&text=Baku",
    type: "image"
  },
  {
    id: 2,
    nameKey: "Qabala",
    image: "/Qabala/Qabalatur.jpg?height=800&width=1200&text=Qabala",
    type: "image"
  },
  {
    id: 3,
    nameKey: "Qusar",
    image: "/Qusar/Qusartur.jpg?height=800&width=1200&text=Qusar",
    type: "image"
  },
  {
    id: 4,
    nameKey: "Quba",
    image: "/Quba/QubaMenu.jpg?height=800&width=1200&text=Quba",
    type: "image"
  },
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const { t, dir } = useLanguage()
  const targetRef = useRef(null)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.3,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
      },
    }),
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  }

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cities.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    console.log('Cities data:', cities);
    console.log('Current city:', cities[currentIndex]);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cities.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cities.length) % cities.length)
  }

  return (
    <div className="flex flex-col min-h-screen" dir={dir}>
      {/* Hero Section */}
      <section className="relative w-full aspect-[3/3] sm:h-[90vh] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="relative h-full w-full">
              <Image
                src={cities[currentIndex].image}
                alt={t(cities[currentIndex].nameKey)}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
            </div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-center text-white p-4 max-w-4xl">
                <motion.h1
                  className="text-4xl md:text-7xl font-bold mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  {t("home.discover")} {t(cities[currentIndex].nameKey)}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <Button asChild className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6 rounded-full">
                    <Link href="/packages" className="flex items-center gap-2">
                      {t("home.explore")}
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/40 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/40 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {cities.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-10" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronRight className="h-6 w-6 rotate-90" />
        </motion.div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("home.featuredTours")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the beauty of Azerbaijan with our carefully curated tour packages. From city explorations to
              mountain retreats, we offer unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={tour.image || "/placeholder.svg"}
                      alt={t(tour.titleKey)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{t(tour.titleKey)}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{t(tour.durationKey)}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{t(tour.groupSizeKey)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors duration-300">
                        {t(tour.titleKey)}
                      </h3>
                      <div className="text-xl font-bold text-emerald-600">
                        {tour.price}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{t(tour.descriptionKey)}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>{t(tour.durationKey)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>{t(tour.groupSizeKey)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>{t(tour.locationKey)}</span>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-emerald-600 hover:bg-emerald-700 group"
                    >
                      <Link href={`/packages/${tour.slug}`} className="flex items-center justify-center gap-2">
                        {t("home.viewDetails")}
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-emerald-50 dark:bg-emerald-950/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("home.whyChooseUs")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional travel experiences with personalized service and local expertise.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: t("about.reason1Title"),
                description: t("about.reason1Desc"),
                icon: "🗣️",
              },
              {
                title: t("about.reason2Title"),
                description: t("about.reason2Desc"),
                icon: "🧠",
              },
              {
                title: t("about.reason3Title"),
                description: t("about.reason3Desc"),
                icon: "👤",
              },
              {
                title: t("about.reason4Title"),
                description: t("about.reason4Desc"),
                icon: "🕒",
              },
              {
                title: t("about.reason5Title"),
                description: t("about.reason5Desc"),
                icon: "🚗",
              },
              {
                title: t("about.reason6Title"),
                description: t("about.reason6Desc"),
                icon: "🤝",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="mb-6 text-5xl bg-emerald-100 dark:bg-emerald-900 h-16 w-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("tour.testimonials")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear what our clients have to say about their unforgettable experiences with us.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-100 dark:bg-emerald-900/30 -z-10"></div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  name: "Ahmed Al-Farsi",
                  from: "Saudi Arabia",
                  text: "Our trip to Azerbaijan was unforgettable! The Arabic-speaking driver made everything so comfortable for us. We especially loved the tour of Baku's Old City and the day trip to Gobustan.",
                  image: "/placeholder.svg?height=200&width=200&text=Ahmed",
                },
                {
                  name: "Fatima Al-Mansouri",
                  from: "UAE",
                  text: "The Mountain Retreat tour was breathtaking! Our guide knew all the best spots and helped us find amazing restaurants. The Tufandag cable car ride offered spectacular views of the Caucasus mountains.",
                  image: "/placeholder.svg?height=200&width=200&text=Fatima",
                },
                {
                  name: "Mohammed Al-Qasimi",
                  from: "Qatar",
                  text: "As a food enthusiast, the Wine & Gastronomy Journey was perfect for me. The Ismayilli vineyards were beautiful, and the cooking class in Sheki was a highlight of our trip.",
                  image: "/placeholder.svg?height=200&width=200&text=Mohammed",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 relative z-10">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-4 border-emerald-100 dark:border-emerald-900">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.from}</p>
                        </div>
                      </div>
                      <div className="text-5xl text-emerald-200 dark:text-emerald-800 mb-4">"</div>
                      <p className="text-muted-foreground italic mb-6">{testimonial.text}</p>
                      <div className="flex text-emerald-500">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 dark:bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Explore Azerbaijan?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Let us create a personalized journey that matches your interests and preferences. Contact us today to
              start planning your unforgettable adventure.
            </p>
            <Button asChild className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6 rounded-full">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
