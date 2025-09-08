import { useState } from "react";
import { Calculator } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const CompostCalculator = () => {
  const [area, setArea] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const calculateCompost = () => {
    const areaNum = parseFloat(area);
    if (areaNum > 0) {
      // Fórmula: aproximadamente 2-3 kg de compost por m²
      const compostNeeded = areaNum * 2.5;
      setResult(compostNeeded);
    }
  };

  return (
    <Card className="shadow-nature border-accent/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Calculator className="h-6 w-6" />
          Calculadora de Compost
        </CardTitle>
        <CardDescription>
          Calcula cuántos kilogramos de compost necesitas según el área de tu cultivo
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="area">Área del cultivo (m²)</Label>
          <Input
            id="area"
            type="number"
            placeholder="Ingresa el área en metros cuadrados"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="border-accent/30 focus:border-primary"
          />
        </div>
        
        <Button 
          onClick={calculateCompost}
          className="w-full bg-gradient-primary hover:opacity-90 transition-all"
          disabled={!area || parseFloat(area) <= 0}
        >
          Calcular Compost Necesario
        </Button>

        {result !== null && (
          <div className="mt-4 p-4 bg-secondary/50 rounded-lg border border-accent/20">
            <p className="text-center font-semibold text-primary">
              Necesitas aproximadamente <span className="text-2xl">{result.toFixed(1)} kg</span> de compost
            </p>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Esto equivale a {Math.ceil(result / 25)} bolsas de 25kg aproximadamente
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};