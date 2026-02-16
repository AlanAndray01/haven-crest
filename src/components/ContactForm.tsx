import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  fullName: string;
  countryCode: string;
  mobileNumber: string;
  email: string;
  iWantTo: string;
  propertyCategory: string;
  propertyType: string;
  preferredArea: string;
  budget: string;
  preferredLocation: string;
  customBudget: string;
}

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    countryCode: '+971',
    mobileNumber: '',
    email: '',
    iWantTo: '',
    propertyCategory: '',
    propertyType: '',
    preferredArea: '',
    budget: '',
    preferredLocation: '',
    customBudget: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const apiKey = import.meta.env.VITE_API_KEY || 'albaqa_sk_live_xK7mN3pQ9rT2vW5yZ8bC4dF6hJ1kL0nM';

      // Remove empty string fields so they don't cause validation issues
      const cleanedData = Object.fromEntries(
        Object.entries(formData).filter(([_, v]) => v !== '')
      );

      const response = await fetch(`${apiUrl}/forms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': apiKey,
        },
        body: JSON.stringify(cleanedData),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Success!',
          description: 'Your enquiry has been submitted successfully.',
        });

        // Reset form
        setFormData({
          fullName: '',
          countryCode: '+971',
          mobileNumber: '',
          email: '',
          iWantTo: '',
          propertyCategory: '',
          propertyType: '',
          preferredArea: '',
          budget: '',
          preferredLocation: '',
          customBudget: '',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit form. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-black/70 backdrop-blur-sm rounded-2xl border border-white/10">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold italic text-white">Get Exclusive Access</h2>
          <p className="text-white/60 text-sm mt-1">Connect with our luxury property specialists</p>
        </div>
        <p className="text-white/60 text-sm">100% Confidential · No spam · Ajman-based agents</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Full Name, Country Code + Mobile, Email, I want to */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="fullName" className="sr-only">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="bg-black/50 border-white/20 text-white placeholder:text-white/40 rounded-lg h-12"
            />
          </div>

          <div className="flex gap-0">
            <Select
              value={formData.countryCode}
              onValueChange={(value) => handleSelectChange('countryCode', value)}
            >
              <SelectTrigger className="w-[100px] bg-black/50 border-white/20 text-white rounded-lg rounded-r-none h-12">
                <SelectValue placeholder="+971" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+971">🇦🇪 +971</SelectItem>
                <SelectItem value="+966">🇸🇦 +966</SelectItem>
                <SelectItem value="+968">🇴🇲 +968</SelectItem>
                <SelectItem value="+974">🇶🇦 +974</SelectItem>
                <SelectItem value="+973">🇧🇭 +973</SelectItem>
                <SelectItem value="+965">🇰🇼 +965</SelectItem>
                <SelectItem value="+91">🇮🇳 +91</SelectItem>
                <SelectItem value="+44">🇬🇧 +44</SelectItem>
                <SelectItem value="+1">🇺🇸 +1</SelectItem>
              </SelectContent>
            </Select>
            <Input
              id="mobileNumber"
              name="mobileNumber"
              type="tel"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              placeholder="Mobile Number"
              className="bg-black/50 border-white/20 text-white placeholder:text-white/40 rounded-lg rounded-l-none border-l-0 h-12 flex-1"
            />
          </div>

          <div>
            <Label htmlFor="email" className="sr-only">Gmail Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="bg-black/50 border-white/20 text-white placeholder:text-white/40 rounded-lg h-12"
            />
          </div>

          <div>
            <Label htmlFor="iWantTo" className="sr-only">I want to</Label>
            <Select
              value={formData.iWantTo}
              onValueChange={(value) => handleSelectChange('iWantTo', value)}
            >
              <SelectTrigger className="bg-black/50 border-white/20 text-white rounded-lg h-12">
                <SelectValue placeholder="I want to" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="invest">Invest</SelectItem>
                <SelectItem value="sell">Sell</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Row 2: Property Category, Property Type, Preferred Area, Budget */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="propertyCategory" className="sr-only">Property Category</Label>
            <Select
              value={formData.propertyCategory}
              onValueChange={(value) => handleSelectChange('propertyCategory', value)}
            >
              <SelectTrigger className="bg-black/50 border-white/20 text-white rounded-lg h-12">
                <SelectValue placeholder="Property Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="off-plan">Off-Plan</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="propertyType" className="sr-only">Select Property Type</Label>
            <Select
              value={formData.propertyType}
              onValueChange={(value) => handleSelectChange('propertyType', value)}
            >
              <SelectTrigger className="bg-black/50 border-white/20 text-white rounded-lg h-12">
                <SelectValue placeholder="Select Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
                <SelectItem value="duplex">Duplex</SelectItem>
                <SelectItem value="land">Land</SelectItem>
                <SelectItem value="office">Office</SelectItem>
                <SelectItem value="shop">Shop</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="preferredArea" className="sr-only">Preferred Area</Label>
            <Select
              value={formData.preferredArea}
              onValueChange={(value) => handleSelectChange('preferredArea', value)}
            >
              <SelectTrigger className="bg-black/50 border-white/20 text-white rounded-lg h-12">
                <SelectValue placeholder="Preferred Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="al-rashidiya">Al Rashidiya</SelectItem>
                <SelectItem value="al-nuaimiya">Al Nuaimiya</SelectItem>
                <SelectItem value="al-bustan">Al Bustan</SelectItem>
                <SelectItem value="al-rawda">Al Rawda</SelectItem>
                <SelectItem value="al-jurf">Al Jurf</SelectItem>
                <SelectItem value="emirates-city">Emirates City</SelectItem>
                <SelectItem value="garden-city">Garden City</SelectItem>
                <SelectItem value="al-zahia">Al Zahia</SelectItem>
                <SelectItem value="corniche">Corniche</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="budget" className="sr-only">Budget</Label>
            <Select
              value={formData.budget}
              onValueChange={(value) => handleSelectChange('budget', value)}
            >
              <SelectTrigger className="bg-black/50 border-white/20 text-white rounded-lg h-12">
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-500k">Under 500,000 AED</SelectItem>
                <SelectItem value="500k-1m">500,000 - 1,000,000 AED</SelectItem>
                <SelectItem value="1m-2m">1,000,000 - 2,000,000 AED</SelectItem>
                <SelectItem value="2m-5m">2,000,000 - 5,000,000 AED</SelectItem>
                <SelectItem value="5m-10m">5,000,000 - 10,000,000 AED</SelectItem>
                <SelectItem value="above-10m">Above 10,000,000 AED</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Row 3: Preferred Location, Custom Budget */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="preferredLocation" className="sr-only">Preferred Location</Label>
            <Input
              id="preferredLocation"
              name="preferredLocation"
              type="text"
              value={formData.preferredLocation}
              onChange={handleChange}
              placeholder="Enter Preferred Location"
              className="bg-black/50 border-white/20 text-white placeholder:text-white/40 rounded-lg h-12"
            />
          </div>

          <div>
            <Label htmlFor="customBudget" className="sr-only">Custom Budget</Label>
            <Input
              id="customBudget"
              name="customBudget"
              type="text"
              value={formData.customBudget}
              onChange={handleChange}
              placeholder="Enter Custom Budget (AED)"
              className="bg-black/50 border-white/20 text-white placeholder:text-white/40 rounded-lg h-12"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-2">
          <Button
            type="submit"
            className="px-16 py-6 text-lg rounded-full bg-[#C4A265] hover:bg-[#B08D4C] text-white font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Enquire Now'}
          </Button>
        </div>
      </form>
    </div>
  );
}