import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  RocketIcon, 
  PersonIcon, 
  CodeIcon,
  HeartIcon,
} from '@radix-ui/react-icons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TerrabyteDev Documentation',
  description: 'An extensive documentation site for TerraByteDev and SkyFactionsReborn.',
};

export default function HomePage() {
  const mainFeatures = [
    {
      title: 'SkyFactionsReborn',
      description: 'Here to learn about and install SkyFactionsReborn? Click here to get started.',
      icon: <RocketIcon className="h-6 w-6" />,
      href: '/docs/getting-started'
    },
    {
      title: 'About Us',
      description: 'Learn more about the TerraByteDev group and our mission.',
      icon: <PersonIcon className="h-6 w-6" />,
      href: '/docs/about-us'
    },
    {
      title: 'Community & Support',
      description: 'Want to join our community or need help? Click here.',
      icon: <CodeIcon className="h-6 w-6" />,
      href: 'https://discord.gg/SwxXMrFdjp'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Container for Hero and Main Features */}
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background pb-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,transparent,transparent)]"></div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
                <span className="text-primary">TerraByteDev</span> Wiki
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-300 mb-8">
              An extensive documentation site for TerraByteDev and SkyFactionsReborn.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/docs/getting-started">Browse Documentation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs/getting-started/contribution">Contribute</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Features Section */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid md:grid-cols-3 gap-6">
            {mainFeatures.map((feature) => (
              <Link href={feature.href} key={feature.title} className="group">
                <Card className="h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="text-primary">{feature.icon}</div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Contribute to the Project</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              TerraByteDev is open source and open to contributions. Help us maintain and improve the documentation!
            </p>
            <Button variant="outline" className="flex items-center gap-2 mx-auto" asChild>
              <a href="https://github.com/TerraByteDev/TerraByteDocs/" target="_blank" rel="noopener noreferrer">
                <HeartIcon className="h-5 w-5" />
                Contribute
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}