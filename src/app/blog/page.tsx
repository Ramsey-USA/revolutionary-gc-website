import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

export default function BlogPage() {
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
  const regularArticles = articles.filter(article => !article.featured)

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-mh-forest-green to-army-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              News & Insights
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest construction innovations, project highlights, 
              and industry insights from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-army-black text-center mb-12">
            Featured Articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <article key={article.id} className={`${index === 0 ? 'lg:col-span-2' : ''}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className={`relative ${index === 0 ? 'h-64' : 'h-48'}`}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-army-gold text-army-black px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-field-gray text-sm mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-2" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className={`font-bold text-army-black mb-3 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                      {article.title}
                    </h3>
                    
                    <p className="text-field-gray mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center text-mh-forest-green font-semibold hover:text-army-green transition-colors"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-6 md:mb-0">
              Latest Articles
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-mh-forest-green text-mh-forest-green hover:bg-mh-forest-green hover:text-white transition-colors text-sm font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <article key={article.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-army-gold text-army-black px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-field-gray text-sm mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-2" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-army-black mb-3">
                      {article.title}
                    </h3>
                    
                    <p className="text-field-gray mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center text-mh-forest-green font-semibold hover:text-army-green transition-colors"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-mh-forest-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-army-green transition-colors transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-army-green to-mh-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Subscribe to our newsletter for the latest construction insights, 
            project updates, and industry innovations.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-army-black focus:outline-none focus:ring-2 focus:ring-army-gold"
            />
            <button
              type="submit"
              className="bg-army-gold text-army-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

  <div className="mt-auto">
    <WhyChooseSection />
    <Footer />
  </div>
    </main>
  )
}
