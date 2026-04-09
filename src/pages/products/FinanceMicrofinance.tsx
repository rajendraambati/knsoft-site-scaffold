import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CreditCard, Bitcoin, TrendingUp, Banknote, DollarSign, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const products = [
  { name: "Bank Management Software - All in One Digital Banking System", icon: CreditCard, type: "Standard", description: "Comprehensive digital banking solution with account management, transaction processing, and customer services." },
  { name: "Bitcoin Software / Crypto Currency Trade Software", icon: Bitcoin, type: "Standard", description: "Cryptocurrency trading platform with wallet management, exchange features, and security protocols." },
  { name: "Trade & Invest Software", icon: TrendingUp, type: "Standard", description: "Investment platform with portfolio management, market analysis, and trading automation." },
  { name: "Coin-based Online Trading Software", icon: Bitcoin, type: "Standard", description: "Digital coin trading system with real-time market data and secure transaction processing." },
  { name: "Microfinance Software 1", icon: Banknote, type: "Standard", description: "Microfinance institution management with loan processing, repayment tracking, and client management." },
  { name: "Microfinance Software 2", icon: Banknote, type: "Standard", description: "Enhanced microfinance solution with advanced reporting and risk assessment features." },
  { name: "Loan Management Software NWPro", icon: Banknote, type: "Pro", description: "Professional loan management system with automated workflows and compliance features." },
  { name: "Lotto Lab Software", icon: DollarSign, type: "Standard", description: "Lottery management platform with draw automation, ticket tracking, and prize distribution." },
  { name: "Microfinance - Loan Management System TSF", icon: Banknote, type: "TSF", description: "TSF certified microfinance platform with regulatory compliance and audit trails." },
  { name: "Loans - Lending and Credit Management App for Microfinance Business", icon: Banknote, type: "Standard", description: "Mobile-friendly lending platform for microfinance with credit scoring and mobile payments." }
];

export default function FinanceMicrofinance() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Finance & Microfinance Systems | KNSOFT Technologies"
        description="Financial software solutions including banking systems, microfinance platforms, trading software, and loan management systems for financial institutions."
        keywords="banking software, microfinance system, loan management, trading platform, financial software, cryptocurrency trading"
        canonical="https://knsoft.dev/products/finance-microfinance"
      />
      <Header />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">💳 Finance & Microfinance Systems</h1>
              <p className="text-xl text-white/90 leading-relaxed">Advanced financial software solutions for banking, microfinance, trading, and loan management designed to streamline financial operations and ensure regulatory compliance.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Financial <span className="text-gradient">Solutions</span></h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                  <Card className="h-full card-glow hover:shadow-glow transition-all duration-500 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <product.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full">{product.type}</span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">{product.name}</CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <Link to="/contact">Request Demo <ExternalLink className="ml-1 h-3 w-3" /></Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}