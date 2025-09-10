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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-army-black mb-4">
            Latest News & Insights
          </h2>
          <p className="text-xl text-field-gray max-w-3xl mx-auto">
            Stay updated with our latest projects, industry insights, and construction innovations
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Article Display */}
          <div className="bg-gradient-to-r from-mh-forest-green to-army-green rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-96 lg:h-80">
              {/* Article Image */}
              <div className="relative">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/600x400/396851/FFFFFF?text=${encodeURIComponent(currentItem.title)}`
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-army-gold text-army-black px-3 py-1 rounded-full text-sm font-semibold">
                    {currentItem.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 flex flex-col justify-center text-white">
                <div className="flex items-center text-army-gold mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{currentItem.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{currentItem.readTime}</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  {currentItem.title}
                </h3>

                <p className="text-gray-200 mb-6 leading-relaxed">
                  {currentItem.excerpt}
                </p>

                <Link
                  href={`/blog/${currentItem.slug}`}
                  className="inline-flex items-center bg-army-gold text-army-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors w-fit"
                >
                  Read Full Article
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevArticle}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Previous article"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextArticle}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Next article"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToArticle(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentArticle 
                  ? 'bg-mh-forest-green' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to article ${index + 1}`}
            />
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-mh-forest-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-army-green transition-colors transform hover:scale-105"
          >
            View All News & Insights
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogNewsSection
