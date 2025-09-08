import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TestTube } from "lucide-react";

export const PHTable = () => {
  const phData = [
    { 
      range: "3.5 - 5.5", 
      condition: "Muy Ácido", 
      action: "Agregar cal agrícola, ceniza de madera o dolomita",
      color: "bg-red-100 text-red-800 border-red-200"
    },
    { 
      range: "5.5 - 6.0", 
      condition: "Ácido", 
      action: "Aplicar cal en menor cantidad, compost bien descompuesto",
      color: "bg-orange-100 text-orange-800 border-orange-200"
    },
    { 
      range: "6.0 - 7.0", 
      condition: "Ligeramente Ácido", 
      action: "Ideal para la mayoría de cultivos, mantener con compost",
      color: "bg-green-100 text-green-800 border-green-200"
    },
    { 
      range: "7.0 - 7.5", 
      condition: "Neutro", 
      action: "Perfecto para la mayoría de plantas, mantener equilibrio",
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    { 
      range: "7.5 - 8.5", 
      condition: "Alcalino", 
      action: "Agregar azufre, turba, compost ácido o sulfato de hierro",
      color: "bg-purple-100 text-purple-800 border-purple-200"
    },
    { 
      range: "8.5+", 
      condition: "Muy Alcalino", 
      action: "Aplicar azufre elemental, ácido sulfúrico diluido (cuidado)",
      color: "bg-red-100 text-red-800 border-red-200"
    }
  ];

  return (
    <Card className="shadow-nature border-accent/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <TestTube className="h-6 w-6" />
          Guía de pH del Suelo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-primary font-semibold">Rango pH</TableHead>
                <TableHead className="text-primary font-semibold">Condición</TableHead>
                <TableHead className="text-primary font-semibold">Acción Recomendada</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {phData.map((item, index) => (
                <TableRow key={index} className="hover:bg-secondary/20">
                  <TableCell className="font-mono font-medium">{item.range}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${item.color}`}>
                      {item.condition}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm">{item.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-4 p-3 bg-secondary/30 rounded-lg border border-accent/20">
          <p className="text-sm text-muted-foreground">
            <strong>Tip:</strong> La mayoría de vegetales prefieren un pH entre 6.0 y 7.0. 
            Mide el pH regularmente y ajusta gradualmente para evitar shock en las plantas.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};