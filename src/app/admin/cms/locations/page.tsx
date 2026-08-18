'use client';

import { useState, useEffect } from 'react';
import { MapPin, Save, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import { LocationData } from '@/types';

export default function AdminLocationsCmsPage() {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLoc, setSelectedLoc] = useState<LocationData | null>(null);
  const [success, setSuccess] = useState(false);

  const fetchLocations = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/locations');
      const data = await res.json();
      if (data.success) {
        setLocations(data.data || []);
        if (data.data.length > 0 && !selectedLoc) {
          setSelectedLoc(data.data[0]);
        }
      }
    } catch (err) {
      console.error('Error fetching locations:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleAddNew = () => {
    const newLoc: LocationData = {
      id: `loc-${Date.now()}`,
      slug: `new-center-${Date.now().toString().slice(-4)}`,
      name: 'New Commercial Center',
      city: 'Gurugram',
      area: 'Cyber City Corridor',
      workspaceAddress: 'Commercial Tower, Gurgaon, Haryana 122002',
      corporateAddress: 'Institutional Area, Sector 32, Gurugram',
      photos: ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80'],
      mapEmbedUrl: 'https://maps.google.com',
      googleMapsUrl: 'https://maps.google.com',
      workspaceTypes: ['private-office', 'workstations', 'coworking', 'meeting-rooms'],
      amenities: ['High-Speed Fiber Internet', '24/7 Access', 'Cafeteria', 'Meeting Rooms'],
      status: 'Operational',
      published: true,
      order: locations.length + 1,
    };
    setSelectedLoc(newLoc);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLoc) return;

    try {
      const res = await fetch('/api/admin/locations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedLoc),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        fetchLocations();
      }
    } catch (err) {
      console.error('Failed to save location:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="bg-white border border-gray-200 shadow-xs p-6 rounded-2xl border border-gray-200 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-gray-900 font-sans">Centers & Locations CMS</h1>
          <p className="text-xs text-gray-400 mt-1">
            Create and edit operational centers with distinct workspace vs corporate addresses.
          </p>
        </div>
        <button
          onClick={handleAddNew}
          className="py-2.5 px-4 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Center</span>
        </button>
      </div>

      {success && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded-xl flex items-center gap-2.5 text-xs text-emerald-400 font-bold animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>Location saved successfully!</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left List */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase text-gray-400 block px-1">Centers</span>
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLoc(loc)}
              className={`w-full p-4 rounded-xl text-left border transition-all ${
                selectedLoc?.id === loc.id
                  ? 'bg-gray-50 border border-gray-200 border-[#C91D24] text-white shadow-md'
                  : 'bg-white border border-gray-200 shadow-xs border-gray-200 text-gray-400 hover:text-white'
              }`}
            >
              <div className="font-bold text-sm text-gray-900">{loc.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{loc.city} • {loc.status}</div>
            </button>
          ))}
        </div>

        {/* Right Editor */}
        {selectedLoc && (
          <div className="lg:col-span-2 bg-white border border-gray-200 shadow-xs p-6 sm:p-8 rounded-2xl border border-gray-200">
            <form onSubmit={handleSave} className="space-y-4">
              <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2">
                Edit: {selectedLoc.name}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Center Name</label>
                  <input
                    type="text"
                    required
                    value={selectedLoc.name}
                    onChange={(e) => setSelectedLoc({ ...selectedLoc, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">URL Slug</label>
                  <input
                    type="text"
                    required
                    value={selectedLoc.slug}
                    onChange={(e) => setSelectedLoc({ ...selectedLoc, slug: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={selectedLoc.city}
                    onChange={(e) => setSelectedLoc({ ...selectedLoc, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Status</label>
                  <select
                    value={selectedLoc.status}
                    onChange={(e) => setSelectedLoc({ ...selectedLoc, status: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
                  >
                    <option value="Operational">Operational</option>
                    <option value="Upcoming (Q3 2026)">Upcoming</option>
                    <option value="Fully Booked">Fully Booked</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                  Workspace Operational Address *
                </label>
                <input
                  type="text"
                  required
                  value={selectedLoc.workspaceAddress}
                  onChange={(e) => setSelectedLoc({ ...selectedLoc, workspaceAddress: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                  Corporate / Compliance Address (Sector 32)
                </label>
                <input
                  type="text"
                  value={selectedLoc.corporateAddress || ''}
                  onChange={(e) => setSelectedLoc({ ...selectedLoc, corporateAddress: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                  Google Maps URL
                </label>
                <input
                  type="url"
                  value={selectedLoc.googleMapsUrl}
                  onChange={(e) => setSelectedLoc({ ...selectedLoc, googleMapsUrl: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="py-3 px-6 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold shadow-md flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Location</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
