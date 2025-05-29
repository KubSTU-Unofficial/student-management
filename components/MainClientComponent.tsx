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
  onLogOutClick,
  students
}: {
  onVerifyClick: (request_ids: number[], isVerified: boolean) => void,
  onLogOutClick: () => void
  students: Record<number, Student & { id: number, z_n: string }>
}) {
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <div className="mx-auto h-full p-4 min-h-screen w-4/5">
      <p className="mb-4 text-4xl font-bold">
        Запросы на верификацию
      </p>
      <div className="sticky top-0 p-4 border bg-sidebar-accent mb-4 flex justify-between rounded-lg">
        <div className="flex gap-3">
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
        <div>
          <Button
            onClick={onLogOutClick}>
            Выйти из аккаунта
          </Button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-3">
        {Object.values(students).map((student) => (
          <>
            <Card key={student.request_id}>
              <CardHeader>
                <div className="flex justify-between gap-6 items-center">
                  <Checkbox
                    checked={selected.includes(student.request_id)}
                    onCheckedChange={(checked) =>
                      checked ?
                        setSelected([...selected, student.request_id]) :
                        setSelected(selected.filter((id: number) => id !== student.request_id))
                    }
                    id={student.request_id.toString()}
                  />
                  <Label htmlFor={student.request_id.toString()} className="w-full">
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
                  onClick={() => onVerifyClick([student.request_id], true)}
                  className="bg-green-600 hover:bg-green-700">
                  Подтвердить
                </Button>
                <Button
                  onClick={() => onVerifyClick([student.request_id], false)}
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