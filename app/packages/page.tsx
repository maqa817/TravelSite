"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { TourCard } from '@/components/TourCard'

const tourPackages = [
  {
    id: "1",
    titleKey: "tours.bakuTour.title",
    image: "/Baku/Bakutur.jpg?height=600&width=800&text=Baku Tour",
    durationKey: "tours.bakuTour.duration",
    groupSizeKey: "tours.bakuTour.groupSize",
    locationKey: "tours.bakuTour.location",
    price: 60,
    slug: "baku-tour",
    descriptionKey: "tours.bakuTour.description",
    includesKeys: [
      "tours.common.includes.guide",
      "tours.common.includes.pickup",
      "tours.common.includes.lunch",
      "tours.common.includes.entranceFees",
      "tours.common.includes.water"
    ],
    excludesKeys: [
      "tours.common.excludes.personalExpenses",
      "tours.common.excludes.optionalActivities",
      "tours.common.excludes.hotels"
    ]
  },
  {
    id: "2",
    titleKey: "tours.qabalaTour.title",
    image: "/Qabala/Qabalatur.jpg?height=600&width=800&text=Qabala Tour",
    durationKey: "tours.qabalaTour.duration",
    groupSizeKey: "tours.qabalaTour.groupSize",
    locationKey: "tours.qabalaTour.location",
    price: 110,
    slug: "qabala-tour",
    descriptionKey: "tours.qabalaTour.description",
    includesKeys: [
      "tours.common.includes.transportation",
      "tours.common.includes.guide",
      "tours.common.includes.pickup",
      "tours.common.includes.entranceFees",
      "tours.common.includes.water"
    ],
    excludesKeys: [
      "tours.common.excludes.lunch",
      "tours.qabalaTour.excludes.cableCar",
      "tours.common.excludes.hotels"
    ]
  },
  {
    id: "3",
    titleKey: "tours.qubaTour.title",
    image: "/placeholder.svg?height=600&width=800&text=Quba Tour",
    durationKey: "tours.qubaTour.duration",
    groupSizeKey: "tours.qubaTour.groupSize",
    locationKey: "tours.qubaTour.location",
    price: 110,
    slug: "quba-tour",
    descriptionKey: "tours.qubaTour.description",
    includesKeys: [
      "tours.common.includes.transportation",
      "tours.common.includes.guide",
      "tours.common.includes.pickup", 
      "tours.common.includes.entranceFees",
      "tours.common.includes.water"
    ],
    excludesKeys: [
      "tours.common.excludes.lunch",
      "tours.qubaTour.excludes.carpetWorkshop",
      "tours.common.excludes.hotels"
    ]
  },
  {
    id: "4",
    titleKey: "tours.qusarTour.title",
    image: "/placeholder.svg?height=600&width=800&text=Qusar Tour",
    durationKey: "tours.qusarTour.duration",
    groupSizeKey: "tours.qusarTour.groupSize",
    locationKey: "tours.qusarTour.location",
    price: 110,
    slug: "qusar-tour",
    descriptionKey: "tours.qusarTour.description",
    includesKeys: [
      "tours.common.includes.transportation",
      "tours.common.includes.guide",
      "tours.common.includes.pickup",
      "tours.common.includes.entranceFees",
      "tours.common.includes.water"
    ],
    excludesKeys: [
      "tours.qusarTour.excludes.skiEquipment",
      "tours.qusarTour.excludes.liftPasses",
      "tours.common.excludes.hotels"
    ]
  },
  {
    id: "5",
    titleKey: "tours.ismayilliTour.title",
    image: "/placeholder.svg?height=600&width=800&text=Ismayilli Tour",
    durationKey: "tours.ismayilliTour.duration",
    groupSizeKey: "tours.ismayilliTour.groupSize",
    locationKey: "tours.ismayilliTour.location",
    price: 110,
    slug: "ismayilli-tour",
    descriptionKey: "tours.ismayilliTour.description",
    includesKeys: [
      "tours.common.includes.transportation",
      "tours.common.includes.guide",
      "tours.common.includes.pickup",
      "tours.common.includes.entranceFees",
      "tours.common.includes.water"
    ],
    excludesKeys: [
      "tours.ismayilliTour.excludes.wineTasting",
      "tours.common.excludes.lunch",
      "tours.common.excludes.hotels"
    ]
  },
  {
    id: "6",
    titleKey: "tours.shekiTour.title",
    image: "/placeholder.svg?height=600&width=800&text=Sheki Tour",
    durationKey: "tours.shekiTour.duration",
    groupSizeKey: "tours.shekiTour.groupSize",
    locationKey: "tours.shekiTour.location",
    price: 110,
    slug: "sheki-tour",
    descriptionKey: "tours.shekiTour.description",
    includesKeys: [
      "tours.common.includes.transportation",
      "tours.common.includes.guide",
      "tours.common.includes.pickup",
      "tours.common.includes.entranceFees",
      "tours.common.includes.water"
    ],
    excludesKeys: [
      "tours.common.excludes.lunch",
      "tours.common.excludes.souvenirs",
      "tours.common.excludes.hotels"
    ]
  },
  {
    id: "7",
    titleKey: "tours.transport.title",
    image: "/placeholder.svg?height=600&width=800&text=Transport Service",
    durationKey: "tours.transport.duration",
    groupSizeKey: "tours.transport.groupSize",
    locationKey: "tours.transport.location",
    price: 30,
    slug: "transport-service",
    descriptionKey: "tours.transport.description",
    includesKeys: [
      "tours.transport.includes.driver",
      "tours.transport.includes.vehicle",
      "tours.transport.includes.fuel",
      "tours.transport.includes.meetGreet",
      "tours.transport.includes.luggage"
    ],
    excludesKeys: [
      "tours.transport.excludes.guide",
      "tours.transport.excludes.entranceFees",
      "tours.common.excludes.hotels"
    ]
  }
]

export default function PackagesPage() {
  const { t, dir } = useLanguage()

  const translatedTourPackages = tourPackages.map(tour => ({
    ...tour,
    title: t(tour.titleKey),
    duration: t(tour.durationKey),
    groupSize: t(tour.groupSizeKey),
    location: t(tour.locationKey),
    description: t(tour.descriptionKey),
    includes: tour.includesKeys.map(key => t(key)),
    excludes: tour.excludesKeys.map(key => t(key))
  }))

  return (
    <div className="container mx-auto px-4 py-12" dir={dir}>
      <h1 className="text-4xl font-bold mb-12 text-center">{t("packages.title")}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
        {t("packages.subtitle")}
      </p>
      <div className="space-y-8">
        {translatedTourPackages.map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </div>
    </div>
  )
}
