"use client";

import React from 'react';

const SolarPage: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-3/4 opacity-[0.03] rotate-[-15deg]" 
            style={{
              backgroundImage: 'repeating-linear-gradient(-45deg, #4F46E5 0, #4F46E5 1px, transparent 0, transparent 50%)',
              backgroundSize: '25px 25px',
            }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-20 pb-12">
          {/* Hero Title */}
          <div className="text-center mb-16">
            <h1 className="inline-block">
              <span className="block text-6xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                Kit Solaire
                <br />
                Autoconsommation
              </span>
              <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-green-400 transform origin-left transition-transform duration-1000" />
            </h1>
            
            <h2 className="mt-8 text-3xl md:text-4xl font-bold text-gray-900">
              Expert Panneaux Solaires
            </h2>
            
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions Photovoltaïques Professionnelles par SUMMUM BAT
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Livraison dans toute la France",
                subtitle: "Livraison",
                image: "https://www.summumbat.fr/card1.png",
                color: "from-blue-500/80"
              },
              {
                title: "Venez récupérer votre produit gratuitement",
                subtitle: "Click & Collect",
                image: "https://www.summumbat.fr/card3.png",
                color: "from-emerald-500/80"
              },
              {
                title: "Une entreprise de la région",
                subtitle: "Lille",
                image: "https://www.summumbat.fr/card4.png",
                color: "from-violet-500/80"
              },
              {
                title: "Installation sur mesure",
                subtitle: "Installation",
                image: "https://www.summumbat.fr/card2.png",
                color: "from-amber-500/80"
              },
              {
                title: "Efficacité et durabilité",
                subtitle: "Énergie renouvelable",
                image: "https://www.summumbat.fr/card5.png",
                color: "from-rose-500/80"
              }
            ].map((card, index) => (
              <div
                key={index}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b ${card.color} to-black/80 transition-opacity duration-500 z-20`} />
                
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-x-0 bottom-0 p-6 z-30 transform transition-transform duration-500">
                  <p className="text-white/80 text-sm font-medium mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                    {card.subtitle}
                  </p>
                  <h3 className="text-white text-lg font-semibold transform transition-transform duration-300 group-hover:-translate-y-1">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     <section className="relative bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Product Info - Left Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full font-medium text-sm mb-6">
                  Pack JA SOLAR
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Kit Solaire Autoconsommation 1780W (4x 445W)
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Ce kit premium comprend 4 panneaux solaires JA Solar de 445Wc et des micro-onduleurs APS, 
                  offrant une solution idéale pour une consommation énergétique modérée et une réduction 
                  significative de vos factures d'électricité.
                </p>
                
                <div className="flex flex-wrap items-center gap-8 mb-10">
                  <a 
                    href="/products/jasolar-1780" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                  >
                    Voir le kit
                    <svg 
                      className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 mb-1">Prix TTC</span>
                    <span className="text-4xl font-bold text-gray-900">2800€</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Garantie 25 ans</span>
                  </div>

                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Économies immédiates</span>
                  </div>
                </div>
              </div>

              {/* Video Section - Right Side */}
              <div className="relative lg:h-full">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  className="w-full h-full object-cover"
                >
                  <source src="https://www.summumbat.fr/img_solarpanels/4%20x%20445w/video.mp4" type="video/mp4" />
                </video>

                {/* Enhanced Stats Bar */}
                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/90">
                  <div className="grid grid-cols-4 divide-x divide-gray-200">
                    <div className="p-4 hover:bg-blue-50 transition-colors duration-300 group cursor-default">
                      <div className="text-blue-600 font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        386€
                      </div>
                      <div className="text-sm text-gray-600">Économie/an</div>
                    </div>
                    <div className="p-4 hover:bg-blue-50 transition-colors duration-300 group cursor-default">
                      <div className="text-blue-600 font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        4 ans*
                      </div>
                      <div className="text-sm text-gray-600">Rentable en</div>
                    </div>
                    <div className="p-4 hover:bg-blue-50 transition-colors duration-300 group cursor-default">
                      <div className="text-blue-600 font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        445Wc
                      </div>
                      <div className="text-sm text-gray-600">4 panneaux</div>
                    </div>
                    <div className="p-4 hover:bg-blue-50 transition-colors duration-300 group cursor-default">
                      <div className="text-blue-600 font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        30 ans
                      </div>
                      <div className="text-sm text-gray-600">Garantie</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarPage;