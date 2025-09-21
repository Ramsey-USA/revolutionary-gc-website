'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react'

const BlogNewsSection = () => {
  const [currentArticle, setCurrentArticle] = useState(0)

  const articles = [
    {
      id: 1,
      title: "Revolutionizing Construction with AI Technology",
      excerpt: "Discover how MH Construction is leading the Pacific Northwest in AI-powered project estimation and 3D visualization tools.",
      image: "/images/blog/ai-construction.jpg",
      date: "September 8, 2025",
      category: "Technology",
      slug: "revolutionizing-construction-ai-technology",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Yakima Valley Fire Station Project Completion",
      excerpt: "A look behind the scenes of our latest fire station project featuring specialized emergency services infrastructure.",
      image: "/images/blog/fire-station-completion.jpg",
      date: "September 5, 2025",
      category: "Project Update",
      slug: "yakima-fire-station-completion",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Military Precision in Commercial Construction",
      excerpt: "How our veteran-owned approach brings unmatched attention to detail and project management excellence to every build.",
      image: "/images/blog/military-precision.jpg",
      date: "September 1, 2025",
      category: "Company Culture",
      slug: "military-precision-commercial-construction",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Sustainable Building Practices for 2025",
      excerpt: "Exploring eco-friendly construction methods and sustainable materials that reduce environmental impact without compromising quality.",
      image: "/images/blog/sustainable-building.jpg",
      date: "August 28, 2025",
      category: "Sustainability",
      slug: "sustainable-building-practices-2025",
      readTime: "6 min read"
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentArticle((prev) => (prev + 1) % articles.length)
    }, 8000) // Change every 8 seconds

    return () => clearInterval(timer)
  }, [articles.length])

  const nextArticle = () => {
    setCurrentArticle((prev) => (prev + 1) % articles.length)
  }

  const prevArticle = () => {
    setCurrentArticle((prev) => (prev - 1 + articles.length) % articles.length)
  }

  const goToArticle = (index: number) => {
    setCurrentArticle(index)
  }

  const currentItem = articles[currentArticle]

  return (
    <section className="py-20 bg-white/25 dark:bg-dark-surface/35 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-dark-text mb-4">
            Latest News & Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
            Stay updated with our latest projects, industry insights, and construction innovations
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Main Article Display */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-500 transform group-hover:scale-[1.02]">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-96 lg:h-80">
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                    {currentItem.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center text-mh-hunter-green dark:text-mh-leather-tan mb-4">
                  <Calendar size={16} className="mr-2 icon-utility icon-animate-pulse" />
                  <span className="text-sm font-medium">{currentItem.date}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm font-medium">{currentItem.readTime}</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight text-gray-900 dark:text-gray-100">
                  {currentItem.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {currentItem.excerpt}
                </p>

                <Link
                  href={`/blog/${currentItem.slug}`}
                  className="btn btn-primary inline-flex items-center w-fit"
                >
                  Read Full Article
                  <ArrowRight size={16} className="ml-2 icon-action icon-interactive-primary" />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevArticle}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-mh-hunter-green dark:text-mh-leather-tan p-3 rounded-full transition-all duration-300 z-10 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-200 dark:border-gray-600"
            aria-label="Previous article"
          >
            <ChevronLeft size={24} className="icon-nav icon-animate-float" />
          </button>

          <button
            onClick={nextArticle}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-mh-hunter-green dark:text-mh-leather-tan p-3 rounded-full transition-all duration-300 z-10 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-200 dark:border-gray-600"
            aria-label="Next article"
          >
            <ChevronRight size={24} className="icon-nav icon-animate-float" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToArticle(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                index === currentArticle 
                  ? 'bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan scale-125 shadow-lg' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-110'
              }`}
              aria-label={`Go to article ${index + 1}`}
            />
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="btn btn-secondary inline-flex items-center"
          >
            View All News & Insights
            <ArrowRight size={20} className="ml-2 icon-action icon-animate-glow" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogNewsSection
