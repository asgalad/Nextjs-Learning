import Head from 'next/head'
//import Nav from '../components/Nav'

export default function Home() {

  const students = [
    {
      name: "Mubarak Lawal",
      age: 28,
      sex: "male",
      isDeveloper: false
    },
    {
      name: "Zainab Lawal",
      age: 26,
      sex: "female",
      isDeveloper: false
    },
    {
      name: "Abubakar Lawal",
      age: 24,
      sex: "male",
      isDeveloper: true
    },
    {
      name: "umar Lawal",
      age: 22,
      sex: "male",
      isDeveloper: true
    },
  ]
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Students</h1>
        <ul>
          {students.map((student)=>{
            <li key={student.name}>{student.name}</li>
            students
          })}
          <li>hey</li>
        </ul>
      </div>
     
    </div>
  )
}
