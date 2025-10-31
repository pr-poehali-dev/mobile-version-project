import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const articles = [
    {
      id: 1,
      title: 'Climate change is forcing us to learn how to deal with complexity',
      author: 'Matthijs Bouw',
      category: 'Interview',
      image: 'https://cdn.poehali.dev/files/00509005-4242-443d-acbc-f2af2a267681.png',
      excerpt: 'Floating architecture pioneer discusses sustainable urban design and climate adaptation.',
    },
    {
      id: 2,
      title: 'New Forbo Flooring Systems Highlight',
      category: 'Featured Project',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800',
      excerpt: 'Exploring the latest innovations in sustainable flooring solutions.',
    },
    {
      id: 3,
      title: 'Architectural Excellence in Modern Design',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800',
      excerpt: 'A deep dive into contemporary architectural practices.',
    },
  ];

  const menuItems = [
    { label: 'Content', href: '#content' },
    { label: 'Interviews', href: '#interviews' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">ARCHIDEA</h1>
            <span className="text-[10px] md:text-xs font-light opacity-75">®</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:opacity-75 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground border-primary">
              <nav className="flex flex-col gap-6 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium hover:opacity-75 transition-opacity"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <section className="bg-primary text-primary-foreground py-8 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 text-xs md:text-sm font-light opacity-90">
                  <span>#70</span>
                  <span>|</span>
                  <span className="hidden sm:inline">Bi-Annual Magazine</span>
                  <span className="sm:hidden">Magazine</span>
                </div>
                <h2 className="text-2xl md:text-5xl font-bold leading-tight">
                  CONTENT
                </h2>
                <div className="space-y-3 md:space-y-4 text-xs md:text-sm leading-relaxed opacity-90 max-w-xl">
                  <p>
                    ARCHIDEA is a bi-annual magazine that features profiles of well-known and
                    upcoming architects from all over the world connected to the architect
                    presented. Archidea covers a typical architectural feature that is linked to
                    the architects work.
                  </p>
                  <p>
                    The magazine is published by Forbo Flooring Systems and also contains some
                    of the latest projects in which our floor covering has been installed.
                  </p>
                  <p className="text-[10px] md:text-xs">
                    All rights reserved. You may contact the Archidea publisher should you wish
                    to use part of this magazine. All efforts are made to ensure that the
                    copyright act has been complied with.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="group bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-xs md:text-sm px-3 py-2 md:px-4 md:py-2 h-auto mt-2 md:mt-4"
                >
                  <span>For information visit</span>
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800"
                    alt="Featured Architecture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">MATTHIJS BOUW</h3>
                    <p className="text-xs md:text-sm italic">
                      'Climate change is forcing us to learn how to deal with complexity'
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="content" className="py-10 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">Latest Articles</h2>
              <div className="h-1 w-16 md:w-20 bg-primary rounded"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 md:p-6 space-y-2 md:space-y-3">
                    <div className="text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {article.category}
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    {article.author && (
                      <p className="text-xs md:text-sm font-medium text-muted-foreground">— {article.author}</p>
                    )}
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary font-semibold text-xs md:text-sm group/btn"
                    >
                      Read More
                      <Icon name="ArrowRight" size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-primary">Subscribe to ARCHIDEA</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Get the latest insights from world-renowned architects and discover innovative
                projects from around the globe.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-2 md:pt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 md:px-4 md:py-3 text-sm md:text-base rounded-sm border border-border bg-background w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-sm md:text-base h-auto py-2 md:py-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">ARCHIDEA</h3>
              <p className="text-xs md:text-sm opacity-75 leading-relaxed">
                A bi-annual magazine featuring profiles of architects and innovative projects from
                around the world.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm opacity-75">
                <li><a href="#" className="hover:opacity-100">About Us</a></li>
                <li><a href="#" className="hover:opacity-100">Contact</a></li>
                <li><a href="#" className="hover:opacity-100">Archive</a></li>
                <li><a href="#" className="hover:opacity-100">Subscribe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Follow Us</h4>
              <div className="flex gap-3 md:gap-4">
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Icon name="Facebook" size={18} />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Icon name="Twitter" size={18} />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Icon name="Instagram" size={18} />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Icon name="Linkedin" size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-primary-foreground/20 text-center text-xs md:text-sm opacity-75">
            <p>© 2024 ARCHIDEA. All rights reserved. Published by Forbo Flooring Systems.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;