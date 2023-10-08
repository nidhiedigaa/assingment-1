function check()
{
    let max=arguments[0]
  for(i of arguments)
  {
    if(i>max)
    {
        max=i
    }
  }
   console.log(`greatest of three numbers is ${max}`)
}

check(10,20,30)