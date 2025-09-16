import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Baby, Calendar, Phone, Mail } from 'lucide-react';

export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    email: '',
    phone: '',
    startDate: '',
    program: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enrollment form submitted:', formData);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <Baby className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Enroll Your Child</h2>
          <p className="text-gray-600">Start your child's journey with us today</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-blue-600">Enrollment Application</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="childName">Child's Full Name</Label>
                  <Input
                    id="childName"
                    value={formData.childName}
                    onChange={(e) => setFormData({...formData, childName: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="childAge">Child's Age</Label>
                  <Select onValueChange={(value) => setFormData({...formData, childAge: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6months-1year">6 months - 1 year</SelectItem>
                      <SelectItem value="1-2years">1 - 2 years</SelectItem>
                      <SelectItem value="2-3years">2 - 3 years</SelectItem>
                      <SelectItem value="3-4years">3 - 4 years</SelectItem>
                      <SelectItem value="4-5years">4 - 5 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="parentName">Parent/Guardian Name</Label>
                  <Input
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="program">Program</Label>
                  <Select onValueChange={(value) => setFormData({...formData, program: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time Care</SelectItem>
                      <SelectItem value="part-time">Part-time Care</SelectItem>
                      <SelectItem value="preschool">Preschool Program</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="startDate">Preferred Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Any special requirements or questions..."
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}