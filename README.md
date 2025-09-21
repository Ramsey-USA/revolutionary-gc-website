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

#### ✅ **COMPREHENSIVE DESIGN SYSTEM OVERHAUL**
- **Duotone Icon System**: 8 specialized icon categories with 7 animation types
- **MH Brand Colors**: Complete Hunter Green (#386851) & Leather Tan (#BD9264) integration
- **Utility Classes**: Feature cards, section headers, consistent spacing system
- **Theme System**: Enhanced light/dark mode with military-themed toggle
- **Mobile-First**: Touch-friendly design with 44px minimum touch targets

#### ✅ **HOME PAGE TRANSFORMATION**
- **Universal Hero System**: Team Page hero pattern standardized across all pages
- **Video Exceptions**: Home and Wounded Warrior pages maintain custom video heroes
- **Streamlined Header Navigation**: MH brand colors, responsive design, focused navigation elements
- **Component Refactoring**: WhyChooseSection converted to utility-based system
- **Enhanced Footer**: Modern decorative blur effects, calendar integration, social media improvements
- **Responsive Design**: Complete mobile optimization with touch interactions
- **Animation System**: Sophisticated hover effects and transitions throughout
- **Code Quality**: Clean, maintainable components with consistent patterns

#### ✅ **STREAMLINED HEADER NAVIGATION (September 2025)**
- **Navigation Elements**: MH Logo, About, Services, Wounded Warrior, Theme Toggle, Consultation Button only
- **Enhanced Hover Effects**: Strong MH brand color representation with background opacity and shadow effects
- **Mobile Optimization**: Responsive design with consistent brand colors throughout
- **Accessibility**: 44px minimum touch targets, proper focus states, ARIA compliance
- **Brand Integration**: Hunter Green and Leather Tan color scheme with enhanced visual feedback

#### ✅ **TAILWIND CONFIGURATION ENHANCEMENT**
- **Custom Colors**: MH brand colors with DEFAULT values for proper compilation
- **Safelist**: Ensures all custom classes are included in production builds
- **Responsive Classes**: Mobile-first approach with consistent breakpoints
- **Performance**: Optimized CSS generation and caching

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

## � **MH CONSTRUCTION DESIGN SYSTEM**

### **🎨 Duotone Icon System**
```css
/* Icon Categories */
.icon-nav           /* Navigation icons */
.icon-action        /* Action buttons and CTAs */
.icon-social        /* Social media links */
.icon-feature       /* Feature highlights */
.icon-calendar      /* Calendar and scheduling */
.icon-utility       /* Utility and contact info */
.icon-hero          /* Hero section and major features */
.icon-success       /* Success states and confirmations */

/* Animation Classes */
.icon-animate-glow          /* Subtle glow effect */
.icon-animate-float         /* Floating animation */
.icon-animate-pulse         /* Pulsing effect */
.icon-animate-bounce        /* Bouncing animation */
.icon-animate-rotate        /* Rotation effect */
.icon-animate-color-shift   /* Color shifting */
.icon-interactive-primary   /* Primary interaction state */
.icon-interactive-secondary /* Secondary interaction state */
```

### **🎨 Standard Button System**

#### **Base Button Classes**
```css
/* Core Button Foundation */
.btn                       /* Base button class with all foundation styles */
.btn-primary              /* Primary hunter green buttons */
.btn-secondary            /* Secondary leather tan buttons */
.btn-outline              /* Outline variant buttons */
.btn-outline-secondary    /* Secondary outline buttons */
.btn-ghost                /* Ghost/transparent buttons */
.btn-accent               /* Accent brand gradient buttons */
```

#### **Button Usage Examples**

**1. Primary Action Buttons (Hero CTA)**
```html
<!-- Primary button with gradient and hover effects -->
<Link href="/estimate" 
      className="btn btn-primary w-full sm:flex-1 min-h-[48px] text-center flex items-center justify-center text-base sm:text-lg">
  Get Your AI Estimate
</Link>
```

**2. Secondary Action Buttons**
```html
<!-- Outline button for secondary actions -->
<Link href="/projects" 
      className="btn btn-outline-secondary w-full sm:flex-1 min-h-[48px] text-center flex items-center justify-center text-base sm:text-lg border-white text-white hover:text-white">
  Explore Our Projects
</Link>
```

**3. React Component Button (ScheduleButton)**
```tsx
<!-- Specialized scheduling button with calendar integration -->
<ScheduleButton 
  variant="primary"        // primary | secondary | outline | ghost
  size="lg"               // sm | md | lg
  className="w-full"      // Additional classes
  showIcon={true}         // Show calendar icon
  block={true}            // Full width
>
  Schedule Consultation
</ScheduleButton>
```

#### **Button Design Specifications**

**Colors & Gradients:**
- **Primary**: Hunter Green (#386851) with gradient effects
- **Secondary**: Leather Tan (#BD9264) 
- **Hover States**: Darker variants with transform effects
- **Border Radius**: `rounded-lg` (8px) for consistency
- **Shadows**: `shadow-lg hover:shadow-xl` for depth

**Responsive Design:**
- **Minimum Touch Target**: 48px (44px + padding) for mobile accessibility
- **Responsive Text**: `text-base sm:text-lg` scaling
- **Flexible Width**: `w-full sm:flex-1` for mobile-first design

**Animation & Interactions:**
- **Transform**: `hover:scale-105 hover:-translate-y-1` for lift effect
- **Transition**: `transition-all duration-300` for smooth animations
- **Shimmer Effect**: `::before` pseudo-element for premium feel
- **Focus States**: Proper accessibility with focus rings

#### **Button Implementation Standards**

**Required Classes for All Buttons:**
```css
/* Minimum required classes for standard buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--button-padding-y) var(--button-padding-x);
  border-radius: var(--button-radius);
  font-weight: var(--weight-medium);
  transition: all var(--button-transition);
  min-height: 48px;  /* Accessibility requirement */
}
```

**Accessibility Requirements:**
- Minimum 44px touch target (48px with padding)
- Proper focus states with visible focus rings
- Semantic HTML with proper ARIA labels
- Sufficient color contrast ratios (4.5:1 minimum)

#### **Complete Button Showcase**

```html
<!-- Size Variants -->
<button class="btn btn-primary btn-sm">Small Button</button>
<button class="btn btn-primary btn-md">Medium Button</button>
<button class="btn btn-primary btn-lg">Large Button</button>

<!-- Color Variants -->
<button class="btn btn-primary">Primary Hunter Green</button>
<button class="btn btn-secondary">Secondary Leather Tan</button>
<button class="btn btn-accent">Accent Brand Gradient</button>

<!-- Style Variants -->
<button class="btn btn-outline">Outline Primary</button>
<button class="btn btn-outline-secondary">Outline Secondary</button>
<button class="btn btn-ghost">Ghost Button</button>

<!-- Responsive Button -->
<button class="btn btn-primary btn-responsive">Responsive Width</button>

<!-- Disabled State -->
<button class="btn btn-primary" disabled>Disabled Button</button>
```

#### **CSS Custom Properties for Buttons**

```css
:root {
  /* Button Spacing */
  --button-padding-x: 1.5rem;     /* 24px horizontal padding */
  --button-padding-y: 0.75rem;    /* 12px vertical padding */
  --button-radius: 0.5rem;        /* 8px border radius */
  --button-transition: 0.3s;      /* Animation duration */
  
  /* Button Shadows */
  --button-shadow-default: 0 4px 14px rgba(56, 104, 81, 0.2);
  --button-shadow-hover: 0 8px 25px rgba(56, 104, 81, 0.3);
  --button-shadow-secondary: 0 4px 14px rgba(189, 146, 100, 0.2);
}
```

### **🦶 Modern Footer System**

#### **Enhanced Footer Design**
The footer has been redesigned with modern decorative elements replacing traditional star decorations, featuring sophisticated background blur effects and brand-consistent styling.

#### **Footer Structure**
```tsx
<footer className="bg-black dark:bg-dark-charcoal text-white relative transition-colors duration-300">
  {/* Decorative Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-8 right-16 w-32 h-32 bg-mh-hunter-green/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-16 left-16 w-40 h-40 bg-mh-leather-tan/8 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-mh-hunter-green/5 rounded-full blur-2xl"></div>
    <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-mh-leather-tan/6 rounded-full blur-2xl"></div>
  </div>
  
  {/* Footer Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
    {/* Company Info, Quick Links, Social Media, Newsletter */}
  </div>
</footer>
```

#### **Footer Features**
```typescript
// Main Footer Sections
- Company Information      /* Logo, contact details, business hours */
- Quick Navigation Links   /* Organized in responsive grid */
- Social Media Hub        /* Facebook, LinkedIn, Instagram, YouTube, Twitter */
- Newsletter Subscription /* Email signup with Firebase integration */
- Schedule Consultation   /* Calendar integration button */

// Interactive Elements
- Hover Effects          /* Smooth transitions on all interactive elements */
- Theme Awareness        /* Adapts to light/dark mode */
- Accessibility         /* 48px minimum touch targets, proper focus states */
- Responsive Design     /* Mobile-optimized layout */
```

#### **Footer Decorative System**
```css
/* Background Blur Effects */
.bg-mh-hunter-green/10    /* 10% opacity hunter green blur */
.bg-mh-leather-tan/8      /* 8% opacity leather tan blur */
.blur-3xl                 /* Large blur radius for ambient effect */
.blur-2xl                 /* Medium blur radius for subtle accents */

/* Positioning Classes */
.absolute                 /* Positioned decorative elements */
.inset-0                 /* Full container coverage */
.overflow-hidden         /* Contain blur effects within bounds */
```

#### **Footer CSS Implementation**
```css
/* Footer Decorative Elements */
.footer-decoration {
  position: absolute;
  border-radius: 50%;
  filter: blur(48px); /* blur-3xl equivalent */
  opacity: 0.1;
  background: linear-gradient(135deg, var(--mh-hunter-green), var(--mh-leather-tan));
}

/* Footer Interactive Elements */
.footer-link {
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #d1d5db; /* text-gray-300 */
}

.footer-link:hover {
  color: var(--mh-leather-tan);
}

/* Social Media Icons */
.social-icon {
  background: #374151; /* bg-gray-800 */
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 44px;
  min-height: 44px;
}

.social-icon:hover {
  background: var(--mh-hunter-green);
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(56, 104, 81, 0.3);
}
```

### **� Universal Hero Section System**

#### **Standard Hero Pattern (Team Page Style)**
The website uses a standardized hero section based on the Team Page design across all pages, with specific exceptions for video-enhanced pages.

#### **Hero Section Implementation**
```tsx
<UniversalHeroSection
  title="Primary Title"
  titleHighlight="Highlighted Text"
  subtitle="Descriptive subtitle explaining the page purpose and value proposition"
  primaryButton={{
    text: "Primary Action",
    href: "/action-link"
  }}
  secondaryButton={{
    text: "Secondary Action", 
    href: "/secondary-link"
  }}
/>
```

#### **Page-Specific Hero Usage**

**Standard Pages (Using UniversalHeroSection):**
```typescript
✅ Team Page        - Meet Our Expert Team
✅ Services Page    - Our Construction Services  
✅ Projects Page    - Portfolio showcase
✅ Contact Page     - Get in touch
✅ Blog Page        - News and insights
✅ Careers Page     - Join our team
✅ Estimate Page    - AI-powered estimating
✅ Safety Page      - Safety protocols
✅ Subcontractors   - Partner network
✅ Government       - Contracting services
✅ FAQs Page        - Common questions
✅ 3D Explorer      - Project visualization
✅ Sandbox Page     - Interactive tools
```

**Video-Enhanced Pages (Custom Hero Sections):**
```typescript
🎬 Home Page        - HomeHeroSection with background video
🎬 Wounded Warrior  - Custom hero with military video content
```

#### **Hero Section Design Standards**
```css
/* Universal Hero Structure */
.hero-section {
  min-height: 60vh;                    /* Minimum viewport coverage */
  background: linear-gradient(135deg, var(--mh-hunter-green), var(--mh-leather-tan));
  padding: 4rem 0;                     /* Vertical spacing */
  position: relative;                  /* For decorative elements */
}

/* Hero Typography */
.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem); /* Responsive scaling */
  font-weight: 700;                     /* Bold weight */
  color: white;                         /* Primary text color */
}

.hero-highlight {
  color: var(--mh-leather-tan);        /* Brand accent color */
  background: linear-gradient(135deg, var(--mh-leather-tan), #e5c07b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.25rem); /* Responsive subtitle */
  color: rgba(255, 255, 255, 0.9);           /* Subtle text color */
  max-width: 600px;                          /* Readable line length */
  margin: 1.5rem auto;                       /* Center alignment */
}
```

#### **Hero Button Configuration**
```typescript
// Primary Button (Call-to-Action)
primaryButton: {
  text: string;           // Button label
  href: string;           // Navigation link
  variant?: 'primary';    // Always primary styling
  icon?: IconComponent;   // Optional icon
}

// Secondary Button (Alternative Action)  
secondaryButton: {
  text: string;           // Button label
  href: string;           // Navigation link
  variant?: 'outline';    // Outline styling
  icon?: IconComponent;   // Optional icon
}
```

#### **Responsive Hero Behavior**
```css
/* Mobile Optimization */
@media (max-width: 768px) {
  .hero-section {
    min-height: 50vh;           /* Reduced height on mobile */
    padding: 3rem 0;            /* Adjusted spacing */
  }
  
  .hero-title {
    font-size: 2.5rem;          /* Mobile font size */
    line-height: 1.2;           /* Tighter line height */
  }
  
  .hero-buttons {
    flex-direction: column;     /* Stack buttons vertically */
    gap: 1rem;                  /* Spacing between buttons */
  }
}

/* Tablet Optimization */
@media (min-width: 768px) and (max-width: 1024px) {
  .hero-section {
    min-height: 55vh;           /* Medium height for tablets */
  }
}
```

### **�🎨 Utility Class System**
```css
/* Feature Cards */
.feature-grid               /* Grid layout for features */
.feature-card              /* Individual feature card */
.feature-icon-container    /* Icon container with variants */
.feature-icon-primary      /* Primary icon styling */
.feature-icon-secondary    /* Secondary icon styling */
.feature-icon-gradient     /* Gradient icon effects */
.feature-title             /* Feature title styling */
.feature-description       /* Feature description */

/* Section Headers */
.section-header            /* Section header container */
.section-title             /* Main section titles */
.section-subtitle          /* Section subtitles */

/* Interactive Elements */
.btn                       /* Base button class */
.btn-primary              /* Primary buttons */
.btn-secondary            /* Secondary buttons */
.btn-outline              /* Outline buttons */
.nav-link                 /* Navigation links */
.card                     /* Card containers */
```

### **🌓 Theme System**
```css
/* Light Mode (Default) */
--mh-hunter-green: #386851;    /* Primary brand */
--mh-leather-tan: #BD9264;     /* Secondary brand */

/* Dark Mode */
--dark-surface: #1A1A1A;       /* Background */
--dark-surface-2: #2D2D2D;     /* Secondary surfaces */
--dark-text: #E5E5E5;          /* Primary text */
--dark-text-secondary: #B8B8B8; /* Secondary text */

/* Theme-Aware Classes */
.text-mh-hunter-green dark:text-mh-leather-tan
.hover:text-mh-leather-tan dark:hover:text-mh-hunter-green
.bg-mh-hunter-green dark:bg-mh-leather-tan
```

---

## �🎯 **DEVELOPMENT PHASES**

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

### ✅ **Phase 4 - Complete (Design System)**
- Comprehensive duotone icon system
- MH Construction brand color integration
- Utility class framework
- Enhanced theme system
- Mobile-first responsive design
- Home page transformation complete

### 🔄 **Phase 5 - Active (Systematic Page Enhancement)**
- ✅ Streamlined header navigation with focused MH brand elements
- ✅ Enhanced header hover effects with stronger MH color representation
- 🔄 Apply Universal Hero Section to all standard pages
- 🔄 Consistent MH brand color integration across all pages
- 🔄 Enhanced button system implementation site-wide
- 🔄 Mobile-first responsive design optimization
- 🔄 Performance optimization and accessibility improvements

### 🎯 **Phase 6 - Planned (Advanced Experience Enhancement)**
- Advanced animation and interaction systems
- Enhanced chatbot integration with MH branding
- Interactive 5-step estimator wizard improvements
- 3D project exploration enhancements
- Advanced accessibility features (screen reader optimization, keyboard navigation)
- Performance metrics and monitoring
- SEO optimization with structured data

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
├── Header.tsx              # Enhanced navigation with MH brand colors and responsive design
├── Footer.tsx              # Modern footer with decorative blur effects
├── HeroSection.tsx         # Home page video hero (custom)
├── UniversalHeroSection.tsx # Standard hero pattern for all pages
├── HomeHeroSection.tsx     # Video-enhanced home page hero
├── AIToolsSection.tsx      # Enhanced AI features showcase
├── CoreValuesSection.tsx   # Duotone icon flip cards
├── FeaturedProjectsSection.tsx  # MH-branded project gallery
├── BlogNewsSection.tsx     # Enhanced news carousel
├── WhyChooseSection.tsx    # Refactored utility-based component
├── VisualCalendar.tsx      # Interactive calendar
├── CalendarScheduler.tsx   # Scheduling modal
├── ScheduleButton.tsx      # Unified CTA button
├── AIEstimatorWidget.tsx   # Cost estimation tool
├── TeamDashboard.tsx       # Admin interface
└── ThemeToggle.tsx         # Military-themed toggle switch
```

### **Enhanced Global Styles**
```
src/app/globals.css
├── Duotone Icon System     # 8 categories, 7 animation types
├── Utility Classes         # Feature cards, sections, buttons
├── MH Brand Colors         # Complete color palette
├── Theme Variables         # Light/dark mode support
├── Responsive Design       # Mobile-first approach
└── Animation Keyframes     # Smooth transitions
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

/* Extended MH Color Palette */
--mh-hunter-green-50: #f0f4f2;    /* Light variants */
--mh-hunter-green-100: #d1e3d9;
--mh-hunter-green-200: #a3c7b3;
--mh-hunter-green-500: #386851;   /* Base color */
--mh-hunter-green-700: #2a4d3a;
--mh-hunter-green-900: #1a3126;   /* Dark variants */

--mh-leather-tan-50: #faf7f3;     /* Light variants */
--mh-leather-tan-100: #f2e8d8;
--mh-leather-tan-200: #e5d1b1;
--mh-leather-tan-500: #BD9264;    /* Base color */
--mh-leather-tan-700: #a67c50;
--mh-leather-tan-900: #8b6842;    /* Dark variants */

/* Supporting Brand Colors */
--mh-steel-blue: #4A6B7C;
--mh-concrete-gray: #8A9BA8;
--mh-safety-orange: #FF6B35;
--mh-blueprint-blue: #2C5F7A;
--mh-earth-brown: #8B4513;

/* Dark Mode Colors */
--dark-surface: #1A1A1A;
--dark-surface-2: #2D2D2D;
--dark-surface-3: #3A3A3A;
--dark-text: #E5E5E5;
--dark-text-secondary: #B8B8B8;
--dark-border: #404040;

/* Legacy Army Military Colors (for compatibility) */
--army-black: #000000;
--army-gold: #BD9264;         /* Maps to mh-leather-tan */
--army-red: #C60C38;
--army-green: #386851;        /* Maps to mh-hunter-green */
--field-tan: #967117;
--field-gray: #6B7280;
--light-gray: #F8F9FA;
--dark-gray: #343A40;
```

### **Typography**
- **Headings**: Tactic Sans Bold (font-heading)
- **Subheadings**: Tactic Sans Medium (font-subheading)
- **Body Text**: Adobe Garamond Pro (font-body)
- **System Font**: Saira (font-saira) - fallback

### **Responsive Design Principles**
```css
/* Breakpoints */
sm: 640px     /* Small devices */
md: 768px     /* Medium devices */
lg: 1024px    /* Large devices */
xl: 1280px    /* Extra large devices */
2xl: 1536px   /* 2X large devices */

/* Touch Targets */
min-w-[44px] min-h-[44px]  /* Minimum touch target size */
touch-manipulation          /* Optimized touch interactions */

/* Mobile-First Approach */
/* Base styles for mobile */
/* sm: tablet styles */
/* md: small desktop styles */
/* lg: large desktop styles */
```

### **Component Variants**
```typescript
// Hero Section variants
heroType: 'universal' | 'video' | 'custom'
pages: {
  universal: ['team', 'services', 'projects', 'contact', 'blog', 'careers', 'estimate', 'safety', 'subcontractors', 'government', 'faqs', '3d-explorer', 'sandbox'],
  video: ['home', 'wounded-warrior']
}

// ScheduleButton variants
variant: 'primary' | 'secondary' | 'outline' | 'ghost'
size: 'sm' | 'md' | 'lg'

// Notification priorities
priority: 'low' | 'medium' | 'high'

// Consultation status
status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
```

---

## 🚀 **SYSTEMATIC PAGE ENHANCEMENT ROADMAP**

### **Phase 5: Individual Page Enhancement**
Now that the home page serves as our design system foundation, we'll systematically enhance each page:

#### **Enhancement Priority Order:**
1. **✅ Home Page** - Complete (Foundation/Template)
2. **🎯 Contact Page** - Next (High Priority - Client Interaction)
3. **📋 Services Page** - Client-facing content
4. **🏗️ Projects Page** - Portfolio showcase
5. **👥 Team Page** - About/Team information
6. **🤖 Estimate Page** - AI tools integration
7. **📖 Blog Page** - Content and insights
8. **🔧 Specialty Pages** - 3D Explorer, Sandbox, etc.

#### **Per-Page Enhancement Checklist:**
- [x] **Universal Hero Section**: Team Page hero pattern implemented across all standard pages
- [x] **Video Hero Exceptions**: Home and Wounded Warrior pages maintain custom video heroes
- [ ] **Duotone Icon Integration**: Apply appropriate icon categories and animations
- [ ] **MH Color Scheme**: Hunter Green and Leather Tan throughout
- [ ] **Utility Classes**: Convert to feature cards, section headers, buttons
- [ ] **Theme Support**: Light/dark mode with proper color switching
- [ ] **Mobile Optimization**: Touch targets, responsive layout, accessibility
- [ ] **Performance**: Optimize images, animations, and loading states
- [ ] **Consistency**: Maintain design patterns from home page

#### **Design System Components to Reuse:**
```typescript
// Reusable patterns standardized across pages
- Universal Hero Section (UniversalHeroSection component)
- Section headers (.section-header, .section-title, .section-subtitle)
- Feature cards (.feature-grid, .feature-card system)
- Button variants (.btn-primary, .btn-secondary, .btn-outline)
- Navigation patterns (.nav-link with hover effects)
- Icon animations (all .icon-animate-* classes)
- Theme-aware colors (MH color palette)
- Footer with decorative blur effects
```

#### **Quality Assurance Standards:**
- **Visual Consistency**: Each page matches home page design language
- **Interactive Elements**: All hover effects and animations consistent
- **Accessibility**: WCAG 2.1 AA compliance with proper touch targets
- **Performance**: <3 second load times, 90+ Lighthouse scores
- **Mobile Experience**: Seamless experience across all device sizes

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

---

## 🚀 **SYSTEMATIC PAGE ENHANCEMENT GUIDE**

### **📋 Page Enhancement Checklist**

#### **For Each Page, Implement:**
```typescript
✅ Universal Hero Section (except Home & Wounded Warrior)
✅ MH Brand Color Integration (#386851 Hunter Green, #BD9264 Leather Tan)
✅ Enhanced Button System (.btn classes with proper variants)
✅ Responsive Design (mobile-first, 44px touch targets)
✅ Accessibility Standards (ARIA labels, focus states, color contrast)
✅ Performance Optimization (image optimization, lazy loading)
```

#### **Page Priority Order:**
```typescript
🎯 High Priority (Customer Facing):
   - About/Services pages (primary business pages)
   - Projects page (portfolio showcase)
   - Contact page (conversion critical)
   - Estimate page (AI estimator)

🎯 Medium Priority (Specialized Services):
   - Wounded Warrior page (maintain video hero)
   - Government Contracting page
   - Safety page
   - Subcontractors page

� Lower Priority (Supporting Content):
   - Blog page
   - Careers page
   - FAQs page
   - 3D Explorer
   - Sandbox page
```

#### **Enhancement Standards:**
```css
/* Required Elements for Each Page */
.page-container {
  min-height: 100vh;              /* Full viewport coverage */
  background: var(--page-bg);     /* Theme-aware background */
}

.hero-section {
  min-height: 60vh;               /* Consistent hero sizing */
  background: linear-gradient(135deg, var(--mh-hunter-green), var(--mh-leather-tan));
}

.content-section {
  padding: 4rem 0;                /* Consistent vertical rhythm */
  max-width: 1200px;              /* Readable content width */
  margin: 0 auto;                 /* Center alignment */
}

.cta-section {
  background: var(--mh-hunter-green);  /* Brand color for CTAs */
  color: white;                        /* High contrast text */
  padding: 3rem 0;                     /* Adequate spacing */
}
```

---

## �🎨 **TYPOGRAPHY GUIDE**

### **Font Specifications**
```css
/* Primary Fonts */
--font-heading: 'Tactic Sans Bold';       /* All major headings */
--font-subheading: 'Tactic Sans Medium';  /* Section subtitles and subheadings */
--font-body: 'Adobe Garamond Pro';        /* All body text and content */
```

### **Color Palette**
```css
/* MH Construction Brand Colors */
--mh-hunter-green: #386851;        /* Primary brand color */
--mh-leather-tan: #BD9264;         /* Secondary brand color */

/* Extended Palette */
--black: #000000;
--white: #FFFFFF;
--light-gray: #F8F9FA;
--dark-gray: #343A40;
```

---

## 🤖 **BASIC AI ESTIMATOR SPECIFICATIONS**

### **Timeline Phases (Standard Speed)**
```
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
```

### **Speed Multipliers**
```
Standard: 1.0x (base timeline)
Premium: 1.15x (+15% timeline, higher quality)
Expedite: 1.30x (+30% timeline, rush job)
```

### **Seasonal Restrictions**
```
Concrete, Landscaping, Roadways: Restricted Oct 15 - Mar 31
Timeline Adjustment: Add 2-4 weeks if project includes restricted work during winter
```

---

🏗️ **This developer-ready README provides everything needed to build MH Construction's revolutionary website with clear priorities, exact specifications, and measurable success criteria!** 🏗️
