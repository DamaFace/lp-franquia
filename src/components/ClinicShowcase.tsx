import React from 'react';
import { TrendingUp, Users, MapPin } from 'lucide-react';

const ClinicShowcase: React.FC = () => {
  const clinics = [
    {
      name: "Light",
      investment: "79.900",
      revenueYear: "838.800",
      revenueMonth: "69.900",
      image: "materias/DamaLigth.jpg",
      population: "Para profissionais da área ou virada de bandenira"
    },
    {
      name: "Slim",
      investment: "127.900",
      revenueYear: "1.200.000",
      revenueMonth: "100",
      image: "materias/DamaSlim.jpg",
      population: "Para clínicas de até 50m²"
    },
    {
      name: "Premium",
      investment: "249.900",
      revenueYear: "1.900.000",
      revenueMonth: "158.000",
      image: "materias/DamaPremium.jpg",
      population: "Para clínicas de até 150m²"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha sua Franquia DamaFace</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modelos pensados para diferentes cidades e perfis – descubra qual combina e dê o próximo passo rumo a um negócio sólido e lucrativo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clinics.map((clinic, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={clinic.image} 
                  alt={`Clínica ${clinic.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-2xl font-bold">Dama {clinic.name}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4 text-gray-600">
                  <MapPin size={18} className="mr-2 text-[#fa1571]" />
                  <p className="text-sm">{clinic.population}</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-600 mb-1">Investimento inicial</p>
                    <p className="text-2xl font-bold text-[#fa1571]">
                      R$ {clinic.investment}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-1">
                      <TrendingUp size={18} className="mr-2 text-[#fa1571]" />
                      <p className="text-gray-600">Faturamento</p>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                      R$ {clinic.revenueYear}/ano
                    </p>
                    <p className="text-sm text-gray-500">
                      Média de R$ {clinic.revenueMonth} mil/mês
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicShowcase;
