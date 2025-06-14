import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    NASA Facts
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Bringing you the wonders of space through NASA&apos;s daily astronomical discoveries.
                  </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-foreground">Explore</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="/daily-facts" className="hover:text-foreground transition-colors">Daily Facts</Link></li>
                    <li><Link href="/gallery" className="hover:text-foreground transition-colors">Gallery</Link></li>
                    <li><Link href="/about" className="hover:text-foreground transition-colors">About NASA</Link></li>
                  </ul>
                </div>

                {/* Resources */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-foreground">Resources</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="https://apod.nasa.gov" target="_blank" rel="noopener" className="hover:text-foreground transition-colors">NASA APOD</Link></li>
                    <li><Link href="https://nasa.gov" target="_blank" rel="noopener" className="hover:text-foreground transition-colors">NASA Official</Link></li>
                    <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                  </ul>
                </div>

                {/* Legal */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-foreground">Legal</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  © 2024 NASA Facts. All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
                  Data provided by NASA&apos;s APOD API
                </p>
              </div>
            </div>
          </footer>
  );
}