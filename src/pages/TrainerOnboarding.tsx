import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";

const TrainerOnboarding = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-secondary/30 p-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/role-selection")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl">Trainer Profile Setup</CardTitle>
            <CardDescription>Share your expertise and teaching experience</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="professional-title">Professional Title *</Label>
                <Input
                  id="professional-title"
                  placeholder="e.g., Senior Software Engineer, Marketing Specialist"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expertise">Primary Area of Expertise *</Label>
                <Select required>
                  <SelectTrigger id="expertise">
                    <SelectValue placeholder="Select your expertise" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology & Programming</SelectItem>
                    <SelectItem value="business">Business & Management</SelectItem>
                    <SelectItem value="design">Design & Creative</SelectItem>
                    <SelectItem value="marketing">Marketing & Sales</SelectItem>
                    <SelectItem value="health">Health & Wellness</SelectItem>
                    <SelectItem value="language">Language & Communication</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Select required>
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="teaching-experience">Teaching Experience *</Label>
                <Select required>
                  <SelectTrigger id="teaching-experience">
                    <SelectValue placeholder="Select teaching experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Just starting out</SelectItem>
                    <SelectItem value="some">Some experience (1-2 years)</SelectItem>
                    <SelectItem value="experienced">Experienced (3-5 years)</SelectItem>
                    <SelectItem value="expert">Expert (5+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="certifications">Certifications (if any)</Label>
                <Input
                  id="certifications"
                  placeholder="List your relevant certifications"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Professional Bio *</Label>
                <Textarea
                  id="bio"
                  placeholder="Share your background, teaching philosophy, and what makes you unique..."
                  className="min-h-32"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Weekly Availability *</Label>
                <Select required>
                  <SelectTrigger id="availability">
                    <SelectValue placeholder="Select your availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 hours/week</SelectItem>
                    <SelectItem value="6-10">6-10 hours/week</SelectItem>
                    <SelectItem value="11-20">11-20 hours/week</SelectItem>
                    <SelectItem value="20+">20+ hours/week</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                {isLoading ? "Setting up profile..." : "Complete Setup"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrainerOnboarding;
