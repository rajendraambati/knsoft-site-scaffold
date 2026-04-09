"use client";

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, Mail, Phone, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const popularLinks = [
  { name: "Our Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="min-h-[80vh] flex items-center justify-center py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              {/* 404 Visual */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <div className="relative inline-block">
                  <div className="text-[150px] md:text-[200px] font-bold text-gradient leading-none">
                    404
                  </div>
                  <motion.div
                    className="absolute -top-4 -right-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FileQuestion className="h-12 w-12 text-primary" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Error Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Page Not Found
                </h1>
                <p className="text-lg text-muted-foreground mb-2">
                  The page you're looking for doesn't exist or has been moved.
                </p>
                <p className="text-sm text-muted-foreground">
                  Requested: <code className="bg-muted px-2 py-1 rounded text-foreground">{location.pathname}</code>
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Button asChild size="lg" className="btn-gradient">
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Go to Homepage
                  </Link>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleGoBack}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Go Back
                </Button>
              </motion.div>

              {/* Popular Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Popular Pages
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {popularLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="px-4 py-2 rounded-full bg-muted hover:bg-muted/80 text-foreground text-sm font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Contact Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-muted/50 rounded-2xl p-6 border border-border/50"
              >
                <h3 className="font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  Need Help Finding Something?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our team is here to help you find what you're looking for.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@knsofttech.com"
                    className="flex items-center justify-center gap-2 text-primary hover:underline font-medium"
                  >
                    <Mail className="h-4 w-4" />
                    info@knsofttech.com
                  </a>
                  <a
                    href="tel:+914040123456"
                    className="flex items-center justify-center gap-2 text-primary hover:underline font-medium"
                  >
                    <Phone className="h-4 w-4" />
                    +91 40 4012 3456
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
