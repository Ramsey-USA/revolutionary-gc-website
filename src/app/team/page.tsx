import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import { Mail, Linkedin } from 'lucide-react'

export default function TeamPage() {
  const leadership = [
    {
      name: "Jeremy Thamert",
      title: "Owner & Visionary Veteran",
      description: "Jeremy is the visionary behind MH Construction's pioneering approach. His extensive experience and commitment to integrating cutting-edge technology, like AI-powered tools, are what set the company apart. He founded MH Construction with a focus on military precision and a dedication to building the future of construction today.",
      image: "/images/team/jeremy-thamert.jpg",
  email: "jeremy@mhc-gc.com",
      linkedin: "https://linkedin.com/in/jeremy-thamert"
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
      name: "Makayla",
      title: "Project Manager",
      description: "Makayla is a highly-skilled Project Manager who excels at navigating complex project timelines and coordinating all project phases to ensure on-time delivery. Her expertise in communication and problem-solving keeps projects on track and clients informed.",
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
      name: "Steve",
      title: "Senior Superintendent",
      description: "With over 20 years of experience, Steve is a master of all types of construction builds. He oversees all phases of a project on-site, ensuring safety, quality, and efficiency.",
      image: "/images/team/steve.jpg",
  email: "steve@mhc-gc.com"
    },
    {
      name: "Reagan",
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
    {
      name: "Jesse Pachino",
      title: "Superintendent",
      description: "Jesse is a highly-skilled Superintendent with over 10 years of experience. His recent builds include several fire stations, demonstrating his expertise in managing specialized infrastructure and complex governmental projects.",
      image: "/images/team/jesse-pachino.jpg",
  email: "jesse@mhc-gc.com"
    }
  ]

  const administration = [
    {
      name: "Brooks",
      title: "Senior Accountant",
      description: "Brooks manages all financial aspects of MH Construction. With a keen eye for detail, Brooks handles everything from project budgets and financial reporting to invoicing and payroll, ensuring the company's fiscal health.",
      image: "/images/team/brooks.jpg",
  email: "brooks@mhc-gc.com"
    },
    {
      name: "Brittney",
      title: "HR Manager",
      description: "Brittney is the backbone of the company's human resources department. She is dedicated to building a strong, supportive, and skilled team by managing recruitment, employee relations, and professional development.",
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
      name: "Jennifer",
      title: "Admin Assistant",
      description: "Jennifer is a highly organized and efficient Admin Assistant who keeps the office running smoothly. She supports the entire team with administrative tasks, scheduling, and communication, ensuring a seamless flow of information.",
      image: "/images/team/jennifer.jpg",
  email: "jennifer@mhc-gc.com"
    }
  ]

  const TeamSection = ({ title, members, bgColor = "bg-white", id }: { title: string, members: any[], bgColor?: string, id?: string }) => (
    <section className={`py-16 ${bgColor}`} id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-army-black text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="aspect-square relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 pb-0">
                  <h3 className="text-xl font-bold text-army-black mb-1">{member.name}</h3>
                  <p className="text-army-gold font-semibold mb-3">{member.title}</p>
                  <p className="text-field-gray text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-4 mb-6">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center w-10 h-10 bg-mh-forest-green text-white rounded-full transition-colors transition-transform duration-300 hover:bg-army-green hover:scale-110 hover:-translate-y-1"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={18} />
                </a>
                <a
                  href={member.linkedin ? member.linkedin : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full transition-colors transition-transform duration-300 hover:bg-blue-700 hover:scale-110 hover:-translate-y-1"
                  aria-label={`LinkedIn for ${member.name}`}
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-mh-forest-green to-army-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Decades of combined construction expertise powered by military precision 
              and innovative technology. Our veteran-owned team brings unmatched dedication 
              to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}

  <TeamSection title="Executive Leadership" members={leadership} id="leadership" />

  {/* Project Management */}
  <TeamSection title="Project Management & Estimating" members={projectManagement} bgColor="bg-light-gray" id="project-management" />

  {/* Field Operations */}
  <TeamSection title="Site & Field Operations" members={fieldOperations} id="field-operations" />

  {/* Administration */}
  <TeamSection title="Administration & Support" members={administration} bgColor="bg-light-gray" id="administration" />

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-army-green to-mh-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            We're always looking for skilled professionals who share our commitment 
            to excellence, innovation, and military-grade precision.
          </p>
          <a
            href="/contact"
            className="inline-block bg-army-gold text-army-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors transform hover:scale-105"
          >
            Explore Careers
          </a>
        </div>
      </section>

  <WhyChooseSection />
  <Footer />
    </main>
  )
}
