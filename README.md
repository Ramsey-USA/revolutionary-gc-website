# MH Construction Revolutionary Website

**Company Information:**
- Phone: (509) 308-6489
- Address: 3111 N. Capital Ave., Pasco, WA 99301
- Website: Veteran-owned construction company serving the Pacific Northwest

---

## 🚀 QUICK START FOR DEVELOPER

### Development Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Firebase
npm run deploy
```

### 🎯 **RECENT MAJOR UPDATES (September 2025)**

#### ✅ **Visual Calendar System**
- **Location**: Contact page (`/contact`)
- **Features**: Interactive calendar with 8am-3pm Pacific time slots
- **Booking**: Personal consultations with form integration
- **Components**: `VisualCalendar.tsx`, integrated with Firebase

#### ✅ **Unified Scheduling System** 
- **Components**: `ScheduleButton.tsx`, `useScheduler.tsx`, `CalendarScheduler.tsx`
- **Integration**: All "Schedule Consultation" buttons use unified system
- **Pages Updated**: Estimate, Projects, Services, Contact

#### ✅ **Comprehensive Notification System**
- **Team Notifications**: Real-time alerts for new consultations
- **Client Confirmations**: Automatic confirmation system
- **Firebase Collections**: `consultationScheduling`, `teamNotifications`, `clientConfirmations`
- **Dashboard**: Team monitoring interface at `/team-dashboard`

#### ✅ **Dashboard API System**
- **Purpose**: External dashboard integration
- **Endpoints**: `/api/consultations`, `/api/notifications`, `/api/dashboard-stats`
- **Documentation**: `API-DOCUMENTATION.md`
- **Real-time**: WebSocket subscriptions available

#### ✅ **Enhanced Home Page**
- **Parallax**: Logo background visibility optimized (25% opacity)
- **Sections**: AI Tools, Core Values, Featured Projects, Blog News
- **Firebase**: Error handling and graceful fallbacks

#### ✅ **AI Estimator Widget**
- **Location**: Estimate page (`/estimate`)
- **Features**: 5-step wizard with real calculations
- **Integration**: Unified scheduling system
- **Component**: `AIEstimatorWidget.tsx`

---

## 📊 **NOTIFICATION & DASHBOARD SYSTEM**

### **For Team Management**
1. **Team Dashboard**: Access at `/team-dashboard`
   - Real-time consultation monitoring
   - Notification management
   - Status updates (pending → confirmed → completed)
   - Client contact information

2. **API Endpoints** (for external dashboards):
   ```
   GET /api/consultations          # All consultation requests
   GET /api/consultations/[id]     # Specific consultation
   GET /api/notifications          # Team notifications
   GET /api/dashboard-stats        # Summary statistics
   GET /api/export-data           # Full data export
   ```

3. **Real-time Updates**:
   - Firebase subscriptions
   - Live notification feed
   - Automatic status tracking

### **Data Collections (Firebase)**
```
consultationScheduling/     # All consultation requests
├── clientInfo             # Name, email, phone, company
├── appointmentDetails     # Date, time, project type
├── status                 # pending, confirmed, completed, cancelled
└── createdAt             # Timestamp

teamNotifications/         # Team alert system
├── clientInfo            # Client details
├── appointmentDetails    # Appointment info
├── priority              # low, medium, high
└── status               # unread, read, acknowledged

clientConfirmations/       # Client confirmation tracking
├── recipient             # Client email
├── status               # sent, delivered, failed
└── createdAt            # Timestamp
```

---

## 🎯 **DEVELOPMENT PHASES**

### ✅ **Phase 1 - Complete**
- Core website with military color scheme
- Responsive navigation with mobile menu
- Hero section with parallax background
- AI Tools section (Estimator, Sandbox, 3D Explorer)
- Core values with flip animations
- Project gallery with featured projects
- Team member profiles
- Blog/News carousel
- Footer with social feeds
- Firebase deployment

### ✅ **Phase 2 - Complete** 
- Individual pages for all sections
- Enhanced core values on all pages
- Project details and individual pages
- Team member detailed pages
- Mobile optimization
- Firebase integration

### ✅ **Phase 3 - Complete**
- Visual calendar system
- Unified scheduling
- Notification system
- Team dashboard
- API endpoints
- Real-time updates

### 🔄 **Phase 4 - AI Features Enhancement**
- Advanced chatbot integration
- Enhanced 5-step estimator wizard
- Interactive sandbox improvements
- 3D project exploration enhancements

---

## 📝 **WEBSITE STRUCTURE & CONTENT**

### **Pages Available**
- `/` - Home page with all main sections
- `/contact` - Contact form + Visual calendar
- `/estimate` - AI Estimator widget
- `/projects` - Project gallery
- `/services` - Service offerings  
- `/team` - Team member profiles
- `/blog` - News and articles
- `/3d-explorer` - 3D project exploration
- `/sandbox` - Interactive building tool
- `/team-dashboard` - Team management interface

### **Key Components**
```
src/components/
├── Header.tsx              # Navigation with mobile menu
├── Footer.tsx              # Company info and social links
├── HeroSection.tsx         # Parallax background section
├── AIToolsSection.tsx      # AI features showcase
├── CoreValuesSection.tsx   # Flip card animations
├── FeaturedProjectsSection.tsx  # Project gallery
├── BlogNewsSection.tsx     # News carousel
├── VisualCalendar.tsx      # Interactive calendar
├── CalendarScheduler.tsx   # Scheduling modal
├── ScheduleButton.tsx      # Unified CTA button
├── AIEstimatorWidget.tsx   # Cost estimation tool
└── TeamDashboard.tsx       # Admin interface
```

---

## 🔧 **TECHNICAL SPECIFICATIONS**

### **Technology Stack**
- **Framework**: Next.js 15.5.2 with TypeScript
- **Styling**: Tailwind CSS with custom military theme
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth (ready for implementation)
- **Storage**: Firebase Storage
- **Hosting**: Firebase Hosting
- **Forms**: React Hook Form + Firebase integration

### **Performance Targets**
- Page Load Speed: <3 seconds on 3G
- Lighthouse Score: 90+ (Performance, Accessibility, SEO)
- Mobile Optimization: 100% responsive
- Offline Capability: Basic functionality

### **Browser Support**
- Chrome, Safari, Firefox (latest versions)
- Mobile: iPhone Safari, Android Chrome
- Responsive: All screen sizes

---

## 🎨 **DESIGN SYSTEM**

### **Colors**
```css
/* Primary MH Construction Colors */
--mh-hunter-green: #386851;    /* Primary brand */
--mh-leather-tan: #BD9264;     /* Secondary brand */

/* Army Military Colors */
--army-black: #000000;         /* Text and headers */
--army-gold: #FFD700;          /* Accent and CTA */
--army-green: #4B5320;         /* Supporting elements */
--field-tan: #967117;          /* Background accents */
--field-gray: #6C6C6C;         /* Subtle text */
```

### **Typography**
- **Headings**: Tactic Sans Bold
- **Subheadings**: Tactic Sans Medium  
- **Body Text**: Adobe Garamond Pro

### **Component Variants**
```typescript
// ScheduleButton variants
variant: 'primary' | 'secondary' | 'outline' | 'ghost'
size: 'sm' | 'md' | 'lg'

// Notification priorities
priority: 'low' | 'medium' | 'high'

// Consultation status
status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
```

---

## 🤖 **AI ESTIMATOR SPECIFICATIONS**

### **Timeline Phases (Standard Speed)**
- Plans & Permits: 2-4 months
- Foundation/Concrete: 2-3 weeks
- Framing: 3-4 weeks
- Exterior Walls: 2-3 weeks
- Roofing: 1-2 weeks
- Trades/Systems (MEP): 4-6 weeks
- Drywall & Paint: 3-4 weeks
- Cabinets: 2-3 weeks
- Flooring: 1-2 weeks
- Trim & Finishes: 2-3 weeks
- Landscaping: 1-2 weeks

### **Speed Multipliers**
- **Standard**: 1.0x (base timeline)
- **Premium**: 1.15x (+15% timeline, higher quality)
- **Expedite**: 1.30x (+30% timeline, rush job)

### **Seasonal Restrictions**
- **Restricted Work**: Concrete, Landscaping, Roadways
- **Restricted Period**: October 15 - March 31
- **Timeline Adjustment**: Add 2-4 weeks for winter projects

---

## 📞 **CONSULTATION SCHEDULING**

### **Business Hours**
- **Personal Consultations**: Monday-Friday, 8:00 AM - 3:00 PM (Pacific)
- **General Business**: Monday-Friday 7:00 AM - 6:00 PM, Saturday 8:00 AM - 4:00 PM
- **Emergency Services**: Available 24/7

### **Scheduling Methods**
1. **Visual Calendar** (Contact page): Interactive date/time selection
2. **Schedule Button** (All pages): Quick consultation booking
3. **Direct Contact**: Phone (509) 308-6489 or email info@mhconstruction.com

---

## 🔐 **FIREBASE CONFIGURATION**

### **Environment Variables Required**
```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

### **Security Rules**
- Consultation data: Write access for website, read access for team
- Notifications: Team read/write access
- Client confirmations: System write, team read access

---

## 📋 **MAINTENANCE & UPDATES**

### **Regular Tasks**
- Monitor consultation requests via team dashboard
- Update project portfolio as new projects complete
- Review and respond to notifications within 24 hours
- Export data monthly for backup (`/api/export-data`)

### **Team Access**
- **Dashboard URL**: `/team-dashboard`
- **API Access**: Full REST API available
- **Real-time Updates**: Firebase subscriptions
- **Mobile Access**: Responsive dashboard design

---

## 📚 **DOCUMENTATION FILES**
- `API-DOCUMENTATION.md` - Complete API reference
- `NOTIFICATION-SYSTEM.md` - Notification system guide
- `IMPLEMENTATION.md` - Technical implementation details
- `ASSETS-NEEDED.md` - Required assets checklist

---

## 🏗️ **SUPPORT & CONTACT**

For technical issues or questions:
1. Check team dashboard for system status
2. Review API documentation for integration help
3. Contact development team for code modifications
4. Use Firebase console for direct data access

**This comprehensive README provides everything needed to understand, maintain, and extend MH Construction's revolutionary website with its advanced scheduling and notification systems!** 🏗️
📝 WEBSITE HOME PAGE LAYOUT | ADDITIONAL PAGE INFO
Hero Section | Home page only
Headline: "Building Tomorrow with Today's Technology"
Subheadline: "Veteran-owned construction excellence powered by cutting-edge AI technology. Experience the future of construction with transparent pricing, immersive project visualization, and military-grade precision."
Primary CTA Button: "Get Your AI Estimate"
Secondary CTA Button: "Explore Our Projects"
Time Lapse video in the background (to be integrated ASAP)
AI Tools Section
Section Title: "Revolutionary AI-Powered Tools" Section Subtitle: "Experience construction planning like never before"

Card 1: AI Project Estimator

Title: "AI Project Estimator"
Description: "Get accurate cost estimates and comprehensive project timelines in minutes. Our AI analyzes your project requirements and provides detailed phase-by-phase breakdowns with 15% accuracy."
CTA Button: "Start Your Estimate"

Card 2: Interactive Sandbox

Title: "Interactive Project Sandbox"
Description: "Build your project virtually before construction begins. Drag and drop walls, doors, windows, and finishes while watching costs update in real-time."
CTA Button: "Build Virtually"

Card 3: 3D Project Explorer

Title: "3D Project Explorer"
Description: "Tour our completed projects in immersive 3D detail. Click on any element to discover the builder's insights and learn why we made each construction decision."
CTA Button: "Explore Projects"
Core Values Section | On all pages
Section Title: "Our Core Values" Section Subtitle: "Military precision meets construction excellence"

Value 1: Ethics

Title on front: "Ethics"
Description on back: "We operate with unwavering ethical standards in every aspect of our business. From fair pricing to honest timelines, we ensure that every decision reflects our commitment to doing what's right for our clients and community."

Value 2: Experience

Title on front: "Experience"
Description on back: "Decades of combined construction expertise backed by military precision. Our team brings extensive knowledge from residential to commercial projects, ensuring your vision becomes reality with proven techniques and innovative solutions."

Value 3: Integrity

Title on front: "Integrity"
Description on back: "Our word is our bond. We maintain transparency in all communications, deliver on our promises, and take full responsibility for our work. Your trust is earned through consistent, reliable action every single day."

Value 4: Honesty

Title on front: "Honesty"
Description on back: "Open, direct communication is the foundation of successful projects. We provide honest assessments, realistic timelines, and transparent pricing. No hidden costs, no surprises—just straightforward, truthful partnership."

Value 5: Trust

Title on front: "Trust"
Description on back: "Trust is built through consistent performance and reliability. We earn your confidence by showing up when promised, staying within budget, and delivering quality that exceeds expectations on every project."

Value 6: Professionalism

Title on front: "Professionalism"
Description on back: "Military-grade professionalism in every interaction. From our initial consultation to project completion, we maintain the highest standards of conduct, punctuality, and respect for your property and schedule."
Team Experience Section | Page
Section Title: "Meet Our Expert Team" Section Subtitle: "150+ years of combined construction expertise"

Executive Leadership
Jeremy Thamert - Owner & General Manager: Jeremy has served as General Manager of MH Construction for 2 years and became owner in January 2025. He is the visionary behind MH Construction's pioneering approach, with extensive experience and a commitment to integrating cutting-edge technology, like AI-powered tools. Jeremy continues the company's tradition of military precision and a dedication to building the future of construction today.
Mike Holstein - Founder (Retired): Mike Holstein founded MH Construction and established its reputation for integrity, quality, and military-grade precision. Now retired, Mike's leadership and vision continue to inspire the team and guide the company's values.
Arnold Garcia - Vice President: As Vice President, Arnold is the key to client relationships and strategic operations. He specializes in high-level relationship building and ensures that every project runs smoothly from start to finish. His focus is on personalized service and exceptional quality, guaranteeing client satisfaction.
Project Management & Estimating
Makayla Holstein - Project Manager: Makayla Holstein, daughter of founder Mike Holstein, is a highly-skilled Project Manager who excels at navigating complex project timelines and coordinating all project phases to ensure on-time delivery. Her expertise in communication and problem-solving keeps projects on track and clients informed.
Ben Woodall - Project Manager: Ben is a dedicated Project Manager with a focus on project efficiency and budget management. He is an expert in overseeing all aspects of a build, from initial planning to final close-out, ensuring every detail aligns with the client's vision and project goals.
Todd Schoeff - Lead Estimator: Todd's role is crucial in providing clients with accurate and transparent project costs. He is an expert in general construction estimating, with years of experience across commercial, medical, and specialty projects. His precision ensures clients receive realistic and detailed project timelines and costs.
Ronaldo Garcia - Drywall & Specialty Systems Expert: Ronaldo is the resident specialist in interior finishing. His expertise ensures flawless drywall installation and the masterful execution of specialty wall systems, which adds a high level of craftsmanship to every project.
Site & Field Operations
Steve McClary - Senior Superintendent: With over 20 years of experience, Steve McClary is a master of all types of construction builds. He oversees all phases of a project on-site, ensuring safety, quality, and efficiency.
Reagan Massey - Superintendent: Reagan Massey is a seasoned Superintendent with over a decade of experience in all types of builds. He is responsible for daily on-site operations, managing crews, and ensuring that every project is completed to the highest standards.
Porter Cline - Superintendent: Porter specializes in industrial builds. His 5+ years of experience in this niche field make him an expert in managing the unique challenges and requirements of large-scale industrial projects.
Administration & Support
Brooks Morris - Senior Accountant: Brooks Morris manages all financial aspects of MH Construction. With a keen eye for detail, Brooks handles everything from project budgets and financial reporting to invoicing and payroll, ensuring the company's fiscal health.
Brittney Holstein - HR Manager: Brittney Holstein, daughter of founder Mike Holstein, is the backbone of the company's human resources department. She is dedicated to building a strong, supportive, and skilled team by managing recruitment, employee relations, and professional development.
Matt Ramsey - Project & Marketing Coordinator Veteran: As a veteran, Matt brings a unique perspective to his role. He is the face of MH Construction at trade shows and client presentations, specializing in showcasing the company's advanced technology and AI estimator.
Jennifer Tenehuerta - Admin Assistant: Jennifer Tenehuerta is a highly organized and efficient Admin Assistant who keeps the office running smoothly. She supports the entire team with administrative tasks, scheduling, and communication, ensuring a seamless flow of information.
Featured Projects Section | Page
Section Title: "Featured Projects" Section Subtitle: "Showcasing our construction excellence across the Pacific Northwest"

Project Descriptions (6 projects total - photos on cards that flip):

Title on front: “Summer's Hub”
Description on back: "Modern commercial kitchen and dining facility featuring advanced HVAC systems and premium finishes"
Title on front: “Yakima Valley Fire Station #10”
Description on back: "State-of-the-art fire station administration building with specialized emergency services infrastructure"
Title on front: “Medical Office Complex”
Description on back: "Healthcare facility with specialized medical systems and patient-focused design"
Title on front: “Religious Center”
Description on back: "Community worship space combining traditional architecture with modern construction techniques"
Title on front: “Industrial Warehouse”
Description on back: "Large-scale industrial facility with advanced logistics and safety systems"
Title on front: “Winery Facility”
Description on back: "Specialized wine production facility with climate-controlled environments and premium finishes"
🖼️ REQUIRED ASSETS
Logo Files
Primary logo (SVG format, transparent background)
Logo with veteran badge (SVG format, for header)
Favicon (32x32px, 16x16px PNG)
Logo variations (white version for dark backgrounds)
Hero Video
Summer's Hub timelapse (MP4 format, 1920x1080, <50MB)
WebM backup version for browser compatibility
Poster image (JPG, 1920x1080) for video loading state
Project Photos
Summer's Hub: 6 photos (exterior, interior, kitchen, dining, detail shots)
Yakima Valley Fire Station & Admin Bldg: 6 photos (exterior, interior, admin areas, detail shots)
4 Additional Projects: 3 photos each - minimum (exterior, interior, detail shot)
All photos: 1200x800px, optimized JPG format
Team Photos
Jeremy Thamert headshot (400x400px, professional background)
Arnold Garcia headshot (400x400px, professional background)
Brittney headshot (400x400px, professional background)
Makayla headshot (400x400px, professional background)
Ben Woodall headshot (400x400px, professional background)
Todd Schoeff headshot (400x400px, professional background)
Ronaldo Garcia headshot (400x400px, professional background)
Brooks headshot (400x400px, professional background)
Matt Ramsey headshot (400x400px, professional background)
Jennifer headshot (400x400px, professional background)
Steve headshot (400x400px, professional background)
Reagan headshot (400x400px, professional background)
Porter headshot (400x400px, professional background)
Icons & Graphics
Core Values Icons: 6 custom icons (Ethics, Experience, Integrity, Honesty, Trust, Professionalism)
AI Tools Icons: 3 icons (Estimator, Sandbox, 3D Explorer)
Social Media Icons: Facebook, LinkedIn, Instagram, YouTube, X (SVG format)
🛠️ TECHNOLOGY STACK
Framework & Tools
Framework: Next.js 14 with TypeScript
Styling: Tailwind CSS (custom CSS is granted if necessary)
Database: Firebase Firestore
Authentication: Firebase Auth
Storage: Firebase Storage
Functions: Firebase Cloud Functions
Hosting: Firebase Hosting
Forms: React Hook Form + EmailJS or Firebase Functions
Development Requirements
Node.js Version: 18.x or higher
Package Manager: npm (not yarn or pnpm)
Browser Testing: Chrome, Safari, Firefox latest versions
Mobile Testing: iPhone Safari, Android Chrome
Performance Targets
Page Load Speed: <3 seconds on 3G connection
Lighthouse Score: 90+ for Performance, Accessibility, SEO
Mobile Optimization: 100% responsive design
Offline Capability: Basic functionality for trade show demos

🎨 COLOR IMPLEMENTATION GUIDE
Variables
* Primary MH Construction Colors *

  --mh-hunter-green: #386851;    /* Primary brand color */

  --mh-leather-tan: #BD9264;     /* Secondary brand color */

  
  /* Army Military Colors */

  --army-black: #000000;         /* Text and headers */

  --army-gold: #FFD700;          /* Accent and CTA buttons */

  --army-green: #4B5320;         /* Supporting elements */

  --field-tan: #967117;          /* Background accents */

  --field-gray: #6C6C6C;         /* Subtle text and borders */


  /* Utility Colors */

  --white: #FFFFFF;

  --light-gray: #F8F9FA;

  --dark-gray: #343A40;

🎨 TYPOGRAPHY GUIDE
Font Specifications
* Primary Fonts *

  Heading: Tactic Sans Bold         /* All major headings */

  Subheading: Tactic Sans Medium    /* Section subtitles and subheadings */

  Body Copy: Adobe Garamond Pro     /* All body text and content */

🤖 BASIC AI ESTIMATOR SPECIFICATIONS
Timeline Phases (Standard Speed)
Plans & Permits: 2-4 months
Foundation/Concrete: 2-3 weeks
Framing: 3-4 weeks
Exterior Walls: 2-3 weeks
Roofing: 1-2 weeks
Trades/Systems (MEP): 4-6 weeks
Drywall & Paint: 3-4 weeks
Cabinets: 2-3 weeks
Flooring: 1-2 weeks
Trim & Finishes: 2-3 weeks
Landscaping: 1-2 weeks
Speed Multipliers
Standard: 1.0x (base timeline)
Premium: 1.15x (+15% timeline, higher quality)
Expedite: 1.30x (+30% timeline, rush job)
Seasonal Restrictions
Concrete, Landscaping, Roadways: Restricted Oct 15 - Mar 31
Timeline Adjustment: Add 2-4 weeks if project includes restricted work during winter

🏗️ This developer-ready README provides everything needed to build MH Construction's revolutionary website with clear priorities, exact specifications, and measurable success criteria! 🏗️
