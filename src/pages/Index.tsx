import { Sprout, Leaf, Droplets, Bug, RotateCcw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CompostCalculator } from "@/components/CompostCalculator";
import { CropChecklist } from "@/components/CropChecklist";
import { PHTable } from "@/components/PHTable";
import { CropRotationTable } from "@/components/CropRotationTable";
import heroImage from "@/assets/hero-sustainable-farming.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Cultivos sostenibles y suelo fértil" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Cultivo Sostenible y Suelo Fértil
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Guía completa para mantener la tierra fértil y desarrollar cultivos sostenibles
            que respeten el medio ambiente
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Sección Introductoria */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Fundamentos de la Fertilidad del Suelo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-soft border-accent/20 hover:shadow-nature transition-all duration-300">
              <CardHeader>
                <Sprout className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">Materia Orgánica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  El compost, estiércol y restos vegetales son fundamentales para nutrir 
                  el suelo y mejorar su estructura, reteniendo agua y nutrientes esenciales.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-accent/20 hover:shadow-nature transition-all duration-300">
              <CardHeader>
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">pH Equilibrado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un pH entre 6.0 y 7.0 permite la óptima absorción de nutrientes. 
                  Medir y ajustar regularmente es clave para el éxito de los cultivos.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-accent/20 hover:shadow-nature transition-all duration-300">
              <CardHeader>
                <Bug className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">Vida del Suelo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lombrices, bacterias y hongos beneficiosos transforman la materia orgánica 
                  en nutrientes disponibles, creando un ecosistema saludable.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Acordeón de Pasos Prácticos */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
            Pasos Prácticos para Iniciar tu Cultivo
          </h2>
          
          <Card className="shadow-nature border-accent/20">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="site-selection" className="border-accent/20">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    1. Elección del Sitio
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p className="mb-3">
                      Selecciona un lugar con <strong>6-8 horas de sol directo</strong> diarias. 
                      Evita zonas con encharcamiento y busca protección natural del viento.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Observa el movimiento del sol durante el día</li>
                      <li>Verifica que tenga acceso fácil al agua</li>
                      <li>Asegúrate de que el drenaje sea adecuado</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="soil-prep" className="border-accent/20">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    2. Preparación del Suelo
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p className="mb-3">
                      Remueve el suelo a <strong>20-30 cm de profundidad</strong> e incorpora 
                      compost maduro (2-4 kg por m²).
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Elimina malezas y piedras grandes</li>
                      <li>Añade compost o estiércol bien descompuesto</li>
                      <li>Nivela la superficie sin compactar</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="planting" className="border-accent/20">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    3. Siembra
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p className="mb-3">
                      Respeta las <strong>distancias de siembra</strong> y la profundidad 
                      adecuada según cada especie.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Siembra según el calendario lunar local</li>
                      <li>Mantén la humedad constante durante germinación</li>
                      <li>Etiqueta las variedades para seguimiento</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="watering" className="border-accent/20">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    4. Riego Eficiente
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p className="mb-3">
                      Implementa <strong>riego por goteo</strong> o riega temprano en la mañana 
                      para reducir evaporación.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Verifica humedad del suelo antes de regar</li>
                      <li>Aplica mulch para conservar humedad</li>
                      <li>Recolecta agua de lluvia cuando sea posible</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pest-control" className="border-accent/20">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    5. Control Biológico
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p className="mb-3">
                      Fomenta la <strong>biodiversidad</strong> plantando flores que atraigan 
                      insectos beneficiosos y usa métodos naturales.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Planta caléndulas y lavanda como repelentes naturales</li>
                      <li>Introduce plantas trampa para plagas específicas</li>
                      <li>Prepara extractos de ajo y jabón potásico</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Calculadora de Compost */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
            Calculadora de Compost
          </h2>
          <CompostCalculator />
        </section>

        {/* Tabla de pH */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
            Manejo del pH del Suelo
          </h2>
          <PHTable />
        </section>

        {/* Rotación de Cultivos */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
            Rotación de Cultivos
          </h2>
          <CropRotationTable />
        </section>

        {/* Checklist */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
            Lista de Tareas
          </h2>
          <CropChecklist />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-earth text-accent-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <RotateCcw className="h-8 w-8 mr-3" />
            <h3 className="text-2xl font-bold">Cultiva el Futuro</h3>
          </div>
          
          <p className="text-lg mb-4 max-w-2xl mx-auto">
            "La agricultura sostenible no es solo una forma de cultivar, 
            es un compromiso con las futuras generaciones y nuestro planeta."
          </p>
          
          <p className="text-sm opacity-75">
            🌱 Cada semilla plantada con respeto por la tierra es una esperanza para el mañana 🌍
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;