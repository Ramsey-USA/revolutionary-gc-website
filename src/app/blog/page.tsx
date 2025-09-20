"use client"
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import StarDecorations from '../../components/StarDecorations'
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
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan dark:from-dark-surface-2 dark:to-dark-surface-3 text-white dark:text-dark-text overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Star decorations */}
        <StarDecorations />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-dark-text">
              Construction Insights & News
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white dark:text-dark-text-secondary">
              Stay updated with the latest construction innovations, project highlights, 
              and industry insights from our 150+ years of combined team expertise.
            </p>
          </div>

          {/* Blog Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="bg-white dark:bg-dark-surface bg-opacity-20 dark:bg-opacity-80 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-mh-leather-tan group-hover:bg-opacity-30 dark:group-hover:bg-mh-leather-tan dark:group-hover:bg-opacity-90 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <BookOpen size={28} className="group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-mh-leather-tan mb-1 transition-all duration-300 group-hover:scale-110">50+</div>
              <div className="text-sm md:text-base text-gray-200">Articles Published</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white dark:bg-dark-surface bg-opacity-20 dark:bg-opacity-80 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-mh-leather-tan group-hover:bg-opacity-30 dark:group-hover:bg-mh-leather-tan dark:group-hover:bg-opacity-90 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Users size={28} className="group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-mh-leather-tan mb-1 transition-all duration-300 group-hover:scale-110">10K+</div>
              <div className="text-sm md:text-base text-gray-200">Monthly Readers</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white dark:bg-dark-surface bg-opacity-20 dark:bg-opacity-80 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-mh-leather-tan group-hover:bg-opacity-30 dark:group-hover:bg-mh-leather-tan dark:group-hover:bg-opacity-90 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <TrendingUp size={28} className="group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-mh-leather-tan mb-1 transition-all duration-300 group-hover:scale-110">95%</div>
              <div className="text-sm md:text-base text-gray-200">Industry Accuracy</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white dark:bg-dark-surface bg-opacity-20 dark:bg-opacity-80 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-mh-leather-tan dark:group-hover:bg-mh-leather-tan group-hover:bg-opacity-30 dark:group-hover:bg-opacity-90 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Award size={28} className="group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-mh-leather-tan mb-1 transition-all duration-300 group-hover:scale-110">5+</div>
              <div className="text-sm md:text-base text-gray-200">Years Publishing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text text-center mb-12">
            Featured Articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <article key={article.id} className={`${index === 0 ? 'lg:col-span-2' : ''} group`}>
                <div className="bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-mh-leather-tan dark:hover:border-mh-leather-tan transition-all duration-500 transform hover:-translate-y-2 border border-transparent dark:border-dark-border">
                  <div className={`relative ${index === 0 ? 'h-64' : 'h-48'} overflow-hidden`}>
                    {/* Gradient overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-mh-leather-tan text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg group-hover:bg-white group-hover:text-mh-hunter-green transition-colors duration-300">
                        {article.category}
                      </span>
                    </div>
                    {/* Featured badge for main article */}
                    {index === 0 && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="bg-mh-hunter-green dark:bg-mh-leather-tan text-white dark:text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 group-hover:bg-gradient-to-br group-hover:from-gray-50 dark:group-hover:from-dark-surface-3 group-hover:to-white dark:group-hover:to-dark-surface-2 transition-all duration-300">
                    <div className="flex items-center text-field-gray dark:text-dark-text-secondary text-sm mb-3 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">
                      <Calendar size={16} className="mr-2" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-2" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className={`font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                      {article.title}
                    </h3>
                    
                    <p className="text-field-gray dark:text-dark-text-secondary mb-4 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300">
                      {article.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center text-mh-hunter-green dark:text-mh-hunter-green font-semibold hover:text-mh-leather-tan dark:hover:text-mh-leather-tan transition-all duration-300 group-hover:translate-x-2"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Topics & Quick Insights */}
      <section className="py-16 bg-gradient-to-r from-gray-50 dark:from-dark-surface-2 to-white dark:to-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
              Trending Topics
            </h2>
            <p className="text-lg text-field-gray dark:text-dark-text-secondary max-w-2xl mx-auto">
              Hot topics and quick insights from the construction industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-dark-surface-2 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-500 border-l-4 border-mh-hunter-green dark:border-mh-hunter-green transform hover:-translate-y-2 group">
              <div className="flex items-center mb-4">
                <TrendingUp size={24} className="text-mh-hunter-green dark:text-mh-hunter-green mr-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-bold text-black dark:text-dark-text">AI in Construction</h3>
              </div>
              <p className="text-field-gray dark:text-dark-text-secondary text-sm">The latest developments in AI-powered project planning and estimation tools revolutionizing the industry.</p>
            </div>

            <div className="bg-white dark:bg-dark-surface-2 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-500 border-l-4 border-mh-leather-tan dark:border-mh-leather-tan transform hover:-translate-y-2 group">
              <div className="flex items-center mb-4">
                <Award size={24} className="text-mh-leather-tan dark:text-mh-leather-tan mr-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-bold text-black dark:text-dark-text">Safety Standards</h3>
              </div>
              <p className="text-field-gray dark:text-dark-text-secondary text-sm">New safety protocols and veteran-inspired approaches to jobsite protection and worker safety.</p>
            </div>

            <div className="bg-white dark:bg-dark-surface-2 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-500 border-l-4 border-mh-hunter-green dark:border-mh-hunter-green transform hover:-translate-y-2 group">
              <div className="flex items-center mb-4">
                <BookOpen size={24} className="text-mh-hunter-green dark:text-mh-hunter-green mr-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-bold text-black dark:text-dark-text">Best Practices</h3>
              </div>
              <p className="text-field-gray dark:text-dark-text-secondary text-sm">Military-grade precision techniques applied to commercial and industrial construction projects.</p>
            </div>

            <div className="bg-white dark:bg-dark-surface-2 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-500 border-l-4 border-mh-leather-tan dark:border-mh-leather-tan transform hover:-translate-y-2 group">
              <div className="flex items-center mb-4">
                <Users size={24} className="text-mh-leather-tan dark:text-mh-leather-tan mr-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-bold text-black dark:text-dark-text">Team Insights</h3>
              </div>
              <p className="text-field-gray dark:text-dark-text-secondary text-sm">Behind-the-scenes stories and expertise from our 150+ years of combined construction experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-light-gray dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 md:mb-0">
              Latest Articles
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-mh-leather-tan text-white shadow-lg'
                      : 'border border-mh-hunter-green dark:border-mh-leather-tan text-mh-hunter-green dark:text-mh-leather-tan hover:bg-mh-hunter-green dark:hover:bg-mh-leather-tan hover:text-white dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="group">
                <div className="bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-mh-leather-tan dark:hover:border-mh-leather-tan transition-all duration-500 transform hover:-translate-y-2 border border-transparent dark:border-dark-border">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-mh-leather-tan text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg group-hover:bg-white group-hover:text-mh-hunter-green transition-colors duration-300">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white dark:group-hover:from-dark-surface-3 dark:group-hover:to-dark-surface-2 transition-all duration-300">
                    <div className="flex items-center text-field-gray dark:text-dark-text-secondary text-sm mb-3 group-hover:text-mh-hunter-green dark:group-hover:text-mh-leather-tan transition-colors duration-300">
                      <Calendar size={16} className="mr-2" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-2" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-field-gray dark:text-dark-text mb-4 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300">
                      {article.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center text-mh-hunter-green font-semibold hover:text-mh-leather-tan transition-all duration-300 group-hover:translate-x-2"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-mh-hunter-green dark:bg-mh-leather-tan text-white dark:text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-mh-leather-tan dark:hover:bg-mh-hunter-green transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan dark:from-dark-surface-2 dark:to-dark-surface-3 text-white dark:text-dark-text relative overflow-hidden transition-colors duration-300">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <BookOpen size={48} className="text-mh-leather-tan mx-auto mb-6 transition-transform duration-300 hover:scale-110 hover:rotate-12" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Construction Insights
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-gray-200">
              Subscribe to our newsletter for the latest construction insights, 
              project updates, AI technology news, and industry innovations. 
              Join 10,000+ construction professionals who trust our expertise.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8 transition-all duration-300 hover:bg-opacity-15">
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg text-black dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-mh-leather-tan bg-white dark:bg-dark-surface border border-gray-300 dark:border-dark-border transition-all duration-300 hover:shadow-md"
                />
              </div>
              <button
                type="submit"
                className="bg-mh-leather-tan text-white px-8 py-3 rounded-lg font-semibold hover:bg-mh-hunter-green transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Subscribe Now
              </button>
            </form>
            
            <div className="mt-6 text-sm text-gray-300">
              <p>✓ Weekly construction insights  ✓ Project spotlights  ✓ AI technology updates</p>
              <p className="mt-2">No spam, unsubscribe anytime. Trusted by 10,000+ professionals.</p>
            </div>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
            <div className="flex items-center transition-all duration-300 hover:text-mh-leather-tan transform hover:scale-105">
              <Users size={20} className="mr-2 text-mh-leather-tan" />
              <span>10K+ Subscribers</span>
            </div>
            <div className="flex items-center transition-all duration-300 hover:text-mh-leather-tan transform hover:scale-105">
              <Award size={20} className="mr-2 text-mh-leather-tan" />
              <span>Industry Recognized</span>
            </div>
            <div className="flex items-center transition-all duration-300 hover:text-mh-leather-tan transform hover:scale-105">
              <TrendingUp size={20} className="mr-2 text-mh-leather-tan" />
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
