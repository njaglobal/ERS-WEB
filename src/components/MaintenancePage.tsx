import { Construction, ArrowRight } from 'lucide-react'

export function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-orange-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <img 
            src="public/Pinasafe_logo1.png" 
            alt="PinaSafe Logo" 
            className="h-48 object-contain"
          />
        </div>
        
        <Construction className="w-32 h-32 text-yellow-500 mx-auto mb-6" />
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          We're Building Something Important
        </h2>
        
        <p className="text-gray-600 mb-8">
          PinaSafe is currently under development to better serve the emergency response needs of the Philippines. 
          Our team is working hard to bring you a comprehensive emergency response platform.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-700 mb-2">Emergency Numbers</h3>
            <div className="text-red-600">
              <p>National Emergency: 911</p>
              <p>PNP Hotline: (02) 722-0650</p>
              <p>Fire: (02) 729-5166</p>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center gap-4">
          <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition">
            Preview Site
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
         */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
          <p>&copy; 2024 PinaSafe. All rights reserved.</p>
          <p>Philippines Emergency Response</p>
        </div>
      </div>
    </div>
  )
}