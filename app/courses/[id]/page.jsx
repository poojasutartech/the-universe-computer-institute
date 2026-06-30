'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Clock, Users, Award, ChevronRight, BookOpen, 
  CheckCircle, Code, Megaphone, FileSpreadsheet, 
  UserCheck, ShieldCheck, Keyboard, Monitor, Briefcase, 
  Calculator, Palette, Layers, BarChart3, Layout, Languages,
  ChevronLeft, Cpu, PencilRuler, Video, MessageSquare, Paintbrush
} from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import toast, { Toaster } from 'react-hot-toast';

// Existing full individual course details dataset
const courseDetails = {
  1: {
    title: 'Language Typing',
    level: 'Beginner',
    
    duration: '3 / 6 Months',
    rating: 4.6,
    students: 2100,
    icon: <Keyboard className="w-12 h-12" />,
    description: 'Master typing speed and accuracy across English, Marathi, and Hindi layouts using dynamic evaluation software.',
    //
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'Get unmatched speed and accurate positioning layouts required for competitive examinations and administrative office systems.',
    syllabus: [
      'Keys Practice & Home Row Mastery',
      'Notepad Typing Configurations',
      'Word Typing Formatting Rules',
      'Sentence Typing Rhythm & Speed Drills',
      'GS Software Typing Live Assessments'
    ],
    requirements: [
      'Basic laptop or desktop computer keyboard access.',
      'Regular continuous daily practice routines.'
    ],
    benefits: [
      'Official Work Training Certification',
      'Valid Certification from Institute',
      'Personal Teaching Methods'
    ]
  },
  2: {
    title: 'Basic Computer Course',
    level: 'Beginner',
    
    duration: '1 Month',
    rating: 4.9,
    students: 1800,
    icon: <Monitor className="w-12 h-12" />,
    description: 'Get essential computer literacy including system configurations, operations management, and platform architectures.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'An introductory guide covering basic computer operations, essential software layouts, and initial operating setups for modern jobs.',
    syllabus: [
      'Computer Basic Fundamental Lecture',
      'Basic Practical work configurations',
      'Introduction of Windows options & parameters',
      'Introduction of all Microsoft office frameworks',
      'Internet navigation and searching engines',
      'Basic Shortcut key workflows',
      'Basic Computer Setup system layout'
    ],
    requirements: [
      'No prior technical educational requirements.',
      'A passion to learn modern computers from scratch.'
    ],
    benefits: [
      'Smart Classrooms Access',
      'Theory + Practical Balanced Teaching',
      'Project-Based Interactive Learning'
    ]
  },
  3: {
    title: 'Microsoft Office',
    level: 'Intermediate',
    
    duration: '3 Months',
    rating: 4.7,
    students: 950,
    icon: <Briefcase className="w-12 h-12" />,
    description: 'Deep dive into industry-standard productivity suites including advanced text processing and corporate worksheet calculations.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=400&fit=crop',
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'The comprehensive professional package detailing text creation, advanced computational workflows, data modeling, and emailing.',
    syllabus: [
      'Computer Fundamental Lecture metrics',
      'Windows all options and deep operations',
      'Advance Practical Work systems',
      'Shortcut keys structural workflows',
      'Microsoft Word reporting tools',
      'Microsoft Excel formulas & workbooks',
      'Microsoft Power Point presentation techniques',
      'Microsoft Outlook administrative setup',
      'Internet (online all systems configuration)',
      'Computer Setup system integration',
      'Hardware parameters and basic information',
      'Real-world Project files assembly'
    ],
    requirements: [
      'Fundamental literacy of basic operating systems or mouse movements.',
      'Willingness to study structured worksheets.'
    ],
    benefits: [
      'Official Work Training Simulation',
      '10 days Internship experience link',
      'Resume Development guidance blueprint'
    ]
  },
  4: {
    title: 'Professional Accounting',
    level: 'Intermediate',
    
    duration: '12 weeks',
    rating: 4.8,
    students: 620,
    icon: <Calculator className="w-12 h-12" />,
    description: 'Master accounting logic systems, business financial journal entries, ledger mapping, and balance structures.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <ShieldCheck className="w-12 h-12 text-white" />,
    fullDescription: 'A thorough introduction connecting basic financial bookkeeping schemes directly to digital tools for immediate corporate use.',
    syllabus: [
      'Manual Accounting Conceptual Fundamentals',
      'Tally Core Operations and Company Structures',
      'Ledger management and Group Classifications',
      'Accounting Vouchers mappings and entries',
      'Bank Statement Reconciliation workflows',
      'Inventory Vouchers implementation controls',
      'GST / TDS Structural Foundations',
      'Tally Vault Configuration & System Backups'
    ],
    requirements: [
      'Basic arithmetic math understanding or business logic.',
      'Basic computer navigation fluency.'
    ],
    benefits: [
      'Theory + Practical Interactive Teaching',
      'Job Placement Support options',
      'Project File building parameters'
    ]
  },
  5: {
    title: 'Creative Clay Art',
    level: 'Beginner',
    
    duration: '8 weeks',
    rating: 4.6,
    students: 450,
    icon: <Palette className="w-12 h-12" />,
    description: 'Learn physical arts, modeling dimensions, texturing systems, and organic pottery frameworks.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'An excellent expressive module that shapes fundamental hand coordination into production designs and art elements.',
    syllabus: [
      'Making Clay Worms, Snakes & Simple Lines parameters',
      'Creating Perfect Pinch Pot Bowls structures',
      'Designing Unique Clay Thumbprints layouts',
      'Sculpting Basic Realistic Fruit Shapes objects',
      'Making Flat Clay Pendants & Custom Models',
      'Building Balanced Coil Towers systems',
      'Rolling Fine Clay Beads & Architectural Geometries',
      'Pressing Real Leaves for Organic Surface Textures',
      'Modeling Expressive Animal Faces forms',
      'Creating Dynamic Handprint Plaques crafts'
    ],
    requirements: [
      'No background in creative painting or modeling necessary.',
      'A flexible mindset toward raw art production.'
    ],
    benefits: [
      'Project-Based Learning workshops',
      'Flexible Batches to fit schedules',
      'Personal Teaching assistance focus'
    ]
  },
  6: {
    title: 'Modern Web Designing',
    level: 'Advanced',
    
    duration: '8 weeks',
    rating: 4.8,
    students: 1250,
    icon: <Code className="w-12 h-12" />,
    description: 'Master core web layouts with markup architectures and fundamental procedural logic using C/C++ configurations.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'Links interface design schemas to programming workflows. You will construct complete logic flows alongside markup frameworks.',
    syllabus: [
      'HTML5 Fundamentals & Content Architectures',
      'CSS3 Grid, Flexbox & Layout Systematics',
      'Responsive Web Components & Bootstrap platforms',
      'UI/UX Design Frameworks and Wireframes',
      'C Programming Language structural introduction',
      'Algorithm developments & Flow charts parameters',
      'C Control Statements, Conditions & Validations',
      'Loops mechanics and Nested structural iterations',
      'Array manipulation strategies and Matrix data configurations',
      'Pointers, memory tracks and Function logic parameters',
      'String C structures & comprehensive String Functions',
      'C Math Functions implementations',
      'C Structure and Union definitions',
      'C File Handling rules & Graphics rendering mechanics',
      'C Development Projects execution',
      'C++ Programming History & Object-Oriented Principles (OOPs)',
      'Object and Class declarations with Object scopes',
      'Constructor and Destructor life cycles',
      'This Pointer references & Static variable definitions',
      'Friend Function layouts & multi-layer Inheritances',
      'Polymorphism schemes, Overloading rules, & Pointers setups',
      'Virtual Functions and runtime bindings',
      'String Functions C++ implementations',
      'Templates architectures and Exception Handling mechanisms',
      'File & Stream processing pipelines',
      'Advanced C++ Application Projects generation'
    ],
    requirements: [
      'Basic operational familiarity with computers and directory trees.',
      'Analytical aptitude for learning programmatic sequences.'
    ],
    benefits: [
      '10 days Internship validation',
      'Project File building parameters',
      'Interview Practice simulation tracks'
    ]
  },
  7: {
    title: 'Advanced Excel & VBA',
    level: 'Advanced',
    
    duration: '5 weeks',
    rating: 4.9,
    students: 850,
    icon: <FileSpreadsheet className="w-12 h-12" />,
    description: 'Master complex data evaluation formulas, visual reporting dashboards, and macro language script systems.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'Tailored for data professionals. Learn how to transform massive corporate spreadsheets using programmatic macro actions.',
    syllabus: [
      'Advanced Excel Fundamental Lectures & Systematics',
      'Advanced Conditional Formatting operations',
      'Corporate Dashboard layout creation parameters',
      'Pivot Table architectures & Data Consolidation logic',
      'Over 100+ Advanced Statistical, Text & Lookup Formulas',
      'Automation frameworks utilizing Visual Basic (VB Macros)',
      'Google Sheets Shared Workspace controls',
      'Implementation of 40+ Practical Analytics Projects'
    ],
    requirements: [
      'Prior intermediate-level spreadsheet utilization.',
      'Familiarity with foundational cell structures.'
    ],
    benefits: [
      'Automation Scripts Bundle included free',
      'Industrial Project files construction',
      'Valid Certification from Institute'
    ]
  },
  8: {
    title: 'Advanced Tally Prime',
    level: 'Advanced',
    
    duration: '8 weeks',
    rating: 4.8,
    students: 580,
    icon: <Layers className="w-12 h-12" />,
    description: 'Master industrial compliance operations, tax auditing architectures, payroll setups, and multi-location logistics.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <ShieldCheck className="w-12 h-12 text-white" />,
    fullDescription: 'Connect financial systems to national accounting statutory regimes. You will manage actual tax data logs and return files.',
    syllabus: [
      'Advanced Tally Fundamental Lectures & System layouts',
      'Depreciation Entries & Capital Asset Management pipelines',
      'Advanced Inventory Configurations & Bill-Wise Details schemas',
      'Interest Calculations systems & Statutory Payroll Management',
      'Budget Controls parameters & Variance Analytics Reporting',
      'Godown Configuration mapping & Batch-Wise Trackers setup',
      'Statutory & Taxation implementations (CGST, SGST, IGST Setup)',
      'Offline Returns Filing & E-Way Bill structural setups'
    ],
    requirements: [
      'Completion of Basic Accounting or Tally fundamentals modules.',
      'Understanding of corporate transaction pipelines.'
    ],
    benefits: [
      '10 days Internship validation experience',
      'Official Work Training simulations',
      'Job Placement Support connections'
    ]
  },
  9: {
    title: 'Digital Marketing',
    level: 'Intermediate',
    
    duration: '6 weeks',
    rating: 4.7,
    students: 980,
    icon: <Megaphone className="w-12 h-12" />,
    description: 'Master search optimizations, organic visibility setups, paid search engines ads, and marketing data loops.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'Learn how to reach targeted demographics across top search engines, social media platforms, and optimization tools.',
    syllabus: [
      'Fundamental Modules & Digital Marketing Overview',
      'Website Planning and Creation systems',
      'Consumer Behaviour & Digital Journey architectures',
      'SWOT Analysis for Business modeling',
      'Search Engine Optimization (SEO) structural pipelines',
      'Keyword Research and Analysis rules',
      'On-Page Optimization execution pathways',
      'Off-Page Optimization link strategy',
      'Technical SEO configurations',
      'Google Search Console diagnostics',
      'Paid Advertising & Search Engine Marketing (SEM) setups',
      'Google Ads mechanics (Search, Display, Video networks)',
      'Pay-Per-Click (PPC) Strategies execution',
      'Remarketing and Retargeting configuration layers',
      'Campaign Budget Management & ROI parameters',
      'Social Media Marketing (SMM) deployment schedules',
      'Facebook, Instagram, LinkedIn, and Twitter (X) Marketing setups',
      'Social Media Optimization (SMO) systems',
      'Content Marketing Strategy planning matrix',
      'Email Marketing Campaigns automation tools',
      'WhatsApp & Mobile Marketing configurations',
      'Influencer Marketing parameters',
      'Analytics and Reporting dashboard audits',
      'Google Analytics (GA4) setup & metrics tracking',
      'Conversion Rate Optimization (CRO) logic',
      'Digital Marketing Strategy and Planning matrices',
      'Freelancing Opportunities setup',
      'AI Tools in Digital Marketing workflow integrations'
    ],
    requirements: [
      'Active personal Gmail credentials.',
      'Broad comprehension of web navigation workflows.'
    ],
    benefits: [
      'Live Campaign Project structures',
      'Theory + Practical balanced layout',
      'Valid Certification paths'
    ]
  },
  10: {
    title: 'Power BI Data Analytics',
    level: 'Advanced',
    
    duration: '10 weeks',
    rating: 4.9,
    students: 720,
    icon: <BarChart3 className="w-12 h-12" />,
    description: 'Transform raw enterprise datalogs into production visualization models using custom M Language extraction schemas.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'A comprehensive engineering map covering extraction rules, multi-source schema joining, DAX programming, and secure distribution.',
    syllabus: [
      'Introduction to Data Analytics & Business Intelligence ecosystems',
      'Power BI Desktop Installation & Interface components navigation',
      'Data Connectivity to diverse endpoints (Excel, CSV, SQL database)',
      'Data Preparation using the Power Query Editor panel',
      'Cleaning and Transforming raw datasets through M Language lines',
      'Data Modeling workflows: Establishing active Relationships',
      'Star Schema implementations & Data Granularity controls',
      'Introduction to DAX (Data Analysis Expressions) syntax rules',
      'Creating Calculated Columns and Measures values',
      'Essential DAX functions (SUM, AVERAGE, COUNT, DIVIDE)',
      'Advanced DAX functions (CALCULATE, FILTER, ALL modules)',
      'Time Intelligence computations (YoY Growth, MoM Trends metrics)',
      'Building Interactive Visualizations (Bar charts, Line plots, Maps)',
      'Using Slicers, Filters, and Advanced Drill-Through logic pathways',
      'Creating Custom Tooltips and Dashboard Bookmarks',
      'Introduction to Power BI Service cloud environments',
      'Publishing Reports from desktop to secure online Workspaces',
      'Creating and Configuring dashboards within app views',
      'Sharing dashboards with security roles (RLS integration)'
    ],
    requirements: [
      'Familiarity with basic tabular datasets or lookup expressions.',
      '64-bit operating system configuration required.'
    ],
    benefits: [
      'Project-Based Analytics assignments',
      '10 days Internship validation track',
      'Resume Development inclusion support'
    ]
  },
  11: {
    title: 'Graphic Design Masterclass',
    level: 'Intermediate',
    
    duration: '12 weeks',
    rating: 4.7,
    students: 890,
    icon: <Layout className="w-12 h-12" />,
    description: 'Master multi-platform creative layout architectures, advanced layer manipulations, vector paths, and print production setups.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'The comprehensive production sequence. You will build and optimize brand kits, marketing layout materials, and packaging files.',
    syllabus: [
      'Graphic Designing Introduction & Design Principles',
      'Photoshop: Document Setup, Interface layout controls',
      'Layers Management and Selection Tools rules',
      'Image Editing, Retouching, and Repair Brush tools',
      'Color Correction and Adjustments parameters',
      'Masking Techniques and Blending Modes layers',
      'Filters and Special Effects implementation pathways',
      'Corel Draw: Document Setup and Page Layout grids',
      'Drawing Tools and Shape Manipulation nodes',
      'Color Fills, Gradients, and Pattern fills paths',
      'Text Formatting and Typography alignment layouts',
      'Importing and Exporting File formats configurations',
      'InDesign: Document Setup and Master Pages management',
      'Layout Design and Text Frame configurations',
      'Working with Styles (Paragraph and Character parameters)',
      'Managing Images and Links workflows',
      'Table Creation and Data Formatting setups',
      'Exporting to Interactive PDFs layout blueprints',
      'Illustrator: Precision Vector Paths engineering',
      'Pathfinder workflows and shape groupings',
      'Artboards management for digital outputs',
      'Canva Studio: Core Interface controls navigation',
      'Template Customization and Brand Kits layout setup',
      'Magic Studio AI tools integration schedules',
      'Specialized Printing Output: Packaging Architectures',
      'Print-Ready Production PDFs & Color Separations (CMYK setup)'
    ],
    requirements: [
      'English, Marathi, or Hindi Typing capabilities.',
      'Basic operational layout computer skills.'
    ],
    benefits: [
      'Official Work Training systems',
      'Portfolio File composition layout',
      'Job Placement Support routes'
    ]
  },
  12: {
    title: 'Google Skills Masterclass',
    level: 'Beginner',
    
    duration: '4 weeks',
    rating: 4.8,
    students: 1100,
    icon: <Languages className="w-12 h-12" />,
    description: 'Master cloud-based document engineering, shared workplace systems, and collaborative automation utilities.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'Learn how to utilize Google Workspace to work collaboratively, build shared tracking grids, and automate online forms.',
    syllabus: [
      'Introductions to Cloud Ecosystems',
      'Internet all systems configuration parameters',
      'Gmail ID creation & advanced security controls',
      'Google Docs collaborative text processing',
      'Google Sheet shared data management',
      'Google Slide presentation mechanics',
      'Google Forms & Quiz composition modules',
      'Google Map optimization & Google Calendar orchestration',
      'Google Contact synchronizations',
      'Google Drive & Photos storage architectures',
      'Online Banking integration workflows',
      'Basic computer knowledge evaluations'
    ],
    requirements: [
      'Basic computer literacy with internet browser access.',
      'Willingness to learn online productivity ecosystems.'
    ],
    benefits: [
      'Theory + Practical Teaching setup',
      'Official Work Training protocols',
      'Valid Certification issuance'
    ]
  },
  13: {
    title: 'English Speaking & Personality Development',
    level: 'Beginner',
    
    duration: '6 weeks',
    rating: 4.7,
    students: 670,
    icon: <Users className="w-12 h-12" />,
    description: 'Boost conversational fluency, corporate communication skills, body language metrics, and theatrical presentations.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <ShieldCheck className="w-12 h-12 text-white" />,
    fullDescription: 'A dynamic behavioral program focused on professional expression, interactive speech architectures, and vocabulary development.',
    syllabus: [
      'Greetings & Introductions styling frameworks',
      'Numbers, Colours & Shapes associations',
      'Family & Pet Names contextual communication',
      'Body Parts & Clothing descriptions',
      'Action Verbs (Run, Jump, Eat) speech applications',
      'Expressing Feelings & Emotions vocabulary matrices',
      'Food & Drinks Vocabulary metrics',
      'Politeness (Please, Thank You, Sorry) social rules',
      'Simple "Wh-" Questions mechanics (What, Who, Where)',
      'Conversations structures and open-ended modules',
      'Different Speaking Activities execution',
      'Drama Presentations & performance metrics'
    ],
    requirements: [
      'Openness to speak and participate in group assignments.',
      'No foundational fluency in English required.'
    ],
    benefits: [
      'Interview Practice tracks built-in',
      'Personal Teaching methods',
      '10 days Internship interactive link'
    ]
  },
  14: {
    title: 'The Universe Training System (1-Year Program)',
    level: 'Advanced',
    
    duration: '1 Year',
    rating: 5.0,
    students: 310,
    icon: <Award className="w-12 h-12" />,
    description: 'Our ultimate flagship multi-discipline track bridging entire industrial Accounting pipelines with professional Creative Design.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'A comprehensive career masterclass explicitly engineered by our senior faculty to convert candidates into versatile software specialists.',
    syllabus: [
      'Comprehensive Accounting Systems Integration (Full Modules 4 & 8)',
      'Advanced Professional Designing Layout Architecture (Full Module 11)',
      'Integrated Project File Construction for Multi-Scale Business Operations',
      'Official Systems Operations & Executive Reporting Blueprints',
      'Year-End Portfolio Composition and Enterprise Case Studies Reviews'
    ],
    requirements: [
      'Dedication toward a 12-month technical training pipeline.',
      'Successful entry interview with institute trainers.'
    ],
    benefits: [
      'Job Placement Support with verified network routes',
      '10 days Corporate Internship inclusion',
      'Smart Classrooms 1:1 Lab allocations'
    ]
  }
};

// Dedicated Combo Packages detail database containing explanations and modules
const comboDetails = {
  combo1: {
    title: 'Advanced Diploma in Computerized Accounting (ADCA)',
    level: 'Intermediate',
    
    duration: '20 weeks',
    rating: 4.9,
    students: 1450,
    icon: <Layers className="w-12 h-12" />,
    description: 'An expansive professional diploma combining typing standards, automated bookkeeping, office software applications, and microcomputer assembly configurations.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'The ADCA bundle is our premier multi-disciplinary path designed to provide well-rounded commercial administrative skills. It covers system-level workflows alongside front-office compliance.',
    syllabus: [
      'Language Typing Master Course (English, Marathi & Hindi)',
      'Microsoft Office Executive Desktop Application Automation Suite',
      'Advance Tally Prime Framework Accounting Compliance Arrays',
      'Basic Computer Hardware Assemblies and OS Configurations System'
    ],
    requirements: [
      'Basic eligibility check or fundamental school education credentials.',
      'A determined commitment to complete a multi-module tracking curriculum.'
    ],
    benefits: [
      'Dual Specialty Certified Validation Document',
      '10 days Corporate Internship inclusion experience',
      'Resume Development and Corporate Interview Drills'
    ]
  },
  combo2: {
    title: 'Professional Data Entry and Accounting Expert',
    level: 'Intermediate',
    
    duration: '24 weeks',
    rating: 4.8,
    students: 690,
    icon: <Calculator className="w-12 h-12" />,
    description: 'Engineered specifically for rapid database operations, record checking, and optimized ledger tracking configurations.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'This specialized combination package enables high-speed keyboard parameters alongside structural worksheet computation matrices, mapping directly to modern financial data entry careers.',
    syllabus: [
      'Language Typing Speed & Accuracy Performance Tracks',
      'Excel Expert Sheet Management Configurations',
      'Microsoft Office Comprehensive Administrative Suites Integration'
    ],
    requirements: [
      'Basic understanding of arithmetic math and logic rules.',
      'No prior high-level programming language parameters needed.'
    ],
    benefits: [
      'Official Work Training System Simulation',
      'Job Placement Support with verified local network tracks',
      'Project File building and verification setups'
    ]
  },
  combo3: {
    title: 'The Digital Accountant Pro Pack',
    level: 'Advanced',
    
    duration: '28 weeks',
    rating: 4.9,
    students: 740,
    icon: <BarChart3 className="w-12 h-12" />,
    description: 'Advanced business data bundle focused on connecting raw financial audit sheets directly to interactive reporting dashboards.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <ShieldCheck className="w-12 h-12 text-white" />,
    fullDescription: 'Transform traditional bookkeeping into active business intelligence. This package targets corporate analysts who compile advanced visual dashboard models.',
    syllabus: [
      'Language Typing Keyboard Control Layouts Baseline',
      'Excel Expert Calculation Sheet Implementations',
      'Power BI Dashboard Enterprise Business Analytics Modeling',
      'Microsoft Office Executive Utilities Configurations'
    ],
    requirements: [
      'Familiarity with tabular row formats and database lookup concepts.',
      'A 64-bit local computer operating configuration setup.'
    ],
    benefits: [
      'Project-Based Interactive Analytical Workshops',
      '10 days Internship validation track assignment',
      'Valid Certification from Institute credentials'
    ]
  },
  combo4: {
    title: 'Microsoft Office & Google Workspace Masterclass',
    level: 'Beginner',
    
    duration: '26 weeks',
    rating: 4.7,
    students: 810,
    icon: <Languages className="w-12 h-12" />,
    description: 'Dual productivity platform architecture bridging local software programs with cloud infrastructure operations.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'Master modern co-working environments. Learn to deploy spreadsheets, document text layouts, online maps, and secure backup parameters.',
    syllabus: [
      'Standard Script Typing Baselines (English, Hindi, Marathi)',
      'Microsoft Office Desktop Local Application Suites',
      'Google Cloud Workspace Collaborative Engineering Pipelines'
    ],
    requirements: [
      'Basic laptop navigation and local internet browser configurations access.',
      'Active willingness to master online cloud ecosystems.'
    ],
    benefits: [
      'Theory + Practical balanced layout teaching',
      'Official Work Training protocols setup',
      'Valid Certification paths validation'
    ]
  },
  combo5: {
    title: 'Professional Graphic & Typing Combo Bundle',
    level: 'Advanced',
    
    duration: '24 weeks',
    rating: 4.9,
    students: 920,
    icon: <Layout className="w-12 h-12" />,
    description: 'Complete commercial vector designing, publishing, and localized script advertising typography layout pipeline.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'This framework links language typesetting paths with creative media layout software to prepare students for printing presses and digital agency jobs.',
    syllabus: [
      'English, Hindi & Marathi Vector Typography Baselines',
      'Corel Draw Layout Advertising Graphics Blueprints',
      'Adobe Illustrator Scale Path Assets Design Systems',
      'Adobe InDesign Multi-Page Typesetting Publications'
    ],
    requirements: [
      'Basic operational layout computer and file system understanding.',
      'Creative visual design passion and learning mindset.'
    ],
    benefits: [
      'Portfolio File composition layout verification',
      'Official Work Training systems assignments',
      'Job Placement Support routes help'
    ]
  },
  combo6: {
    title: 'Fast Track Office Accounting',
    level: 'Beginner',
    
    duration: '12 weeks',
    rating: 4.8,
    students: 530,
    icon: <Layers className="w-12 h-12" />,
    description: 'Accelerated basic business package combining typing mechanics with fundamental double-entry Tally software environments.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <ShieldCheck className="w-12 h-12 text-white" />,
    fullDescription: 'An efficient fast-track program designed for business owners or accountants seeking swift company transaction ledger setups.',
    syllabus: [
      'Language Script Typing Baseline Mechanics',
      'Microsoft Office Base Administration Suites',
      'Basic Tally Framework Bookkeeping Applications'
    ],
    requirements: [
      'No complex mathematical academic background required.',
      'Basic understanding of transaction inputs.'
    ],
    benefits: [
      'Theory + Practical balanced teaching schedules',
      'Flexible Batches configurations options',
      'Personal Teaching assistance focus checks'
    ]
  },
  combo7: {
    title: 'DTP Master Course Bundle',
    level: 'Beginner',
    
    duration: '16 weeks',
    rating: 4.6,
    students: 410,
    icon: <Monitor className="w-12 h-12" />,
    description: 'Core Desktop Publishing pipeline built for local agency media printing configurations.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'Learn custom text layouts, vector advertisements mapping, card printing margins, and localized documentation operations.',
    syllabus: [
      'English & Marathi Typing Compulsory Speed Mechanics',
      'Corel Draw Structural Layout Formats Production'
    ],
    requirements: [
      'Basic computer navigation and mouse tracking parameters.',
      'Basic literacy of document printing layouts.'
    ],
    benefits: [
      'Valid Certification from Institute records',
      'Project File building parameters construction',
      'Smart Classrooms infrastructure access'
    ]
  },
  combo8: {
    title: 'Professional Photo Editor & Typist Pack',
    level: 'Intermediate',
   
    duration: '12 weeks',
    rating: 4.7,
    students: 480,
    icon: <Palette className="w-12 h-12" />,
    description: 'Studio workspace processing package focusing on digital pixel manipulation, image retouch templates, and layout typing files.',
   
    instructor: 'Aditya Nalawade',
    instructorIcon: <UserCheck className="w-12 h-12 text-white" />,
    fullDescription: 'Master color grading, masking layers, wedding album configurations, and professional documentation templates setup.',
    syllabus: [
      'English Script Production Typing Classes',
      'Adobe Photoshop Digital Pixel Manipulation Adjustments'
    ],
    requirements: [
      'Basic computer literacy with standard file structures knowledge.',
      'A keen aesthetic mindset for digital colors.'
    ],
    benefits: [
      'Project-Based Learning workshops mapping',
      'Official Work Training systems simulation',
      'Flexible Batches to fit student timelines'
    ]
  }
};

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id;
  const [isEnrolling, setIsEnrolling] = useState(false);

  // Dynamically resolve whether route belongs to combo package or standard course details
  const isComboRoute = courseId && courseId.startsWith('combo');
  const course = isComboRoute ? comboDetails[courseId] : courseDetails[courseId];

  if (!course) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-light">
          <div className="text-center px-4">
            <h1 className="text-4xl font-bold mb-4">Course Track Not Found</h1>
            <p className="text-foreground/70 mb-6">The requested training item key does not exist inside the Institute databases.</p>
            <Link href="/courses" className="button-gradient inline-block px-8 py-3 rounded-xl font-bold">
              Back to Courses
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleEnroll = () => {
    setIsEnrolling(true);
    toast.success('Redirecting to Enrollment Form...');
    setTimeout(() => {
      router.push(`/admissions?course=${courseId}`);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-right" />

      <section className="relative pt-20 pb-12 bg-gradient-light overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          
          <button 
            onClick={() => router.push('/courses')} 
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 mb-6 hover:text-sky-700 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Learning Matrix
          </button>

          
            <div className="space-y-6 slide-up flex items-center">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-xl text-sky-600">
                  {course.icon}
                </div>
                <div className="flex flex-col">
                  <span className="bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 px-3 py-0.5 rounded-full text-xs font-bold w-fit mb-1 uppercase tracking-wider">
                    {course.level}
                  </span>
                  <span className="text-sm font-bold text-yellow-500">⭐ {course.rating}/5.0</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
                <span className="gradient-text">{course.title}</span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                {course.description}
              </p>

              <div className="grid grid-cols-3 gap-4 py-6 border-y border-sky-200 dark:border-sky-800">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-sky-600" />
                  <div>
                    <p className="text-xs text-foreground/70">Duration</p>
                    <p className="font-bold text-sm md:text-base text-slate-800 dark:text-slate-200">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-sky-600" />
                  <div>
                    <p className="text-xs text-foreground/70">Students</p>
                    <p className="font-bold text-sm md:text-base text-slate-800 dark:text-slate-200">{course.students}+</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-sky-600" />
                  <div>
                    <p className="text-xs text-foreground/70">Status</p>
                    <p className="font-bold text-sm md:text-base text-slate-800 dark:text-slate-200">Certified</p>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-slate-900/40 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
              <BookOpen className="w-8 h-8" />
              About This Course Package
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              {course.fullDescription}
            </p>
          </div>

          <div className="glass rounded-2xl p-8 mb-12 border-2 border-sky-200 dark:border-sky-800 flex flex-col md:flex-row items-center gap-8 bg-slate-50/50 dark:bg-slate-800/50">
            <div className="w-24 h-24 rounded-2xl bg-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/20 text-white font-bold">
              {course.instructorIcon}
            </div>
            <div className="text-center md:text-left flex-grow">
              <h3 className="text-2xl font-bold text-foreground">{course.instructor}</h3>
              <p className="text-foreground/70">Official Faculty • The Universe Computer Institute</p>
              <div className="flex gap-2 mt-4 justify-center md:justify-start">
                <span className="bg-sky-100 dark:bg-sky-900/40 text-sky-600 px-3 py-1 rounded-md text-xs font-bold">EXPERT</span>
                <span className="bg-green-100 dark:bg-green-900/40 text-green-600 px-3 py-1 rounded-md text-xs font-bold">VERIFIED</span>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
              {isComboRoute ? 'Included Framework Training Modules' : 'Detailed Syllabus Modules'}
            </h2>
            <div className="grid gap-3">
              {course.syllabus.map((topic, idx) => (
                <div key={idx} className="glass p-5 rounded-xl border-l-4 border-sky-500 hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-all flex items-center gap-4 group bg-white dark:bg-slate-800 shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center text-sky-600 font-bold text-sm flex-shrink-0">{idx + 1}</span>
                  <span className="font-semibold text-foreground group-hover:translate-x-1 transition-transform">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-6 rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-slate-800 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                <CheckCircle className="w-6 h-6 text-green-500" />
                Course Requirements
              </h3>
              <ul className="space-y-3">
                {course.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground/80 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-6 rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-slate-800 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                <Award className="w-6 h-6 text-sky-500" />
                Institute Features & Perks
              </h3>
              <ul className="space-y-3">
                {course.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground/80 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 glass rounded-3xl p-10 text-center border-2 border-sky-200 dark:border-sky-800 bg-sky-50/50 dark:bg-sky-900/10 shadow-lg">
            <h3 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">The Universe Computer Institute</h3>
            <p className="text-sm font-semibold text-sky-600 mb-4">Vande Mataram Chauk, Tasgaon</p>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto text-lg">Join {course.students}+ active students building real skills via our comprehensive technical framework.</p>
            <button
              onClick={handleEnroll}
              className="button-gradient mx-auto flex items-center justify-center gap-2 px-10 py-4 rounded-2xl text-xl font-bold shadow-md hover:scale-[1.02] transition-transform"
            >
              Start Admission Process
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}