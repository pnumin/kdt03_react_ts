
export default function TestTs() {
  //기본 데이터 타입
  let age : number = 30;
  let name: string = 'K-digital' ;
  let isStudent : boolean = true ;
 
  // let x : undefined = undefined;
  // let y : null = null ;


  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">TypeScript 기본 문법</h1>
      <ul className="mt-10">
        <li>기본데이터타입 (string) : 이름 {name} </li>
        <li>기본데이터타입 (numer) : 나이 {age} </li>
        <li>기본데이터타입 (boolean) : {isStudent ? '학생' : '일반인'} </li>
      </ul>
    </div>
  )
}
