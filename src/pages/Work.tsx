import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HospitalManagementArticle } from "@/components/articles/HospitalManagementArticle";
import { PathologyLabArticle } from "@/components/articles/PathologyLabArticle";
import { DirectoryListingArticle } from "@/components/articles/DirectoryListingArticle";
import { CityTravelCMSArticle } from "@/components/articles/CityTravelCMSArticle";
import { 
  Hospital, 
  TestTube, 
  Building, 
  ShoppingCart, 
  MapPin, 
  Home, 
  Heart, 
  Briefcase, 
  Wifi, 
  Code, 
  Hammer, 
  Store, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Car, 
  Bed, 
  Package, 
  Pill, 
  Newspaper, 
  Church, 
  DollarSign, 
  Shirt, 
  Radio, 
  School, 
  Stethoscope, 
  Banknote, 
  FileText, 
  Mail, 
  Plane, 
  Camera, 
  WashingMachine, 
  Gamepad2, 
  Calculator, 
  Smartphone, 
  ShoppingBag, 
  CreditCard, 
  Bitcoin, 
  TrendingUp, 
  Receipt, 
  Utensils, 
  MessageCircle, 
  Scissors, 
  Bus, 
  Truck, 
  UserCheck, 
  Calendar, 
  LucideIcon
} from "lucide-react";

interface Project {
  name: string;
  icon: LucideIcon;
  category: string;
}

interface Category {
  name: string;
  projects: Project[];
}

export default function Work() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  
  const projects: Project[] = [
    // Healthcare & Medical
    { name: "Hospital Management Software Pro", icon: Hospital, category: "Healthcare & Medical" },
    { name: "Pathology Lab Management Software", icon: TestTube, category: "Healthcare & Medical" },
    { name: "Pharmacy Management Software", icon: Pill, category: "Healthcare & Medical" },
    { name: "Clinic Management Software", icon: Stethoscope, category: "Healthcare & Medical" },
    { name: "Diagnostic Lab Management Software", icon: TestTube, category: "Healthcare & Medical" },
    { name: "Hospital Management Software 2", icon: Hospital, category: "Healthcare & Medical" },
    { name: "Hospital Management Software 3", icon: Hospital, category: "Healthcare & Medical" },
    { name: "Clinic Management Software Pro", icon: Stethoscope, category: "Healthcare & Medical" },
    { name: "Pharmacy Management Software Pro GD", icon: Pill, category: "Healthcare & Medical" },
    { name: "Hospital Management System TSF", icon: Hospital, category: "Healthcare & Medical" },
    { name: "The Pharma - Pharmacy Management System TSF", icon: Pill, category: "Healthcare & Medical" },

    // E-Commerce & Retail
    { name: "Multi Vendor E-Commerce Website", icon: ShoppingCart, category: "E-Commerce & Retail" },
    { name: "Buy Sell Classified Ads CMS Software", icon: ShoppingCart, category: "E-Commerce & Retail" },
    { name: "Buy Sell Classified Ads CMS Software 2", icon: ShoppingCart, category: "E-Commerce & Retail" },
    { name: "Multivendor E-Commerce CMS Website", icon: ShoppingCart, category: "E-Commerce & Retail" },
    { name: "Single Vendor E-Commerce Website Pro", icon: ShoppingBag, category: "E-Commerce & Retail" },
    { name: "Grocery Multi Vendor E-commerce Website Pro 6 Am", icon: Store, category: "E-Commerce & Retail" },
    { name: "Grocery Multi Vendor E-commerce Website Pro 2 Nest", icon: Store, category: "E-Commerce & Retail" },
    { name: "Super Shop E-Commerce Website", icon: Store, category: "E-Commerce & Retail" },
    { name: "E-Commerce Website Single Vendor Garments", icon: Shirt, category: "E-Commerce & Retail" },
    { name: "Zairito - Laravel E-Commerce System Single Vendor", icon: ShoppingBag, category: "E-Commerce & Retail" },
    { name: "Royal Laravel Ecommerce System with Physical and Digital Product Selling", icon: ShoppingCart, category: "E-Commerce & Retail" },
    { name: "Single Vendor E-Commerce Website 4", icon: ShoppingBag, category: "E-Commerce & Retail" },
    { name: "ODASS E-Commerce Website", icon: ShoppingBag, category: "E-Commerce & Retail" },
    { name: "E-Commerce 1032", icon: ShoppingCart, category: "E-Commerce & Retail" },
    { name: "E-Commerce 1033", icon: ShoppingCart, category: "E-Commerce & Retail" },
    { name: "E-Commerce System TSF", icon: ShoppingCart, category: "E-Commerce & Retail" },
    { name: "Zaika Single Vendor E-Commerce", icon: ShoppingBag, category: "E-Commerce & Retail" },

    // Education & Learning
    { name: "Online Learning and Examination Management Software", icon: GraduationCap, category: "Education & Learning" },
    { name: "Library Management Software", icon: BookOpen, category: "Education & Learning" },
    { name: "Online Examination, Mock Test & Quiz Management Software", icon: FileText, category: "Education & Learning" },
    { name: "Pro School Management Software", icon: School, category: "Education & Learning" },
    { name: "School Management Software 1", icon: School, category: "Education & Learning" },
    { name: "Library Management Software 2", icon: BookOpen, category: "Education & Learning" },
    { name: "Library Management Software Pro", icon: BookOpen, category: "Education & Learning" },
    { name: "Academy Learning Management System", icon: GraduationCap, category: "Education & Learning" },
    { name: "Online Exam System", icon: FileText, category: "Education & Learning" },
    { name: "Online Election System TSF", icon: UserCheck, category: "Education & Learning" },
    { name: "Online Exam System TSF", icon: FileText, category: "Education & Learning" },
    { name: "College Management System TSF", icon: GraduationCap, category: "Education & Learning" },

    // Business Management & CRM
    { name: "Project Management, Finance, CRM Tool, Task Management Software", icon: Users, category: "Business Management & CRM" },
    { name: "MLM Software", icon: Users, category: "Business Management & CRM" },
    { name: "HR/Payroll Management Software", icon: Users, category: "Business Management & CRM" },
    { name: "Portfolio Management Software", icon: Briefcase, category: "Business Management & CRM" },
    { name: "Deals Management CRM Software", icon: DollarSign, category: "Business Management & CRM" },
    { name: "Business ERP Solution Product Shop Company Management", icon: Calculator, category: "Business Management & CRM" },
    { name: "ERP / Account Management Software", icon: Calculator, category: "Business Management & CRM" },
    { name: "CRM Software Rise", icon: Users, category: "Business Management & CRM" },
    { name: "CRM Pro - Customer Relationship Management System TSF", icon: Users, category: "Business Management & CRM" },
    { name: "Business ERP Solution Product Shop Company Management (Retail POS)", icon: Receipt, category: "Business Management & CRM" },

    // Real Estate & Property
    { name: "Directory & Listing CMS Software (Property)", icon: Home, category: "Real Estate & Property" },
    { name: "Directory Listing Software", icon: Building, category: "Real Estate & Property" },
    { name: "Directory Listing Software 2", icon: Building, category: "Real Estate & Property" },
    { name: "Directory & Listing, City Travel CMS Software", icon: MapPin, category: "Real Estate & Property" },
    { name: "Tenant - Room Booking System TSF", icon: Home, category: "Real Estate & Property" },

    // Financial Services
    { name: "Bank Management Software - All in One Digital Banking System", icon: CreditCard, category: "Financial Services" },
    { name: "Bitcoin Software / Crypto Currency Trade Software", icon: Bitcoin, category: "Financial Services" },
    { name: "Trade & Invest Software", icon: TrendingUp, category: "Financial Services" },
    { name: "Coin-based Online Trading Software", icon: Bitcoin, category: "Financial Services" },
    { name: "Microfinance Software 1", icon: Banknote, category: "Financial Services" },
    { name: "Microfinance Software 2", icon: Banknote, category: "Financial Services" },
    { name: "Loan Management Software NWPro", icon: Banknote, category: "Financial Services" },
    { name: "Lotto Lab Software", icon: DollarSign, category: "Financial Services" },
    { name: "Microfinance - Loan Management System TSF", icon: Banknote, category: "Financial Services" },
    { name: "Loans - Lending and Credit Management App for Microfinance Business", icon: Banknote, category: "Financial Services" },

    // Travel & Hospitality
    { name: "Hotel Booking Software", icon: Bed, category: "Travel & Hospitality" },
    { name: "Hotel Management Software Pro", icon: Bed, category: "Travel & Hospitality" },
    { name: "Hotel Management Software Pro 2", icon: Bed, category: "Travel & Hospitality" },
    { name: "Hotel, Flight, Travels Booking Website", icon: Plane, category: "Travel & Hospitality" },
    { name: "Multi Hotel Management Software", icon: Bed, category: "Travel & Hospitality" },
    { name: "Tour and Travels Website Software", icon: Plane, category: "Travel & Hospitality" },
    { name: "Hotel Management - Room Booking System TSF", icon: Bed, category: "Travel & Hospitality" },

    // Transportation & Logistics
    { name: "Courier Management Software", icon: Truck, category: "Transportation & Logistics" },
    { name: "Car Workshop Management Software", icon: Car, category: "Transportation & Logistics" },
    { name: "Cab Booking Software", icon: Car, category: "Transportation & Logistics" },
    { name: "Taxi Booking Software", icon: Car, category: "Transportation & Logistics" },
    { name: "Bus Booking Software", icon: Bus, category: "Transportation & Logistics" },
    { name: "Fleet Management System TSF", icon: Truck, category: "Transportation & Logistics" },
    { name: "Transport/Logistics Management Software", icon: Truck, category: "Transportation & Logistics" },

    // Technology & IT Services
    { name: "Multipurpose Business CMS Software IT Company", icon: Code, category: "Technology & IT Services" },
    { name: "Broadband Management Software", icon: Wifi, category: "Technology & IT Services" },
    { name: "Architecture and Construction Website CMS Software", icon: Hammer, category: "Technology & IT Services" },
    { name: "Building and Construction Website CMS Software", icon: Hammer, category: "Technology & IT Services" },
    { name: "Multipurpose Website & Business Management CMS Software", icon: Code, category: "Technology & IT Services" },
    { name: "ISP Management Software", icon: Radio, category: "Technology & IT Services" },
    { name: "Mobile Repairing Website", icon: Smartphone, category: "Technology & IT Services" },

    // Food & Restaurant
    { name: "Restaurant Management Software 1", icon: Utensils, category: "Food & Restaurant" },
    { name: "Khana - Multi Restaurant Food Ordering", icon: Utensils, category: "Food & Restaurant" },
    { name: "Multi Branch Restaurant Management Software", icon: Utensils, category: "Food & Restaurant" },
    { name: "WhatsApp Food Ordering Software", icon: MessageCircle, category: "Food & Restaurant" },
    { name: "Restaurant Management Software TSF", icon: Utensils, category: "Food & Restaurant" },

    // Job & Career Services
    { name: "Job Portal Software", icon: Briefcase, category: "Job & Career Services" },
    { name: "Job Portal ODS", icon: Briefcase, category: "Job & Career Services" },
    { name: "Jobs Portal Pro", icon: Briefcase, category: "Job & Career Services" },
    { name: "Jobs Portal Pro 2", icon: Briefcase, category: "Job & Career Services" },
    { name: "Job Portal Silver", icon: Briefcase, category: "Job & Career Services" },

    // Inventory & POS Systems
    { name: "Inventory POS / Account Management Software", icon: Package, category: "Inventory & POS Systems" },
    { name: "Retail Inventory / POS / Billing Software", icon: Receipt, category: "Inventory & POS Systems" },
    { name: "Point Of Sale Advanced (POS) Software", icon: Receipt, category: "Inventory & POS Systems" },
    { name: "GST Inventory Management / Billing Software", icon: Receipt, category: "Inventory & POS Systems" },
    { name: "Basic Inventory – Inventory Management System TSF", icon: Package, category: "Inventory & POS Systems" },

    // Social & Community
    { name: "Crowdfunding Software For NGO", icon: Heart, category: "Social & Community" },
    { name: "Crowdfunding Software For NGO Pro", icon: Heart, category: "Social & Community" },
    { name: "Crowdfunding Software For NGO Pro 2", icon: Heart, category: "Social & Community" },
    { name: "Professional Crowdfunding Software For NGO", icon: Heart, category: "Social & Community" },
    { name: "Matrimonial CMS Website", icon: Heart, category: "Social & Community" },
    { name: "Matrimonial Portal Website", icon: Heart, category: "Social & Community" },
    { name: "Church Management Software", icon: Church, category: "Social & Community" },
    { name: "Crowdfunding System TSF", icon: Heart, category: "Social & Community" },

    // Other Services
    { name: "News Portal Management Software", icon: Newspaper, category: "Other Services" },
    { name: "Bricks Field Management Software", icon: Hammer, category: "Other Services" },
    { name: "Advanced File Management", icon: FileText, category: "Other Services" },
    { name: "Bulk Email Management Software", icon: Mail, category: "Other Services" },
    { name: "Card-Php-Coming-Soon-With-Admin-Panel", icon: Camera, category: "Other Services" },
    { name: "Laundry Management Software", icon: WashingMachine, category: "Other Services" },
    { name: "Game Software", icon: Gamepad2, category: "Other Services" },
    { name: "ChatPion Facebook Chatbot, eCommerce & Social Media Management Tool", icon: MessageCircle, category: "Other Services" },
    { name: "Gain - Salon Booking Software", icon: Scissors, category: "Other Services" },
    { name: "Book My Salon / Salon, Parlour Management Software", icon: Scissors, category: "Other Services" },
    { name: "Event Management Software", icon: Calendar, category: "Other Services" },
    { name: "Online Confess System TSF", icon: MessageCircle, category: "Other Services" },
  ];

  const categories = projects.reduce((acc, project) => {
    const categoryIndex = acc.findIndex(cat => cat.name === project.category);
    if (categoryIndex > -1) {
      acc[categoryIndex].projects.push(project);
    } else {
      acc.push({ name: project.category, projects: [project] });
    }
    return acc;
  }, [] as Category[]);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Knsoft Tech Products</h1>
              <p className="text-white/90 text-lg">
                Comprehensive software products across various industries and business domains.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-8 text-foreground border-b-2 border-[#FF6600] pb-4 inline-block">
                  {category.name}
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                  {category.projects.map((project, index) => {
                    const IconComponent = project.icon;
                    return (
                      <motion.div
                        key={`${project.name}-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="flex items-center p-4 rounded-lg bg-card hover:shadow-lg transition-all duration-300 group border border-border cursor-pointer"
                        onClick={() => {
                          if (project.name === "Hospital Management Software Pro") {
                            setSelectedArticle("hospital");
                          } else if (project.name === "Pathology Lab Management Software") {
                            setSelectedArticle("pathology");
                          } else if (project.name === "Directory Listing Software") {
                            setSelectedArticle("directory");
                          } else if (project.name === "Directory & Listing, City Travel CMS Software") {
                            setSelectedArticle("citytravel");
                          }
                        }}
                      >
                        <div className="flex-shrink-0 mr-4 p-3 rounded-full bg-orange-50 dark:bg-orange-950/20 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent 
                            size={32} 
                            className="text-[#FF6600]" 
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-foreground group-hover:text-[#FF6600] transition-colors duration-300">
                            {project.name}
                          </h3>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Article Modals */}
      <HospitalManagementArticle 
        isOpen={selectedArticle === "hospital"} 
        onClose={() => setSelectedArticle(null)} 
      />
      <PathologyLabArticle 
        isOpen={selectedArticle === "pathology"} 
        onClose={() => setSelectedArticle(null)} 
      />
      <DirectoryListingArticle 
        isOpen={selectedArticle === "directory"} 
        onClose={() => setSelectedArticle(null)} 
      />
      <CityTravelCMSArticle 
        isOpen={selectedArticle === "citytravel"} 
        onClose={() => setSelectedArticle(null)} 
      />
    </div>
  );
}
