'use client'
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

interface Student {
  request_id: number;
  id: number;
  z_n: string;
  tg_handle: string;
}

interface VerifyRequest {
  request_id: number;
  id: number;
  z_n: string;
  tg_handle: string;
  fio: string,
  inst: string,
  napr: string,
  kurs: string,
  gruppa: string,
  f_o: string,
  vid_n: string,
  god_post: string,
  kaf: string
}

export default function MainClientComponent({
  onVerifyClick,
  students
}: {
  onVerifyClick: (request_ids: number[], isVerified: boolean) => void,
  students: Record<number, Student & { id: number, z_n: string }>
}) {
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <div className="w-1/3 bg-accent mx-auto h-full p-4">
      <div className="flex justify-between mb-5">
        <Button
          disabled={selected.length === 0}
          onClick={() => onVerifyClick(selected, true)}
          className="bg-green-600 hover:bg-green-700">
          Подтвердить выбранных
        </Button>
        <Button
          disabled={selected.length === 0}
          onClick={() => onVerifyClick(selected, false)}
          className="bg-red-600 hover:bg-red-700">
          Отказать выбранных
        </Button>
      </div>

      <p className="mb-2">
        Список студентов запросивших верификацию:
      </p>
      <div className="grid gap-4">
        {Object.values(students).map((student) => (
          <>
            <Card key={student.id}>
              <CardHeader>
                <div className="flex justify-between gap-6 items-center">
                  <Checkbox
                    checked={selected.includes(student.id)}
                    onCheckedChange={(checked) =>
                      checked ?
                        setSelected([...selected, student.id]) :
                        setSelected(selected.filter((id: number) => id !== student.id))
                    }
                    id={student.id.toString()}
                  />
                  <Label htmlFor={student.id.toString()} className="w-full">
                    <CardTitle>{student.fio}</CardTitle>
                    <CardDescription>{student.z_n}</CardDescription>
                  </Label>
                </div>
              </CardHeader>
              <CardContent>
                <p>ID телеграм: {student.tg_handle}</p>
                <p>ФИО в запросе: {student.fio}</p>
                <p>НЗ в запросе: {student.z_n}</p>
              </CardContent>
              <CardFooter className="flex justify-end gap-4">
                <Button
                  onClick={() => onVerifyClick(student.id, true)}
                  className="bg-green-600 hover:bg-green-700">
                  Подтвердить 
                </Button>
                <Button
                  onClick={() => onVerifyClick(student.id, false)}
                  className="bg-red-600 hover:bg-red-700">
                  Отказать 
                </Button>
              </CardFooter>
            </Card>
          </>
        ))}
      </div>
    </div>
  )

}