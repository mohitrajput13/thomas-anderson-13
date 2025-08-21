import { useContent } from "@/contexts/ContentContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Save, FileText, Image, Type, BarChart3, PenTool, Settings as SettingsIcon, Users, Star, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AdminContentProps {
  activeTab: string;
}

export function AdminContent({ activeTab }: AdminContentProps) {
  const { content, updateField } = useContent();
  const { toast } = useToast();

  const handleFieldUpdate = (pageId: string, fieldId: string, value: string) => {
    updateField(pageId, fieldId, value);
  };

  const handleSave = () => {
    toast({
      title: "Content Saved",
      description: "All changes have been saved successfully.",
    });
  };

  const getFieldIcon = (type: string) => {
    switch (type) {
      case 'text':
        return <Type className="w-4 h-4" />;
      case 'textarea':
        return <FileText className="w-4 h-4" />;
      case 'image':
        return <Image className="w-4 h-4" />;
      default:
        return <Type className="w-4 h-4" />;
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-2">Dashboard</h2>
        <p className="text-muted-foreground">Overview of your website content and analytics</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{content.length}</div>
            <p className="text-xs text-muted-foreground">Active content pages</p>
          </CardContent>
        </Card>
        
        <Card className="card-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content Fields</CardTitle>
            <Type className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {content.reduce((total, page) => total + page.fields.length, 0)}
            </div>
            <p className="text-xs text-muted-foreground">Editable content fields</p>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Today</div>
            <p className="text-xs text-muted-foreground">Recent changes made</p>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
            <div className="h-2 w-2 bg-success rounded-full" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">Live</div>
            <p className="text-xs text-muted-foreground">Site is published</p>
          </CardContent>
        </Card>
      </div>

      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button className="btn-hero">
            <FileText className="w-4 h-4 mr-2" />
            Edit Pages
          </Button>
          <Button variant="outline">
            <Image className="w-4 h-4 mr-2" />
            Upload Media
          </Button>
          <Button variant="outline">
            <SettingsIcon className="w-4 h-4 mr-2" />
            Site Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderHomePageEditor = () => {
    const homePage = content.find(page => page.id === 'home');
    if (!homePage) return null;

    const getSectionFields = (prefix: string) => 
      homePage.fields.filter(field => field.id.startsWith(prefix));

    const getSectionIcon = (section: string) => {
      switch (section) {
        case 'hero': return <Image className="w-5 h-5" />;
        case 'about': return <Users className="w-5 h-5" />;
        case 'services': return <SettingsIcon className="w-5 h-5" />;
        case 'stats': return <BarChart3 className="w-5 h-5" />;
        case 'testimonials': return <MessageSquare className="w-5 h-5" />;
        case 'footer': return <Phone className="w-5 h-5" />;
        default: return <FileText className="w-5 h-5" />;
      }
    };

    const renderField = (field: any) => (
      <div key={field.id} className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          {getFieldIcon(field.type)}
          {field.label}
        </label>
        {field.type === 'textarea' ? (
          <Textarea
            value={field.value}
            onChange={(e) => handleFieldUpdate('home', field.id, e.target.value)}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            className="min-h-24 resize-vertical"
          />
        ) : (
          <Input
            type={field.type === 'image' ? 'url' : 'text'}
            value={field.value}
            onChange={(e) => handleFieldUpdate('home', field.id, e.target.value)}
            placeholder={
              field.type === 'image' 
                ? 'Enter image URL or path' 
                : `Enter ${field.label.toLowerCase()}`
            }
          />
        )}
        
        {field.type === 'image' && field.value && (
          <div className="mt-2">
            <p className="text-xs text-muted-foreground mb-1">Preview:</p>
            <div className="w-full h-16 bg-muted rounded-md flex items-center justify-center overflow-hidden">
              {field.value.startsWith('http') || field.value.startsWith('/') ? (
                <img 
                  src={field.value} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className="hidden text-xs text-muted-foreground">
                Image preview not available
              </div>
            </div>
          </div>
        )}
      </div>
    );

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-primary">Home Page Editor</h3>
            <p className="text-muted-foreground">Edit your homepage content organized by sections</p>
          </div>
          <Badge variant="secondary">{homePage.fields.length} total fields</Badge>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="hero" className="border border-border rounded-lg">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-3">
                {getSectionIcon('hero')}
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Hero Section</h4>
                  <p className="text-sm text-muted-foreground">Main banner, title, subtitle, and background image</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid gap-4 md:grid-cols-2">
                {getSectionFields('hero').map(renderField)}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="about" className="border border-border rounded-lg">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-3">
                {getSectionIcon('about')}
                <div className="text-left">
                  <h4 className="text-lg font-semibold">About Section</h4>
                  <p className="text-sm text-muted-foreground">About heading, description, and image</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid gap-4 md:grid-cols-2">
                {getSectionFields('about').map(renderField)}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="services" className="border border-border rounded-lg">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-3">
                {getSectionIcon('services')}
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Services Section</h4>
                  <p className="text-sm text-muted-foreground">Service offerings with icons, titles, and descriptions</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid gap-4">
                <div className="mb-4">
                  {getSectionFields('services').filter(f => f.id === 'services-heading').map(renderField)}
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {[1, 2, 3].map(num => (
                    <div key={num} className="space-y-4 p-4 border border-border rounded-lg">
                      <h5 className="font-medium text-sm text-muted-foreground">Service {num}</h5>
                      {getSectionFields(`service${num}`).map(renderField)}
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="stats" className="border border-border rounded-lg">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-3">
                {getSectionIcon('stats')}
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Statistics Section</h4>
                  <p className="text-sm text-muted-foreground">Key performance metrics and achievements</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {getSectionFields('stats').map(renderField)}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="testimonials" className="border border-border rounded-lg">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-3">
                {getSectionIcon('testimonials')}
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Testimonials Section</h4>
                  <p className="text-sm text-muted-foreground">Customer testimonials with text, author names, and images</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid gap-4">
                <div className="mb-4">
                  {getSectionFields('testimonials').filter(f => f.id === 'testimonials-heading').map(renderField)}
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {[1, 2, 3].map(num => (
                    <div key={num} className="space-y-4 p-4 border border-border rounded-lg">
                      <h5 className="font-medium text-sm text-muted-foreground">Testimonial {num}</h5>
                      {getSectionFields(`testimonial${num}`).map(renderField)}
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="footer" className="border border-border rounded-lg">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-3">
                {getSectionIcon('footer')}
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Footer Section</h4>
                  <p className="text-sm text-muted-foreground">Contact information, social links, and footer text</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <h5 className="font-medium text-sm text-muted-foreground">Contact Information</h5>
                    {getSectionFields('footer-contact').map(renderField)}
                  </div>
                  <div className="space-y-4">
                    <h5 className="font-medium text-sm text-muted-foreground">Social Media Links</h5>
                    {getSectionFields('footer-social').map(renderField)}
                  </div>
                </div>
                <div className="pt-4 border-t">
                  {getSectionFields('footer-text').map(renderField)}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex gap-4 pt-6 border-t">
          <Button 
            onClick={handleSave}
            className="btn-hero"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Home Page
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.open('/', '_blank')}
          >
            Preview Changes
          </Button>
        </div>
      </div>
    );
  };

  const renderPages = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-2">Pages Management</h2>
        <p className="text-muted-foreground">Edit and manage your website content</p>
      </div>

      <Tabs defaultValue={content[0]?.id || 'home'} className="space-y-6">
        <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-flex">
          {content.map((page) => (
            <TabsTrigger key={page.id} value={page.id} className="text-sm">
              {page.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {content.map((page) => (
          <TabsContent key={page.id} value={page.id} className="space-y-6">
            {page.id === 'home' ? (
              renderHomePageEditor()
            ) : (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <h3 className="text-2xl font-bold text-primary">{page.title}</h3>
                  <Badge variant="secondary">{page.fields.length} fields</Badge>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {page.fields.map((field) => (
                    <Card key={field.id} className="card-elegant">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          {getFieldIcon(field.type)}
                          {field.label}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {field.type === 'textarea' ? (
                          <Textarea
                            value={field.value}
                            onChange={(e) => handleFieldUpdate(page.id, field.id, e.target.value)}
                            placeholder={`Enter ${field.label.toLowerCase()}`}
                            className="min-h-24 resize-vertical"
                          />
                        ) : (
                          <Input
                            type={field.type === 'image' ? 'url' : 'text'}
                            value={field.value}
                            onChange={(e) => handleFieldUpdate(page.id, field.id, e.target.value)}
                            placeholder={
                              field.type === 'image' 
                                ? 'Enter image URL or path' 
                                : `Enter ${field.label.toLowerCase()}`
                            }
                          />
                        )}
                        
                        {field.type === 'image' && field.value && (
                          <div className="mt-3">
                            <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                            <div className="w-full h-20 bg-muted rounded-md flex items-center justify-center overflow-hidden">
                              {field.value.startsWith('http') || field.value.startsWith('/') ? (
                                <img 
                                  src={field.value} 
                                  alt="Preview" 
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.nextElementSibling!.classList.remove('hidden');
                                  }}
                                />
                              ) : null}
                              <div className="hidden text-sm text-muted-foreground">
                                Image preview not available
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex gap-4 pt-6 border-t">
                  <Button 
                    onClick={handleSave}
                    className="btn-hero"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save {page.title}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('/', '_blank')}
                  >
                    Preview Changes
                  </Button>
                </div>
              </>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );

  const renderPlaceholder = (title: string, description: string, icon: React.ReactNode) => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <Card className="card-elegant">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <div className="mb-4 p-3 bg-muted rounded-full">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
          <p className="text-muted-foreground text-center max-w-md">
            This feature is currently under development. Stay tuned for updates!
          </p>
        </CardContent>
      </Card>
    </div>
  );

  switch (activeTab) {
    case 'dashboard':
      return renderDashboard();
    case 'pages':
      return renderPages();
    case 'blog':
      return renderPlaceholder('Blog Management', 'Create and manage blog posts', <PenTool className="w-8 h-8 text-muted-foreground" />);
    case 'media':
      return renderPlaceholder('Media Library', 'Manage images and files', <Image className="w-8 h-8 text-muted-foreground" />);
    case 'settings':
      return renderPlaceholder('Site Settings', 'Configure site preferences', <SettingsIcon className="w-8 h-8 text-muted-foreground" />);
    default:
      return renderDashboard();
  }
}