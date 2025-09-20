import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import UniversalHeroSection from '../../components/UniversalHeroSection'
import { Mail, Linkedin } from 'lucide-react'

export default function TeamPage() {
  const leadership = [
    {
      name: "Jeremy Thamert",
      title: "Owner & General Manager",
      description: "Jeremy has served as General Manager of MH Construction for 2 years and became owner in January 2025. He is the visionary behind MH Construction's pioneering approach, with extensive experience and a commitment to integrating cutting-edge technology, like AI-powered tools. Jeremy continues the company's tradition of military precision and a dedication to building the future of construction today.",
      image: "/images/team/jeremy-thamert.jpg",
      email: "jeremy@mhc-gc.com",
      linkedin: "https://linkedin.com/in/jeremy-thamert"
    },
    {
      name: "Mike Holstein",
      title: "Founder (Retired)",
      description: "Mike Holstein founded MH Construction and established its reputation for integrity, quality, and extensive knowledge within the construction industry. Now retired, Mike's leadership and vision continue to inspire the team and guide the company's values.",
      image: "/images/team/mike-holstein.jpg",
      email: "info@mhc-gc.com"
    },
    {
      name: "Arnold Garcia",
      title: "Vice President",
      description: "As Vice President, Arnold is the key to client relationships and strategic operations. He specializes in high-level relationship building and ensures that every project runs smoothly from start to finish. His focus is on personalized service and exceptional quality, guaranteeing client satisfaction.",
      image: "/images/team/arnold-garcia.jpg",
  email: "arnold@mhc-gc.com",
      linkedin: "https://linkedin.com/in/arnold-garcia"
    }
  ]

  const projectManagement = [
    {
      name: "Makayla Holstein",
      title: "Project Manager",
      description: "Makayla Holstein, daughter of founder Mike Holstein, is a highly-skilled Project Manager who excels at navigating complex project timelines and coordinating all project phases to ensure on-time delivery. Her expertise in communication and problem-solving keeps projects on track and clients informed.",
      image: "/images/team/makayla.jpg",
      email: "makayla@mhc-gc.com"
    },
    {
      name: "Ben Woodall",
      title: "Project Manager",
      description: "Ben is a dedicated Project Manager with a focus on project efficiency and budget management. He is an expert in overseeing all aspects of a build, from initial planning to final close-out, ensuring every detail aligns with the client's vision and project goals.",
      image: "/images/team/ben-woodall.jpg",
  email: "ben@mhc-gc.com"
    },
    {
      name: "Todd Schoeff",
      title: "Lead Estimator",
      description: "Todd's role is crucial in providing clients with accurate and transparent project costs. He is an expert in general construction estimating, with years of experience across commercial, medical, and specialty projects. His precision ensures clients receive realistic and detailed project timelines and costs.",
      image: "/images/team/todd-schoeff.jpg",
  email: "todd@mhc-gc.com"
    },
    {
      name: "Ronaldo Garcia",
      title: "Drywall & Specialty Systems Expert",
      description: "Ronaldo is the resident specialist in interior finishing. His expertise ensures flawless drywall installation and the masterful execution of specialty wall systems, which adds a high level of craftsmanship to every project.",
      image: "/images/team/ronaldo-garcia.jpg",
  email: "ronaldo@mhc-gc.com"
    }
  ]

  const fieldOperations = [
    {
  name: "Steve McClary",
      title: "Senior Superintendent",
      description: "With over 20 years of experience, Steve is a master of all types of construction builds. He oversees all phases of a project on-site, ensuring safety, quality, and efficiency.",
      image: "/images/team/steve.jpg",
  email: "steve@mhc-gc.com"
    },
    {
  name: "Reagan Massey",
      title: "Superintendent",
      description: "Reagan is a seasoned Superintendent with over a decade of experience in all types of builds. He is responsible for daily on-site operations, managing crews, and ensuring that every project is completed to the highest standards.",
      image: "/images/team/reagan.jpg",
  email: "reagan@mhc-gc.com"
    },
    {
      name: "Porter Cline",
      title: "Superintendent",
      description: "Porter specializes in industrial builds. His 5+ years of experience in this niche field make him an expert in managing the unique challenges and requirements of large-scale industrial projects.",
      image: "/images/team/porter-cline.jpg",
  email: "porter@mhc-gc.com"
    },

  ]

  const administration = [
    {
  name: "Brooks Morris",
      title: "Senior Accountant",
      description: "Brooks manages all financial aspects of MH Construction. With a keen eye for detail, Brooks handles everything from project budgets and financial reporting to invoicing and payroll, ensuring the company's fiscal health.",
      image: "/images/team/brooks.jpg",
  email: "brooks@mhc-gc.com"
    },
    {
      name: "Brittney Holstein",
      title: "HR Manager",
      description: "Brittney Holstein, daughter of founder Mike Holstein, is the backbone of the company's human resources department. She is dedicated to building a strong, supportive, and skilled team by managing recruitment, employee relations, and professional development.",
      image: "/images/team/brittney.jpg",
      email: "brittney@mhc-gc.com"
    },
    {
      name: "Matt Ramsey",
      title: "Project & Marketing Coordinator Veteran",
      description: "As a veteran, Matt brings a unique perspective to his role. He is the face of MH Construction at trade shows and client presentations, specializing in showcasing the company's advanced technology and AI estimator.",
      image: "/images/team/matt-ramsey.jpg",
  email: "matt@mhc-gc.com"
    },
    {
  name: "Jennifer Tenehuerta",
      title: "Admin Assistant",
      description: "Jennifer is a highly organized and efficient Admin Assistant who keeps the office running smoothly. She supports the entire team with administrative tasks, scheduling, and communication, ensuring a seamless flow of information.",
      image: "/images/team/jennifer.jpg",
  email: "jennifer@mhc-gc.com"
    }
  ]

  const TeamSection = ({ title, members, bgColor = "bg-white dark:bg-dark-surface", id }: { title: string, members: any[], bgColor?: string, id?: string }) => {
    // Dynamic border colors that rotate through theme palette
    const getBorderColor = (index: number) => {
      const colors = [
        "border-mh-hunter-green",
        "border-mh-leather-tan", 
        "border-gray-600",
        "border-gray-500"
      ]
      return colors[index % colors.length]
    }

    // Skill tags for each team member
    const getSkillTags = (member: any) => {
      const skillMap: { [key: string]: string[] } = {
        "Makayla Holstein": ["Project Management", "Communication", "Timeline Management"],
        "Ben Woodall": ["Budget Management", "Planning", "Project Oversight"],
        "Todd Schoeff": ["Cost Estimation", "Commercial Projects", "Medical Projects"],
        "Ronaldo Garcia": ["Drywall Systems", "Interior Finishing", "Specialty Systems"],
        "Steve McClary": ["Site Safety", "Quality Control", "20+ Years Experience"],
        "Reagan Massey": ["Crew Management", "Daily Operations", "10+ Years Experience"],
        "Porter Cline": ["Industrial Projects", "Large-Scale Operations", "5+ Years Experience"],
        "Brooks Morris": ["Financial Management", "Budget Analysis", "Reporting"],
        "Brittney Holstein": ["Recruitment", "Employee Relations", "Team Development"],
        "Matt Ramsey": ["Veteran", "Marketing", "Technology Showcase"],
        "Jennifer Tenehuerta": ["Administration", "Scheduling", "Communication"]
      }
      return skillMap[member.name] || ["Construction Expert", "Team Member"]
    }

    return (
    <section className={`py-16 ${bgColor} dark:bg-dark-surface transition-colors duration-300`} id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text text-center mb-12">
          {title}
        </h2>
        <div className={`grid gap-8 ${
          title === "Executive Leadership" 
            ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-3" 
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        }`}>
          {members.map((member, index) => (
            <div key={index} className={`group relative rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col h-full border-2 ${getBorderColor(index)} dark:border-opacity-80 hover:border-opacity-100`}>
              {/* Enhanced card with gradient background */}
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl h-full relative overflow-hidden border border-gray-200 dark:border-dark-border transition-all duration-500 group-hover:from-gray-50 group-hover:to-gray-100 dark:group-hover:from-gray-700 dark:group-hover:to-gray-800 flex flex-col shadow-lg group-hover:shadow-2xl">
                {/* Image with enhanced hover effects */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  {/* Enhanced gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-mh-hunter-green/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  {/* Subtle overlay border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-mh-leather-tan/50 transition-all duration-500 rounded-t-xl"></div>
                </div>
                
                {/* Card content */}
                <div className="p-6 pb-0 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-black dark:text-dark-text mb-1 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">{member.name}</h3>
                  <p className="text-mh-leather-tan dark:text-mh-leather-tan font-semibold mb-3">{member.title}</p>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm leading-relaxed mb-4 flex-grow">
                    {member.description}
                  </p>
                  
                  {/* Enhanced skill badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {getSkillTags(member).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md ${
                          skillIndex % 2 === 0 
                            ? 'bg-gradient-to-r from-mh-hunter-green/10 to-mh-hunter-green/20 text-mh-hunter-green hover:from-mh-hunter-green/20 hover:to-mh-hunter-green/30 border border-mh-hunter-green/20' 
                            : 'bg-gradient-to-r from-mh-leather-tan/10 to-mh-leather-tan/20 text-mh-leather-tan hover:from-mh-leather-tan/20 hover:to-mh-leather-tan/30 border border-mh-leather-tan/20'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Enhanced contact buttons */}
                <div className="flex justify-center space-x-4 mt-auto pb-6 pt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-mh-hunter-green to-mh-hunter-green/80 text-white rounded-full transition-all duration-300 hover:from-mh-leather-tan hover:to-mh-leather-tan/80 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl transform group/btn"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={20} className="group-hover/btn:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href={member.linkedin ? member.linkedin : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-mh-leather-tan to-mh-leather-tan/80 text-white rounded-full transition-all duration-300 hover:from-mh-hunter-green hover:to-mh-hunter-green/80 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl transform group/btn"
                    aria-label={`LinkedIn for ${member.name}`}
                  >
                    <Linkedin size={20} className="group-hover/btn:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
  }

  return (
    <main className="min-h-screen pt-20">
      <Header />
      
      <UniversalHeroSection
        title="Meet Our Expert"
        titleHighlight="Team"
        subtitle="Decades of combined construction expertise powered by military precision and innovative technology. Our veteran-owned team brings unmatched dedication to every project."
        primaryButton={{
          text: "View Leadership Team",
          href: "#leadership"
        }}
        secondaryButton={{
          text: "Join Our Team",
          href: "/careers"
        }}
      />

      {/* Leadership Team */}

  <TeamSection title="Executive Leadership" members={leadership} id="leadership" />

  {/* Project Management */}
  <TeamSection title="Project Management & Estimating" members={projectManagement} bgColor="bg-pale-gray dark:bg-dark-surface-2" id="project-management" />

  {/* Field Operations */}
  <TeamSection title="Site & Field Operations" members={fieldOperations} id="field-operations" />

  {/* Administration */}
  <TeamSection title="Administration & Support" members={administration} bgColor="bg-pale-gray dark:bg-dark-surface-2" id="administration" />

      {/* Enhanced Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-br from-mh-hunter-green via-gray-800 to-mh-leather-tan relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform rotate-12 translate-x-1/2"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Join Our Growing Team
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-white/90 max-w-2xl mx-auto">
            We're always looking for skilled professionals who share our commitment 
            to excellence, innovation, and military-grade precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="inline-flex items-center justify-center bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-white hover:to-gray-100 hover:text-mh-hunter-green transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Explore Careers
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-mh-hunter-green transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
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
