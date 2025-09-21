"use client"
import { useState, useMemo } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import UniversalHeroSection from '../../components/UniversalHeroSection'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Tag, TrendingUp, Users, BookOpen, Award, Search, Filter, Grid, List, User, ArrowLeft, ArrowRight as ArrowRightIcon } from 'lucide-react'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  
  const articlesPerPage = 6

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
      featured: true,
      author: "Mike Henderson",
      tags: ["AI", "Technology", "Innovation", "Estimation"],
      popularity: 98
    },
    {
      id: 2,
      title: "Yakima Valley Fire Station Project Completion",
      excerpt: "A detailed look behind the scenes of our latest fire station project featuring specialized emergency services infrastructure and cutting-edge safety systems.",
      image: "/images/blog/fire-station-completion.jpg",
      date: "September 5, 2025",
      category: "Project Updates",
      slug: "yakima-fire-station-completion",
      readTime: "3 min read",
      featured: true,
      author: "Sarah Mitchell",
      tags: ["Fire Station", "Public Safety", "Infrastructure"],
      popularity: 85
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
      featured: true,
      author: "Mike Henderson",
      tags: ["Military", "Leadership", "Quality", "Management"],
      popularity: 92
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
      featured: false,
      author: "David Chen",
      tags: ["Sustainability", "Green Building", "Environment"],
      popularity: 76
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
      featured: false,
      author: "Lisa Rodriguez",
      tags: ["Estimating", "AI", "Planning", "Technology"],
      popularity: 68
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
      featured: false,
      author: "Robert Johnson",
      tags: ["Safety", "Worker Protection", "Protocols"],
      popularity: 81
    }
  ]

  const categories = ["All", "Technology", "Project Updates", "Company Culture", "Sustainability", "Safety"]
  
  // Enhanced filtering and sorting logic
  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articles.filter(article => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      return matchesCategory && matchesSearch
    })

    // Sort articles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case 'popular':
          return b.popularity - a.popularity
        case 'alphabetical':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return filtered
  }, [selectedCategory, searchQuery, sortBy])

  const featuredArticles = articles.filter(article => article.featured)
  const nonFeaturedArticles = filteredAndSortedArticles.filter(article => !article.featured)
  
  // Pagination logic
  const totalPages = Math.ceil(nonFeaturedArticles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const paginatedArticles = nonFeaturedArticles.slice(startIndex, startIndex + articlesPerPage)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentPage(1) // Reset to first page when searching
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1) // Reset to first page when changing category
  }

  const handlePageChange = (page: number) => {
    setIsLoading(true)
    setCurrentPage(page)
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 300)
  }

  return (
    <main className="min-h-screen pt-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
          href: "#newsletter-signup"
        }}
      />

      {/* Blog Statistics */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-mh-leather-tan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,104,81,0.05),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(56,104,81,0.08),transparent_55%)]"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-mh-hunter-green/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-mh-leather-tan/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/25 dark:to-mh-leather-tan/25 px-6 py-2 rounded-full mb-6 border border-mh-hunter-green/30 dark:border-mh-hunter-green/40">
              <span className="text-mh-hunter-green dark:text-mh-leather-tan font-semibold">Blog Insights</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Publishing Impact</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Delivering trusted construction insights and industry expertise to professionals nationwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/25 dark:to-mh-leather-tan/25 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-mh-leather-tan/35 dark:border-mh-leather-tan/40 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-mh-hunter-green/15 to-mh-leather-tan/15 dark:from-mh-hunter-green/30 dark:to-mh-leather-tan/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:from-mh-leather-tan group-hover:to-mh-hunter-green transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <BookOpen size={28} className="text-mh-hunter-green dark:text-mh-leather-tan group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green bg-clip-text text-transparent mb-1">50+</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Articles Published</div>
                <div className="w-12 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mx-auto mt-3 rounded-full transition-all duration-300 group-hover:w-16"></div>
              </div>
            </div>
            
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/10 to-mh-hunter-green/10 dark:from-mh-leather-tan/25 dark:to-mh-hunter-green/25 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-mh-leather-tan/35 dark:border-mh-leather-tan/40 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-mh-hunter-green/15 to-mh-leather-tan/15 dark:from-mh-hunter-green/30 dark:to-mh-leather-tan/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:from-mh-leather-tan group-hover:to-mh-hunter-green transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <Users size={28} className="text-mh-hunter-green dark:text-mh-leather-tan group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green bg-clip-text text-transparent mb-1">10K+</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Monthly Readers</div>
                <div className="w-12 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mx-auto mt-3 rounded-full transition-all duration-300 group-hover:w-16"></div>
              </div>
            </div>
            
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/25 dark:to-mh-leather-tan/25 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-mh-leather-tan/35 dark:border-mh-leather-tan/40 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-mh-hunter-green/15 to-mh-leather-tan/15 dark:from-mh-hunter-green/30 dark:to-mh-leather-tan/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:from-mh-leather-tan group-hover:to-mh-hunter-green transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <TrendingUp size={28} className="text-mh-hunter-green dark:text-mh-leather-tan group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green bg-clip-text text-transparent mb-1">95%</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Industry Accuracy</div>
                <div className="w-12 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mx-auto mt-3 rounded-full transition-all duration-300 group-hover:w-16"></div>
              </div>
            </div>
            
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/10 to-mh-hunter-green/10 dark:from-mh-leather-tan/25 dark:to-mh-hunter-green/25 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-mh-leather-tan/35 dark:border-mh-leather-tan/40 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-mh-hunter-green/15 to-mh-leather-tan/15 dark:from-mh-hunter-green/30 dark:to-mh-leather-tan/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:from-mh-leather-tan group-hover:to-mh-hunter-green transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <Award size={28} className="text-mh-hunter-green dark:text-mh-leather-tan group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green bg-clip-text text-transparent mb-1">5+</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Years Publishing</div>
                <div className="w-12 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mx-auto mt-3 rounded-full transition-all duration-300 group-hover:w-16"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gradient-to-r from-mh-hunter-green/5 via-white to-mh-leather-tan/5 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border-b border-mh-hunter-green/20 dark:border-mh-leather-tan/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <form onSubmit={handleSearch} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan dark:from-mh-hunter-green/20 dark:to-mh-leather-tan/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={20} className="text-gray-400 dark:text-gray-500" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, topics, or tags..."
                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                    aria-label="Search articles"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white rounded-r-lg hover:from-mh-leather-tan hover:to-mh-hunter-green transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mh-hunter-green focus:ring-offset-2"
                    aria-label="Search"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* Filters and View Controls */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 pr-8 text-gray-900 dark:text-white focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300"
                  aria-label="Sort articles"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="alphabetical">A-Z</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <Filter size={16} className="text-mh-hunter-green/50 dark:text-mh-leather-tan/50" />
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-mh-hunter-green/5 dark:bg-mh-leather-tan/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-mh-hunter-green text-white shadow-md'
                      : 'text-mh-hunter-green dark:text-mh-leather-tan hover:text-mh-leather-tan dark:hover:text-mh-hunter-green'
                  }`}
                  aria-label="Grid view"
                  aria-pressed={viewMode === 'grid'}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-mh-hunter-green text-white shadow-md'
                      : 'text-mh-hunter-green dark:text-mh-leather-tan hover:text-mh-leather-tan dark:hover:text-mh-hunter-green'
                  }`}
                  aria-label="List view"
                  aria-pressed={viewMode === 'list'}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            {searchQuery && (
              <p>
                Showing {filteredAndSortedArticles.length} result{filteredAndSortedArticles.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
            )}
            {!searchQuery && selectedCategory !== 'All' && (
              <p>
                Showing {filteredAndSortedArticles.length} article{filteredAndSortedArticles.length !== 1 ? 's' : ''} in {selectedCategory}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="featured-articles" className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-mh-leather-tan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(189,146,100,0.10),transparent_55%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(189,146,100,0.08),transparent_55%)]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-mh-hunter-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-mh-leather-tan/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-leather-tan/15 to-mh-hunter-green/15 dark:from-mh-leather-tan/25 dark:to-mh-hunter-green/25 px-6 py-2 rounded-full mb-6 border border-mh-leather-tan/40 dark:border-mh-leather-tan/30">
              <span className="text-mh-leather-tan dark:text-mh-hunter-green font-semibold">Editor's Picks</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Discover our most impactful insights and industry-leading perspectives on construction innovation</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <article key={article.id} className={`${index === 0 ? 'lg:col-span-2' : ''} group relative`}>
                <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/15 to-mh-hunter-green/15 dark:from-mh-leather-tan/25 dark:to-mh-hunter-green/25 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-mh-leather-tan/60 dark:hover:border-mh-leather-tan/50 transition-all duration-500 transform hover:-translate-y-3 border border-mh-hunter-green/25 dark:border-mh-hunter-green/40 backdrop-blur-sm">
                  <div className={`relative ${index === 0 ? 'h-64' : 'h-48'} overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg group-hover:from-white group-hover:to-white group-hover:text-mh-hunter-green transition-all duration-300 border border-white/10">
                        {article.category}
                      </span>
                    </div>
                    {index === 0 && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-white/20">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3 group-hover:text-mh-hunter-green dark:group-hover:text-mh-leather-tan transition-colors duration-300">
                        <User size={16} className="mr-1" />
                        <span>{article.author}</span>
                        <span className="mx-2">•</span>
                        <Calendar size={16} className="mr-1" />
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <Clock size={16} className="mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                      
                      <h3 className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-mh-hunter-green dark:group-hover:text-mh-leather-tan transition-colors duration-300 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 text-xs bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 text-mh-hunter-green dark:text-mh-leather-tan rounded-full border border-mh-hunter-green/30 dark:border-mh-hunter-green/40"
                          >
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center font-semibold bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent hover:from-mh-leather-tan hover:to-mh-hunter-green transition-all duration-300 group-hover:translate-x-2"
                        aria-label={`Read more about ${article.title}`}
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
      <section className="py-16 relative overflow-hidden bg-gradient-to-r from-mh-hunter-green/5 via-white to-mh-leather-tan/5 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,104,81,0.05),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,104,81,0.08),transparent_55%)]"></div>
        <div className="absolute top-0 left-0 w-40 h-40 bg-mh-hunter-green/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-mh-leather-tan/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/20 dark:to-mh-leather-tan/20 px-6 py-2 rounded-full mb-6 border border-mh-hunter-green/30 dark:border-mh-hunter-green/40">
              <TrendingUp size={20} className="text-mh-hunter-green dark:text-mh-leather-tan mr-2" />
              <span className="text-mh-hunter-green dark:text-mh-leather-tan font-semibold">What's Hot</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trending Topics
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hot topics and quick insights from the construction industry's most discussed innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/25 dark:to-mh-leather-tan/25 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 border-l-4 border-mh-hunter-green transform hover:-translate-y-3 backdrop-blur-sm min-h-[240px] flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-mh-hunter-green to-mh-leather-tan dark:from-mh-hunter-green/20 dark:to-mh-leather-tan/20 rounded-lg mr-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl">
                    <TrendingUp size={24} className="text-mh-hunter-green dark:text-mh-leather-tan transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-mh-hunter-green dark:group-hover:text-mh-leather-tan transition-colors duration-300">AI in Construction</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300 flex-1">The latest developments in AI-powered project planning and estimation tools revolutionizing the industry.</p>
                <div className="w-16 h-1 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan mt-4 rounded-full transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>

            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/10 to-mh-hunter-green/10 dark:from-mh-leather-tan/25 dark:to-mh-hunter-green/25 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 border-l-4 border-mh-leather-tan transform hover:-translate-y-3 backdrop-blur-sm min-h-[240px] flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-mh-leather-tan to-mh-hunter-green dark:from-mh-leather-tan/20 dark:to-mh-hunter-green/20 rounded-lg mr-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl">
                    <Award size={24} className="text-mh-leather-tan dark:text-mh-hunter-green transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-mh-leather-tan dark:group-hover:text-mh-hunter-green transition-colors duration-300">Safety Standards</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300 flex-1">New safety protocols and veteran-inspired approaches to jobsite protection and worker safety.</p>
                <div className="w-16 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mt-4 rounded-full transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>

            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/25 dark:to-mh-leather-tan/25 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 border-l-4 border-mh-hunter-green transform hover:-translate-y-3 backdrop-blur-sm min-h-[240px] flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-mh-leather-tan to-mh-hunter-green dark:from-mh-leather-tan/20 dark:to-mh-hunter-green/20 rounded-lg mr-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl">
                    <BookOpen size={24} className="text-mh-hunter-green dark:text-mh-leather-tan transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-mh-hunter-green dark:group-hover:text-mh-leather-tan transition-colors duration-300">Best Practices</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300 flex-1">Military-grade precision techniques applied to commercial and industrial construction projects.</p>
                <div className="w-16 h-1 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan mt-4 rounded-full transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>

            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/10 to-mh-hunter-green/10 dark:from-mh-leather-tan/25 dark:to-mh-hunter-green/25 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 border-l-4 border-mh-leather-tan transform hover:-translate-y-3 backdrop-blur-sm min-h-[240px] flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-mh-leather-tan to-mh-hunter-green dark:from-mh-leather-tan/20 dark:to-mh-hunter-green/20 rounded-lg mr-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl">
                    <Users size={24} className="text-mh-leather-tan dark:text-mh-hunter-green transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-mh-leather-tan dark:group-hover:text-mh-hunter-green transition-colors duration-300">Team Insights</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300 flex-1">Behind-the-scenes stories and expertise from our 150+ years of combined construction experience.</p>
                <div className="w-16 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mt-4 rounded-full transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-mh-hunter-green/5 via-white to-mh-leather-tan/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(189,146,100,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(189,146,100,0.10),transparent_70%)]"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-mh-hunter-green/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-mh-leather-tan/15 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div className="mb-6 md:mb-0">
              <div className="inline-flex items-center bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/20 dark:to-mh-leather-tan/20 px-6 py-2 rounded-full mb-4 border border-mh-hunter-green/30 dark:border-mh-hunter-green/40">
                <BookOpen size={20} className="text-mh-hunter-green dark:text-mh-leather-tan mr-2" />
                <span className="text-mh-hunter-green dark:text-mh-leather-tan font-semibold">All Posts</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Explore our complete collection of construction insights and industry expertise</p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3" role="tablist" aria-label="Article categories">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${
                    selectedCategory === category
                      ? 'bg-mh-hunter-green text-white shadow-lg hover:bg-mh-hunter-green/90'
                      : 'bg-white dark:bg-gray-800 text-mh-hunter-green dark:text-mh-leather-tan border border-mh-hunter-green/30 dark:border-mh-leather-tan/30 hover:border-mh-leather-tan dark:hover:border-mh-hunter-green'
                  }`}
                  role="tab"
                  aria-selected={selectedCategory === category}
                  aria-controls="articles-grid"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mh-hunter-green"></div>
            </div>
          )}

          {/* Articles Grid/List with updated styling */}
          <div
            id="articles-grid"
            className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-8'
            } ${isLoading ? 'opacity-50' : ''} transition-opacity duration-300`}
            role="tabpanel"
            aria-labelledby="category-filter"
          >
            {paginatedArticles.length === 0 && !isLoading ? (
              <div className="col-span-full text-center py-12">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">No articles found</h3>
                <p className="text-gray-500 dark:text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              paginatedArticles.map((article) => (
                <article key={article.id} className={`group relative ${viewMode === 'list' ? 'flex gap-6 items-start' : ''}`}>
                  {/* Decorative overlay (restore proper overlay; remove incorrect full card gradient div) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/15 to-mh-hunter-green/15 dark:from-mh-leather-tan/25 dark:to-mh-hunter-green/25 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
                  <div className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-mh-leather-tan/60 dark:hover:border-mh-leather-tan/50 transition-all duration-500 transform hover:-translate-y-3 border border-mh-hunter-green/25 dark:border-mh-hunter-green/40 backdrop-blur-sm ${viewMode === 'list' ? 'flex w-full' : ''}`}>
                    <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 h-48 flex-shrink-0' : 'h-48'}`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg group-hover:from-white group-hover:to-white group-hover:text-mh-hunter-green transition-all duration-300 border border-white/10">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 relative flex-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl"></div>
                      <div className="relative z-10">
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3 group-hover:text-mh-hunter-green dark:group-hover:text-mh-leather-tan transition-colors duration-300">
                          <User size={16} className="mr-1" />
                          <span>{article.author}</span>
                          <span className="mx-2">•</span>
                          <Calendar size={16} className="mr-1" />
                          <span>{article.date}</span>
                          <span className="mx-2">•</span>
                          <Clock size={16} className="mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                        
                        <h3 className="font-bold text-gray-900 dark:text-white mb-3 group-hover:text-mh-hunter-green dark:group-hover:text-mh-leather-tan transition-colors duration-300 text-xl">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                          {article.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 text-xs bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 text-mh-hunter-green dark:text-mh-leather-tan rounded-full border border-mh-hunter-green/30 dark:border-mh-hunter-green/40"
                            >
                              <Tag size={12} className="mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link
                          href={`/blog/${article.slug}`}
                          className="inline-flex items-center font-semibold bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent hover:from-mh-leather-tan hover:to-mh-hunter-green transition-all duration-300 group-hover:translate-x-2"
                          aria-label={`Read more about ${article.title}`}
                        >
                          Read More
                          <ArrowRight size={16} className="ml-2 text-mh-hunter-green group-hover:ml-3 group-hover:text-mh-leather-tan transition-all duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Previous page"
              >
                <ArrowLeft size={16} className="mr-2" />
                Previous
              </button>
              
              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-mh-hunter-green text-white shadow-md'
                        : 'text-mh-hunter-green dark:text-mh-leather-tan bg-white dark:bg-gray-800 border border-mh-hunter-green/30 dark:border-mh-leather-tan/30 hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10'
                    }`}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Next page"
              >
                Next
                <ArrowRightIcon size={16} className="ml-2" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter-signup" className="py-20 relative overflow-hidden bg-gradient-to-br from-mh-hunter-green via-mh-leather-tan to-mh-hunter-green dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white transition-colors duration-300">
        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-mh-leather-tan/25 rounded-full blur-2xl"></div>
        {/* Replace amber accent usages */}
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-full backdrop-blur-sm border border-white/20">
          <BookOpen size={48} className="text-mh-leather-tan/80 mx-auto transition-all duration-500 hover:scale-110 hover:rotate-12" />
        </div>
        {/* Heading gradient swap */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-mh-leather-tan to-white bg-clip-text text-transparent">
          Stay Updated with Construction Insights
        </h2>
        <p className="text-xl mb-8 leading-relaxed text-gray-200 max-w-3xl mx-auto">
          Subscribe to our newsletter for the latest construction insights, 
          project updates, AI technology news, and industry innovations. 
          Join 10,000+ construction professionals who trust our expertise.
        </p>
        
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-mh-leather-tan/25 to-mh-hunter-green/25 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:from-white/15 hover:to-white/5 border border-white/20 hover:border-white/30 shadow-2xl">
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-mh-leather-tan/25 to-mh-hunter-green/25 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="relative w-full px-4 py-3 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-mh-leather-tan bg-white/90 dark:bg-gray-800 border border-gray-300/50 dark:border-gray-600 transition-all duration-300 hover:shadow-md focus:bg-white dark:focus:bg-gray-800 backdrop-blur-sm"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green text-white rounded-lg hover:from-mh-hunter-green hover:to-mh-leather-tan transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Subscribe Now
              </button>
            </form>
            
            <div className="mt-6 text-sm text-gray-200 space-y-2">
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
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-200">
          <div className="flex items-center transition-all duration-300 hover:text-mh-leather-tan transform hover:scale-105 group">
            <div className="p-2 bg-white/10 rounded-lg mr-3 group-hover:bg-mh-leather-tan/25 transition-colors duration-300">
              <Users size={20} className="text-mh-leather-tan" />
            </div>
            <span>10K+ Subscribers</span>
          </div>
          <div className="flex items-center transition-all duration-300 hover:text-mh-leather-tan transform hover:scale-105 group">
            <div className="p-2 bg-white/10 rounded-lg mr-3 group-hover:bg-mh-leather-tan/25 transition-colors duration-300">
              <Award size={20} className="text-mh-leather-tan" />
            </div>
            <span>Industry Recognized</span>
          </div>
          <div className="flex items-center transition-all duration-300 hover:text-mh-leather-tan transform hover:scale-105 group">
            <div className="p-2 bg-white/10 rounded-lg mr-3 group-hover:bg-mh-leather-tan/25 transition-colors duration-300">
              <TrendingUp size={20} className="text-mh-leather-tan" />
            </div>
            <span>98% Satisfaction</span>
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
