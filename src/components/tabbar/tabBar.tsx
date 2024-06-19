'use client'
import { useState } from "react";
import { setCookie } from 'cookies-next';
import { useRouter } from "next/navigation";

interface Props{
    tabOptions?: number[];
    currentIndex?:number;
}

export const TabBar = ( { currentIndex=1, tabOptions=[1,2,3,4,5]}:Props) => {
    const [selected, setSelected] = useState(currentIndex)
    const router = useRouter();

    const onTap = ( tab: number )=>{
        setSelected( tab )
        setCookie( 'cookieTab',tab);
         
        router.refresh();
    }

    return (
      <div className={`grid w-full ${'grid-cols-5'} space-x-2 rounded-xl bg-gray-200 p-2`}
        >
        
        {
            tabOptions.map( tab =>(
                <div key={tab}>
                <input 
                
                    checked={ selected === tab}
                    type="radio" 
                    id={tab.toString()} 
                    className="peer hidden" 
                    />
                <label 
                onClick={()=> onTap( tab )}
                className=" transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                    {tab}
                </label>
              </div> 
            ))
        }
        
      </div>
    )
  }