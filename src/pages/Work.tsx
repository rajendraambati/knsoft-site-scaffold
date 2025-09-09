import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HospitalManagementArticle } from "@/components/articles/HospitalManagementArticle";
import { PathologyLabArticle } from "@/components/articles/PathologyLabArticle";
import { useState } from "react";
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
  featured?: boolean;
}

export default function Work() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  
  const projects: Project[] = [
    { name: "Hospital Management Software Pro", icon: Hospital, featured: true },
    { name: "Pathology Lab Management Software", icon: TestTube, featured: true },
    { name: "Directory Listing Software", icon: Building },
    { name: "Buy Sell Classified Ads CMS Software", icon: ShoppingCart, featured: true },
    { name: "Buy Sell Classified Ads CMS Software 2", icon: ShoppingCart },
    { name: "Directory & Listing, City Travel CMS Software", icon: MapPin },
    { name: "Directory Listing Software 2", icon: Building },
    { name: "Directory & Listing CMS Software (Property)", icon: Home },
    { name: "Crowdfunding Software For NGO", icon: Heart, featured: true },
    { name: "Crowdfunding Software For NGO Pro", icon: Heart },
    { name: "Crowdfunding Software For NGO Pro 2", icon: Heart },
    { name: "Professional Crowdfunding Software For NGO", icon: Heart },
    { name: "Portfolio Management Software", icon: Briefcase },
    { name: "Broadband Management Software", icon: Wifi },
    { name: "Multipurpose Business CMS Software IT Company", icon: Code, featured: true },
    { name: "Architecture and Construction Website CMS Software", icon: Hammer },
    { name: "Building and Construction Website CMS Software", icon: Hammer },
    { name: "Multipurpose Website & Business Management CMS Software", icon: Code },
    { name: "Grocery Multi Vendor E-commerce Website Pro 6 Am", icon: Store },
    { name: "Grocery Multi Vendor E-commerce Website Pro 2 Nest", icon: Store },
    { name: "Multi Vendor E-Commerce Website", icon: ShoppingCart, featured: true },
    { name: "Multivendor E-Commerce CMS Website", icon: ShoppingCart },
    { name: "Single Vendor E-Commerce Website Pro", icon: ShoppingBag },
    { name: "Online Learning and Examination Management Software", icon: GraduationCap, featured: true },
    { name: "Library Management Software", icon: BookOpen },
    { name: "Online Examination, Mock Test & Quiz Management Software", icon: FileText },
    { name: "Project Management, Finance, CRM Tool, Task Management Software", icon: Users, featured: true },
    { name: "MLM Software", icon: Users },
    { name: "Job Portal Software", icon: Briefcase, featured: true },
    { name: "Super Shop E-Commerce Website", icon: Store },
    { name: "Courier Management Software", icon: Truck },
    { name: "Car Workshop Management Software", icon: Car },
    { name: "Hotel Booking Software", icon: Bed, featured: true },
    { name: "Inventory POS / Account Management Software", icon: Package },
    { name: "Pharmacy Management Software", icon: Pill, featured: true },
    { name: "Pro School Management Software", icon: School },
    { name: "News Portal Management Software", icon: Newspaper },
    { name: "Bricks Field Management Software", icon: Hammer },
    { name: "Library Management Software 2", icon: BookOpen },
    { name: "Hospital Management Software 3", icon: Hospital },
    { name: "Church Management Software", icon: Church },
    { name: "Retail Inventory / POS / Billing Software", icon: Receipt },
    { name: "HR/Payroll Management Software", icon: Users, featured: true },
    { name: "E-Commerce Website Single Vendor Garments", icon: Shirt },
    { name: "ISP Management Software", icon: Radio },
    { name: "School Management Software 1", icon: School },
    { name: "Clinic Management Software", icon: Stethoscope },
    { name: "Diagnostic Lab Management Software", icon: TestTube },
    { name: "Microfinance Software 1", icon: Banknote },
    { name: "Microfinance Software 2", icon: Banknote },
    { name: "Restaurant Management Software 1", icon: Utensils, featured: true },
    { name: "Bank Management Software - All in One Digital Banking System", icon: CreditCard, featured: true },
    { name: "Deals Management CRM Software", icon: DollarSign },
    { name: "Advanced File Management", icon: FileText },
    { name: "Academy Learning Management System", icon: GraduationCap },
    { name: "Zairito - Laravel E-Commerce System Single Vendor", icon: ShoppingBag },
    { name: "Royal Laravel Ecommerce System with Physical and Digital Product Selling", icon: ShoppingCart },
    { name: "Single Vendor E-Commerce Website 4", icon: ShoppingBag },
    { name: "Business ERP Solution Product Shop Company Management", icon: Calculator },
    { name: "Bulk Email Management Software", icon: Mail },
    { name: "Matrimonial CMS Website", icon: Heart },
    { name: "Matrimonial Portal Website", icon: Heart },
    { name: "Hotel, Flight, Travels Booking Website", icon: Plane, featured: true },
    { name: "Card-Php-Coming-Soon-With-Admin-Panel", icon: Camera },
    { name: "Laundry Management Software", icon: WashingMachine },
    { name: "Hotel Management Software Pro", icon: Bed },
    { name: "Game Software", icon: Gamepad2 },
    { name: "Hospital Management Software 2", icon: Hospital },
    { name: "ERP / Account Management Software", icon: Calculator },
    { name: "Job Portal ODS", icon: Briefcase },
    { name: "Mobile Repairing Website", icon: Smartphone },
    { name: "ODASS E-Commerce Website", icon: ShoppingBag },
    { name: "Library Management Software Pro", icon: BookOpen },
    { name: "Point Of Sale Advanced (POS) Software", icon: Receipt },
    { name: "Jobs Portal Pro", icon: Briefcase },
    { name: "Pharmacy Management Software Pro GD", icon: Pill },
    { name: "E-Commerce 1032", icon: ShoppingCart },
    { name: "E-Commerce 1033", icon: ShoppingCart },
    { name: "CRM Software Rise", icon: Users },
    { name: "Jobs Portal Pro 2", icon: Briefcase },
    { name: "Lotto Lab Software", icon: DollarSign },
    { name: "Bitcoin Software / Crypto Currency Trade Software", icon: Bitcoin, featured: true },
    { name: "Trade & Invest Software", icon: TrendingUp },
    { name: "Coin-based Online Trading Software", icon: Bitcoin },
    { name: "GST Inventory Management / Billing Software", icon: Receipt },
    { name: "Khana - Multi Restaurant Food Ordering", icon: Utensils },
    { name: "ChatPion Facebook Chatbot, eCommerce & Social Media Management Tool", icon: MessageCircle },
    { name: "Multi Branch Restaurant Management Software", icon: Utensils },
    { name: "Gain - Salon Booking Software", icon: Scissors },
    { name: "Book My Salon / Salon, Parlour Management Software", icon: Scissors },
    { name: "Bus Booking Software", icon: Bus },
    { name: "Multi Hotel Management Software", icon: Bed },
    { name: "Cab Booking Software", icon: Car },
    { name: "Clinic Management Software Pro", icon: Stethoscope },
    { name: "Hotel Management Software Pro 2", icon: Bed },
    { name: "Taxi Booking Software", icon: Car },
    { name: "Loan Management Software NWPro", icon: Banknote },
    { name: "E-Commerce System TSF", icon: ShoppingCart },
    { name: "Crowdfunding System TSF", icon: Heart },
    { name: "Online Confess System TSF", icon: MessageCircle },
    { name: "College Management System TSF", icon: GraduationCap },
    { name: "CRM Pro - Customer Relationship Management System TSF", icon: Users },
    { name: "Basic Inventory – Inventory Management System TSF", icon: Package },
    { name: "Online Election System TSF", icon: UserCheck },
    { name: "Online Exam System TSF", icon: FileText },
    { name: "Fleet Management System TSF", icon: Truck },
    { name: "Hospital Management System TSF", icon: Hospital },
    { name: "Microfinance - Loan Management System TSF", icon: Banknote },
    { name: "The Pharma - Pharmacy Management System TSF", icon: Pill },
    { name: "Tenant - Room Booking System TSF", icon: Home },
    { name: "Hotel Management - Room Booking System TSF", icon: Bed },
    { name: "Business ERP Solution Product Shop Company Management (Retail POS)", icon: Receipt },
    { name: "Event Management Software", icon: Calendar, featured: true },
    { name: "Loans - Lending and Credit Management App for Microfinance Business", icon: Banknote },
    { name: "WhatsApp Food Ordering Software", icon: MessageCircle },
    { name: "Zaika Single Vendor E-Commerce", icon: ShoppingBag },
    { name: "Tour and Travels Website Software", icon: Plane },
    { name: "Job Portal Silver", icon: Briefcase },
    { name: "Transport/Logistics Management Software", icon: Truck },
    { name: "Online Exam System", icon: FileText },
    { name: "Restaurant Management Software TSF", icon: Utensils },
  ];

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Software Solutions & Projects</h1>
              <p className="text-white/90 text-lg">
                Comprehensive software solutions across various industries and business domains.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={`${project.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.02 }}
                    className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    onClick={() => {
                      if (project.name === "Hospital Management Software Pro") {
                        setSelectedArticle("hospital");
                      } else if (project.name === "Pathology Lab Management Software") {
                        setSelectedArticle("pathology");
                      }
                    }}
                  >
                    <div className="mb-4 p-4 rounded-full bg-orange-50 dark:bg-orange-950/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent 
                        size={48} 
                        className="text-[#FF6600]" 
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className={`text-sm font-medium text-center leading-tight ${
                      project.featured 
                        ? 'text-[#FF6600] font-bold' 
                        : 'text-[#333333] dark:text-gray-300'
                    }`}>
                      {project.name}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
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
    </div>
  );
}