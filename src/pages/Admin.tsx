import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useContent } from "@/contexts/ContentContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Save, Settings, FileText, Image, Type } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { content, updateField } = useContent();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState(content[0]?.id || 'home');

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

  return (
    <>
      <Helmet>
        <title>Admin Panel - Content Management</title>
        <meta name="description" content="Admin panel for managing website content" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-muted">
        {/* Header */}
        <header className="bg-background border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Settings className="w-8 h-8 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
                  <p className="text-muted-foreground">Manage your website content</p>
                </div>
              </div>
              <Button onClick={handleSave} className="btn-gold">
                <Save className="w-4 h-4 mr-2" />
                Save All Changes
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            {/* Page Tabs */}
            <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-flex">
              {content.map((page) => (
                <TabsTrigger key={page.id} value={page.id} className="text-sm">
                  {page.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Page Content Editors */}
            {content.map((page) => (
              <TabsContent key={page.id} value={page.id} className="space-y-6">
                <div className="flex items-center gap-2 mb-6">
                  <h2 className="text-3xl font-bold text-primary">{page.title}</h2>
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

                {/* Quick Actions */}
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
              </TabsContent>
            ))}
          </Tabs>
        </main>
      </div>
    </>
  );
};

export default Admin;