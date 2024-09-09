import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardDescription, 
    CardContent, 
    CardFooter 
  } from "@/components/ui/card";
import { Code, Shirt, ShoppingBag } from "lucide-react";
  
  const Solutions = () => {
    return (
      <>
        <div>
            The only 
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 pb-40">
        <div className="relative group w-full">
            <Card className="border flex flex-col justify-between h-full transition-shadow duration-1000 ease-in-out hover:shadow-lg relative rounded-lg shadow-sm">
                <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
                <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-teal-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:translate-x-[200%]"></div>
                <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-teal-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:-translate-x-[200%]"></div>
                </div>

                <CardHeader>
                <CardTitle className="flex flex-row items-center gap-2">
                    <Shirt className="w-5 h-5" />
                    <p className="text-xl font-bold">Instant Virtual Try On</p>
                </CardTitle>
                <CardDescription>
                    Build a personalized brand for your clothing line or Mix&Match the styles for yourself on models with diverse body types, including your own.
                </CardDescription>
                </CardHeader>

                <CardContent className="grid grid-cols-3 gap-2 p-6">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div key={index} className="w-24 h-24 border rounded-md"></div>
                ))}
                </CardContent>
                </Card>
        </div>

        <div className="relative group w-full">
            <Card className="border transition-shadow duration-1000 ease-in-out hover:shadow-lg h-full relative rounded-lg shadow-sm">
                <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
                <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-purple-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:translate-x-[200%]"></div>
                <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-purple-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:-translate-x-[200%]"></div>
                </div>

                <CardHeader>
                <CardTitle className="flex flex-row items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    <p className="text-xl font-bold">Shopping Closet - for your customers</p>
                </CardTitle>
                <CardDescription>
                    Engage your shoppers to better project into your collection and the garments with Virtual Try On Shopping on any leading CMS (Shopify, WordPress & more) or your website.
                </CardDescription>
                </CardHeader>

                <CardContent className="grid grid-cols-3 gap-2 p-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div key={index} className="w-24 h-24 border rounded-md"></div>
            ))}
            </CardContent>
            </Card>
        </div>

        <div className="relative group w-full">
        <Card className="border transition-shadow duration-1000 ease-in-out hover:shadow-lg h-full relative rounded-lg shadow-sm">
            <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
            <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-blue-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:translate-x-[200%]"></div>
            <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-blue-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:-translate-x-[200%]"></div>
            </div>

            <CardHeader>
            <CardTitle className="flex flex-row items-center gap-2">
                <Code className="w-5 h-5" />
                <p className="text-xl font-bold">API access for developers</p>
            </CardTitle>
            <CardDescription>
                Build your own try-on experience with our powerful APIs. Integrate customizable virtual try-on features into your app, chatbot, or even website, providing interactive experiences for your users.
            </CardDescription>
            </CardHeader>

            <CardContent className="grid grid-cols-3 gap-2 p-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div key={index} className="w-24 h-24 border rounded-md"></div>
            ))}
            </CardContent>
        </Card>
        </div>
        </div>
      </>
    );
  };
  
  export default Solutions;
  