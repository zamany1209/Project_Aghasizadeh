// import React from 'react';
// import {
//   Menu,
//   Item,
//   Separator,
//   Submenu,
//   useContextMenu
// } from "react-contexify";
// import "react-contexify/dist/ReactContexify.css";


// const MENU_ID = "menu-id";

// export default function App() {
//   // 🔥 you can use this hook from everywhere. All you need is the menu id
//   const { show } = useContextMenu({
//     id: MENU_ID
//   });
 
//   function handleItemClick({ event, props, triggerEvent, data }){
//     console.log(event, props, triggerEvent, data );
//   }

//   function displayMenu(e){
//     // put whatever custom logic you need
//     // you can even decide to not display the Menu
//     console.log("hi");
//     show({
//       event: e,
//     });
//   }

//   return (
//     <div>
//       {/* just display the menu on right click */}
//       <div >
//         Right click inside the box
//       </div>
//       {/* run custom logic then display the menu */}
//       <div onContextMenu={displayMenu}>
//         Right click inside the box
//       </div>


//       <Menu id={MENU_ID}>
//         <Item onClick={handleItemClick}>
//           Item 1
//         </Item>
//         <Item onClick={handleItemClick}>
//           Item 2
//         </Item>
//         <Separator />
//         <Item disabled>Disabled</Item>
//         <Separator />
//         <Submenu label="Submenu">
//           <Item onClick={handleItemClick}>
//             Sub Item 1
//           </Item>
//           <Item onClick={handleItemClick}>Sub Item 2</Item>
//         </Submenu>
//       </Menu>
//     </div>
//   );
// }



////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
import React from 'react';
import * as functions  from '@/Components/UI/Component6';

export default function App() {
  function func_run({name}){
    const functionNames = Object.keys(functions);
    console.log(functionNames);
    if (typeof functions[name] === 'function') {
      functions[name]();
  } else {
      console.log(`Function ${name} not found`);
  }
  }
//   React.useEffect(() => {
//     // لیست نام‌های فانکشن‌ها
//     const functionNames = Object.keys(functions);

//     functionNames.forEach(fnName => {
//         if (typeof functions[fnName] === 'function') {
//             functions[fnName]();
//         } else {
//             console.log(`Function ${fnName} not found`);
//         }
//     });
// }, []);
  return(
    <>
    <button onClick={() => func_run({ name: "function2" })}>fvbg</button>
    </>
  );
}

