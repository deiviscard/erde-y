import { useState } from "react";
import { CheckCircle2, Circle, Download, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export const CropChecklist = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "Analizar el pH del suelo", completed: false },
    { id: "2", text: "Preparar el compost", completed: false },
    { id: "3", text: "Arar y airear el suelo", completed: false },
    { id: "4", text: "Sembrar las semillas", completed: false },
    { id: "5", text: "Instalar sistema de riego", completed: false },
    { id: "6", text: "Aplicar mulch orgánico", completed: false },
    { id: "7", text: "Planificar rotación de cultivos", completed: false },
    { id: "8", text: "Monitorear plagas naturalmente", completed: false },
    { id: "9", text: "Cosechar en el momento óptimo", completed: false },
    { id: "10", text: "Preparar suelo para próxima temporada", completed: false }
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const exportToTxt = () => {
    const completedTasks = tasks.filter(task => task.completed);
    const pendingTasks = tasks.filter(task => !task.completed);
    
    let content = "CHECKLIST DE CULTIVO SOSTENIBLE\n";
    content += "================================\n\n";
    content += `Fecha de exportación: ${new Date().toLocaleDateString('es-ES')}\n\n`;
    
    content += "✅ TAREAS COMPLETADAS:\n";
    if (completedTasks.length > 0) {
      completedTasks.forEach(task => {
        content += `- ${task.text}\n`;
      });
    } else {
      content += "- Ninguna tarea completada aún\n";
    }
    
    content += "\n📋 TAREAS PENDIENTES:\n";
    if (pendingTasks.length > 0) {
      pendingTasks.forEach(task => {
        content += `- ${task.text}\n`;
      });
    } else {
      content += "- ¡Todas las tareas están completadas!\n";
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'checklist-cultivo-sostenible.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const progress = (completedCount / tasks.length) * 100;

  return (
    <Card className="shadow-nature border-accent/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Leaf className="h-6 w-6" />
          Checklist de Cultivo Sostenible
        </CardTitle>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {completedCount} de {tasks.length} tareas completadas ({progress.toFixed(0)}%)
          </p>
          <Button 
            onClick={exportToTxt}
            size="sm"
            variant="secondary"
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 cursor-pointer transition-colors"
              onClick={() => toggleTask(task.id)}
            >
              {task.completed ? (
                <CheckCircle2 className="h-5 w-5 text-primary" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground" />
              )}
              <span
                className={`flex-1 ${
                  task.completed 
                    ? "line-through text-muted-foreground" 
                    : "text-foreground"
                }`}
              >
                {task.text}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-4 bg-secondary/20 rounded-full h-2">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
};