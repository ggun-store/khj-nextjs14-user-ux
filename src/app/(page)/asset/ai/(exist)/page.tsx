import AiExistFalse from "./existFalse/page";
import AiExistTrue from "./existTrue/page";


export default function aiExist(){
    
    const exist = 1;

    return(
        <div className="w-full h-full flex justify-center">
            {exist==1 ?
        <div><AiExistFalse/></div>    
        :<div><AiExistTrue/></div>    
        }
        </div>
    )
}