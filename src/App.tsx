import { useState } from 'react'
import { Shield, Phone, AlertTriangle, Heart, Users, MapPin } from 'lucide-react'
import { MaintenancePage } from './components/MaintenancePage'

function App() {
  const [showMaintenance] = useState(true)

  if (showMaintenance) {
    return <MaintenancePage />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-8">
              <Shield size={40} className="text-yellow-300" />
              <h1 className="text-4xl font-bold">PinaSafe</h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Philippines Emergency Response</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">Your trusted partner in emergency preparedness and response across the Philippines</p>
            <div className="flex gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg transition">
                Emergency Hotline
              </button>
              <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <Phone className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Emergency Response</h3>
            <p className="text-gray-600">Immediate assistance available round-the-clock for any emergency situation</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <AlertTriangle className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Disaster Preparedness</h3>
            <p className="text-gray-600">Resources and guidelines for disaster preparation and management</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <Heart className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Medical Emergency</h3>
            <p className="text-gray-600">Quick access to medical services and first aid information</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">People Assisted</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">81</div>
              <div className="text-blue-100">Provinces Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gray-100 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Help?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Join our network of volunteers and help make the Philippines a safer place for everyone</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition">
            Volunteer Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield size={24} className="text-yellow-500" />
                <span className="font-bold text-white">PinaSafe</span>
              </div>
              <p className="text-sm">Your trusted partner in emergency preparedness and response across the Philippines</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Emergency Numbers</h3>
              <ul className="space-y-2 text-sm">
                <li>National Emergency: 911</li>
                <li>Police: (02) 722-0650</li>
                <li>Fire: (02) 729-5166</li>
                <li>Ambulance: (02) 527-0000</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Services</li>
                <li>Volunteer</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <Users className="w-5 h-5" />
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; 2024 PinaSafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App