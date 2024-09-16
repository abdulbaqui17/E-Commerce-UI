import { Bike } from "../components/Bike"
import { CategoryList } from "../components/CategoryList"
import { Headers } from "../components/Headers"
import { Horizontal } from "../components/Horizontal"
import { Mouse } from "../components/Mouse"
import { Speaker } from "../components/Speaker"
import { Watch } from "../components/Watch"
import { F } from "../components/F"
import { T } from "../components/T"

export const Home=()=>{
    return <div className="bg-black text-white">
        <Headers></Headers>
        <CategoryList/>
        <Horizontal/>
        <Mouse/>
        <Watch/>
        <Bike/>
        <Speaker/>
        <F/>
        <T/>
    </div>
}