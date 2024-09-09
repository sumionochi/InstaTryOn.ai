import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardDescription, 
    CardContent, 
    CardFooter 
  } from "@/components/ui/card";
import { Badge, Code, CodeXml, Shirt, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
  
  const Solutions = () => {
    return (
      <>
        <h1 className="text-4xl mb-4 relative z-10 md:text-7xl font-extrabold text-center">
            Featured Solutions
        </h1>
        
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 pb-40">
            <div className="relative group w-full">
                <Card className="border pt-4 flex flex-col justify-between h-full transition-shadow duration-1000 ease-in-out hover:shadow-lg relative rounded-lg shadow-sm">
                    <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
                        <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-teal-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:translate-x-[200%]"></div>
                        <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-teal-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:-translate-x-[200%]"></div>
                    </div>

                    <h1 className="absolute whitespace-nowrap top-2 left-2 inline-block px-4 py-2 text-sm font-bold text-transparent bg-gradient-to-r rounded-lg from-teal-500 via-rose-500 to-purple-500 bg-[length:200%_100%] bg-clip-text animate-glow">
                        Built for Indie Designers 
                    </h1>

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
                <Card className="border pt-4 transition-shadow duration-1000 ease-in-out hover:shadow-lg h-full relative rounded-lg shadow-sm">
                    <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
                    <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-purple-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:translate-x-[200%]"></div>
                    <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-purple-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:-translate-x-[200%]"></div>
                    </div>

                    <h1 className="absolute whitespace-nowrap top-2 left-2 inline-block px-4 py-2 text-sm font-bold text-transparent bg-gradient-to-r rounded-lg from-teal-500 via-rose-500 to-purple-500 bg-[length:200%_100%] bg-clip-text animate-glow">
                        Built for Businesses/Enterprise 
                    </h1>

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
            <Card className="border pt-4 transition-shadow duration-1000 ease-in-out hover:shadow-lg h-full relative rounded-lg shadow-sm">
                <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
                <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-blue-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:translate-x-[200%]"></div>
                <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-blue-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:-translate-x-[200%]"></div>
                </div>

                <h1 className="absolute whitespace-nowrap top-2 left-2 inline-block px-4 py-2 text-sm font-bold text-transparent bg-gradient-to-r rounded-lg from-teal-500 via-rose-500 to-purple-500 bg-[length:200%_100%] bg-clip-text animate-glow">
                        Built for Developers 
                    </h1>

                <CardHeader>
                <CardTitle className="flex flex-row items-center gap-2">
                    <CodeXml className="w-5 h-5" />
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

            <div className="rounded-lg transition-shadow duration-1000 ease-in-out bg-white dark:bg-black hover:shadow-lg p-4 flex flex-col justify-center items-center text-center gap-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold">
                        Make the most of your shoppers, at every visit.
                    </h1>
                    <p className="text-sm text-gray-500">
                        Bring your brand into the next generation of eCommerce experience and
                        benefit from strong ROI.
                    </p>
                </div>
                <div className="flex gap-4 justify-between items-start flex-col md:flex-row max-w-5xl mx-auto">
                    <div className="flex rounded-lg cursor-pointer transition-shadow duration-1000 ease-in-out hover:shadow-lg flex-col items-center space-y-2 border p-4">
                    <h2 className="text-4xl font-bold">
                        +9,000<span className="text-2xl"></span>
                    </h2>
                    <p className="text-gray-500 text-sm">Outfits created by shoppers in the Mix&Match Styling Experience.</p>
                    </div>

                    <div className="flex rounded-lg cursor-pointer transition-shadow duration-1000 ease-in-out hover:shadow-lg flex-col items-center space-y-2 border p-4">
                    <h2 className="text-4xl font-bold">+77%</h2>
                    <p className="text-gray-500 text-sm">
                        Uplift in conversion measured for the shoppers engaged with InstaTryOn.
                    </p>
                    </div>

                    <div className="flex rounded-lg cursor-pointer transition-shadow duration-1000 ease-in-out hover:shadow-lg flex-col items-center space-y-2 border p-4">
                    <h2 className="text-4xl font-bold">+22%</h2>
                    <p className="text-gray-500 text-sm">
                        Uplift in the average order value with Try On collections.
                    </p>
                    </div>
                </div>
                <div className="text-center z-10">
                <Button className="relative h-12 px-4 rounded-lg border text-md transition-all">
                    <span className="relative z-10 font-bold text-sm md:text-base">START FOR FREE</span>
                </Button>
                <p className="md:mt-2 text-[12px] md:text-sm text-gray-400">
                    Try for free. No credit card required.
                </p>
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default Solutions;
  