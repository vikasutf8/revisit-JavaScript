# React + js/ts + bun

### Use formData in React:
--learn about controlled and uncontrolled fields 

-- also using third party abstractions like formil and react hook form which employed controlled and uncontrolled techniques under the hood.

Goal is collecting dataa :: with controlled your data in  your state, uncontrolled you need to collect the form values yourself.

uncontrolled. -- input field and useRef hook using that passing inputRef

`﻿constt inputRef =useRef<HTMLInputElement>(null);` 

`﻿<input ref={inputref}/>`  clg(inputref.current.value>

Controlled state. -- using usestate hook as storing state. 

`﻿cosnt [username,setUsername] =useState("")` 

`﻿input value={username} onchange={(e)=>setUsername(e.target.value)}`  clg(username)



**React19 --FormData**

-- in it we dont need to refs to get the values of uncontrolled form.we can just read that form values directly off e.target

**using name property of input fiile as as formdata via new FormData(e.target)**

-- typeScript taking issue in [e.target]] soo moiving `﻿event.currentTarget` 

--  also `﻿clg(formdata)`  nothing ginev dat we should use formdata.get("usernname") for console

-  to unpack values. O**bject.fromEntries()**
`﻿cosnt formValues =Object.formEntries(formData); clg(formValues)` 

using typeScript formValues TYPEs is just not only String ...if formvalue.username ==empty return "FormDataEntryValue" |null,

**Convert formdata into interger**

`﻿const quanty =parseInt((formData.get('quantity') as string | null) || 0)` 



**Problem are resolve by ZOd ::**

Zod is schema based js validator .zod validates it based the schema you wrote but then also gives you back your data but in type-safe way according to schema passed


### Use formData in React:[﻿reacttraining.com/blog/react-and-form-data](https://reacttraining.com/blog/react-and-form-data) 
--learn about controlled and uncontrolled fields 

-- also using third party abstractions like formil and react hook form which employed controlled and uncontrolled techniques under the hood.

Goal is collecting dataa :: with controlled your data in  your state, uncontrolled you need to collect the form values yourself.

uncontrolled. -- input field and useRef hook using that passing inputRef

`﻿constt inputRef =useRef<HTMLInputElement>(null);` 

`﻿<input ref={inputref}/>`  clg(inputref.current.value>

Controlled state. -- using usestate hook as storing state. 

`﻿cosnt [username,setUsername] =useState("")` 

`﻿input value={username} onchange={(e)=>setUsername(e.target.value)}`  clg(username)



**React19 --FormData**

-- in it we dont need to refs to get the values of uncontrolled form.we can just read that form values directly off e.target

**using name property of input fiile as as formdata via new FormData(e.target)**

-- typeScript taking issue in [e.target]] soo moiving `﻿event.currentTarget` 

--  also `﻿clg(formdata)`  nothing ginev dat we should use formdata.get("usernname") for console

-  to unpack values. O**bject.fromEntries()**
`﻿cosnt formValues =Object.formEntries(formData); clg(formValues)` 

using typeScript formValues TYPEs is just not only String ...if formvalue.username ==empty return "FormDataEntryValue" |null,

**Convert formdata into interger**

`﻿const quanty =parseInt((formData.get('quantity') as string | null) || 0)` 



**Problem are resolve by ZOd ::**

Zod is schema based js validator .zod validates it based the schema you wrote but then also gives you back your data but in type-safe way according to schema passed



react19 also using useActionState Hooks similiar to FormData as it can passed to formAction





### Can You modified React Props ??[﻿www.epicreact.dev/can-you-modify-react-props](https://www.epicreact.dev/can-you-modify-react-props) 


## Hooks:
### useState :
-- state that data change with time,different data one render to different render as JSX.

-- state a piece of data that changes over a time ,render in react.

`const [count(variable) ,setcount(function updater)] =React.useState(initial /defualt value at t=0/no render) `// first is variable ,second is function that update states and 

with defualt value its undefine---

### useEffect :
it used to perform **side effects** in our application.Side Effect meant things happening as a consequence of something else. eg :taking a medicine its having side effect also ..similiarilly happening with application,something. triggers ,getting .. this side effect happend due to state changing .

What is side effect ,how to control it ?

`﻿useEffect(()=>{its a function that we want to run && optional return function } ,[dependancy array, what useeffect listen to and run to code])` 

NOTE :: if you provide any thing in depandency array/ not -- it always first time run//.meant any thing happened** it run at least once.   **componen mount..mounted

**LifeCycle of useEffect ::IMPORTANT**

- first its run itself beform complete mount,,meant unmount ...only code..
- after change on depandency --first it clean ourself as runt return function that optional to give by  it on changing it run return function then unmounted code/recreated.. of useeffect 
- return optional function is cleanup /or destored initialstate of rendeering react page.
### useMemo: 
--problem that not memorized that value having performance issues.

As in react ifwe update anything ,we re-render entire page... as on changing count ..below we create looping of 1e6 time on each rendering ..mean we count incease one .it lopping run million time ,them cnt++ again 1e6 time..going on.

//we compute that loop without it use .. so we can only compute looping when it requried like once or twice or certain points..not all count updates

**useMemo is Hook that memorizes a value and returns the same value until any of depandenies in the dependency array changes ,until then it will recompute a new value..**

```
const selecteditem = useMemo(()=>(items.find((item)=> item.isSelected)),[items])
```
NOTE :: depandency array should be use carefully --all stuff that changing 



### useCallback :::
**in react a function is having same code ,doing same things they will considered different on every render..if function === function return false.  **



### useRef :::
ref is similiar to state ,in the sence that can hold and mutate values that are used in your component but main difference is  that unlike state & ref does not trigger a re-render in component and ref value are not used in the return body of that actual component its not used for something that you are rendering ,its. hooks that is used for values that are not needed  for rendering .

```
﻿const countRef =useRef(0) 
countRef.current++ // .current is method to get values
//it update value without waiting of re-rendering of page. it just read and update it, working just refeclting instanlty
```
Ref does not trigger a component for re-render..meant on updating ref.current it cant active react re-rendering so its page not reload..so never use ref in return function of page

-- using input component that directly in return function using 

```
const inputRef =useRef<HTMLElement | null>(null)

useEffect(()=>{
  inputRef.current?.focus()
})
return(
  <input ref ={inputRef} type ='text' placeholder='' />
)
```



