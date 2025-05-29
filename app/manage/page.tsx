import MainClientComponent from "@/components/MainClientComponent";
import { redirect } from "next/navigation";

export default async function Manage() {

  const unverified = getUnverified();
  const unverifiedWithStudent = unverified.reduce((acc, curr) => {
    const student = getStudent(curr.id);
    if (student) {
      acc[curr.request_id] = { ...curr, ...student };
    }
    return acc;
  }, {} as Record<number, typeof unverified[0] & { id: number, z_n: string }>);

  return (
    <div className="bg-accent">
      <MainClientComponent onLogOutClick={async () => { 'use server'; redirect("/") }} onVerifyClick={setVerified} students={unverifiedWithStudent} />
    </div>
  );
}

function getStudent(id: number) {
  return {
    1103603: {
      "id": 1103603,
      "fio": "Иванов иван иванович",
      "z_n": "да",
      "inst": "ну почти",
      "napr": "обфускация данных",
      "kurs": "4",
      "gruppa": "норм да? ",
      "f_o": "я старался         ",
      "vid_n": "с оплатой      ",
      "god_post": "практику будут оплачивать",
      "kaf": "да"
    },
  }[id]
}

function getUnverified() {
  return (
    [
      {
        "request_id": 1,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 2,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 3,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 4,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 5,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 6,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 7,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 8,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 9,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 10,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 11,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 12,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 13,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 14,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
      {
        "request_id": 15,
        "id": 1103603,
        "z_n": "",
        "tg_handle": "@idk-something"
      },
    ]
  )
}

async function setVerified(request_ids: number[] | number, isVerified: boolean) {
  'use server'
  console.log(isVerified ? "verified" : "unverified", request_ids)
}