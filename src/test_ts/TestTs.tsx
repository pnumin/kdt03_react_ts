
export default function TestTs() {
  //기본 데이터 타입
  let age : number | string = 30;
  let name: string = 'K-digital' ;
  let isStudent : boolean = true ;
  
  age = '50' ;
  // let x : undefined = undefined;
  // let y : null = null ;

  let nums : number[] = [1,2,3] ; 
  let nums2 : Array<string> = ['1','2', '3'] ;

  // let arrTuple : [name:string, age:number] = ['Kdigital', 30] ;
  let arrTuple : [string, number] = ['Kdigital', 30] ;
  arrTuple[0] = 'pnu' ;

  //오브젝트
  // type Person = {
  //   name:string, 
  //   age: number,
  // } ;

  interface Person {
    name:string, 
    age: number,
  } ;


  let person :Person = {name: 'pnu' , age: 30} ;
  let person1 :Person = {name: 'pnu1' , age: 20} ;

  let direction : 'left' | 'right'= 'left' ;
  direction = 'right' ;


  type HandleMsg = (msg : string) => string ;
  type HandleClick = () => void ;

  // const handleMsg  = (msg : string)  : string=> {
  //   return msg + '님 안녕하세요.' ;
  // }

  const handleMsg : HandleMsg   = (msg) => {
    return msg + '님 안녕하세요.' ;
  }

  // const handleClick = () : void => {
  //   console.log("handleClick") ;
  //   console.log(handleMsg('kdigital'));
  // }

  const handleClick :HandleClick = () => {
    console.log("handleClick") ;
    console.log(handleMsg('kdigital'));
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">TypeScript 기본 문법</h1>
      <ul className="mt-10">
        <li>기본데이터타입 (string) : 이름 {name} </li>
        <li>기본데이터타입 (numer) : 나이 {age} </li>
        <li>기본데이터타입 (boolean) : {isStudent ? '학생' : '일반인'} </li>
        <li>배열 : {nums.join(',')} </li>
        <li>배열 2: {nums2.join(',')} </li>
        <li>튜플: 이름{arrTuple[0]} </li>
        <li>오브젝트: 이름 {person.name}  나이 {person['age']} </li>
        <li>오브젝트1: 이름 {person1.name}  나이 {person1['age']} </li>
        <li>방향 : {direction}</li>
      </ul>

      <div>
        <button className="bg-amber-700 text-white p-2 hover:cursor-pointer"
                onClick={handleClick}> 클릭 </button>
      </div>
    </div>
  )
}
