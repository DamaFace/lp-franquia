import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { s } from 'framer-motion/client';


const businessModels = [
  {
    name: "Dama Light",
    investment: "R$ 79.900",
    roi: "6-12 meses",
    features: [
      "Espaço compacto (30-50m²)",
      "Operação enxuta",
      "Inaugure em 30 dias",
      "Suporte completo (marketing, vendas, compras, técnico, tec)"
    ],
    recommended: false
  },
  {
    name: "Dama Slim",
    investment: "R$ 127.900",
    roi: "8-14 meses",
    features: [
      "Espaço médio (50-70m²)",
      "Operação enxuta",
      "Inaugure em até 90 dias",
      "Suporte completo (marketing, vendas, compras, técnico, tec, implantação)"
    ],
    recommended: true
  },
  {
    name: "Dama Premium",
    investment: "R$ 249.900",
    roi: "18-24 meses",
    features: [
      "Espaço luxuoso (70-150m²)",
      "Equipe especializada",
      "Equipamentos exclusivos",
      "Suporte completo (Marketing, Vendas, Compras, Técnico, Tec, Implantação, Rh)"
    ],
    recommended: false
  }
];



const BusinessModelsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="modelos" className="py-16 bg-[#ededed]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessModels.map((model, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                hoveredCard === index ? 'transform -translate-y-2' : ''
              } ${model.recommended ? 'border-2 border-[#fa1571]' : 'border border-gray-200'}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {model.recommended && (
                <div className="bg-[#fa1571] text-white text-center py-2 font-semibold">
                  Mais Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-center">{model.name}</h3>
                
                <div className="mb-6 text-center">
                  <span className="text-3xl font-bold">{model.investment}</span>
                  <p className="text-gray-500 mt-1">Investimento inicial</p>
                </div>
                
                <div className="mb-6 text-center">
                  <span className="text-xl font-semibold text-[#fa1571]">{model.roi}</span>
                  <p className="text-gray-500 mt-1">Retorno estimado</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Diferenciais:</h4>
                  <ul className="space-y-2">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={18} className="text-[#fa1571] mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => {
                  const formSection = document.getElementById('lead-form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  }}
                  className={`w-full py-3 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  model.recommended 
                  ? 'bg-[#fa1571] hover:bg-[#e01364] text-white' 
                  : 'bg-[#d8a8a1] hover:bg-[#c29992] text-white'
                }`}>
                  Saiba mais
                  <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelsSection;
