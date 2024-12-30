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

