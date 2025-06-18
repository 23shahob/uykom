"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
    ChevronDown,
    Phone,
    MapPin,
    Star,
    Users,
    Building,
    Shield,
    Clock,
    Wrench,
    Zap,
    Droplets,
    Wind,
    CheckCircle,
    Menu,
    X,
    Globe,
} from "lucide-react"
import { useTheme } from "next-themes"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 },
}

// Language data
const languages = {
    uz: {
        nav: {
            about: "Biz haqimizda",
            services: "Xizmatlar",
            contact: "Aloqa",
        },
        hero: {
            title: "Professional Mulk Boshqaruv",
            subtitle: "Sifatli boshqaruv va zamonaviy yondashuv orqali mahalliy yashash sharoitini yaxshilashga qaratilgan",
            cta: "Bog'lanish",
        },
        about: {
            title: "Biz Haqimizda",
            description:
                "Biz professional mulk boshqaruv kompaniyasi bo'lib, uylar va hududlarni samarali boshqarish orqali mijozlarimizga qulaylik va xavfsizlikni ta'minlaymiz.",
        },
        services: {
            title: "Asosiy Xizmatlar",
            items: [
                {
                    title: "Uy-joy Xizmatlari",
                    description: "Avariya holatlarini tezkor bartaraf etish va ta'mirlash xizmatlari",
                },
                {
                    title: "Hududni Ta'mirlash",
                    description: "Umumiy joylarni ta'mirlash va rekonstruksiya qilish",
                },
                {
                    title: "Xavfsizlik va Nazorat",
                    description: "24/7 xavfsizlik tizimlari va nazorat xizmatlari",
                },
            ],
        },
        stats: {
            title: "Muvaffaqiyat Ko'rsatkichlari",
            items: [
                { number: "500+", label: "Boshqarilayotgan uylar" },
                { number: "10,000+", label: "Boshqarilayotgan xonadonlar" },
                { number: "2,000+", label: "Mamnun mijozlar" },
            ],
        },
        contact: {
            title: "Aloqa Ma'lumotlari",
            phone: "+998 71 250 03 95",
            address: "Toshkent sh., Qushbegi, 12a",
            form: {
                name: "Ismingiz",
                phone: "Telefon raqam",
                message: "Xabar",
                submit: "Yuborish",
            },
        },
        footer: {
            quickLinks: "Tezkor havolalar",
            contact: "Aloqa",
            copyright: "Barcha huquqlar himoyalangan.",
        },
    },
    en: {
        nav: {
            about: "About Us",
            services: "Services",
            contact: "Contact",
        },
        hero: {
            title: "Professional Property Management",
            subtitle: "Dedicated to improving local living conditions through quality management and modern approaches",
            cta: "Contact Us",
        },
        about: {
            title: "About Us",
            description:
                "We are a professional property management company providing comfort and security to our clients through efficient management of houses and territories.",
        },
        services: {
            title: "Main Services",
            items: [
                {
                    title: "Housing Services",
                    description: "Quick emergency response and repair services",
                },
                {
                    title: "Territory Maintenance",
                    description: "Repair and reconstruction of common areas",
                },
                {
                    title: "Security and Monitoring",
                    description: "24/7 security systems and monitoring services",
                },
            ],
        },
        stats: {
            title: "Success Indicators",
            items: [
                { number: "500+", label: "Managed buildings" },
                { number: "10,000+", label: "Managed apartments" },
                { number: "2,000+", label: "Satisfied clients" },
            ],
        },
        contact: {
            title: "Contact Information",
            phone: "+998 71 250 03 95",
            address: "Tashkent, Qushbegi St., 12a",
            form: {
                name: "Your Name",
                phone: "Phone Number",
                message: "Message",
                submit: "Submit",
            },
        },
        footer: {
            quickLinks: "Quick Links",
            contact: "Contact",
            copyright: "All rights reserved.",
        },
    },
}

export function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const [language, setLanguage] = useState("uz")
    const { theme, setTheme } = useTheme()
    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    // Get translations based on selected language
    const t = languages[language as keyof typeof languages]

    // Handle section tracking for navigation highlighting
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "services", "contact"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Toggle theme function
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-white/20 dark:border-gray-800/50 shadow-lg"
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                        >
                            UyKom24
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {Object.entries(t.nav).map(([key, value]) => (
                                <motion.a
                                    key={key}
                                    href={`#${key === "about" ? "about" : key === "services" ? "services" : "contact"}`}
                                    whileHover={{ y: -2 }}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${activeSection === key
                                            ? "text-blue-600 dark:text-blue-400"
                                            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                        }`}
                                >
                                    {value}
                                    {activeSection === key && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                                        />
                                    )}
                                </motion.a>
                            ))}

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg shadow-lg transition-all duration-200">
                                    {t.hero.cta}
                                </button>
                            </motion.div>

                            {/* Language Selector */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setLanguage(language === "uz" ? "en" : "uz")}
                                className="flex items-center space-x-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                            >
                                <Globe className="w-4 h-4" />
                                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                            </motion.button>

                            {/* Theme Toggle */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                onClick={toggleTheme}
                                className="flex items-center space-x-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                            >
                                {theme === "dark" ? (
                                    <span className="text-sm font-medium">🌞</span>
                                ) : (
                                    <span className="text-sm font-medium">🌙</span>
                                )}
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
                        >
                            <div className="container mx-auto px-4 py-4 space-y-4">
                                {Object.entries(t.nav).map(([key, value]) => (
                                    <motion.a
                                        key={key}
                                        href={`#${key}`}
                                        whileHover={{ x: 10 }}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {value}
                                    </motion.a>
                                ))}

                                {/* Mobile Language Toggle */}
                                <motion.button
                                    whileHover={{ x: 10 }}
                                    onClick={() => setLanguage(language === "uz" ? "en" : "uz")}
                                    className="flex items-center space-x-2 py-2 w-full text-left text-gray-700 dark:text-gray-300"
                                >
                                    <Globe className="w-5 h-5" />
                                    <span>{language === "uz" ? "English" : "O'zbek"}</span>
                                </motion.button>

                                {/* Mobile Theme Toggle */}
                                <motion.button
                                    whileHover={{ x: 10 }}
                                    onClick={toggleTheme}
                                    className="flex items-center space-x-2 py-2 w-full text-left text-gray-700 dark:text-gray-300"
                                >
                                    <span>{theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-900/40 dark:to-purple-900/40"
                />

                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    {[
                        { left: 10, top: 20 },
                        { left: 85, top: 15 },
                        { left: 25, top: 60 },
                        { left: 70, top: 80 },
                        { left: 45, top: 30 },
                        { left: 90, top: 50 },
                        { left: 15, top: 85 },
                        { left: 60, top: 10 },
                        { left: 35, top: 70 },
                        { left: 80, top: 25 },
                        { left: 20, top: 45 },
                        { left: 65, top: 90 },
                        { left: 40, top: 55 },
                        { left: 95, top: 35 },
                        { left: 30, top: 75 },
                        { left: 75, top: 40 },
                        { left: 50, top: 65 },
                        { left: 85, top: 85 },
                        { left: 25, top: 25 },
                        { left: 55, top: 95 },
                    ].map((position, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-400/30 dark:bg-blue-400/20 rounded-full"
                            animate={{
                                x: [0, 100, 0],
                                y: [0, -100, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3 + i * 0.2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.1,
                            }}
                            style={{
                                left: `${position.left}%`,
                                top: `${position.top}%`,
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-4xl mx-auto">
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent"
                        >
                            {t.hero.title}
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                        >
                            {t.hero.subtitle}
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div {...scaleOnHover}>
                                <button className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg shadow-xl transition-all duration-200">
                                    {t.hero.cta}
                                </button>
                            </motion.div>

                            <motion.div {...scaleOnHover}>
                                <button className="px-8 py-4 text-lg border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 rounded-lg transition-all duration-200">
                                    {language === "uz" ? "Batafsil ma'lumot" : "Learn More"}
                                </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <ChevronDown className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            {t.about.title}
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            {t.about.description}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: Shield,
                                title: language === "uz" ? "Xavfsizlik" : "Security",
                                description:
                                    language === "uz" ? "24/7 professional xavfsizlik xizmatlari" : "24/7 professional security services",
                            },
                            {
                                icon: Users,
                                title: language === "uz" ? "Tajriba" : "Experience",
                                description:
                                    language === "uz"
                                        ? "10+ yillik tajriba va professional jamoa"
                                        : "10+ years of experience and professional team",
                            },
                            {
                                icon: CheckCircle,
                                title: language === "uz" ? "Sifat" : "Quality",
                                description:
                                    language === "uz"
                                        ? "Yuqori sifatli xizmat va mijozlar mamnuniyati"
                                        : "High quality service and customer satisfaction",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-900/50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl mb-6"
                                >
                                    <item.icon className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section
                id="services"
                className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            {t.services.title}
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: Wrench,
                                title: language === "uz" ? "Uy-joy Xizmatlari" : "Housing Services",
                                description:
                                    language === "uz" ? "Avariya holatlarini tezkor bartaraf etish" : "Quick emergency response",
                                color: "from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700",
                            },
                            {
                                icon: Building,
                                title: language === "uz" ? "Hududni Ta'mirlash" : "Territory Maintenance",
                                description:
                                    language === "uz"
                                        ? "Umumiy joylarni ta'mirlash va rekonstruksiya"
                                        : "Repair and reconstruction of common areas",
                                color: "from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700",
                            },
                            {
                                icon: Shield,
                                title: language === "uz" ? "Xavfsizlik" : "Security",
                                description:
                                    language === "uz" ? "24/7 xavfsizlik tizimlari va nazorat" : "24/7 security systems and monitoring",
                                color: "from-green-500 to-green-600 dark:from-green-600 dark:to-green-700",
                            },
                            {
                                icon: Droplets,
                                title: language === "uz" ? "Santexnika" : "Plumbing",
                                description:
                                    language === "uz" ? "Barcha santexnik xizmatlari va jihozlar" : "All plumbing services and equipment",
                                color: "from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700",
                            },
                            {
                                icon: Zap,
                                title: language === "uz" ? "Elektr" : "Electrical",
                                description:
                                    language === "uz"
                                        ? "Elektr jihozlarini ta'mirlash va o'rnatish"
                                        : "Repair and installation of electrical equipment",
                                color: "from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700",
                            },
                            {
                                icon: Wind,
                                title: language === "uz" ? "Konditsioner" : "Air Conditioning",
                                description:
                                    language === "uz"
                                        ? "Konditsioner o'rnatish va xizmat ko'rsatish"
                                        : "Installation and maintenance of air conditioners",
                                color: "from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700",
                            },
                        ].map((service, index) => (
                            <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }} className="group">
                                <div className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 rounded-xl p-8">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} text-white rounded-2xl mb-6 shadow-lg`}
                                    >
                                        <service.icon className="w-8 h-8" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8 text-center"
                    >
                        {t.stats.items.map((stat, index) => (
                            <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }} className="p-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                                    viewport={{ once: true }}
                                    className="text-5xl md:text-6xl font-bold mb-4"
                                >
                                    {stat.number}
                                </motion.div>
                                <p className="text-xl opacity-90">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            {language === "uz" ? "Mijozlar Fikrlari" : "Client Testimonials"}
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {[
                            {
                                name: "Alixon",
                                location: language === "uz" ? "Toshkent" : "Tashkent",
                                text:
                                    language === "uz"
                                        ? "Xizmatlar juda sifatli va tezkor! Dispetcher xizmati 24/7 ishlaydi, har doim yordam berishadi."
                                        : "Services are very high quality and fast! The dispatcher service works 24/7, they always help.",
                                rating: 5,
                            },
                            {
                                name: "Dilnoza",
                                location: language === "uz" ? "Samarqand" : "Samarkand",
                                text:
                                    language === "uz"
                                        ? "Konditsioner o'rnatish xizmatidan foydalandik, narxlar hamyonbop va xodimlar professional."
                                        : "We used the air conditioning installation service, prices are affordable and staff are professional.",
                                rating: 5,
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-900/50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800 dark:text-gray-200">{testimonial.name}</p>
                                        <p className="text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            {t.contact.title}
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center"
                                >
                                    <Phone className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                                        {language === "uz" ? "Telefon" : "Phone"}
                                    </p>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium">{t.contact.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center"
                                >
                                    <MapPin className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                                        {language === "uz" ? "Manzil" : "Address"}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">{t.contact.address}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center"
                                >
                                    <Clock className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                                        {language === "uz" ? "Ish vaqti" : "Working Hours"}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {language === "uz" ? "24/7 Dispetcher xizmati" : "24/7 Dispatcher service"}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-8 shadow-xl border-0 bg-white dark:bg-gray-800 rounded-xl">
                                <div className="space-y-6">
                                    <div>
                                        <input
                                            placeholder={t.contact.form.name}
                                            className="w-full h-12 px-4 border-2 border-gray-200 dark:border-gray-700 bg-transparent dark:bg-gray-800 dark:text-white rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            placeholder={t.contact.form.phone}
                                            className="w-full h-12 px-4 border-2 border-gray-200 dark:border-gray-700 bg-transparent dark:bg-gray-800 dark:text-white rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            placeholder={t.contact.form.message}
                                            rows={4}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-transparent dark:bg-gray-800 dark:text-white rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                                        />
                                    </div>
                                    <motion.div {...scaleOnHover}>
                                        <button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-lg text-lg font-semibold transition-all duration-200">
                                            {t.contact.form.submit}
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                UyKom24
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {language === "uz"
                                    ? "Professional mulk boshqaruv xizmatlari orqali sizning hayot sifatingizni yaxshilaymiz."
                                    : "We improve your quality of life through professional property management services."}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-semibold mb-4">{language === "uz" ? "Tezkor havolalar" : "Quick Links"}</h4>
                            <ul className="space-y-2">
                                {Object.entries(t.nav).map(([key, value]) => (
                                    <li key={key}>
                                        <motion.a
                                            href={`#${key}`}
                                            whileHover={{ x: 5 }}
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            {value}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-semibold mb-4">{language === "uz" ? "Aloqa" : "Contact"}</h4>
                            <div className="space-y-2 text-gray-300">
                                <p>{t.contact.phone}</p>
                                <p>{t.contact.address}</p>
                                <p>info@uykom24.uz</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
                    >
                        <p>&copy; 2025 UyKom24. {language === "uz" ? "Barcha huquqlar himoyalangan." : "All rights reserved."}</p>
                    </motion.div>
                </div>
            </footer>

            {/* Floating Action Button */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 }}
                className="fixed bottom-6 right-6 z-40"
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                    <Phone className="w-6 h-6" />
                </motion.button>
            </motion.div>
        </div>
    )
}
