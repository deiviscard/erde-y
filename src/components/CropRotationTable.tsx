import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RefreshCw } from "lucide-react";

export const CropRotationTable = () => {
  const rotationData = [
    {
      year: "Año 1",
      spring: "Lechugas, Espinacas",
      summer: "Tomates, Pimientos", 
      fall: "Brócoli, Coliflor",
      winter: "Habas, Guisantes"
    },
    {
      year: "Año 2", 
      spring: "Zanahorias, Rábanos",
      summer: "Calabacines, Pepinos",
      fall: "Coles, Repollo", 
      winter: "Ajos, Cebollas"
    },
    {
      year: "Año 3",
      spring: "Remolachas, Acelgas", 
      summer: "Berenjenas, Maíz",
      fall: "Apio, Puerros",
      winter: "Lentejas, Garbanzos"
    },
    {
      year: "Año 4",
      spring: "Perejil, Cilantro",
      summer: "Judías, Calabazas", 
      fall: "Nabo, Colinabo",
      winter: "Descanso / Abono Verde"
    }
  ];

  return (
    <Card className="shadow-nature border-accent/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <RefreshCw className="h-6 w-6" />
          Rotación de Cultivos (4 años)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-primary font-semibold">Período</TableHead>
                <TableHead className="text-primary font-semibold">Primavera</TableHead>
                <TableHead className="text-primary font-semibold">Verano</TableHead>
                <TableHead className="text-primary font-semibold">Otoño</TableHead>
                <TableHead className="text-primary font-semibold">Invierno</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rotationData.map((rotation, index) => (
                <TableRow key={index} className="hover:bg-secondary/20">
                  <TableCell className="font-semibold text-primary">{rotation.year}</TableCell>
                  <TableCell className="text-sm">{rotation.spring}</TableCell>
                  <TableCell className="text-sm">{rotation.summer}</TableCell>
                  <TableCell className="text-sm">{rotation.fall}</TableCell>
                  <TableCell className="text-sm">{rotation.winter}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 space-y-2">
          <div className="p-3 bg-secondary/30 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-primary mb-2">Principios de la Rotación:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>Leguminosas:</strong> Fijan nitrógeno al suelo</li>
              <li>• <strong>Hortalizas de hoja:</strong> Consumen mucho nitrógeno</li>
              <li>• <strong>Raíces:</strong> Airean el suelo y aprovechan nutrientes profundos</li>
              <li>• <strong>Descanso:</strong> Permite regeneración con abonos verdes</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};