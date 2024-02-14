function countVowels(str : any) {
    let vo : string[] = []
      for (let x in str){
        if (str[x] === 'a' || str[x] === 'e' || str[x] === 'i'|| str[x] === 'o' || str[x] === 'u'){
          vo.push(str[x]);
        }
      }
      console.log(vo)
  }
  countVowels('fatima')