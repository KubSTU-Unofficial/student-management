import MainClientComponent from "@/components/MainClientComponent";

export default async function Home() {

  const unverified = getUnverified();
  const unverifiedWithStudent = unverified.reduce((acc, curr) => {
    const student = getStudent(curr.id);
    if (student) {
      acc[curr.request_id] = { ...curr, ...student };
    }
    return acc;
  }, {} as Record<number, typeof unverified[0] & { id: number, z_n: string }>);

  return (
    <div>
      <MainClientComponent onVerifyClick={setVerified} students={unverifiedWithStudent}/>
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
      }
    ]
  )
}

async function setVerified(request_ids: number[] | number, isVerified: boolean) {
  'use server'
  console.log(isVerified ? "verified" : "unverified", request_ids)
}