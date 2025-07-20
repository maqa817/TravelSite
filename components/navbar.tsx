"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(pathname !== "/")
  const { t, dir } = useLanguage()

  // Determine if the current page should have a transparent navbar initially
  const isTransparentPage = pathname === "/"

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.tours"), href: "/packages" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY

      // Apply fixed positioning to body
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
    } else {
      // Restore the scroll position
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""

      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0", 10) * -1)
      }
    }

    return () => {
      // Cleanup in case component unmounts while menu is open
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
    }
  }, [mobileMenuOpen])

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3, delay: 0.1 },
    },
  }

  const menuVariants = {
    hidden: {
      x: dir === "rtl" ? 300 : -300,
      opacity: 0.5,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.3,
      },
    },
    exit: {
      x: dir === "rtl" ? 300 : -300,
      opacity: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.2,
      },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i + 0.2,
        duration: 0.3,
      },
    }),
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300",
          scrolled || !isTransparentPage
            ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-md"
            : "bg-transparent",
        )}
        dir={dir}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          <motion.div
            className="flex lg:flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <span
                className={cn(
                  "text-xl sm:text-2xl font-bold transition-colors duration-300",
                  scrolled || !isTransparentPage
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-white drop-shadow-md",
                )}
              >
                TravelBakufromArabia
              </span>
            </Link>
          </motion.div>

          <div className="hidden lg:flex lg:gap-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-semibold leading-6 transition-colors duration-300 relative group py-2",
                    scrolled || !isTransparentPage
                      ? "text-foreground hover:text-emerald-600 dark:hover:text-emerald-400"
                      : "text-white hover:text-emerald-300",
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full",
                      pathname === item.href ? "w-full" : "w-0",
                    )}
                  ></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              className={cn(
                "flex items-center ml-6 pl-6",
                scrolled || !isTransparentPage ? "border-l border-border" : "border-l border-white/30",
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <LanguageSwitcher />
              <ThemeToggle />
            </motion.div>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-300",
                scrolled || !isTransparentPage
                  ? "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/20",
              )}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu - with animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              className="fixed inset-0 bg-black/70"
              onClick={() => setMobileMenuOpen(false)}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
            <motion.div
              className={`fixed inset-y-0 ${dir === "rtl" ? "right-0" : "left-0"} z-50 w-full max-w-xs overflow-y-auto bg-white dark:bg-gray-900 p-6 shadow-xl`}
              dir={dir}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-between mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                    <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                      TravelBakufromArabia
                    </span>
                  </Link>
                </motion.div>
                <motion.button
                  type="button"
                  className="rounded-md p-2.5 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      custom={index}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-lg px-4 py-3 text-base font-semibold leading-7 transition-all duration-300",
                          pathname === item.href
                            ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400"
                            : "text-foreground hover:bg-accent",
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
