"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export default function ContactPage() {
  const { t, dir } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-16" dir={dir}>
      <h1 className="text-4xl font-bold text-center mb-12">{t("contact.title")}</h1>

      {/* About Me Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center">
            <div className="relative h-[300px] w-[300px] rounded-lg overflow-hidden mb-6">
              <Image
                src="/placeholder.svg?height=600&width=600&text=AbuMuhammed"
                alt="AbuMuhammed"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">AbuMuhammed</h3>
            <p className="text-muted-foreground text-center">Founder & Tour Guide</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-[300px] w-[300px] rounded-lg overflow-hidden mb-6">
              <Image
                src="/placeholder.svg?height=600&width=600&text=My Mercedes"
                alt="My Mercedes"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">My Mercedes</h3>
            <p className="text-muted-foreground text-center">Luxury transportation for your comfort</p>
          </div>
        </div>
      </div>

      <Separator className="my-16" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">{t("contact.getInTouch")}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">{t("contact.getInTouchDesc")}</p>

          <div className="space-y-6">
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t("contact.email")}</h3>
                <a
                  href="mailto:TravelBakufromArabia@gmail.com"
                  className="text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
                >
                  {t("contact.emailValue")}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t("contact.address")}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("contact.addressValue")}
                </p>
              </div>
            </motion.div>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-6">{t("contact.followUs")}</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/travel_azerbaijan_services?igsh=MTU5ejRpcWRzMmEwaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 text-emerald-600 dark:text-emerald-400">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1BogHn5cb5/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 text-emerald-600 dark:text-emerald-400">
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.9V256h52.3V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://www.snapchat.com/add/abumuhammed448?share_id=dWPkndte9oA&locale=en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6 text-emerald-600 dark:text-emerald-400">
                <path d="M496.9 366.6c-3.4-9.2-9.8-14.1-17.1-18.2-1.4-.8-2.6-1.5-3.7-1.9-2.2-1.1-4.4-2.2-6.6-3.4-22.8-12.1-40.6-27.3-53-45.4a102.9 102.9 0 0 1 -9.1-16.1c-1.1-3-1-4.7-.2-6.3a10.2 10.2 0 0 1 2.9-3c3.9-2.6 8-5.2 10.7-7 4.9-3.2 8.8-5.7 11.2-7.4 9.4-6.5 15.9-13.5 20-21.3a42.4 42.4 0 0 0 2.1-35.2c-6.2-16.3-21.6-26.4-40.3-26.4a55.5 55.5 0 0 0 -11.7 1.2c-1 .2-2.1 .5-3.1 .7 .2-11.2-.1-22.9-1.1-34.5-3.5-40.8-17.8-62.1-32.7-79.2A130.2 130.2 0 0 0 332.1 36.4C309.5 23.5 283.9 17 256 17S202.6 23.5 180 36.4a129.7 129.7 0 0 0 -33.3 26.8c-14.9 17-29.2 38.4-32.7 79.2-1 11.6-1.2 23.4-1.1 34.5-1-.3-2-.5-3.1-.7a55.5 55.5 0 0 0 -11.7-1.2c-18.7 0-34.1 10.1-40.3 26.4a42.4 42.4 0 0 0 2 35.2c4.1 7.8 10.7 14.7 20 21.3 2.5 1.7 6.4 4.2 11.2 7.4 2.6 1.7 6.5 4.2 10.3 6.7a11.1 11.1 0 0 1 3.3 3.3c.8 1.6 .8 3.4-.4 6.6a102 102 0 0 1 -8.9 15.8c-12.1 17.7-29.4 32.6-51.4 44.6C32.4 348.6 20.2 352.8 15.1 366.7c-3.9 10.5-1.3 22.5 8.5 32.6a49.1 49.1 0 0 0 12.4 9.4 134.3 134.3 0 0 0 30.3 12.1 20 20 0 0 1 6.1 2.7c3.6 3.1 3.1 7.9 7.8 14.8a34.5 34.5 0 0 0 9 9.1c10 6.9 21.3 7.4 33.2 7.8 10.8 .4 23 .9 36.9 5.5 5.8 1.9 11.8 5.6 18.7 9.9C194.8 481 217.7 495 256 495s61.3-14.1 78.1-24.4c6.9-4.2 12.9-7.9 18.5-9.8 13.9-4.6 26.2-5.1 36.9-5.5 11.9-.5 23.2-.9 33.2-7.8a34.6 34.6 0 0 0 10.2-11.2c3.4-5.8 3.3-9.9 6.6-12.8a19 19 0 0 1 5.8-2.6A134.9 134.9 0 0 0 476 408.7a48.3 48.3 0 0 0 13-10.2l.1-.1C498.4 388.5 500.7 376.9 496.9 366.6zm-34 18.3c-20.7 11.5-34.5 10.2-45.3 17.1-9.1 5.9-3.7 18.5-10.3 23.1-8.1 5.6-32.2-.4-63.2 9.9-25.6 8.5-42 32.8-88 32.8s-62-24.3-88.1-32.9c-31-10.3-55.1-4.2-63.2-9.9-6.6-4.6-1.2-17.2-10.3-23.1-10.7-6.9-24.5-5.7-45.3-17.1-13.2-7.3-5.7-11.8-1.3-13.9 75.1-36.4 87.1-92.6 87.7-96.7 .6-5 1.4-9-4.2-14.1-5.4-5-29.2-19.7-35.8-24.3-10.9-7.6-15.7-15.3-12.2-24.6 2.5-6.5 8.5-8.9 14.9-8.9a27.6 27.6 0 0 1 6 .7c12 2.6 23.7 8.6 30.4 10.2a10.7 10.7 0 0 0 2.5 .3c3.6 0 4.9-1.8 4.6-5.9-.8-13.1-2.6-38.7-.6-62.6 2.8-32.9 13.4-49.2 26-63.6 6.1-6.9 34.5-37 88.9-37s82.9 29.9 88.9 36.8c12.6 14.4 23.2 30.7 26 63.6 2.1 23.9 .3 49.5-.6 62.6-.3 4.3 1 5.9 4.6 5.9a10.6 10.6 0 0 0 2.5-.3c6.7-1.6 18.4-7.6 30.4-10.2a27.6 27.6 0 0 1 6-.7c6.4 0 12.4 2.5 14.9 8.9 3.5 9.4-1.2 17-12.2 24.6-6.6 4.6-30.4 19.3-35.8 24.3-5.6 5.1-4.8 9.1-4.2 14.1 .5 4.2 12.5 60.4 87.7 96.7C468.6 373 476.1 377.5 462.9 384.9z" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@natiqverdiyev1?_t=ZS-8vm7FT9HZac&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 text-emerald-600 dark:text-emerald-400">
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Who We Are Section */}
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Who We Are</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Welcome to Travel Baku from Arabia! We are your premier destination for experiencing the beauty and culture of Azerbaijan.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team consists of experienced local guides and travel experts who are passionate about sharing the rich heritage and stunning landscapes of Baku with visitors from around the world.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We specialize in:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Customized tour packages</li>
                  <li>Luxury transportation services</li>
                  <li>Cultural and historical tours</li>
                  <li>Local food experiences</li>
                  <li>Adventure tourism</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300">
                  Our mission is to provide unforgettable travel experiences while ensuring the highest standards of comfort and service for our guests.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
