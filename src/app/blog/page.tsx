"use client"
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import UniversalHeroSection from '../../components/UniversalHeroSection'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Tag, TrendingUp, Users, BookOpen, Award, MessageSquare } from 'lucide-react'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const articles = [
    {
      id: 1,
      title: "Revolutionizing Construction with AI Technology",
      excerpt: "Discover how MH Construction is leading the Pacific Northwest in AI-powered project estimation and 3D visualization tools, transforming the way we approach construction planning and execution.",
      image: "/images/blog/ai-construction.jpg",
      date: "September 8, 2025",
      category: "Technology",
      slug: "revolutionizing-construction-ai-technology",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Yakima Valley Fire Station Project Completion",
      excerpt: "A detailed look behind the scenes of our latest fire station project featuring specialized emergency services infrastructure and cutting-edge safety systems.",
      image: "/images/blog/fire-station-completion.jpg",
      date: "September 5, 2025",
      category: "Project Update",
      slug: "yakima-fire-station-completion",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 3,
      title: "Military Precision in Commercial Construction",
      excerpt: "How our veteran-owned approach brings unmatched attention to detail and project management excellence to every build, setting new standards in the industry.",
      image: "/images/blog/military-precision.jpg",
      date: "September 1, 2025",
      category: "Company Culture",
      slug: "military-precision-commercial-construction",
      readTime: "4 min read",
      featured: true
    },
    {
      id: 4,
      title: "Sustainable Building Practices for 2025",
      excerpt: "Exploring eco-friendly construction methods and sustainable materials that reduce environmental impact without compromising quality or durability.",
      image: "/images/blog/sustainable-building.jpg",
      date: "August 28, 2025",
      category: "Sustainability",
      slug: "sustainable-building-practices-2025",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 5,
      title: "The Future of Project Estimating",
      excerpt: "How AI-powered estimating is changing the construction industry, providing more accurate timelines and cost projections for better project planning.",
      image: "/images/blog/future-estimating.jpg",
      date: "August 25, 2025",
      category: "Technology",
      slug: "future-project-estimating",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 6,
      title: "Safety First: Our Commitment to Worker Protection",
      excerpt: "Exploring MH Construction's comprehensive safety protocols and how our military background influences our approach to jobsite safety.",
      image: "/images/blog/safety-first.jpg",
      date: "August 22, 2025",
      category: "Safety",
      slug: "safety-first-worker-protection",
      readTime: "5 min read",
      featured: false
    }
  ]

  const categories = ["All", "Technology", "Project Updates", "Company Culture", "Sustainability", "Safety"]
  const featuredArticles = articles.filter(article => article.featured)
  const filteredArticles = selectedCategory === 'All' 
    ? articles.filter(article => !article.featured)
    : articles.filter(article => !article.featured && article.category === selectedCategory)

  return (
    <main className="min-h-screen pt-20 bg-white dark:bg-dark-surface transition-colors duration-300">
      <Header />
      
      <UniversalHeroSection
        title="Construction Insights"
        titleHighlight="& News"
        subtitle="Stay updated with the latest construction innovations, project highlights, and industry insights from our 150+ years of combined team expertise."
        primaryButton={{
          text: "Read Featured Articles",
          href: "#featured-articles"
        }}
        secondaryButton={{
          text: "Subscribe to Newsletter",
          href: "/contact"
        }}
      />

      {/* Blog Statistics */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-mh-hunter-green/5 dark:from-dark-surface-2 dark:via-dark-surface dark:to-mh-hunter-green/10 transition-colors duration-300">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,104,81,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(56,104,81,0.05),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-mh-leather-tan/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-mh-hunter-green/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 px-6 py-2 rounded-full mb-6 border border-mh-hunter-green/20 dark:border-mh-hunter-green/20">
              <span className="text-mh-hunter-green dark:text-mh-hunter-green font-semibold">Blog Insights</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">Our Publishing Impact</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Delivering trusted construction insights and industry expertise to professionals nationwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/5 to-mh-leather-tan/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="relative bg-gradient-to-br from-white via-mh-hunter-green/5 to-white dark:from-dark-surface-2 dark:via-mh-hunter-green/5 dark:to-dark-surface-2 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-mh-hunter-green/20 dark:border-mh-hunter-green/20 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-mh-hunter-green/10 to-mh-hunter-green/20 dark:from-mh-hunter-green/20 dark:to-mh-hunter-green/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:from-mh-leather-tan group-hover:to-mh-leather-tan group-hover:bg-opacity-90 dark:group-hover:from-mh-leather-tan dark:group-hover:to-mh-leather-tan dark:group-hover:bg-opacity-90 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <BookOpen size={28} className="text-mh-hunter-green dark:text-mh-hunter-green group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green bg-clip-text text-transparent mb-1">50+</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary">Articles Published</div>
                <div className="w-12 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mx-auto mt-3 rounded-full transition-all duration-300 group-hover:w-16"></div>
              </div>
            </div>
            
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/5 to-mh-hunter-green/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="relative bg-gradient-to-br from-white via-mh-leather-tan/5 to-white dark:from-dark-surface-2 dark:via-mh-leather-tan/5 dark:to-dark-surface-2 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-mh-leather-tan/20 dark:border-mh-leather-tan/20 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-mh-hunter-green/10 to-mh-hunter-green/20 dark:from-mh-hunter-green/20 dark:to-mh-hunter-green/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:from-mh-leather-tan group-hover:to-mh-leather-tan group-hover:bg-opacity-90 dark:group-hover:from-mh-leather-tan dark:group-hover:to-mh-leather-tan dark:group-hover:bg-opacity-90 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <Users size={28} className="text-mh-hunter-green dark:text-mh-hunter-green group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green bg-clip-text text-transparent mb-1">10K+</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary">Monthly Readers</div>
                <div className="w-12 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mx-auto mt-3 rounded-full transition-all duration-300 group-hover:w-16"></div>
              </div>
            </div>
            
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/5 to-mh-leather-tan/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="relative bg-gradient-to-br from-white via-mh-hunter-green/5 to-white dark:from-dark-surface-2 dark:via-mh-hunter-green/5 dark:to-dark-surface-2 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-mh-hunter-green/20 dark:border-mh-hunter-green/20 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-mh-hunter-green/10 to-mh-hunter-green/20 dark:from-mh-hunter-green/20 dark:to-mh-hunter-green/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:from-mh-leather-tan group-hover:to-mh-leather-tan group-hover:bg-opacity-90 dark:group-hover:from-mh-leather-tan dark:group-hover:to-mh-leather-tan dark:group-hover:bg-opacity-90 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <TrendingUp size={28} className="text-mh-hunter-green dark:text-mh-hunter-green group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green bg-clip-text text-transparent mb-1">95%</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary">Industry Accuracy</div>
                <div className="w-12 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mx-auto mt-3 rounded-full transition-all duration-300 group-hover:w-16"></div>
              </div>
            </div>
            
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/5 to-mh-hunter-green/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="relative bg-gradient-to-br from-white via-mh-leather-tan/5 to-white dark:from-dark-surface-2 dark:via-mh-leather-tan/5 dark:to-dark-surface-2 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-mh-leather-tan/20 dark:border-mh-leather-tan/20 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-mh-hunter-green/10 to-mh-hunter-green/20 dark:from-mh-hunter-green/20 dark:to-mh-hunter-green/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:from-mh-leather-tan group-hover:to-mh-leather-tan group-hover:bg-opacity-90 dark:group-hover:from-mh-leather-tan dark:group-hover:to-mh-leather-tan dark:group-hover:bg-opacity-90 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <Award size={28} className="text-mh-hunter-green dark:text-mh-hunter-green group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green bg-clip-text text-transparent mb-1">5+</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary">Years Publishing</div>
                <div className="w-12 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mx-auto mt-3 rounded-full transition-all duration-300 group-hover:w-16"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="featured-articles" className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-mh-leather-tan/5 dark:from-dark-surface dark:via-dark-surface-2 dark:to-mh-leather-tan/10 transition-colors duration-300">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(189,146,100,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(189,146,100,0.03),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-mh-hunter-green/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-mh-leather-tan/10 to-transparent rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-leather-tan/10 to-mh-hunter-green/10 px-6 py-2 rounded-full mb-6 border border-mh-leather-tan/20 dark:border-mh-leather-tan/20">
              <span className="text-mh-leather-tan dark:text-mh-leather-tan font-semibold">Editor's Picks</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Discover our most impactful insights and industry-leading perspectives on construction innovation</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <article key={article.id} className={`${index === 0 ? 'lg:col-span-2' : ''} group relative`}>
                <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/10 to-mh-hunter-green/10 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
                <div className="relative bg-gradient-to-br from-white via-gray-50 to-mh-leather-tan/5 dark:from-dark-surface-2 dark:via-dark-surface dark:to-mh-leather-tan/5 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-mh-leather-tan dark:hover:border-mh-leather-tan transition-all duration-500 transform hover:-translate-y-3 border border-transparent dark:border-dark-border backdrop-blur-sm">
                  <div className={`relative ${index === 0 ? 'h-64' : 'h-48'} overflow-hidden`}>
                    {/* Gradient overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg group-hover:from-white group-hover:to-white group-hover:text-mh-hunter-green transition-all duration-300 border border-mh-leather-tan/20">
                        {article.category}
                      </span>
                    </div>
                    {/* Featured badge for main article */}
                    {index === 0 && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan dark:from-mh-leather-tan dark:to-mh-hunter-green text-white dark:text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-white/20">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center text-gray-600 dark:text-dark-text-secondary text-sm mb-3 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">
                        <Calendar size={16} className="mr-2" />
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <Clock size={16} className="mr-2" />
                        <span>{article.readTime}</span>
                      </div>
                      
                      <h3 className={`font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-dark-text-secondary mb-4 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300">
                        {article.excerpt}
                      </p>
                      
                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center font-semibold bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent hover:from-mh-leather-tan hover:to-mh-hunter-green transition-all duration-300 group-hover:translate-x-2"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-2 text-mh-hunter-green group-hover:ml-3 group-hover:text-mh-leather-tan transition-all duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Topics & Quick Insights */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-mh-hunter-green/5 dark:from-dark-surface-2 dark:via-dark-surface dark:to-mh-hunter-green/10 transition-colors duration-300">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,104,81,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,104,81,0.05),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-40 h-40 bg-mh-leather-tan/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-mh-hunter-green/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 px-6 py-2 rounded-full mb-6 border border-mh-hunter-green/20 dark:border-mh-hunter-green/20">
              <TrendingUp size={20} className="text-mh-hunter-green dark:text-mh-hunter-green mr-2" />
              <span className="text-mh-hunter-green dark:text-mh-hunter-green font-semibold">What's Hot</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
              Trending Topics
            </h2>
            <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
              Hot topics and quick insights from the construction industry's most discussed innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/10 to-mh-leather-tan/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-gradient-to-br from-white via-mh-hunter-green/5 to-white dark:from-dark-surface-2 dark:via-mh-hunter-green/5 dark:to-dark-surface-2 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 border-l-4 border-mh-hunter-green dark:border-mh-hunter-green transform hover:-translate-y-3 backdrop-blur-sm min-h-[240px] flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-mh-hunter-green/10 to-mh-hunter-green/20 rounded-lg mr-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl">
                    <TrendingUp size={24} className="text-mh-hunter-green dark:text-mh-hunter-green transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-black dark:text-dark-text group-hover:text-mh-hunter-green transition-colors duration-300">AI in Construction</h3>
                </div>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300 flex-1">The latest developments in AI-powered project planning and estimation tools revolutionizing the industry.</p>
                <div className="w-16 h-1 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan mt-4 rounded-full transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>

            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/10 to-mh-hunter-green/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-gradient-to-br from-white via-mh-leather-tan/5 to-white dark:from-dark-surface-2 dark:via-mh-leather-tan/5 dark:to-dark-surface-2 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 border-l-4 border-mh-leather-tan dark:border-mh-leather-tan transform hover:-translate-y-3 backdrop-blur-sm min-h-[240px] flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-mh-leather-tan/10 to-mh-leather-tan/20 rounded-lg mr-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl">
                    <Award size={24} className="text-mh-leather-tan dark:text-mh-leather-tan transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-black dark:text-dark-text group-hover:text-mh-leather-tan transition-colors duration-300">Safety Standards</h3>
                </div>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300 flex-1">New safety protocols and veteran-inspired approaches to jobsite protection and worker safety.</p>
                <div className="w-16 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mt-4 rounded-full transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>

            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/10 to-mh-leather-tan/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-gradient-to-br from-white via-mh-hunter-green/5 to-white dark:from-dark-surface-2 dark:via-mh-hunter-green/5 dark:to-dark-surface-2 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 border-l-4 border-mh-hunter-green dark:border-mh-hunter-green transform hover:-translate-y-3 backdrop-blur-sm min-h-[240px] flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-mh-hunter-green/10 to-mh-hunter-green/20 rounded-lg mr-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl">
                    <BookOpen size={24} className="text-mh-hunter-green dark:text-mh-hunter-green transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-black dark:text-dark-text group-hover:text-mh-hunter-green transition-colors duration-300">Best Practices</h3>
                </div>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300 flex-1">Military-grade precision techniques applied to commercial and industrial construction projects.</p>
                <div className="w-16 h-1 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan mt-4 rounded-full transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>

            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/10 to-mh-hunter-green/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-gradient-to-br from-white via-mh-leather-tan/5 to-white dark:from-dark-surface-2 dark:via-mh-leather-tan/5 dark:to-dark-surface-2 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 border-l-4 border-mh-leather-tan dark:border-mh-leather-tan transform hover:-translate-y-3 backdrop-blur-sm min-h-[240px] flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-mh-leather-tan/10 to-mh-leather-tan/20 rounded-lg mr-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl">
                    <Users size={24} className="text-mh-leather-tan dark:text-mh-leather-tan transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-black dark:text-dark-text group-hover:text-mh-leather-tan transition-colors duration-300">Team Insights</h3>
                </div>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300 flex-1">Behind-the-scenes stories and expertise from our 150+ years of combined construction experience.</p>
                <div className="w-16 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mt-4 rounded-full transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-mh-leather-tan/5 dark:from-dark-surface dark:via-dark-surface-2 dark:to-mh-leather-tan/10 transition-colors duration-300">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(189,146,100,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(189,146,100,0.05),transparent_70%)]"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-mh-hunter-green/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-mh-leather-tan/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div className="mb-6 md:mb-0">
              <div className="inline-flex items-center bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 px-6 py-2 rounded-full mb-4 border border-mh-hunter-green/20 dark:border-mh-hunter-green/20">
                <BookOpen size={20} className="text-mh-hunter-green dark:text-mh-hunter-green mr-2" />
                <span className="text-mh-hunter-green dark:text-mh-hunter-green font-semibold">All Posts</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Explore our complete collection of construction insights and industry expertise</p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green text-white shadow-lg border border-mh-leather-tan/20'
                      : 'border border-mh-hunter-green dark:border-mh-leather-tan text-mh-hunter-green dark:text-mh-leather-tan hover:bg-gradient-to-r hover:from-mh-hunter-green hover:to-mh-leather-tan dark:hover:from-mh-leather-tan dark:hover:to-mh-hunter-green hover:text-white dark:hover:text-white bg-white dark:bg-dark-surface-2'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/10 to-mh-hunter-green/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
                <div className="relative bg-gradient-to-br from-white via-gray-50 to-mh-leather-tan/5 dark:from-dark-surface-2 dark:via-dark-surface dark:to-mh-leather-tan/5 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-mh-leather-tan dark:hover:border-mh-leather-tan transition-all duration-500 transform hover:-translate-y-3 border border-transparent dark:border-dark-border backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg group-hover:from-white group-hover:to-white group-hover:text-mh-hunter-green transition-all duration-300 border border-mh-leather-tan/20">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center text-gray-600 dark:text-dark-text-secondary text-sm mb-3 group-hover:text-mh-hunter-green dark:group-hover:text-mh-leather-tan transition-colors duration-300">
                        <Calendar size={16} className="mr-2" />
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <Clock size={16} className="mr-2" />
                        <span>{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-dark-text mb-4 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300">
                        {article.excerpt}
                      </p>
                      
                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center font-semibold bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent hover:from-mh-leather-tan hover:to-mh-hunter-green transition-all duration-300 group-hover:translate-x-2"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-2 text-mh-hunter-green group-hover:ml-3 group-hover:text-mh-leather-tan transition-all duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan dark:from-mh-leather-tan dark:to-mh-hunter-green text-white dark:text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-mh-leather-tan hover:to-mh-hunter-green dark:hover:from-mh-hunter-green dark:hover:to-mh-leather-tan transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-mh-hunter-green/20">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-mh-hunter-green via-mh-leather-tan to-mh-hunter-green dark:from-dark-surface-2 dark:via-dark-surface-3 dark:to-dark-surface text-white dark:text-dark-text transition-colors duration-300">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-mh-leather-tan/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-radial-gradient from-white/5 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-full backdrop-blur-sm border border-white/20">
                <BookOpen size={48} className="text-mh-leather-tan mx-auto transition-all duration-500 hover:scale-110 hover:rotate-12" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-mh-leather-tan to-white bg-clip-text text-transparent">
              Stay Updated with Construction Insights
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-gray-200 dark:text-gray-300 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest construction insights, 
              project updates, AI technology news, and industry innovations. 
              Join 10,000+ construction professionals who trust our expertise.
            </p>
          </div>
          
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-mh-leather-tan/20 to-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:from-white/15 hover:to-white/5 border border-white/20 hover:border-white/30 shadow-2xl">
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-mh-leather-tan/20 to-mh-hunter-green/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="relative w-full px-4 py-3 rounded-lg text-black dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-mh-leather-tan bg-white/90 dark:bg-dark-surface border border-gray-300/50 dark:border-dark-border transition-all duration-300 hover:shadow-md focus:bg-white dark:focus:bg-dark-surface backdrop-blur-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="relative bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green text-white px-8 py-3 rounded-lg font-semibold hover:from-mh-hunter-green hover:to-mh-leather-tan transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-mh-leather-tan/20 hover:border-white/30"
                >
                  Subscribe Now
                </button>
              </form>
              
              <div className="mt-6 text-sm text-gray-300 dark:text-gray-400 space-y-2">
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-mh-leather-tan rounded-full mr-2"></span>
                    Weekly construction insights
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-mh-leather-tan rounded-full mr-2"></span>
                    Project spotlights
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-mh-leather-tan rounded-full mr-2"></span>
                    AI technology updates
                  </p>
                </div>
                <p className="mt-4 text-xs opacity-75">No spam, unsubscribe anytime. Trusted by 10,000+ professionals.</p>
              </div>
            </div>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300 dark:text-gray-400">
            <div className="flex items-center transition-all duration-300 hover:text-mh-leather-tan transform hover:scale-105 group">
              <div className="p-2 bg-white/10 rounded-lg mr-3 group-hover:bg-mh-leather-tan/20 transition-colors duration-300">
                <Users size={20} className="text-mh-leather-tan" />
              </div>
              <span>10K+ Subscribers</span>
            </div>
            <div className="flex items-center transition-all duration-300 hover:text-mh-leather-tan transform hover:scale-105 group">
              <div className="p-2 bg-white/10 rounded-lg mr-3 group-hover:bg-mh-leather-tan/20 transition-colors duration-300">
                <Award size={20} className="text-mh-leather-tan" />
              </div>
              <span>Industry Recognized</span>
            </div>
            <div className="flex items-center transition-all duration-300 hover:text-mh-leather-tan transform hover:scale-105 group">
              <div className="p-2 bg-white/10 rounded-lg mr-3 group-hover:bg-mh-leather-tan/20 transition-colors duration-300">
                <TrendingUp size={20} className="text-mh-leather-tan" />
              </div>
              <span>98% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

  <div className="mt-auto">
    <WhyChooseSection />
    <Footer />
  </div>
    </main>
  )
}
